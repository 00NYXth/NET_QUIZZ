/* ════════════════════════════════════════════════════════════
   Networking Quiz – script.js
   ════════════════════════════════════════════════════════════ */

const LETTERS   = ['A','B','C','D','E'];
const EXAM_QS   = 43;
const EXAM_MAX  = 1000;
const EXAM_PASS = 700;

/* ── State ──────────────────────────────────────────────────── */
const S = {
  mode:      20,
  questions: [],
  current:   0,
  score:     0,       // correct count OR accumulated exam pts
  ptsPerQ:   0,
  selected:  new Set(),
  answered:  false,
  stats:     { correct: 0, wrong: 0, total: 0 }
};

/* ── Helpers ────────────────────────────────────────────────── */
const $  = id  => document.getElementById(id);
const qs = sel => document.querySelector(sel);

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Convert __word__ markers → <span class="underline-word">word</span> */
function renderQuestionHTML(text) {
  return text.replace(/__([^_]+)__/g,
    (_, w) => `<span class="underline-word">${escH(w)}</span>`);
}

function escH(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Home: mode selection ───────────────────────────────────── */
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    const v = card.dataset.mode;
    S.mode = (v === 'all' || v === 'exam') ? v : parseInt(v);
  });
});

$('btn-start').addEventListener('click', startQuiz);
$('btn-browse').addEventListener('click', openBrowse);

/* ── Back from quiz ─────────────────────────────────────────── */
$('btn-back-quiz').addEventListener('click', () => {
  if (!S.answered && S.current > 0) {
    if (!confirm('Go back to Home? Your progress will be lost.')) return;
  }
  showScreen('screen-home');
});

/* ── Result screen ──────────────────────────────────────────── */
$('btn-restart').addEventListener('click', startQuiz);
$('btn-home-result').addEventListener('click', () => showScreen('screen-home'));

/* ── Browse back ────────────────────────────────────────────── */
$('btn-back-browse').addEventListener('click', () => showScreen('screen-home'));

/* ════════════════════════════════════════════════════════════
   START QUIZ
   ════════════════════════════════════════════════════════════ */
function startQuiz() {
  const shuffled = shuffle(ALL_QUESTIONS);

  if (S.mode === 'exam') {
    S.questions = shuffled.slice(0, EXAM_QS);
    S.ptsPerQ   = Math.floor(EXAM_MAX / EXAM_QS);   // 23 pts each → 989 max, last q covers remainder
  } else if (S.mode === 'all') {
    S.questions = shuffled;
    S.ptsPerQ   = 0;
  } else {
    S.questions = shuffled.slice(0, S.mode);
    S.ptsPerQ   = 0;
  }

  S.current  = 0;
  S.score    = 0;
  S.selected = new Set();
  S.answered = false;
  S.stats    = { correct: 0, wrong: 0, total: S.questions.length };

  $('q-total').textContent     = S.questions.length;
  $('score-live').textContent  = '0';
  $('score-label').textContent = S.mode === 'exam' ? 'Points' : 'Score';

  if (S.mode === 'exam') {
    $('exam-pts-info').style.display = 'block';
    $('pts-per-q').textContent       = S.ptsPerQ;
  } else {
    $('exam-pts-info').style.display = 'none';
  }

  showScreen('screen-quiz');
  renderQuestion();
}

/* ════════════════════════════════════════════════════════════
   RENDER QUESTION
   ════════════════════════════════════════════════════════════ */
