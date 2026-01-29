export const hero = {
  name: "Ashish Kumar",
  title: "M.Tech (AR&VR) | Data Science & GenAI Engineer",
  intro:
    "Data Science and GenAI-focused engineer with hands-on experience across NLP, time-series/anomaly detection, and end-to-end Retrieval Augmented Generation (RAG) systems. Strong Python/ML foundations with publications in applied ML/security and NLP. Currently pursuing M.Tech in AR&VR and building real-time multi-user systems at DRDO.",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ashish620-boogle",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-kumar-13a605197/",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=-gl_BFsAAAAJ&hl=en",
  },
];

export const about = {
  summary:
    "I build reliable, real-time systems at the intersection of AR/VR and AI. My work spans multi-user networking in Unity, NLP and document intelligence, and time-series/anomaly detection systems. I aim for roles in Data Science, GenAI, Technology Consulting, and Software Engineering.",
  educationHighlight:
    "Academic journey: B.Tech in CSE from NIT Hamirpur (8.98 CGPA) to M.Tech in AR&VR at IIT Jodhpur (8.74 CGPA).",
};

export const experience = [
  {
    company: "DRDO",
    role: "Software Developer (Real-time Multi-user Systems)",
    location: "Jodhpur, India",
    dates: "Jun 2025 - Present",
    tech: ["C#", "Unity", "Networking", "Client-Server", "XR Interaction"],
    highlights: [
      "Developing a real-time, multi-user wargaming simulation with strong emphasis on networking, state sync, and reliability.",
      "Translate stakeholder requirements into deployable features with modular, maintainable architecture.",
      "Design interaction flows for XR-ready scenarios with reliable state replication.",
    ],
  },
  {
    company: "BillOK",
    role: "AI Intern (Document AI / NLP)",
    location: "Bangalore, India",
    dates: "Oct 2022 - Mar 2023",
    tech: ["PyTorch", "NLP", "Transfer Learning", "Document AI"],
    highlights: [
      "Built an invoice understanding pipeline to extract key fields from known and unseen templates using LayoutLM.",
      "Designed preprocessing + training/inference workflow to improve robustness on noisy scans.",
      "Performed iterative error analysis to raise extraction reliability across template variations.",
    ],
  },
  {
    company: "Kubota Escorts",
    role: "ML Intern (Computer Vision)",
    location: "Remote, India",
    dates: "Sep 2022 - Mar 2023",
    tech: ["TensorFlow", "Deep Learning", "Computer Vision"],
    highlights: [
      "Developed a TensorFlow CV model to detect unhealthy crops from farm imagery.",
      "Enabled early identification of issues through image-based diagnostics.",
    ],
  },
];

export const projects = [
  {
    title: "Advanced Retrieval Augmented Generation (RAG) System",
    date: "Jan 2026",
    tech: [
      "LangChain",
      "Sentence Transformers",
      "ChromaDB",
      "Groq LLM",
      "Streamlit",
      "PyTorch",
    ],
    summary:
      "End-to-end RAG pipeline with ingestion, chunking, embedding generation, vector search, and grounded LLM responses with citations-ready context.",
    bullets: [
      "Supports multi-format ingestion (PDF/TXT/MD/CSV/SQL) with metadata-aware indexing and document-level traceability.",
      "Implements persistent ChromaDB vector store with incremental sync for added/removed files.",
      "Advanced pipeline supports streaming output, conversation history, and summary utilities for longer sessions.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ashish620-boogle/Advanced-RAG-pipeline",
      },
      {
        label: "Live Demo",
        href: "https://ash-advanced-rag-pipeline.streamlit.app/",
      },
    ],
  },
  {
    title: "Digital Twin Network - Fault Detection for IoT Sensors",
    date: "Jan 2024",
    tech: ["Python", "TensorFlow", "Time-Series", "Anomaly Detection", "IoT"],
    summary:
      "LSTM-based feature extraction with Random Forest classification to identify sensor faults in Digital Twin environments.",
    bullets: [
      "Built temporal feature pipelines for IoT signals and trained detection models for fault classification.",
      "Designed evaluation around anomaly detection performance and sensor-level interpretability.",
    ],
    links: [],
  },
  {
    title: "Market Pulse: Live Crypto Forecasting Dashboard",
    date: "Feb 2022",
    tech: ["Python", "FastAPI", "WebSockets", "Gradient Boosting", "Plotly"],
    summary:
      "Live BTC forecasting system with real-time data ingestion, feature engineering, and trading-simulation logic.",
    bullets: [
      "Built supervised-learning framing for short-horizon forecasting with rolling returns, volatility, and momentum features.",
      "Deployed a real-time dashboard that streams updates over WebSockets and visualizes forecasts + P&L.",
      "Implemented lightweight trading simulation to translate predictions into transparent action signals.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ashish620-boogle/Time-Series-Analysis",
      },
      {
        label: "Live Demo",
        href: "https://hftsystem.netlify.app/",
      },
    ],
  },
  {
    title: "Multimodality in VR (Systems + Networking)",
    date: "Apr 2025",
    tech: ["C#", "TCP Networking", "Unity", "Haptics", "Spatial Audio"],
    summary:
      "TCP client-server communication between a haptic device and HMD for synchronized feedback and interactions.",
    bullets: [
      "Integrated hardware I/O with Unity networking to align haptic cues with virtual events.",
      "Focused on low-latency messaging and stable session management for multi-device sync.",
    ],
    links: [],
  },
];

