// ─── STATE ──────────────────────────────────────────────────────────────────
const state = {
  mode: 50,
  questions: [],
  current: 0,
  score: 0,
  selectedIndices: new Set(),
  answered: false,
  results: { correct: 0, wrong: 0, total: 0 }
};

// ─── HELPERS ────────────────────────────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const LETTERS = ['A', 'B', 'C', 'D', 'E'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ─── HOME SCREEN ────────────────────────────────────────────────────────────
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    const val = card.dataset.mode;
    state.mode = val === 'all' ? 'all' : parseInt(val);
  });
});

$('btn-start').addEventListener('click', startQuiz);
$('btn-browse').addEventListener('click', openBrowse);
$('btn-exit').addEventListener('click', () => {
  if (confirm('Exit quiz? Your progress will be lost.')) showScreen('screen-home');
});
$('btn-restart').addEventListener('click', startQuiz);
$('btn-home-result').addEventListener('click', () => showScreen('screen-home'));
$('btn-back-browse').addEventListener('click', () => showScreen('screen-home'));

// ─── START QUIZ ──────────────────────────────────────────────────────────────
function startQuiz() {
  const shuffled = shuffle(ALL_QUESTIONS);
  state.questions = state.mode === 'all' ? shuffled : shuffled.slice(0, state.mode);
  state.current = 0;
  state.score = 0;
  state.results = { correct: 0, wrong: 0, total: state.questions.length };

  $('q-total').textContent = state.questions.length;
  $('score-live').textContent = '0';

  showScreen('screen-quiz');
  renderQuestion();
}

// ─── RENDER QUESTION ─────────────────────────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.current];
  state.selectedIndices = new Set();
  state.answered = false;

  // Progress
  const num = state.current + 1;
  $('q-current').textContent = num;
  $('progress-fill').style.width = ((num - 1) / state.questions.length * 100) + '%';

  // Multi-answer hint
  const multiHint = $('multi-hint');
  if (q.multiple) {
    multiHint.style.display = 'inline-block';
  } else {
    multiHint.style.display = 'none';
  }

  // Question text
  const qArea = $('question-area');
  $('question-text').textContent = q.question;
  qArea.classList.remove('question-enter');
  void qArea.offsetWidth; // reflow
  qArea.classList.add('question-enter');

  // Options
  const grid = $('options-grid');
  grid.innerHTML = '';
  grid.classList.remove('question-enter');
  void grid.offsetWidth;
  grid.classList.add('question-enter');

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.idx = idx;

    const letterSpan = document.createElement('span');
    letterSpan.className = 'option-letter';
    letterSpan.textContent = LETTERS[idx];

    const textSpan = document.createElement('span');
    textSpan.textContent = opt;

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);

    btn.addEventListener('click', () => handleOptionClick(idx, btn));
    grid.appendChild(btn);
  });

  // Feedback
  const feedback = $('feedback-area');
  feedback.style.display = 'none';

  // Buttons
  if (q.multiple) {
    $('btn-submit').style.display = 'block';
    $('btn-next').style.display = 'none';
  } else {
    $('btn-submit').style.display = 'none';
    $('btn-next').style.display = 'none';
  }
}

// ─── HANDLE OPTION CLICK ─────────────────────────────────────────────────────
function handleOptionClick(idx, btn) {
  if (state.answered) return;
  const q = state.questions[state.current];

  if (q.multiple) {
    // Toggle selection
    if (state.selectedIndices.has(idx)) {
      state.selectedIndices.delete(idx);
      btn.classList.remove('selected');
      btn.querySelector('.option-letter').style.background = '';
    } else {
      state.selectedIndices.add(idx);
      btn.classList.add('selected');
    }
    // Enable submit if at least one selected
    $('btn-submit').disabled = state.selectedIndices.size === 0;
  } else {
    // Single answer – reveal immediately
    state.selectedIndices = new Set([idx]);
    revealAnswer();
  }
}

// Submit multi-answer
$('btn-submit').addEventListener('click', () => {
  if (state.selectedIndices.size === 0) return;
  revealAnswer();
});