function renderQuestion() {
  const q = S.questions[S.current];
  S.selected = new Set();
  S.answered = false;

  /* Progress */
  const num = S.current + 1;
  $('q-current').textContent    = num;
  $('progress-fill').style.width = ((num - 1) / S.questions.length * 100) + '%';

  /* Multi-answer hint */
  $('multi-hint').style.display = q.multiple ? 'inline-flex' : 'none';

  /* Question text – re-animate */
  const card = $('question-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
  $('question-text').innerHTML = renderQuestionHTML(q.question);

  /* Build options */
  const list = $('options-list');
  list.style.animation = 'none';
  void list.offsetWidth;
  list.style.animation = '';
  list.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className   = 'opt-btn';
    btn.dataset.idx = idx;

    const lspan = document.createElement('span');
    lspan.className   = 'opt-letter';
    lspan.textContent = LETTERS[idx];

    const tspan = document.createElement('span');
    tspan.textContent = opt;

    btn.appendChild(lspan);
    btn.appendChild(tspan);
    btn.addEventListener('click', () => onOption(idx, btn));
    list.appendChild(btn);
  });

  /* Feedback hidden */
  $('feedback-box').style.display = 'none';

  /* Buttons */
  if (q.multiple) {
    $('btn-submit').style.display = 'inline-block';
    $('btn-submit').disabled      = true;
    $('btn-next').style.display   = 'none';
  } else {
    $('btn-submit').style.display = 'none';
    $('btn-next').style.display   = 'none';
  }
}

/* ════════════════════════════════════════════════════════════
   OPTION CLICK
   ════════════════════════════════════════════════════════════ */
function onOption(idx, btn) {
  if (S.answered) return;
  const q = S.questions[S.current];

  if (q.multiple) {
    /* Toggle selection */
    if (S.selected.has(idx)) {
      S.selected.delete(idx);
      btn.classList.remove('selected');
    } else {
      S.selected.add(idx);
      btn.classList.add('selected');
    }
    $('btn-submit').disabled = S.selected.size === 0;
  } else {
    /* Single answer → reveal immediately */
    S.selected = new Set([idx]);
    reveal();
  }
}

/* Submit button for multi-answer */
$('btn-submit').addEventListener('click', () => {
  if (S.selected.size === 0) return;
  reveal();
});

/* Next button */
$('btn-next').addEventListener('click', advance);

function advance() {
  S.current++;
  if (S.current >= S.questions.length) {
    showResult();
  } else {
    renderQuestion();
    /* Update progress to current question */
    $('progress-fill').style.width = (S.current / S.questions.length * 100) + '%';
  }
}

/* ════════════════════════════════════════════════════════════
   REVEAL ANSWER
   ════════════════════════════════════════════════════════════ */
function reveal() {
  S.answered = true;
  const q          = S.questions[S.current];
  const correctSet = new Set(q.correct);
  const selSet     = S.selected;

  /* Disable all buttons */
  const btns = $('options-list').querySelectorAll('.opt-btn');
  btns.forEach(b => { b.disabled = true; });

  /* Correct? */
  let ok;
  if (q.multiple) {
    ok = correctSet.size === selSet.size && [...correctSet].every(i => selSet.has(i));
  } else {
    ok = correctSet.has([...selSet][0]);
  }

  /* Colour every button */
  btns.forEach((btn, idx) => {
    const sel  = selSet.has(idx);
    const corr = correctSet.has(idx);
    btn.classList.remove('selected');
    if      (sel  && corr)  btn.classList.add('correct');
    else if (sel  && !corr) btn.classList.add('wrong');
    else if (!sel && corr)  btn.classList.add('missed');
  });

  /* Score */
  if (ok) {
    S.stats.correct++;
    S.score += (S.mode === 'exam') ? S.ptsPerQ : 1;
    $('score-live').textContent = S.score;
  } else {
    S.stats.wrong++;
  }

  /* Feedback message */
  const box   = $('feedback-box');
  const inner = $('feedback-inner');
  box.style.display = 'block';

  if (ok) {
    inner.className   = 'feedback-inner ok';
    const praise = ['Correct! ✓', 'Well done! ✓', 'Right! ✓', 'Spot on! ✓', 'Nailed it! ✓'];
    inner.textContent = praise[Math.floor(Math.random() * praise.length)];
  } else {
    inner.className = 'feedback-inner bad';
    const labels = q.correct
      .map(i => `${LETTERS[i]}. ${q.options[i]}`)
      .join('   |   ');
    inner.textContent = `✗  Incorrect.   Correct answer: ${labels}`;
  }

  /* Show Next, hide Submit */
  $('btn-submit').style.display = 'none';
  $('btn-next').style.display   = 'inline-block';
}

/* ════════════════════════════════════════════════════════════
   RESULT SCREEN
   ════════════════════════════════════════════════════════════ */
