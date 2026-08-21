export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "faculty", label: "Faculty" },
  { id: "labs", label: "Labs" },
  { id: "projects", label: "Projects" },
  { id: "learning", label: "Learning Hub" },
  { id: "events", label: "Events" },
  { id: "placements", label: "Placements" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Students" },
  { value: 25, suffix: "+", label: "Faculty" },
  { value: 8, suffix: "+", label: "Laboratories" },
  { value: 100, suffix: "+", label: "Projects" },
];

export const highlights = [
  {
    icon: "CircuitBoard",
    title: "Industry-Aligned Curriculum",
    text: "Courses mapped to embedded systems, VLSI, IoT and 5G communication industry needs.",
  },
  {
    icon: "FlaskConical",
    title: "Hands-On Laboratories",
    text: "Eight specialised labs with modern development boards, FPGA kits and RF instruments.",
  },
  {
    icon: "Rocket",
    title: "Project Driven Learning",
    text: "Every student builds working hardware prototypes from second year onwards.",
  },
  {
    icon: "Users",
    title: "Mentored Research",
    text: "Faculty-guided paper publications, patents and inter-college technical competitions.",
  },
];

export const announcements = [
  {
    title: "Embedded Systems Workshop — Hands-on with STM32",
    date: "12 Sep 2026",
    category: "Workshop",
    description:
      "A three-day workshop covering bare-metal programming, timers, ADC and UART on STM32 boards. Open to third and final year students.",
  },
  {
    title: "Internal Assessment II Schedule Released",
    date: "05 Sep 2026",
    category: "Academics",
    description:
      "The timetable for the second internal assessment across all semesters is now available on the department notice board.",
  },
  {
    title: "Project Expo 2026 — Registration Open",
    date: "28 Aug 2026",
    category: "Events",
    description:
      "Teams of up to four members can register their working hardware or IoT prototype for the annual department project exhibition.",
  },
  {
    title: "Technical Symposium 'SPECTRA' Announced",
    date: "20 Aug 2026",
    category: "Symposium",
    description:
      "Paper presentation, circuit debugging, PCB design and robotics contests with cash prizes worth ₹50,000.",
  },
  {
    title: "Internship Opportunities in VLSI & Embedded",
    date: "14 Aug 2026",
    category: "Careers",
    description:
      "Six-month internship openings from partner companies in physical design, RTL verification and firmware development.",
  },
];

export const faculty = [
  {
    name: "Dr. Anitha Ramesh",
    designation: "Professor & Head of Department",
    qualification: "Ph.D. in Wireless Communication",
    specialization: "5G Networks, Signal Processing",
    email: "anitha.ramesh@ece.edu.in",
    initials: "AR",
  },
  {
    name: "Dr. Karthik Subramanian",
    designation: "Professor",
    qualification: "Ph.D. in VLSI Design",
    specialization: "Low Power VLSI, ASIC Design",
    email: "karthik.s@ece.edu.in",
    initials: "KS",
  },
  {
    name: "Dr. Meera Nair",
    designation: "Associate Professor",
    qualification: "Ph.D. in Embedded Systems",
    specialization: "RTOS, ARM Architecture",
    email: "meera.nair@ece.edu.in",
    initials: "MN",
  },
  {
    name: "Prof. Vignesh Kumar",
    designation: "Assistant Professor",
    qualification: "M.E. in Applied Electronics",
    specialization: "IoT, Sensor Networks",
    email: "vignesh.k@ece.edu.in",
    initials: "VK",
  },
  {
    name: "Dr. Priya Deshmukh",
    designation: "Associate Professor",
    qualification: "Ph.D. in Image Processing",
    specialization: "Computer Vision, Deep Learning",
    email: "priya.d@ece.edu.in",
    initials: "PD",
  },
  {
    name: "Prof. Rahul Menon",
    designation: "Assistant Professor",
    qualification: "M.Tech in Communication Systems",
    specialization: "Antenna Design, RF Circuits",
    email: "rahul.menon@ece.edu.in",
    initials: "RM",
  },
  {
    name: "Dr. Sneha Iyer",
    designation: "Assistant Professor",
    qualification: "Ph.D. in Microelectronics",
    specialization: "MEMS, Semiconductor Devices",
    email: "sneha.iyer@ece.edu.in",
    initials: "SI",
  },
  {
    name: "Prof. Arjun Bhat",
    designation: "Assistant Professor",
    qualification: "M.E. in Power Electronics",
    specialization: "Robotics, Motor Control",
    email: "arjun.bhat@ece.edu.in",
    initials: "AB",
  },
];