// Next question
$('btn-next').addEventListener('click', () => {
  state.current++;
  if (state.current >= state.questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
  $('progress-fill').style.width = (state.current / state.questions.length * 100) + '%';
});

// ─── REVEAL ANSWER ───────────────────────────────────────────────────────────
function revealAnswer() {
  state.answered = true;
  const q = state.questions[state.current];
  const correctSet = new Set(q.correct);
  const selectedSet = state.selectedIndices;

  // Disable all buttons
  const btns = $('options-grid').querySelectorAll('.option-btn');
  btns.forEach(btn => btn.disabled = true);

  // Check correctness
  let isCorrect;
  if (q.multiple) {
    // All correct must be selected, nothing else
    isCorrect = correctSet.size === selectedSet.size &&
                [...correctSet].every(i => selectedSet.has(i));
  } else {
    isCorrect = correctSet.has([...selectedSet][0]);
  }

  // Color all buttons
  btns.forEach((btn, idx) => {
    const isSelected = selectedSet.has(idx);
    const isCorrectOption = correctSet.has(idx);

    btn.classList.remove('selected');

    if (isSelected && isCorrectOption) {
      btn.classList.add('correct');
    } else if (isSelected && !isCorrectOption) {
      btn.classList.add('wrong');
    } else if (!isSelected && isCorrectOption) {
      btn.classList.add('missed');
    }
  });

  // Score
  if (isCorrect) {
    state.score++;
    state.results.correct++;
    $('score-live').textContent = state.score;
  } else {
    state.results.wrong++;
  }

  // Feedback message
  const feedback = $('feedback-area');
  const msg = $('feedback-msg');
  feedback.style.display = 'block';

  if (isCorrect) {
    msg.className = 'feedback-msg correct-msg';
    const phrases = ['Correct! ✓', 'Nice work! ✓', 'That\'s right! ✓', 'Spot on! ✓'];
    msg.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  } else {
    msg.className = 'feedback-msg wrong-msg';
    const correctLabels = q.correct.map(i => `${LETTERS[i]}. ${q.options[i]}`).join(' / ');
    msg.textContent = `Incorrect. Correct answer: ${correctLabels}`;
  }

  // Show next button, hide submit
  $('btn-submit').style.display = 'none';
  $('btn-next').style.display = 'block';
}

// ─── SHOW RESULT ─────────────────────────────────────────────────────────────
function showResult() {
  const { correct, wrong, total } = state.results;
  const pct = Math.round((correct / total) * 100);

  $('result-pct').textContent = pct + '%';
  $('result-circle').style.setProperty('--pct', pct + '%');

  // Title based on score
  let title;
  if (pct >= 90) title = 'Excellent! 🏆';
  else if (pct >= 75) title = 'Great Job! 🎉';
  else if (pct >= 60) title = 'Good Effort! 👍';
  else if (pct >= 50) title = 'Keep Studying 📚';
  else title = 'Need More Practice 💪';
  $('result-title').textContent = title;

  $('result-score').textContent = `${correct} of ${total} correct`;

  $('result-breakdown').innerHTML = `
    <div class="breakdown-item">
      <div class="breakdown-num green">${correct}</div>
      <div class="breakdown-label">Correct</div>
    </div>
    <div class="breakdown-item">
      <div class="breakdown-num red">${wrong}</div>
      <div class="breakdown-label">Wrong</div>
    </div>
    <div class="breakdown-item">
      <div class="breakdown-num blue">${total}</div>
      <div class="breakdown-label">Total</div>
    </div>
  `;

  $('progress-fill').style.width = '100%';
  showScreen('screen-result');
}

// ─── BROWSE SCREEN ───────────────────────────────────────────────────────────
function openBrowse() {
  renderBrowseList(ALL_QUESTIONS);
  $('browse-count').textContent = `(${ALL_QUESTIONS.length})`;
  showScreen('screen-browse');
}

function renderBrowseList(list) {
  const container = $('browse-list');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px">No questions found.</p>';
    return;
  }

  list.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'browse-card';

    const multiTag = q.multiple ? '<span class="browse-multi-tag">MULTI</span>' : '';
    let optsHtml = q.options.map((opt, i) => {
      const isCorrect = q.correct.includes(i);
      return `
        <div class="browse-opt ${isCorrect ? 'correct-opt' : ''}">
          <span class="browse-opt-letter">${LETTERS[i]}</span>
          <span>${opt}</span>
          ${isCorrect ? '<span style="margin-left:auto;font-size:12px">✓</span>' : ''}
        </div>`;
    }).join('');

    card.innerHTML = `
      <div class="browse-q-num">Q${qi + 1} ${multiTag}</div>
      <div class="browse-q-text">${escapeHtml(q.question)}</div>
      <div class="browse-options">${optsHtml}</div>
    `;
    container.appendChild(card);
  });
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Search
$('browse-search').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase().trim();
  if (!term) {
    renderBrowseList(ALL_QUESTIONS);
    $('browse-count').textContent = `(${ALL_QUESTIONS.length})`;
    return;
  }
  const filtered = ALL_QUESTIONS.filter(q =>
    q.question.toLowerCase().includes(term) ||
    q.options.some(o => o.toLowerCase().includes(term))
  );
  renderBrowseList(filtered);
  $('browse-count').textContent = `(${filtered.length} of ${ALL_QUESTIONS.length})`;
});