function showResult() {
  const { correct, wrong, total } = S.stats;
  const isExam  = S.mode === 'exam';
  const examPts = S.score;
  const pct     = Math.round(correct / total * 100);
  const arcPct  = isExam ? Math.round(examPts / EXAM_MAX * 100) : pct;

  /* Ring animation (circumference ≈ 427) */
  const arc = $('ring-arc');
  setTimeout(() => {
    arc.style.strokeDashoffset = 427 - (427 * arcPct / 100);
  }, 80);

  if (isExam) {
    const passed = examPts >= EXAM_PASS;
    arc.className = 'ring-arc ' + (passed ? 'pass' : 'fail');
    $('ring-pct').textContent = examPts + ' pts';
    $('ring-sub').textContent = `/ ${EXAM_MAX}`;

    const pf = $('pass-fail');
    pf.style.display = 'block';
    pf.className     = 'pass-fail ' + (passed ? 'pass' : 'fail');
    pf.textContent   = passed ? '✓  PASS' : '✗  FAIL  (need 700 pts)';

    $('result-title').textContent  = passed ? 'Exam Passed! 🎓' : 'Exam Failed 📚';
    $('result-detail').textContent = `${correct} of ${total} correct  ·  ${examPts} / ${EXAM_MAX} pts`;
  } else {
    arc.className = 'ring-arc';
    $('ring-pct').textContent = pct + '%';
    $('ring-sub').textContent = '';
    $('pass-fail').style.display = 'none';

    let title;
    if      (pct >= 90) title = 'Excellent! 🏆';
    else if (pct >= 75) title = 'Great Job! 🎉';
    else if (pct >= 60) title = 'Good Effort! 👍';
    else if (pct >= 50) title = 'Keep Studying 📖';
    else                title = 'More Practice Needed 💪';
    $('result-title').textContent  = title;
    $('result-detail').textContent = `${correct} of ${total} correct`;
  }

  /* Grid */
  $('result-grid').innerHTML = `
    <div class="rg-item"><div class="rg-num g">${correct}</div><div class="rg-lbl">Correct</div></div>
    <div class="rg-item"><div class="rg-num r">${wrong}</div><div class="rg-lbl">Wrong</div></div>
    <div class="rg-item"><div class="rg-num b">${total}</div><div class="rg-lbl">Total</div></div>
  `;

  $('progress-fill').style.width = '100%';
  showScreen('screen-result');
}

/* ════════════════════════════════════════════════════════════
   BROWSE SCREEN
   ════════════════════════════════════════════════════════════ */
function openBrowse() {
  $('browse-search').value = '';
  renderBrowse(ALL_QUESTIONS);
  $('browse-count').textContent = `(${ALL_QUESTIONS.length})`;
  showScreen('screen-browse');
}

function renderBrowse(list) {
  const container = $('browse-list');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<p style="color:var(--muted);text-align:center;padding:48px 0">No questions found.</p>';
    return;
  }

  list.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'bc';

    const multiTag = q.multiple
      ? '<span class="bc-multi">MULTI</span>' : '';

    const optsHtml = q.options.map((opt, i) => {
      const corr = q.correct.includes(i);
      return `<div class="bc-opt${corr ? ' cor' : ''}">
        <span class="bc-opt-ltr">${LETTERS[i]}</span>
        <span>${escH(opt)}</span>
        ${corr ? '<span class="bc-check">✓</span>' : ''}
      </div>`;
    }).join('');

    card.innerHTML = `
      <div class="bc-num">Q${qi + 1}${multiTag}</div>
      <div class="bc-q">${renderQuestionHTML(q.question)}</div>
      <div class="bc-opts">${optsHtml}</div>
    `;
    container.appendChild(card);
  });
}

$('browse-search').addEventListener('input', e => {
  const term = e.target.value.toLowerCase().trim();
  const list = term
    ? ALL_QUESTIONS.filter(q =>
        q.question.toLowerCase().includes(term) ||
        q.options.some(o => o.toLowerCase().includes(term)))
    : ALL_QUESTIONS;
  renderBrowse(list);
  $('browse-count').textContent = term
    ? `(${list.length} of ${ALL_QUESTIONS.length})`
    : `(${ALL_QUESTIONS.length})`;
});