export const labs = [
  {
    icon: "Cpu",
    name: "Embedded Systems Lab",
    description:
      "Firmware development and real-time system design on modern microcontroller platforms.",
    equipment: ["STM32 Discovery kits", "ARM Cortex-M boards", "JTAG debuggers", "Logic analysers"],
    tech: ["Embedded C", "FreeRTOS", "Keil uVision", "STM32CubeIDE"],
  },
  {
    icon: "Wifi",
    name: "IoT Lab",
    description:
      "Connected device prototyping with cloud dashboards, sensors and wireless protocols.",
    equipment: ["ESP32 / ESP8266 nodes", "Raspberry Pi 5", "Sensor kits", "LoRa modules"],
    tech: ["MQTT", "Node-RED", "Python", "Firebase"],
  },
  {
    icon: "Microchip",
    name: "VLSI Lab",
    description: "RTL design, verification and physical design flows for digital integrated circuits.",
    equipment: ["FPGA Basys-3 boards", "Xilinx workstations", "Waveform monitors"],
    tech: ["Verilog", "VHDL", "Vivado", "Cadence Virtuoso"],
  },
  {
    icon: "RadioTower",
    name: "Communication Systems Lab",
    description: "Analog and digital modulation experiments with RF measurement instrumentation.",
    equipment: ["Spectrum analyser", "Signal generators", "Antenna trainer kits", "Optical fibre kit"],
    tech: ["MATLAB", "Simulink", "GNU Radio", "LabVIEW"],
  },
  {
    icon: "ToggleRight",
    name: "Digital Electronics Lab",
    description: "Combinational and sequential logic design from gates to finite state machines.",
    equipment: ["Digital trainer kits", "IC testers", "Breadboards", "DSO oscilloscopes"],
    tech: ["Logisim", "Multisim", "TTL / CMOS families"],
  },
  {
    icon: "MemoryStick",
    name: "Microprocessor & Microcontroller Lab",
    description: "Assembly and interfacing experiments on classic and modern processor families.",
    equipment: ["8086 trainer kits", "8051 boards", "Stepper & LCD interface modules"],
    tech: ["Assembly", "Embedded C", "Proteus", "MASM"],
  },
];

export const projectCategories = [
  "All",
  "Embedded Systems",
  "IoT",
  "VLSI",
  "Robotics",
  "Communication",
  "AI/ML",
];