export const publications = [
  {
    title:
      "GAttE: Geographic Attention model for Extraction of users' current locations from social media texts",
    status: "In Review",
    venue: "Knowledge and Information Systems",
    summary:
      "Introduces a geographic attention pipeline combining sentence/word/character embeddings with deconvolution + multi-head attention for location extraction from social media posts.",
    links: [],
  },
  {
    title: "VectionSense: Multimodal Inertial-Physiological Cybersickness Detection in Consumer VR",
    status: "In Review",
    venue: "PerCom 2026 Workshop (EmotionSense)",
    summary:
      "Lightweight multimodal pipeline fusing headset IMU + heart-rate signals; transformer classifier achieves high accuracy in leave-one-subject-out evaluation.",
    links: [],
  },
  {
    title:
      "A combined supervised and unsupervised deep learning approach for Intrusion Detection in IoT Traffic in an Edge Computing Environment",
    status: "Published",
    venue: "SN Computer Science (Springer)",
    summary:
      "Hybrid supervised + unsupervised approach for intrusion detection in edge IoT traffic with improved accuracy over baseline methods.",
    links: [
      {
        label: "Springer",
        href: "https://link.springer.com/article/10.1007/s42979-025-04103-0",
      },
    ],
  },
  {
    title: "Intrusion Detection and Prevention systems in Industrial IoT network",
    status: "Published",
    venue: "Springer",
    summary:
      "Survey and systems overview of intrusion detection and prevention techniques for industrial IoT networks.",
    links: [
      {
        label: "Springer",
        href: "https://link.springer.com/article/10.1007/s12046-024-02567-z",
      },
    ],
  },
];

export const skills = [
  {
    title: "GenAI / LLM",
    items: [
      "RAG pipelines",
      "Embeddings",
      "Vector search (ChromaDB)",
      "LangChain",
      "Prompt design",
      "LLM integration",
    ],
  },
  {
    title: "Data Science / ML",
    items: [
      "NLP",
      "Time-series & anomaly detection",
      "Computer vision",
      "Model evaluation",
      "Feature engineering",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "C/C++", "C#", "SQL"],
  },
  {
    title: "Libraries",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Engineering",
    items: ["Git", "Linux", "API fundamentals"],
  },
  {
    title: "XR",
    items: ["Unity", "XR interaction", "Haptics", "Spatial audio", "Unity networking"],
  },
];

export const education = [
  {
    degree: "M.Tech (AR&VR)",
    institute: "Indian Institute of Technology, Jodhpur",
    score: "8.74 CGPA",
    year: "2024 - Present",
  },
  {
    degree: "B.Tech (CSE)",
    institute: "National Institute of Technology, Hamirpur",
    score: "8.98 CGPA",
    year: "2019 - 2024",
  },
];

export const achievements = [
  "Teaching Assistant (COA, NLU, Python, Introduction to CS) - IIT Jodhpur (2023-2025)",
  "Codeforces Top 25% | Specialist (max: 1524) - 2023",
  "GATE Scholar (Score: 434) - 2023",
  "Technical Newsletter Editor (AR/VR) - School of AIDE, IIT Jodhpur (2025-Present)",
  "ISTE NITH - Organized events for HULT Prize (2020)",
];

export const contact = {
  email: "ashishboogle810@gmail.com",
  emailAlt: "m24air003@iitj.ac.in",
  phone: "+91-6205883006",
};
