const ALL_QUESTIONS = [
  {
    "question": "A private network that allows members of an organization to exchange data is an:",
    "options": [
      "Extranet",
      "Ethernet",
      "Intranet",
      "Internet"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Two companies want to share data by using the Internet. Which type of network provides the solution?",
    "options": [
      "Ethernet",
      "Intranet",
      "Extranet",
      "Perimeter"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "VPNs are implemented to provide:",
    "options": [
      "A secure connection within a private network.",
      "A secure connection through public networks.",
      "Additional encryption by using IPSec.",
      "Additional security for selected computers."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which network element uses a tunneling protocol to encapsulate data for transmission?",
    "options": [
      "VPN",
      "NAT",
      "VLAN",
      "Internet"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "For which two reasons should you use IPsec between computers? (Choose two.)",
    "options": [
      "Data compression",
      "Data integrity",
      "Data redundancy",
      "Data confidentiality"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which Microsoft network service can you use to establish a connection to a corporate LAN without any user action?",
    "options": [
      "VPN",
      "Remote Desktop",
      "DirectAccess",
      "Nap"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "A node within a local area network (LAN) must have which two of the following? (Choose two.)",
    "options": [
      "Username and password",
      "Share name",
      "NIC",
      "IP address",
      "Table of all network nodes"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "A node within a local area network (LAN) must have a network interface device and a:",
    "options": [
      "Network account",
      "Table of all network nodes",
      "Host address",
      "Resource to share"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "A network that separates an organization\\'s private network from a public network is a/an:",
    "options": [
      "Firewall",
      "Extranet",
      "Perimeter",
      "Internet"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "For each of the following statements, select Yes if the statement is true. Otherwise, select No. Each correct selection is worth one point. {width=\"5.90625in\" height=\"1.987782152230971in\"} You use a perimeter network to grant internal clients access to external resources. - False A LAN has no access to the perimeter network. - False A perimeter network typically contains servers that require Internet access, such as web or email servers. - True 1. You use a perimeter network to grant internal clients access to external resources. Răspuns: No\\ ✔️ 1. -- Fals, scopul unei perimeter network (DMZ) este să ofere acces din Internet către anumite servere interne, nu invers. Resursele din DMZ sunt accesibile din exterior, dar nu sunt folosite pentru ca internii să acceseze resurse externe. 2. A LAN has no access to the perimeter network. Răspuns: No\\ ✔️ 2. - Fals, rețeaua locală (LAN) poate avea acces controlat la DMZ. De exemplu, un administrator din LAN poate accesa serverul web din DMZ pentru mentenanță. Accesul este posibil, dar securizat. 3. A perimeter network typically contains servers that require Internet access, such as web or email servers. Răspuns: Yes\\ ✔️ 3. -- Adevărat, acesta este scopul principal al unei rețele perimetrale (DMZ): găzduirea serverelor (web, email, FTP) care trebuie să fie accesibile din Internet, fără a expune întreaga rețea internă. 30 What zone is used to publish external websites for an organization?\\ \\",
    "options": [
      "intranet",
      "exanet",
      "internetwork",
      "DMZ"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "What is the primary purpose of a perimeter network?",
    "options": [
      "to act as a hidden location to deploy network clients",
      "to act as a secure location for deploying highly sensitive network",
      "to provide a buffer area between a private intranet and the public",
      "to monitor traffic between routed subnets in a private LAN"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "One purpose of a perimeter network is to:",
    "options": [
      "Make resources available to the intranet.",
      "Link campus area networks (CANs).",
      "Link local area networks (LANs).",
      "Make resources available to the Internet"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "One purpose of a perimeter network is?",
    "options": [
      "VLAN",
      "Microsoft ASP-NET",
      "Microsoft .NET Framework",
      "VPN"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Which two servers should you place in a perimeter network? Choose 2\\ \\",
    "options": [
      "NAT server",
      "database server",
      "secure file server",
      "DHCP server",
      "public web server"
    ],
    "correct": [
      0,
      4
    ],
    "multiple": true
  },
  {
    "question": "You work at a coffee shop. Your supervisor asks you to help set up a computer network. The network needs to have the following items: - A public facing web server - A Wi-Fi network for customers - A private network for the point of sale terminals - An office PC - A file/print server - A network printer You need to set up a perimeter network to protect the network. Which two items should you include in the perimeter network? (Choose two.)",
    "options": [
      "Network printer",
      "Web server",
      "File server",
      "Wi-Fi network",
      "Point of sale terminals"
    ],
    "correct": [
      1,
      3
    ],
    "multiple": true
  },
  {
    "question": "You have a public facing web-server and want to protect internal network intrusion. What should you do?\\ \\",
    "options": [
      "Configure the firewall to block access on ports 80 and 443",
      "Configure the server to block access to port 80 and 443",
      "Set the IP address of the web server to be within the LAN",
      "Deploy the web server in a DMZ"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. A \\\"secondary zone\\\" is the first DNS zone to which all updates for the records that belong to that zone are written. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "Primary zone",
      "Stub zone",
      "Conditional forwarding zone",
      "No change is needed."
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What is a reason to incorporate VLANs into a network? (One reason to incorporate VLANs in a network is to)",
    "options": [
      "To reduce the number of nodes in a broadcast domain.",
      "To increase the number of available IP addresses.",
      "To reduce the number of broadcast domains.",
      "To increase the number of available Media Access Control (MAC)"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What are two characteristics of VLANs? (Choose 2.)\\",
    "options": [
      "VLANs act as though they are on the same LAN regardless of physical",
      "A VLAN can logically address packets by using IP",
      "A VLAN compartmentalizes a network and isolates traffic",
      "A single switch can service only a single VLAN"
    ],
    "correct": [
      0,
      2
    ],
    "multiple": true
  },
  {
    "question": "What are three advantages of VLANs? (Choose three.)",
    "options": [
      "They can logically address packets by using IP.",
      "They require a router to connect to VLANs on another switch.",
      "They compartmentalize a network and isolate traffic.",
      "They are efficient because a single switch can implement only a",
      "They act as though they are on the same LAN regardless of physical"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "multiple": true
  },
  {
    "question": "To protect a network when it is connected to the Internet, you should use a:",
    "options": [
      "Bridge",
      "Firewall",
      "Switch",
      "Router"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. \\\"A/anvirtual private network (VPN)\\\" protects a network\\'s perimeter by monitoring traffic as it enters and leaves. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "Extranet",
      "Firewall",
      "Intranet",
      "No change is needed"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which type of network covers the broadest area?",
    "options": [
      "WAN",
      "CAN",
      "LAN",
      "PAN"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which two of the following are connectivity options for wide area networks (WANs)? (Choose two.)",
    "options": [
      "Token ring",
      "Ethernet",
      "Dial-up",
      "Leased line"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "What are two advantages of using DSL for WAN connections? Choose 2",
    "options": [
      "DSL bypasses the need to use an ISP to connect to the Internet",
      "DSL supports higher bandwidth than cable modems and ISDN",
      "DSL provides a cost-effective way for small office/home office",
      "DSL is the preferred method for WAN point-to-point links in an",
      "DSL is implemented using standard telephone company service lines"
    ],
    "correct": [
      2,
      4
    ],
    "multiple": true
  },
  {
    "question": "You need to configure a VPN connection between two offices. You want to maximize the connection speed. Which connection should you use?",
    "options": [
      "ISDN",
      "Cable Modem",
      "T1",
      "DSL"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "What is the bit rate for a North American T3 circuit?",
    "options": [
      "6.312 Mbit/s",
      "44.736 Mbit/s",
      "274.176 Mbit/s",
      "400.352 Mbit/s"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which technology provides the highest bit rate?",
    "options": [
      "T1",
      "El",
      "DS3",
      "ISDN"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which type of wide-area connection is available in the most geographic regions?",
    "options": [
      "T1",
      "Cable",
      "ISDN",
      "- POTS"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "A university has network links at many locations. Where would a T3 connection be appropriate?\\ \\",
    "options": [
      "computer lab PC to lab printer",
      "library laptop PC to Internet",
      "server to network in the main server room",
      "main campus to a large satellite campus"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "POTS, ISDN, and. T1 use which type of switching?\\ \\",
    "options": [
      "packet",
      "circuit"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. Plain old telephone service (POTS), most ISDN lines, and switched T1 lines are all examples of \"Message Switching\". Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\'\\' if the underlined text makes the statement correct.",
    "options": [
      "Circuit Switching",
      "Packet Switching",
      "FDDI Switching",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. The four IEEE standards, 802.11a, b, g, and n, are collectively known as \\\"mobile ad hoc\\\" networks. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "WiMAX",
      "Bluetooth",
      "WiFi",
      "No change is needed"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which two are published IEEE 802.11 wireless transmission standards? (Choose two.)",
    "options": [
      "802.11f",
      "802.11g",
      "802.11k",
      "802.11m",
      "802.11n"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "What wifi standards support 54Mbps and only at 2.5Ghz?\\ \\",
    "options": [
      "802.11a",
      "802.11g",
      "802.11n"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "What happens when an 802.11a node broadcasts within the range of an 802.11g access point?",
    "options": [
      "The access point transmits, but the node is unable to receive.",
      "A connection occurs.",
      "Both the node and the access point are unable to transmit.",
      "The node transmits, but the access point is unable to receive."
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. In a wireless network that requires an SSL certificate, \"WEP\" handles the SSL certificate. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "802.1X",
      "WPA2-PSK",
      "WPA-PSK",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. \\\"WEP\\\" wireless encryption is the most susceptible to interception and decryption. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\'\\' if the underlined text makes the statement correct",
    "options": [
      "WPA-AES",
      "WPA2",
      "WPA-PSK",
      "No change is needed"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Which type of network is most vulnerable to intrusion?",
    "options": [
      "Dial-up",
      "Wireless",
      "Broadband",
      "Leased line"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which wireless authentication method provides the highest level of security?",
    "options": [
      "Wired Equivalency Privacy (WEP)",
      "IEEE 802.lln",
      "WI-FI Protected Access (WPA)",
      "IEEE 802.11a"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which of these factors has the biggest impact on data transmission speed in a wireless network?",
    "options": [
      "The access method used for the network",
      "The transmission standard of the equipment used",
      "The use of strong encryption for transmissions",
      "The transmission wattage rating used on the NIC"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Security is a concern on wireless networks due to:",
    "options": [
      "The radio broadcast access method.",
      "Spread spectrum issues.",
      "Frequency modulation issues.",
      "The potential for cross-talk."
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Attenuation in a wireless network signal is a result of:",
    "options": [
      "Number of wireless nodes connected.",
      "Distance from the access point.",
      "Interference from cellular phones.",
      "Encryption of the signal."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which wireless communication problem is caused by electromagnetic waves?",
    "options": [
      "Fading",
      "Attenuation",
      "Interference",
      "Diffraction"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "If an 802.11g Internet connection has connectivity problems, what may be the cause?\\ \\",
    "options": [
      "Computer monitor",
      "A cellular phone",
      "Incandescent light",
      "A cordless phone"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "If an 802.11g Internet connection has connectivity problems, what may be the cause?",
    "options": [
      "A cordless phone",
      "A cellular phone",
      "Incandescent lights",
      "Electromagnetic interference (EMI)"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which is an example of external interference that can degrade the transmission quality of a UTP cable segment?",
    "options": [
      "Wireless access points",
      "Crosstalk",
      "Large electric motors",
      "Cell phones"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "The topology of a local area network (LAN) is defined by the:",
    "options": [
      "Number of devices to connect.",
      "Physical and logical characteristics.",
      "Distance between workstations.",
      "Type of cable being used."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "A characteristic of the mesh topology is that it:",
    "options": [
      "Uses a central hub.",
      "Cannot use wired connections.",
      "Uses redundant paths.",
      "Cannot use wireless connections."
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "In which physical network topology is each computer connected to a central point?",
    "options": [
      "Star",
      "Mesh",
      "Ring",
      "Bus"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. All devices on your company network connect to the same network switch. This is an example of a physical [star]{.underline} topology. Review the underlined text. If it makes the statement correct, select No change is needed. If the statement is incorrect, select the answer choice that makes the statement correct.",
    "options": [
      "ring",
      "bus",
      "mesh",
      "No change is needed"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "In a physical star topology, the central device is referred to as a:",
    "options": [
      "Bridge",
      "Server",
      "segmenter",
      "Hub"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "What are two advantages of using star topology rather than ring topology in a computer lab workgroup? (Choose two.)",
    "options": [
      "Failure of a central connectivity device does not bring down the",
      "A central connection point allows for flexibility and scalability.",
      "Data travels on redundant paths, so one cable cannot stop its",
      "A cable problem within the group affects two nodes, at most.",
      "Redundancy is an advantage of the star topology"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "What are two characteristics of the CSMA/CD access method? Choose 2\\ \\",
    "options": [
      "It does a round robin search for requests to transmit from all",
      "It signals its intent to transmit on the network",
      "It can be used with a physical bus topology",
      "It waits until the medium is idle before transmitting",
      "It can detect and compensate for packet collisions"
    ],
    "correct": [
      2,
      3
    ],
    "multiple": true
  },
  {
    "question": "What are two characteristics of the CSMA/CD access method? (Choose two.)",
    "options": [
      "It checks to see if a collision has been detected.",
      "It does a round robin search for requests to transmit from all nodes",
      "It signals its intent to transmit on the network.",
      "It waits until the transmission medium is idle."
    ],
    "correct": [
      0,
      3
    ],
    "multiple": true
  },
  {
    "question": "In local area network (LAN) topologies, the primary media access methods are: (Choose two.)",
    "options": [
      "Contention",
      "Negotiation",
      "Kerberos",
      "Token passing"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which of the following determines the media access method that is used in a network?",
    "options": [
      "Number of hosts connected to the network",
      "Number of domain servers on the segment",
      "Maximum speed of the media",
      "Topology and protocols"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "What is the most common central device used today to connect computers to a network?",
    "options": [
      "hub",
      "switch",
      "SOHO router",
      "VPN router"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which network device interconnects computers in a workgroup, is able to be remotely configured, and provides the best throughput?\\ \\",
    "options": [
      "managed switch",
      "router",
      "unmanaged switch",
      "hub"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What are two differences between switches and hubs? (Choose two.)",
    "options": [
      "Switches are slower than hubs because of the extra addressing",
      "Switches send data to all of the computers that are connected to them",
      "Switches are capable of sending and receiving data at the same time.",
      "Switches identify the intended destination of the data that they"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "What are two characteristics of switches? (Choose two.)",
    "options": [
      "Switches identify the intended destination of the data that they",
      "Switches cause more data collisions than hubs",
      "Switches are capable of sending and receiving data at the same time",
      "Switches send each packet to all of the computer that are connected"
    ],
    "correct": [
      0,
      2
    ],
    "multiple": true
  },
  {
    "question": "One reason to replace an unmanaged switch with a managed switch is to:",
    "options": [
      "Manage the routing tables.",
      "Support multiple VLANS.",
      "Reduce collision domains.",
      "Route between networks."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which type of port supports VLAN traffic between two switches?",
    "options": [
      "Virtual port",
      "WAN port",
      "Trunk port",
      "LAN port"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "In addition to switching, multilayer switches also:",
    "options": [
      "Provide Layer 3 routing functions.",
      "Interface with CAT3, CATS, CAT5e, and fiber optics.",
      "Support 10 MB, 100 MB, and 1 GB local area network (LAN) ports.",
      "Operate by using only Layer 1 and 2 protocols."
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What is an example of a network device that associates a network address with a port?",
    "options": [
      "Switch",
      "Router",
      "Hub",
      "DSL modem"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "What is the function of a router?\\ \\",
    "options": [
      "directs data packets toward a destination network",
      "provide interconnections between different media types",
      "resolve MAC and IP addresses",
      "join subnets into larger broadcast domains"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "If a router cannot determine the next hop for a packet, the router will:",
    "options": [
      "Forward the packet to the default route.",
      "Send the packet back to the packet\\'s source.",
      "Broadcast the packet.",
      "Store the packet in the memory buffer."
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What is an advantage of dynamic routing?",
    "options": [
      "It automatically maintains routing tables.",
      "It limits traffic derived from routing protocols.",
      "It reduces broadcast traffic.",
      "It automatically enables DHCP."
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which routing option is fault tolerant?",
    "options": [
      "Static routing",
      "The default route",
      "Dynamic routing",
      "Least-cost routing"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "You work for a small office that has 15 computers. Your local ISP provides you with one public IP address. You need to enable internet access for all 15 computers.\\ Which routing function should you enable?\\",
    "options": [
      "Static routing",
      "NAT",
      "Port forwarding (PAT)",
      "RIP"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "How is a router\\'s static routing table updated?",
    "options": [
      "By monitoring adjacent subnets",
      "Through direct action by the network administrator",
      "With updates from the physically nearest routers",
      "From the RIP protocol after resetting the router"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which metric does Routing Information Protocol (RJP) use to determine the least costly route?",
    "options": [
      "Delay",
      "Host ID",
      "Hop count",
      "Interface"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which two features of a Windows Server 2008 R2 server should you install to use that server as a software router? (Choose two.)",
    "options": [
      "Network Policy and Access Services",
      "Routing and Remote Access Services",
      "Remote Administration",
      "DirectAccess"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which two policies can you configure through QoS policy settings?",
    "options": [
      "set traffic priority on receiving computer IP address",
      "optimize routes based on available bandwidth",
      "optimize routes based on hop countD - set traffic priority based on",
      "set traffic priority based on the receiving application",
      "set traffic priority based on the sending computer IP address"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "You need to divide a network into three subnets. Which device should you use?",
    "options": [
      "Hub",
      "Bridge",
      "Router",
      "Segmenter"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "What are two characteristics of fiber optic cable? (Choose two.)",
    "options": [
      "Conducts electricity",
      "Requires metal conduit",
      "Supports splicing",
      "Requires a polish for end connectors"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "A cable that meets the 1000BaseT standard has a maximum length of:",
    "options": [
      "100 m",
      "250 m",
      "500 m",
      "1,000 m"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What is the minimum cabling requirement for a 100BaseTX network?",
    "options": [
      "Category 3 UTP cable",
      "Category 5 UTP cable",
      "Category 6 UTP cable",
      "Multimode fiber cable"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "What is the maximum cable length for a single Cat5 UTP cable run?",
    "options": [
      "285 feet/86.87 meters",
      "328 feet/99.97 meters",
      "432 feet/131.67 meters",
      "600 feet/182.88 meters"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which of these cable types transmits data the greatest distance?",
    "options": [
      "Multi-mode fiber",
      "Single-mode fiber",
      "Cat5e",
      "Cat6"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which feature of Category 5e STP cable reduces external interference?",
    "options": [
      "Crosstalk",
      "Shielding",
      "Length",
      "Twisting"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "To directly connect the Ethernet network interface cards (NICs) of two computers, you should use a:",
    "options": [
      "Crossover cable",
      "Straight cable",
      "Rollover cable",
      "Coaxial cable"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What is a justification for using STP cable instead of UTP cable to wire a network expansion?",
    "options": [
      "You are routing cables through an area with high external",
      "You want to minimize the costs relating to the new installation.",
      "You need to reduce attenuation.",
      "You need the cable to be as light and flexible as possible."
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which media type is least susceptible to external interference including EMI and RFI?",
    "options": [
      "fiber optic",
      "STP",
      "UTP",
      "wireless"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "You need to run four Ethernet network drops. Each drop is approximately 125 feet/46.33 meters. An interference exists along the path of each drop. You need to ensure that interference is reduced. Which cable type should you use?",
    "options": [
      "STP Cat5e",
      "UTPCat5e",
      "Cat3",
      "UTPCat6"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "The type of connector used on a 100BaseT Ethernet cable is:",
    "options": [
      "RJ-11",
      "RJ-45.",
      "TNC.",
      "BNC."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "You are home for vacation, and a family member wants your help to purchase and install network cable for a home office. The cable needs to support at least 300 Mbps. What is the least expensive option that meets this requirement?",
    "options": [
      "Cat3",
      "CAT5",
      "Cat5e",
      "Cat6"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "How many layers does the TCP/IP model have",
    "options": [
      "3",
      "4",
      "6",
      "7"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which layer in the OSI model is included in the TCP/IP model?",
    "options": [
      "Physical",
      "Data Link",
      "Transport",
      "Application"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. Every router today is \\\"[TCP/IP]{.underline}\\\" enabled, which is an industry-standard protocol that you use on the Internet and for local addressing. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "HTTP",
      "FTP",
      "SNMP",
      "No change is needed"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "What model is used to describe how data communication occurs between hosts?",
    "options": [
      "server-centric model",
      "workgroup model",
      "peer-to-peer model",
      "OSI reference model"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Which layer in the OSI model covers HTTP, FTP, and RDC?",
    "options": [
      "Physical",
      "Session",
      "Application",
      "Presentation"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which two functions are implemented at the application layer of the OSI model? Choose two.\\ \\",
    "options": [
      "remote file services",
      "data encryption/decryption",
      "data compression",
      "directory services"
    ],
    "correct": [
      0,
      3
    ],
    "multiple": true
  },
  {
    "question": "What layer in the OSI model is used to encrypt data?",
    "options": [
      "Physical",
      "Session",
      "Application",
      "Presentation"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. All session data is \\\"encrypted between all machines\\\" while using telnet. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "Not encrypted",
      "Encrypted between any Windows machines",
      "Encrypted only to any non-Windows machines",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct.\\ According to the OSI model, encryption takes place on the \\\"transport layer\\\".\\ Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.\\",
    "options": [
      "Presentation",
      "Network",
      "Application",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which layer of the OSI model includes VLANs?",
    "options": [
      "Physical",
      "Data Link",
      "Network",
      "Transport"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which layer in the OSI model is used to verify that data was delivered without error?",
    "options": [
      "Physical",
      "Data Link",
      "Network",
      "Transport"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Which protocol do you use as the transport protocol for a video application?",
    "options": [
      "TCP",
      "UDP",
      "FTP",
      "RDC"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which of the following is a Layer 2 WAN protocol?",
    "options": [
      "Point-to-Point Protocol (PPP)",
      "Simple Network Management Protocol (SNMP)",
      "Transmission Control Protocol (TCP)",
      "Internet Protocol (IP)"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "In which OSI layer does routing occur?",
    "options": [
      "Transport",
      "Network",
      "Data Link",
      "Physical"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "A network device that associates a Media Access Control (MAC) address with a port is a:",
    "options": [
      "DSL modem",
      "Hub",
      "Router",
      "Switch"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "A Layer 2 device that connects multiple computers within a network is a:",
    "options": [
      "Repeater",
      "Switch",
      "Router",
      "Packet"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "What is an example of a Layer 3 device that connects multiple computers and networks?",
    "options": [
      "Packet",
      "Repeater",
      "Switch",
      "Router"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "What is a similarity between Layer 2 and Layer 3 switches?",
    "options": [
      "Both provide a high level of security to the network.",
      "Both use logical addressing to forward transmissions.",
      "Both forward packets onto the network.",
      "Both allow the implementation of VLANs."
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Which of the following represents a Media Access Control (MAC) address?",
    "options": [
      "GV:ZC:KK:DK:FZ:CA",
      "255.255.255.0",
      "05:35:AB:6E:Al:25",
      "127.0.0.1"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "A Media Access Control (MAC) address identifies a/an:",
    "options": [
      "UPnP device.",
      "Local broadcast domain.",
      "Network interface card (NIC).",
      "Local area network (LAN)."
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which protocol is used to translate IP addresses to MAC addresses (Which protocol maintains the IP to MAC addresses?)",
    "options": [
      "RARP",
      "ARP",
      "DNS",
      "WINS"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. An Address Resolution Protocol (ARP) table is used to associate IP addresses with \\\"host names\\\". Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "MAC addresses",
      "HomeGroup membership",
      "Preferred routers",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. The protocol that maps IP addresses to a Media Access Control (MAC) address is [Domain Name Systems]{.underline} (DNS). Review the underlined text. If it makes the statement correct, select No change is needed. If the statement is incorrect, select the answer choice that makes the statement correct.",
    "options": [
      "Address Resolution Protocol (ARP)",
      "Dynamic Host Configuration Protocol (DHCP)",
      "Routing Information Protocol (RIP)",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which protocol is a transport layer protocol?",
    "options": [
      "FTP",
      "IP",
      "UDP",
      "ASCII"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which of these is an application layer protocol?",
    "options": [
      "TCP",
      "FTP",
      "IP",
      "UDP"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which protocol is responsible for automatically assigning IP addresses?",
    "options": [
      "HTTP",
      "DHCP",
      "DNS",
      "WINS"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which protocol can be used to encrypt packets on the Internet?",
    "options": [
      "SNMP",
      "HTTPS",
      "TFTP",
      "HTTP"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "At what layer in the OSI model are hardware addresses referenced?",
    "options": [
      "Network",
      "Application",
      "Data link",
      "Physical"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "TCP/IP and IPX/SPX are known as _________ stacks.",
    "options": [
      "Protocols",
      "Services",
      "Layers",
      "Lenses"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What is the advantage of UDP over TCP",
    "options": [
      "Less Overhead - Faster Performance",
      "Older - Larger pool of compatible hardware",
      "TCP is not IPv6 compatible UDP is",
      "UDP can operate at Layer 1"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "An Action Center alert recommends that you enable Windows Firewall. After enabling the firewall, you can no longer access websites. Which two TCP ports should you add exceptions for on the firewall? (Choose two.)",
    "options": [
      "Port 21",
      "Port 23",
      "Port 25",
      "Port 80",
      "Port 443"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Which of the following is a public IP address?",
    "options": [
      "10.156.89.1",
      "68.24.78.221",
      "172.16.152.48",
      "192.168.25.101"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which of these is a public address space?",
    "options": [
      "192.168.0.0/16",
      "197.16.0.0/12",
      "10.0.0.0/8",
      "172.16.0.0/12"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which network does the IP address 220.100.100.100 belong to?",
    "options": [
      "220.100.100.0/24",
      "220.100.100.1/24",
      "255.255.255.0/24",
      "255.255.255.1/24"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which subnet mask is valid?",
    "options": [
      "255.255.255.240",
      "255.255.255.228",
      "255.255.255.164",
      "255.255.255.245"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "What is the default subnet mask for a Class C Internet network?",
    "options": [
      "255.255.255.252",
      "255.255.255.240",
      "255.255.255.192",
      "255.255.255.0"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Which of these addresses is a multicast address?",
    "options": [
      "127.0.0.1",
      "169.254.0.1",
      "192.168.0.1",
      "224.0.0.1"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. The loopback address of your computer is \\\"127.0.0.1\\\". Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statementcorrect.",
    "options": [
      "10.0.1.1",
      "169.254.0.5",
      "192168.1.1",
      "No change is needed"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "What ports are defined above 49,152?\\ \\",
    "options": [
      "well-known ports",
      "registered ports",
      "dynamic ports",
      "sliding ports"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "A network is configured with a single IPv4 subnet. You want to deploy a computer running Windows Server 2016 to use as a file server. What two parameters are required? Choose 2\\ \\",
    "options": [
      "default gateway",
      "Mac address",
      "IP address",
      "Primary DNS server",
      "Subnet mask"
    ],
    "correct": [
      4
    ],
    "multiple": false
  },
  {
    "question": "The default gateway address identifies the:",
    "options": [
      "Device that will connect the computer to the local network.",
      "Device that will connect the computer to a remote network.",
      "Server that will provide name services for the computer.",
      "Server that will authenticate the user of the computer."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. Each IPv4 address consists of a [MAC address and data-link laver address]{.underline}. Select the correct answer if the underlined text does not make the statement correct. Select \\\"No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "Network ID and a host ID",
      "DNS record and a default route",
      "64-bit binary number divided into octets",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "How many bits are there in an Internet Protocol version 6 (IPv6) address?",
    "options": [
      "32",
      "64",
      "128",
      "256"
    ],
    "correct": [
      0,
      2
    ],
    "multiple": true
  },
  {
    "question": "Which option represents an IPv6 loopback address?",
    "options": [
      "::",
      "FF00::127",
      "FE80::127",
      "::1"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Which is a IPv4 to IPv6 tunneling protocol?\\ \\",
    "options": [
      "DHCP",
      "RDP",
      "teredo"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which of these represents the Internet Protocol version 6 (IPv6) loopback address?",
    "options": [
      "127.0.0.1",
      "192.168.0.1",
      "FEC0:A8C0::AA01",
      "::1"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Teredo tunneling is a protocol that:",
    "options": [
      "Translates Internet Protocol version 4 (IPv4) to Internet Protocol",
      "Allows IPv6 connectivity through IPv4 devices.",
      "Provides VPN security.",
      "Dynamically allocates IPv6 addresses."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "An Action Center alert recommends that you enable Windows Firewall.\\ After enabling the firewall, you can no longer access websites.\\ Which two TCP ports should you add exceptions for on the firewall? (Choose two.)\\",
    "options": [
      "Port 21",
      "Port 23",
      "Port 25",
      "Port 80",
      "Port 443"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "What information is contained in a client computer\\'s HOSTS file?",
    "options": [
      "NetBIOS name to IP address mappings",
      "a list of local DNS Servers",
      "FQDN to IP address mapping",
      "a list of Internet and root DNS servers"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "What is the first step in the DNS name resolution process?\\ \\",
    "options": [
      "The client checks the LMHOSTS file for an entry to the name",
      "The client checks its HOSTS file for an entry to the name",
      "The client checks to see if the name being resolved is its own name"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "The service that resolves fully qualified domain names (FQDN) to IP addresses is:",
    "options": [
      "Windows Internet Name Service (WINS).",
      "Domain Name Service (DNS).",
      "Internet Service Provider (ISP).",
      "Address Resolution Protocol (ARP)."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "A service that resolves NetBIOS names to IP addresses is:",
    "options": [
      "Domain Name Service (DNS).",
      "Internet Service Provider (ISP).",
      "Address Resolution Protocol (ARP).",
      "Windows Internet Name Service (WINS)."
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. The process of replicating a zone file to multiple DNS servers is called [zone replication]{.underline}, Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "Zone transfer",
      "Zone synchronization",
      "Start of authority",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "You ping a server by using fully qualified domain name (FQDN) and do not receive a response. You then ping the same server by using its IP address and receive a response. Why do you receive a response on the second attempt but not on the first attempt?",
    "options": [
      "PING is improperly configured.",
      "The DNS is not resolving.",
      "The DHCP server is offline.",
      "NSLOOKUP is stopped."
    ],
    "correct": [
      0,
      1
    ],
    "multiple": true
  },
  {
    "question": "What type of record does DNS use to find a mail service?",
    "options": [
      "Service (SRV) DNS record",
      "Canonical (CNAME) DNS record",
      "Mail Exchanger (MX) DNS record",
      "Host (A) DNS record"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "What type of DNS record maps host names to addresses?",
    "options": [
      "Mail Exchanger (MX) DNS record",
      "Service (SRV) DNS record",
      "Host (A) DNS record",
      "Canonical (CNAME) DNS record"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "Which DNS record type specifies the host that is the authority for a given domain?",
    "options": [
      "NS",
      "MX",
      "CNAME",
      "SOA"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "What is the DNS record type that specifies an alias name of another address record?",
    "options": [
      "MX",
      "CNAME",
      "NS",
      "SOA"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. The \"NTP\" value in a resource record indicates a length of time that other DNS servers use to determine how long to cache information for a record before expiring and discarding it. Select the correct answer if the underlined text does not make the statement correct. Select \\\"No change is needed\\'\\' if the underlined text makes the statement correct.",
    "options": [
      "TTL",
      "GPS",
      "SOA RR",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which of the following are features of DHCP? (Choose two.)",
    "options": [
      "IP address resolution to canonical names",
      "Secure shell connections",
      "Address reservation",
      "Network file transfer",
      "IP address exclusion"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "A computer that has an IP address of 169.254.0.1 cannot access the network. Which of the following services should you confirm is available?",
    "options": [
      "WINS",
      "DNS",
      "DHCP",
      "TFTP"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. When a client computer is unable to reach a DHCP server, it will automatically assign an IP address in the [10.0.0.0 -10.0.0.255]{.underline} range. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "127.0.0.0-127.0.0.255",
      "169.254.0.0-169.254.255.255",
      "192168.100.0 -192.168.100.255",
      "No change is needed"
    ],
    "correct": [
      1,
      2
    ],
    "multiple": true
  },
  {
    "question": "You need to configure DHCPServ with scopes to support both subnets. What needs to be done on the other subnet?",
    "options": [
      "Configure the router to support DHCP messages and BOOTP messages",
      "Deploy a DHCP relay in the other subnet",
      "Reconfigure both subnets with the same set of addresses",
      "Deploy a NAT Server"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "What happens when a client\\'s DHCP-issued address expires?",
    "options": [
      "The client continues to use the address until it is notified to",
      "The client generates a new address valid to the subnet and requests",
      "The client disconnects from the network.",
      "The client attempts to renew its lease on the address."
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Your home computer is having problems accessing the Internet. You suspect that your Internet router\\'s DHCP service is not functioning, so you check your computer\\'s IP address. Which address indicates that your router\\'s DHCP service is NOT functioning?",
    "options": [
      "169.254.1.15",
      "172.16.1.15",
      "192.168.1.15",
      "10.19.1.15"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Connecting to a private network address from a public network requires:",
    "options": [
      "Network address translation (NAT).",
      "Dynamic Host Configuration Protocol (DHCP).",
      "Network Access Protection (NAP).",
      "Dynamic domain name system (DDNS)."
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "Which of the following services masks internal IP addresses from outside the network?",
    "options": [
      "DHCP",
      "WINS",
      "NAT",
      "DNS"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "You deploy a server running Windows Server 2016 and install Remote Access Server. What do you need to configure to access the Internet and navigate multiple web sites?",
    "options": [
      "DHCP",
      "NAT",
      "WAP",
      "VPN"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "The query protocol used to locate resources on a network is:",
    "options": [
      "User Datagram Protocol (UDP).",
      "Lightweight Directory Access Protocol (LDAP)",
      "Tracert",
      "Telnet."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "If a router is installed so that it separates a DHCP server from its clients, the clients will:",
    "options": [
      "Immediately lose connectivity to all segments.",
      "Be unable to obtain their leases from the server.",
      "Immediately lose connectivity to the local segment.",
      "Receive an immediate renewal of their lease."
    ],
    "correct": [
      1,
      3
    ],
    "multiple": true
  },
  {
    "question": "This question requires that you evaluate the underlined text to determine if it is correct. IPSec policies for two machines on a LAN can be modified by using the \\\"[IPSec policy snap-in]{.underline}\\\" on Windows 7. Select the correct answer if the underlined text does not make the statement correct. Select \\'No change is needed\\\" if the underlined text makes the statement correct.",
    "options": [
      "Windows Firewall with Advanced Security snap-in",
      "LAN adapter properties",
      "Remote Access snap-in",
      "No change is needed"
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "You are helping a friend set up a public-facing web server for a home office. Your friend wants to protect the internal network from intrusion. What should you do?",
    "options": [
      "Set the web server in a perimeter network.",
      "Set the web server to block access on ports 80 and 443.",
      "Configure the firewall to block access on ports 80 and 443.",
      "Set the IP address of the web server to be within the LAN."
    ],
    "correct": [
      0
    ],
    "multiple": false
  },
  {
    "question": "You are a network administrator at a small business. An employee is not able to access any websites. No other employees are having this problem. All computers are on the same intranet.\\ You need to troubleshoot the problem. Which three actions should you complete? (Choose 3)",
    "options": [
      "Ensure that the router has a connection to the internet.",
      "Contact the internet service provider.",
      "Check the employee's network adapter to verify that it is working.",
      "Check to see if the router is working properly.",
      "Determine whether the employee's computer has a valid IP address."
    ],
    "correct": [
      2,
      4
    ],
    "multiple": true
  },
  {
    "question": "On a Windows computer, which utility should you use to determine whether your Domain Name System (DNS) service is properly resolving fully qualified domain names (FQDNs) to IP addresses?",
    "options": [
      "netstat",
      "nslookup",
      "nbtstat",
      "ipconfig"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "Which setting is used to determine the Domain Name System (DNS) settings on a client computer?",
    "options": [
      "TELNET",
      "NSLOOKUP",
      "PATHPING",
      "NETSTAT"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "The ping tool is used to: (Choose two.)",
    "options": [
      "Determine the network portion of a host address.",
      "Self-test a host\\'s own network interface.",
      "Determine whether a host is reachable.",
      "Manage a host\\'s session when UDP is used."
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "The ping utility is used for which two purposes? Choose 2\\ \\",
    "options": [
      "determine whether a host is reachable",
      "resolve host name to IP address",
      "search for duplicate address",
      "self-test a host\\'s own network interface",
      "scan for open host firewall ports"
    ],
    "correct": [
      0,
      3
    ],
    "multiple": true
  },
  {
    "question": "Which command is used to verify that a server is connected to the network?",
    "options": [
      "IPCONFIG",
      "ROUTE",
      "PING",
      "CHECK"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "The ipconfig command will:",
    "options": [
      "Configure routers",
      "Display a client\\'s address",
      "Display a client\\'s broadcast mode",
      "Configure DHCP clients"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "You run the ipconfig command. The output is shown in the following image: {width=\"5.130138888888889in\" height=\"1.9238024934383202in\"} From these settings, you can tell that the computer:",
    "options": [
      "Will have limited Internet access",
      "Will have full Internet access",
      "Will not be able to access the Internet",
      "Will not be able to access the local network"
    ],
    "correct": [
      2
    ],
    "multiple": false
  },
  {
    "question": "A user reports that she cannot connect to network resources from a computer on the company network. The user was able to connect to the network resources yesterday. You verify that the user\\'s computer is properly physically connected to the network. You discover that the computer\\'s IP address is 169.254.48.97. You need to restore access to network resources. What should you do next?",
    "options": [
      "Flush the cache on the DNS server.",
      "Reset the user\\'s password on the server.",
      "Check your router\\'s current routing tables.",
      "Verify that the DHCP service is available."
    ],
    "correct": [
      0,
      3
    ],
    "multiple": true
  },
  {
    "question": "In Linux, which command-line tool should you use to list a host\\'s active incoming connections?",
    "options": [
      "dig",
      "netstat",
      "ip addr",
      "host"
    ],
    "correct": [
      1
    ],
    "multiple": false
  },
  {
    "question": "You are setting up a network computer game. You need to open up ports on your firewall so your friends can join the network. Which command displays the ports that your computer is listening for?",
    "options": [
      "nslookup",
      "nbtstat",
      "ping",
      "netstat"
    ],
    "correct": [
      3
    ],
    "multiple": false
  },
  {
    "question": "Tracert is used to:",
    "options": [
      "Manage routing tables dynamically.",
      "Manage session-oriented connections between nodes.",
      "Report the route taken by packets across an IP network.",
      "Report the shortest route between different networks."
    ],
    "correct": [
      2
    ],
    "multiple": false
  }
];