export const projects = [
  {
    title: "Smart Fire and Smoke Detection System",
    category: "Embedded Systems",
    icon: "Flame",
    description:
      "Multi-sensor fire detection unit that triggers local alarms and sends SMS alerts within seconds of detecting smoke or abnormal temperature rise.",
    tech: ["Arduino Uno", "MQ-2 Sensor", "DHT11", "GSM SIM800L"],
    team: ["Divya S", "Hari Prasad", "Nithin R"],
  },
  {
    title: "Automatic Door Opening System",
    category: "Embedded Systems",
    icon: "DoorOpen",
    description:
      "Contactless entry system using PIR motion sensing and a servo-driven mechanism, with adjustable dwell time and manual override.",
    tech: ["PIR Sensor", "Servo Motor", "Arduino Nano", "Embedded C"],
    team: ["Aarthi M", "Sanjay K"],
  },
  {
    title: "Smart Home Automation",
    category: "IoT",
    icon: "House",
    description:
      "Voice and mobile controlled home appliance system with real-time status sync, scheduling and energy-safe relay switching.",
    tech: ["ESP32", "MQTT", "Relay Module", "React Dashboard"],
    team: ["Praveen J", "Lakshmi V", "Tarun A"],
  },
  {
    title: "IoT Weather Monitoring System",
    category: "IoT",
    icon: "CloudSun",
    description:
      "Solar-powered outdoor node measuring temperature, humidity, pressure and rainfall, streaming live data to a cloud dashboard.",
    tech: ["NodeMCU", "BMP280", "DHT22", "ThingSpeak"],
    team: ["Ramya P", "Akash D"],
  },
  {
    title: "Obstacle Avoiding Robot",
    category: "Robotics",
    icon: "Bot",
    description:
      "Autonomous differential-drive robot that maps nearby obstacles with ultrasonic sweeps and replans its path in real time.",
    tech: ["HC-SR04", "L298N Driver", "Arduino Mega", "Servo Scanner"],
    team: ["Vishal N", "Keerthi S", "Manoj B"],
  },
  {
    title: "Smart Energy Monitoring System",
    category: "IoT",
    icon: "Gauge",
    description:
      "Non-invasive current sensing meter that computes per-appliance consumption and flags unusual load patterns.",
    tech: ["ACS712", "ESP8266", "Firebase", "Chart Dashboard"],
    team: ["Sruthi R", "Gokul V"],
  },
  {
    title: "FPGA Based Digital Signal Filter",
    category: "VLSI",
    icon: "Waves",
    description:
      "Pipelined FIR filter implemented on an FPGA with configurable tap coefficients and on-board waveform verification.",
    tech: ["Verilog", "Basys-3 FPGA", "Vivado", "MATLAB"],
    team: ["Nandhini K", "Aravind S"],
  },
  {
    title: "Li-Fi Based Data Transmission",
    category: "Communication",
    icon: "Lightbulb",
    description:
      "Visible light communication link transmitting text and audio between rooms using modulated LED arrays and photodiode receivers.",
    tech: ["LED Array", "Photodiode", "Op-Amp Circuit", "Arduino"],
    team: ["Deepak M", "Swetha R", "Yogesh P"],
  },
  {
    title: "Speech Emotion Recognition on Edge",
    category: "AI/ML",
    icon: "BrainCircuit",
    description:
      "Lightweight CNN model quantised for a Raspberry Pi that classifies speaker emotion from short audio clips in real time.",
    tech: ["Python", "TensorFlow Lite", "Raspberry Pi", "Librosa"],
    team: ["Harini T", "Sathish G"],
  },
];

export const learningLevels = ["All", "Beginner", "Intermediate", "Advanced"];

export const learningTopics = [
  {
    icon: "Code2",
    title: "Embedded C",
    level: "Beginner",
    description: "Pointers, registers, bit manipulation and writing efficient firmware for microcontrollers.",
  },
  {
    icon: "Terminal",
    title: "Python",
    level: "Beginner",
    description: "Scripting, data handling and hardware interfacing for automation and ML workflows.",
  },
  {
    icon: "CircuitBoard",
    title: "Arduino",
    level: "Beginner",
    description: "Rapid prototyping with the Arduino ecosystem, shields, libraries and serial debugging.",
  },
  {
    icon: "Thermometer",
    title: "Sensors",
    level: "Beginner",
    description: "Working principles, calibration and signal conditioning for common analog and digital sensors.",
  },
  {
    icon: "Wifi",
    title: "IoT",
    level: "Intermediate",
    description: "Device-to-cloud architecture, MQTT, REST APIs, edge processing and dashboard design.",
  },
  {
    icon: "ToggleRight",
    title: "Digital Electronics",
    level: "Intermediate",
    description: "Boolean algebra, K-maps, flip-flops, counters and finite state machine design.",
  },
  {
    icon: "Microchip",
    title: "VLSI",
    level: "Advanced",
    description: "RTL coding, synthesis, timing closure and the complete ASIC/FPGA design flow.",
  },
  {
    icon: "RadioTower",
    title: "Communication Systems",
    level: "Advanced",
    description: "Modulation schemes, channel coding, antennas and modern wireless standards.",
  },
];

export const eventCategories = [
  "All",
  "Workshops",
  "Seminars",
  "Hackathons",
  "Technical Competitions",
  "Guest Lectures",
  "Department Events",
];

export const events = [
  {
    title: "STM32 Embedded Bootcamp",
    category: "Workshops",
    date: "18 Sep 2026",
    time: "09:30 AM – 04:30 PM",
    venue: "Embedded Systems Lab, Block C",
    icon: "Cpu",
    description: "Three-day hands-on bootcamp on ARM Cortex-M programming, peripherals and RTOS basics.",
  },
  {
    title: "Seminar on 6G Research Directions",
    category: "Seminars",
    date: "24 Sep 2026",
    time: "11:00 AM – 01:00 PM",
    venue: "Seminar Hall 2",
    icon: "RadioTower",
    description: "Research overview of terahertz communication, intelligent surfaces and network slicing.",
  },
  {
    title: "CircuitHack 24-Hour Hackathon",
    category: "Hackathons",
    date: "03 Oct 2026",
    time: "10:00 AM – 10:00 AM (next day)",
    venue: "Innovation Centre",
    icon: "Zap",
    description: "Build a working hardware prototype overnight around the theme of sustainable cities.",
  },
  {
    title: "PCB Design Challenge",
    category: "Technical Competitions",
    date: "10 Oct 2026",
    time: "02:00 PM – 06:00 PM",
    venue: "VLSI Lab",
    icon: "CircuitBoard",
    description: "Design a two-layer board for a given schematic within strict area and routing constraints.",
  },
  {
    title: "Guest Lecture: Careers in Semiconductor Industry",
    category: "Guest Lectures",
    date: "16 Oct 2026",
    time: "10:00 AM – 12:00 PM",
    venue: "Auditorium",
    icon: "Microchip",
    description: "Industry expert session on VLSI job roles, interview expectations and skill roadmaps.",
  },
  {
    title: "SPECTRA Technical Symposium",
    category: "Department Events",
    date: "07 Nov 2026",
    time: "09:00 AM – 05:00 PM",
    venue: "ECE Department Campus",
    icon: "Sparkles",
    description: "Annual flagship symposium with paper presentations, project expo and technical contests.",
  },
];

export const careerTracks = [
  {
    icon: "Cpu",
    title: "Embedded Systems",
    roles: ["Firmware Engineer", "Embedded Developer", "Test Engineer"],
    skills: ["Embedded C", "RTOS", "Microcontrollers", "Debugging"],
  },
  {
    icon: "Microchip",
    title: "VLSI",
    roles: ["RTL Design Engineer", "Verification Engineer", "Physical Design Engineer"],
    skills: ["Verilog", "SystemVerilog", "Timing Analysis", "Scripting"],
  },
  {
    icon: "Wifi",
    title: "IoT",
    roles: ["IoT Developer", "Edge Solutions Engineer", "Automation Engineer"],
    skills: ["MQTT", "Cloud Platforms", "Sensors", "Python"],
  },
  {
    icon: "CircuitBoard",
    title: "Electronics Design",
    roles: ["Hardware Design Engineer", "PCB Designer", "Product Engineer"],
    skills: ["Circuit Design", "Altium / KiCad", "Signal Integrity"],
  },
  {
    icon: "RadioTower",
    title: "Communication",
    roles: ["RF Engineer", "Network Engineer", "DSP Engineer"],
    skills: ["MATLAB", "RF Measurement", "Modulation", "Antennas"],
  },
  {
    icon: "Code2",
    title: "Software / IT",
    roles: ["Software Engineer", "Data Analyst", "ML Engineer"],
    skills: ["Python", "Data Structures", "SQL", "Web Development"],
  },
];

export const placementStats = [
  { label: "Placement Rate", value: 92, display: "92%" },
  { label: "Core Sector Offers", value: 64, display: "64%" },
  { label: "Higher Studies", value: 18, display: "18%" },
  { label: "Internship Conversion", value: 47, display: "47%" },
];

export const recruiters = [
  "Texas Instruments",
  "Bosch",
  "Qualcomm",
  "Wipro",
  "Cognizant",
  "L&T Technology",
  "Zoho",
  "HCLTech",
];

export const achievements = [
  {
    icon: "Trophy",
    title: "Student Awards",
    text: "Best Outgoing Engineer award won by ECE students in three consecutive academic years.",
    metric: "12 awards",
  },
  {
    icon: "Zap",
    title: "Hackathon Winners",
    text: "First place at Smart India Hackathon regional finals for a low-cost flood alert node.",
    metric: "5 wins",
  },
  {
    icon: "Medal",
    title: "Technical Competitions",
    text: "Podium finishes in inter-college robotics, circuit debugging and paper presentation contests.",
    metric: "28 podiums",
  },
  {
    icon: "BadgeCheck",
    title: "Certifications",
    text: "Students certified in embedded systems, VLSI design and cloud IoT platforms.",
    metric: "300+ certified",
  },
  {
    icon: "FileText",
    title: "Paper Publications",
    text: "Scopus-indexed publications in wireless sensing, antenna design and edge intelligence.",
    metric: "45 papers",
  },
  {
    icon: "GraduationCap",
    title: "Faculty Achievements",
    text: "Funded research grants, patents filed and invited talks at national conferences.",
    metric: "9 patents",
  },
  {
    icon: "Rocket",
    title: "Project Awards",
    text: "Department prototypes recognised at state-level project expos and innovation showcases.",
    metric: "16 awards",
  },
];

export const careerFields = [
  { icon: "Cpu", title: "Embedded Systems" },
  { icon: "Microchip", title: "VLSI" },
  { icon: "Wifi", title: "IoT" },
  { icon: "Bot", title: "Robotics" },
  { icon: "RadioTower", title: "Communication Systems" },
  { icon: "CircuitBoard", title: "Electronics Design" },
  { icon: "BrainCircuit", title: "AI & Machine Learning" },
  { icon: "Code2", title: "Software Development" },
];

export const missionPoints = [
  "Provide strong technical education grounded in fundamentals",
  "Encourage practical, laboratory-driven learning",
  "Promote innovation through student-led prototypes",
  "Develop industry-ready engineering skills",
  "Encourage research collaboration and teamwork",
];

export const faqs = [
  {
    q: "What is ECE?",
    a: "Electronics and Communication Engineering is the branch that deals with electronic circuits, embedded devices, signal processing and the communication systems that connect them — from a single microcontroller to global wireless networks.",
  },
  {
    q: "What career opportunities are available after ECE?",
    a: "Graduates work in embedded systems, VLSI and semiconductor design, IoT and automation, RF and network engineering, robotics, electronics product design, and software or data roles. Higher studies and research are also common paths.",
  },
  {
    q: "What laboratories are available?",
    a: "The department runs Embedded Systems, IoT, VLSI, Communication Systems, Digital Electronics and Microprocessor labs, along with a project innovation centre open to all students.",
  },
  {
    q: "What technical skills should ECE students learn?",
    a: "Embedded C, Python, Verilog/VHDL, MATLAB, circuit and PCB design, sensor interfacing, communication protocols such as UART, SPI, I2C and MQTT, plus fundamentals of data structures for software roles.",
  },
  {
    q: "What projects can ECE students build?",
    a: "Anything from sensor-based safety systems and home automation to FPGA signal processing, autonomous robots, Li-Fi links and edge AI applications. Faculty mentors help teams scope and build working prototypes.",
  },
];

export const contactInfo = {
  address: "Department of Electronics & Communication Engineering, Block C, Engineering Campus, Coimbatore – 641001, Tamil Nadu",
  email: "ece.department@college.edu.in",
  phone: "+91 422 400 1234",
  hours: "Monday – Friday, 9:00 AM – 5:00 PM",
};
