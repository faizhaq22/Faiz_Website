import { CredlyBadge, AwardItem, ProjectItem, ExperienceItem, SkillCategory, PublicationItem, ReferenceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Faiz Ni'matul Haq",
  titles: {
    en: [
      "Data Analytics Enthusiast",
      "Certified Power BI Data Analyst",
      "Best Talent Indonesia Next",
      "Marine Science to Tech Innovator"
    ],
    id: [
      "Data Analytics Enthusiast",
      "Certified Power BI Data Analyst",
      "Best Talent Indonesia Next",
      "Marine Science to Tech Innovator"
    ]
  },
  gpa: "3.94 / 4.00",
  university: "Universitas Brawijaya",
  degree: "Bachelor of Science in Fisheries & Marine Science",
  email: "fnimatulhaq@gmail.com",
  phone: "+6282119097549",
  location: "Cirebon, West Java, Indonesia",
  linkedin: "https://www.linkedin.com/in/faiz-ni-matul-haq-1a0451188/",
  credly: "https://www.credly.com/users/faiz-ni-matul-haq",
  cvPath: "/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf",
  heroPortrait: "/src/assets/images/hero_portrait_faiz_1794297066857.jpg"
};

export const TRANSITION_STORY = {
  en: {
    title: "Bridging Marine Ecological Sciences and Enterprise Data Analytics",
    lead: "How mathematical precision in oceanographic modeling inspired an ambition for high-impact business intelligence and predictive decision-making.",
    paragraphs: [
      "Graduating from Universitas Brawijaya with a 3.94 / 4.00 GPA (Summa Cum Laude), I initially investigated ocean dynamics, spatial marine ecosystems, and multivariate environmental datasets. Working with satellite telemetry, bathymetric layers, and biological sampling demanded rigorous data hygiene, statistical variance modeling, and reproducible pipelines.",
      "Recognizing that enterprise organizations face analogous complexities—noisy data streams, unstructured consumer signals, and multi-layered operational silos—I pivoted my focus toward Enterprise Business Intelligence, Python data engineering, and SQL analytics. This analytical background allows me to dissect complex business problems from foundational first principles.",
      "Today, as a Microsoft Certified Power BI Data Analyst (PL-300) and Azure certified practitioner, I synthesize advanced DAX data modeling, machine learning algorithms, and compelling executive reporting to translate raw datasets into measurable revenue gains and operational clarity."
    ],
    keyPillars: [
      {
        title: "Academic Rigor",
        stat: "GPA 3.94",
        desc: "Graduated top of class in Marine Science, grounding my work in quantitative statistics and research ethics."
      },
      {
        title: "Certified Mastery",
        stat: "10+ Global Badges",
        desc: "Validated credentials from Microsoft (PL-300, DP-900, AZ-900), AWS, PMI, and Adobe on Credly."
      },
      {
        title: "Proven Innovation",
        stat: "8+ National Honors",
        desc: "Gold and Silver medals in national competitions organized by Puspresnas and premier Indonesian universities."
      }
    ]
  },
  id: {
    title: "Menjembatani Ilmu Kelautan & Analisis Data Perusahaan",
    lead: "Bagaimana ketelitian matematis dalam pemodelan oseanografi menginspirasi dedikasi tinggi pada business intelligence dan pengambilan keputusan berbasis data.",
    paragraphs: [
      "Lulus dari Universitas Brawijaya dengan IPK 3.94 / 4.00, saya awalnya meneliti dinamika kelautan, ekosistem spasial maritim, serta dataset lingkungan multivariat. Mengolah telemetri satelit, lapisan batimetri, dan sampling biologi menuntut kebersihan data yang ketat, pemodelan varians statistik, dan pipeline yang dapat direproduksi.",
      "Menyadari bahwa industri dan perusahaan menghadapi kompleksitas serupa—aliran data bervolume tinggi, sinyal perilaku konsumen yang tidak terstruktur, serta silo operasional—saya memfokuskan keahlian pada Enterprise Business Intelligence, Python data engineering, dan SQL analytics. Fondasi sains analitis ini memungkinkan saya membedah masalah bisnis dari prinsip dasar yang kokoh.",
      "Kini, sebagai Microsoft Certified Power BI Data Analyst (PL-300) dan Azure certified practitioner, saya menggabungkan pemodelan data DAX tingkat lanjut, algoritma machine learning, dan visualisasi eksekutif yang mengubah tumpukan data menjadi efisiensi operasional dan pertumbuhan terukur."
    ],
    keyPillars: [
      {
        title: "Keunggulan Akademik",
        stat: "IPK 3.94",
        desc: "Lulusan terbaik Fakultas Perikanan & Ilmu Kelautan dengan fondasi statistik kuantitatif yang kuat."
      },
      {
        title: "Sertifikasi Global",
        stat: "10+ Lencana Credly",
        desc: "Tervalidasi secara internasional oleh Microsoft (PL-300, DP-900, AZ-900), AWS, PMI, dan Adobe."
      },
      {
        title: "Inovasi Teruji",
        stat: "8+ Medali Nasional",
        desc: "Meraih Medali Emas & Perak kompetisi nasional oleh Puspresnas Kemendikbudristek dan universitas ternama."
      }
    ]
  }
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "diabetes-helper-app",
    title: {
      en: "Diabetes Helper & Glycemic Risk Prediction Engine",
      id: "Aplikasi Diabetes Helper & Prediksi Risiko Glikemik"
    },
    subtitle: {
      en: "Gold Medal Award-Winning Health Tech Algorithm",
      id: "Inovasi Health Tech Peraih Medali Emas Nasional"
    },
    category: "data-bi",
    categoryLabel: {
      en: "Data Science & Healthcare",
      id: "Sains Data & Kesehatan"
    },
    awardBadge: {
      en: "Gold Medal · UNS Export 2022",
      id: "Medali Emas · UNS Export 2022",
      type: "gold"
    },
    image: "/src/assets/images/project_diabetes_helper_1794297067196.jpg",
    summary: {
      en: "An intelligent glycemic management and glucose-level predictive platform designed to assist diabetic patients in calculating real-time body sugar impacts and meal responses.",
      id: "Platform manajemen glikemik pintar dan prediksi lonjakan gula darah untuk membantu penderita diabetes menghitung estimasi kadar gula tubuh secara akurat."
    },
    problem: {
      en: "Diabetic patients struggle with dietary compliance and unexpected blood glucose spikes due to complex carbohydrate-to-insulin ratios and lack of intuitive predictive tooling.",
      id: "Penderita diabetes sering kesulitan memantau risiko lonjakan kadar gula darah akibat kompleksnya perhitungan asupan karbohidrat dan ketiadaan alat prediksi intuitif."
    },
    solution: {
      en: "Developed a predictive algorithmic model utilizing regression forecasting and nutritional feature extraction to estimate postprandial glucose curves, delivering personalized glycemic alerts.",
      id: "Membangun model algoritma prediktif berbasis regresi statistik dan ekstraksi nutrisi makanan untuk memproyeksikan kurva glukosa setelah makan dan memberikan rekomendasi pencegahan."
    },
    impact: {
      en: "Awarded Gold Medal at the National Essay Competition Export UNS 2022 at Universitas Sebelas Maret for technological viability and human-centered healthcare data design.",
      id: "Meraih Medali Emas National Essay Competition Export UNS 2022 di Universitas Sebelas Maret berkat validitas teknis dan dampak kemanusiaan yang nyata."
    },
    tags: ["Python", "Predictive Analytics", "Health Data", "Scikit-Learn", "UI/UX Modeling"],
    metrics: [
      { label: { en: "Accuracy Rate", id: "Tingkat Akurasi" }, value: "92.4%" },
      { label: { en: "National Honor", id: "Penghargaan" }, value: "Gold Medal" },
      { label: { en: "Target Users", id: "Target Pengguna" }, value: "Diabetic Care" }
    ]
  },
  {
    id: "marine-patrol-boat-ar",
    title: {
      en: "Autonomous AR Patrol Boats for Maritime Surveillance",
      id: "Kapal Patroli Otonom AR untuk Pengawasan Maritim"
    },
    subtitle: {
      en: "Gold Medal KKCTBN 2022 by Pusat Prestasi Nasional",
      id: "Medali Emas KKCTBN 2022 oleh Puspresnas Kemendikbudristek"
    },
    category: "marine-ar",
    categoryLabel: {
      en: "Maritime Tech & 3D AR",
      id: "Teknologi Maritim & AR"
    },
    awardBadge: {
      en: "Gold Medal · KKCTBN 2022",
      id: "Medali Emas · KKCTBN 2022",
      type: "gold"
    },
    image: "/src/assets/images/project_marine_patrol_boat_1794297067839.jpg",
    summary: {
      en: "Designed high-speed autonomous patrol boat architecture integrated with augmented reality telemetry overlays to track, intercept, and eliminate illegal fishing (IUU) in territorial waters.",
      id: "Merancang desain kapal patroli otonom cepat terintegrasi telemetri augmented reality untuk melacak dan menindak aksi pencurian ikan (IUU Fishing) di laut Indonesia."
    },
    problem: {
      en: "Indonesian territorial waters span thousands of nautical miles, making manual patrol vessel coverage cost-prohibitive and allowing illegal foreign fishing vessels to evade radar.",
      id: "Wilayah laut Indonesia yang sangat luas menyebabkan patroli manual memakan biaya besar dan sulit mendeteksi kapal asing ilegal secara tepat waktu."
    },
    solution: {
      en: "Synthesized 3D hydrodynamic ship modeling with AR real-time spatial telemetry, providing tactical radar operators with immediate target vectors and speed trajectory calculations.",
      id: "Mengintegrasikan perancangan model 3D hidrodinamika kapal cepat dengan proyeksi overlay AR, memudahkan operator membaca vektor target dan kecepatan kapal secara real-time."
    },
    impact: {
      en: "Won Gold Medal at Kontes Kapal Cepat Tak Berawak Nasional (KKCTBN) 2022 organized by Pusat Prestasi Nasional (Kemendikbudristek RI).",
      id: "Memenangkan Medali Emas Kontes Kapal Cepat Tak Berawak Nasional (KKCTBN) 2022 yang diselenggarakan oleh Pusat Prestasi Nasional RI."
    },
    tags: ["3D Modeling", "Augmented Reality", "Spatial Analytics", "Maritime Telemetry", "Computer Vision"],
    metrics: [
      { label: { en: "National Award", id: "Penghargaan" }, value: "1st Place Gold" },
      { label: { en: "Organized By", id: "Penyelenggara" }, value: "Puspresnas RI" },
      { label: { en: "Coverage Speed", id: "Kecepatan Desain" }, value: "45+ Knots" }
    ]
  },
  {
    id: "power-bi-enterprise-intelligence",
    title: {
      en: "Enterprise Revenue & Operations Intelligence Dashboard",
      id: "Dashboard Business Intelligence Penjualan & Operasional"
    },
    subtitle: {
      en: "Certified Power BI Data Analyst (PL-300) Capstone",
      id: "Showcase Keahlian Certified Power BI (PL-300)"
    },
    category: "data-bi",
    categoryLabel: {
      en: "Business Intelligence & DAX",
      id: "Business Intelligence & DAX"
    },
    awardBadge: {
      en: "Certified PL-300 Showcase",
      id: "Standar Sertifikasi PL-300",
      type: "honor"
    },
    image: "/src/assets/images/project_powerbi_dashboard_1794297069020.jpg",
    summary: {
      en: "Comprehensive enterprise executive dashboard combining star-schema data modeling, time-intelligence DAX formulas, and dynamic drill-through KPIs for c-suite leadership.",
      id: "Dashboard eksekutif perusahaan komprehensif dengan star-schema data modeling, formula time-intelligence DAX, dan drill-through interaktif untuk manajemen puncak."
    },
    problem: {
      en: "Disparate sales transactions and regional supply chain silos made it challenging for executives to identify margin leakages and underperforming product lines.",
      id: "Data transaksi dan logistik yang terfragmentasi menyulitkan jajaran direksi dalam mengidentifikasi kebocoran margin dan produk yang berkinerja rendah."
    },
    solution: {
      en: "Architected a scalable star-schema in Power BI connected via SQL pipelines. Formulated 40+ complex DAX measures (YoY growth, rolling averages, cohort churn) with row-level security (RLS).",
      id: "Membangun star-schema terukur di Power BI terhubung ke database SQL, merumuskan 40+ measure DAX (pertumbuhan YoY, rolling averages, cohort churn) serta Row-Level Security."
    },
    impact: {
      en: "Reduced report generation latency by 75% and enabled executive drill-down across multiple regional business units in single-click dashboards.",
      id: "Mempercepat waktu pembuatan laporan hingga 75% dan memberikan visibilitas langsung performa bisnis multi-cabang dalam hitungan detik."
    },
    tags: ["Power BI", "DAX", "SQL Data Pipeline", "Star Schema", "Azure Data"],
    metrics: [
      { label: { en: "Latency Reduction", id: "Reduksi Waktu" }, value: "-75%" },
      { label: { en: "DAX Measures", id: "Ukuran DAX" }, value: "40+ Custom" },
      { label: { en: "Credential", id: "Standar" }, value: "Microsoft PL-300" }
    ]
  },
  {
    id: "autonomous-submarine-defense",
    title: {
      en: "Autonomous Submarine for Marine Deep-Sea Defense",
      id: "Kapal Selam Otonom untuk Pertahanan Bawah Laut"
    },
    subtitle: {
      en: "4th Runner Up KKCTBN 2021 by Puspresnas",
      id: "Juara 4 Nasional KKCTBN 2021 Puspresnas"
    },
    category: "marine-ar",
    categoryLabel: {
      en: "Robotics & Marine Defense",
      id: "Robotika & Pertahanan Laut"
    },
    awardBadge: {
      en: "National Runner Up · KKCTBN 2021",
      id: "Juara Harapan · KKCTBN 2021",
      type: "honor"
    },
    image: "/src/assets/images/project_marine_patrol_boat_1794297067839.jpg",
    summary: {
      en: "Autonomous underwater vehicle (AUV) telemetry and hull modeling designed to conduct covert bathymetric mapping and acoustic tracking in deep maritime trenches.",
      id: "Pengembangan telemetri wahana bawah air otonom (AUV) dan pemodelan lambung kapal selam untuk pemetaan batimetri dan pelacakan akustik bawah laut."
    },
    problem: {
      en: "Traditional manned submarines face severe operational depth limits and extreme life-support costs during long-duration undersea surveillance.",
      id: "Kapal selam berawak menghadapi batasan kedalaman ekstrem dan biaya operasional tinggi dalam patroli bawah air durasi panjang."
    },
    solution: {
      en: "Engineered sensor ingestion logic and depth-pressure resistance calculations to enable uncrewed exploration and automated sonar ping data aggregation.",
      id: "Merancang logika pembacaan sensor sonar dan perhitungan ketahanan tekanan kedalaman untuk agregasi data oseanografi secara otomatis."
    },
    impact: {
      en: "Achieved 4th Runner Up in the autonomous submarine category at the National Uncrewed Fast Boat Contest (KKCTBN) 2021.",
      id: "Meraih Juara 4 Nasional kategori kapal selam otonom di Kontes Kapal Cepat Tak Berawak Nasional 2021."
    },
    tags: ["Robotics", "Acoustic Telemetry", "Marine Science", "CAD Modeling", "Python"],
    metrics: [
      { label: { en: "National Rank", id: "Peringkat Nasional" }, value: "4th Runner Up" },
      { label: { en: "Domain", id: "Bidang" }, value: "Undersea Defense" },
      { label: { en: "Sensors", id: "Sensor Data" }, value: "Sonar & Depth" }
    ]
  },
  {
    id: "ai4impact-chatbot",
    title: {
      en: "Ai4Impact Intelligent SME Business Assistant Chatbot",
      id: "Chatbot Cerdas Asisten Bisnis UMKM Ai4Impact"
    },
    subtitle: {
      en: "Silver Medal Digital Entrepreneurship Festival 2.0",
      id: "Medali Perak Digital Entrepreneurship Festival 2.0"
    },
    category: "iot-ai",
    categoryLabel: {
      en: "Conversational AI & Analytics",
      id: "AI Percakapan & Analisis"
    },
    awardBadge: {
      en: "Silver Medal · Ai4Impact 2022",
      id: "Medali Perak · Ai4Impact 2022",
      type: "silver"
    },
    image: "/src/assets/images/project_diabetes_helper_1794297067196.jpg",
    summary: {
      en: "An NLP-driven conversational AI assistant providing automated 24/7 customer interaction, inventory queries, and sales pattern analytics for Indonesian small business owners.",
      id: "Asisten AI percakapan berbasis NLP untuk otomatisasi layanan pelanggan 24/7, pengecekan inventaris, serta analitik pola transaksi bagi pelaku UMKM."
    },
    problem: {
      en: "Small business merchants lose over 40% of leads outside standard working hours due to delayed inquiry responses and manual order recording.",
      id: "Pelaku UMKM kehilangan lebih dari 40% calon pembeli di luar jam kerja karena keterlambatan membalas pesan dan pencatatan manual."
    },
    solution: {
      en: "Built intent classification models and catalog retrieval webhooks, delivering instant responses and aggregating transaction trends into summary analytics.",
      id: "Membangun model klasifikasi intent dan webhook katalog terintegrasi untuk respon kilat serta ringkasan tren transaksi berkala."
    },
    impact: {
      en: "Won Silver Medal at Digital Entrepreneurship Festival 2.0 by Ai4Impact for practical SME economic enablement.",
      id: "Meraih Medali Perak Digital Entrepreneurship Festival 2.0 oleh Ai4Impact berkat penerapan langsung bagi pertumbuhan ekonomi UMKM."
    },
    tags: ["NLP", "Conversational AI", "Python", "SME Analytics", "API Integration"],
    metrics: [
      { label: { en: "Response Time", id: "Waktu Respon" }, value: "<1 Second" },
      { label: { en: "Award", id: "Medali" }, value: "Silver Medal" },
      { label: { en: "Availability", id: "Ketersediaan" }, value: "24/7 Auto" }
    ]
  },
  {
    id: "nator-fire-navigation",
    title: {
      en: "Nator (Navigation Detector) for Emergency Fire Rescue",
      id: "Nator: Detektor Navigasi Evakuasi Korban Kebakaran"
    },
    subtitle: {
      en: "Best Team Khatulistiwa 5 Competition · UB",
      id: "Best Team Kompetisi Khatulistiwa 5 · Universitas Brawijaya"
    },
    category: "iot-ai",
    categoryLabel: {
      en: "IoT & Emergency Response",
      id: "IoT & Sistem Darurat"
    },
    awardBadge: {
      en: "Best Team · Khatulistiwa 5",
      id: "Tim Terbaik · Khatulistiwa 5",
      type: "honor"
    },
    image: "/src/assets/images/project_marine_patrol_boat_1794297067839.jpg",
    summary: {
      en: "An IoT-enabled indoor navigation and sensor beacon network guiding both trapped victims and firefighters through dense smoke and fire corridors.",
      id: "Jaringan suar navigasi IoT dalam ruangan untuk memandu korban terjebak dan tim pemadam kebakaran menembus asap tebal serta lorong darurat."
    },
    problem: {
      en: "Smoke inhalation and disorientation cause 80% of fatalities in building fires because conventional exit signs become invisible.",
      id: "Inhalasi asap pekat dan disorientasi arah menyebabkan 80% korban jiwa dalam kebakaran gedung karena rambu evakuasi terhalang."
    },
    solution: {
      en: "Formulated spatial escape graph algorithms based on real-time temperature, CO gas telemetry, and ultrasonic distance sensors deployed on wearable beacons.",
      id: "Merumuskan algoritma rute evakuasi teraman berbasis sensor suhu, kadar gas CO, dan modul panduan audio nirkabel berdaya tahan panas."
    },
    impact: {
      en: "Awarded Best Team at Khatulistiwa 5 National Competition at Universitas Brawijaya for lifecritical engineering innovation.",
      id: "Dinobatkan sebagai Best Team Kompetisi Nasional Khatulistiwa 5 di Universitas Brawijaya atas inovasi penyelamatan jiwa berbasis teknologi."
    },
    tags: ["IoT Hardware", "Spatial Routing", "Sensor Networks", "Microcontrollers", "Safety Tech"],
    metrics: [
      { label: { en: "Recognition", id: "Penghargaan" }, value: "Best Team" },
      { label: { en: "Telemetry", id: "Sensor" }, value: "Temp & Gas" },
      { label: { en: "Algorithm", id: "Algoritma" }, value: "Safest Path" }
    ]
  }
];

export const CREDLY_BADGES: CredlyBadge[] = [
  {
    id: "pl-300",
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    credlyId: "C7C091B2799661ED",
    issueDate: "May 2024",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Associate / Professional",
    description: {
      en: "Demonstrates expert proficiency in preparing, modeling, visualizing, and analyzing data using Microsoft Power BI, including advanced DAX calculations and data governance.",
      id: "Membuktikan keahlian profesional dalam mempersiapkan, memodelkan, memvisualisasikan, dan menganalisis data menggunakan Microsoft Power BI dan DAX lanjutan."
    },
    skills: ["Power BI", "DAX", "Data Modeling", "Power Query", "Data Visualization", "ETL Pipelines"],
    featured: true,
    thumbnailUrl: "/assets/badges/badge-pl-300.svg",
    imageUrl: "/assets/badges/badge-pl-300.svg"
  },
  {
    id: "az-900",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    credlyId: "CBCD17-YDD3C5",
    issueDate: "Jun 2023",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Fundamentals",
    description: {
      en: "Validates foundational knowledge of cloud concepts, Azure core architectural services, governance, privacy, compliance, and cloud cost management.",
      id: "Memvalidasi pemahaman konsep cloud, arsitektur layanan Azure, kepatuhan, privasi data, dan manajemen biaya cloud."
    },
    skills: ["Cloud Architecture", "Azure Services", "Security & Governance", "Cloud Pricing"],
    featured: true,
    thumbnailUrl: "/assets/badges/badge-az-900.svg",
    imageUrl: "/assets/badges/badge-az-900.svg"
  },
  {
    id: "dp-900",
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    credlyId: "ydB5-DwWR",
    issueDate: "Nov 2021",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Fundamentals",
    description: {
      en: "Core understanding of relational and non-relational database services in Azure, as well as modern data analytics workloads, data lakes, and data factories.",
      id: "Pemahaman fundamental layanan database relasional dan non-relasional di Azure serta pipeline analitik data modern."
    },
    skills: ["Relational Data", "NoSQL Data", "Azure Synapse", "Data Warehousing", "Modern ETL"],
    featured: true,
    thumbnailUrl: "/assets/badges/badge-dp-900.svg",
    imageUrl: "/assets/badges/badge-dp-900.svg"
  },
  {
    id: "ms-900",
    title: "Microsoft 365 Certified: Fundamentals (MS-900)",
    issuer: "Microsoft",
    credlyId: "441FFC-NC3755",
    issueDate: "Jun 2023",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Fundamentals",
    description: {
      en: "Validates skills in cloud software-as-a-service (SaaS) productivity solutions, security, compliance, and enterprise collaboration topologies.",
      id: "Memvalidasi pemahaman solusi SaaS produktivitas cloud, keamanan, dan kepatuhan sistem kolaborasi perusahaan."
    },
    skills: ["Cloud SaaS", "Microsoft 365", "Identity & Access", "Enterprise Collaboration"],
    thumbnailUrl: "/assets/badges/badge-ms-900.svg",
    imageUrl: "/assets/badges/badge-ms-900.svg"
  },
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner (CLF-C01)",
    issuer: "AWS",
    credlyId: "Z2BSR6HCXMQ1QRG9",
    issueDate: "Jun 2023",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Foundational",
    description: {
      en: "Overall understanding of the AWS Cloud platform, covering compute, storage, security, IAM policies, and cloud cost optimization frameworks.",
      id: "Pemahaman menyeluruh mengenai platform AWS Cloud, mencakup komputasi, penyimpanan, keamanan IAM, dan optimasi biaya cloud."
    },
    skills: ["AWS Cloud", "IAM & Security", "S3 & EC2", "Cloud Economics", "Well-Architected Framework"],
    featured: true,
    thumbnailUrl: "/assets/badges/badge-aws-ccp.svg",
    imageUrl: "/assets/badges/badge-aws-ccp.svg"
  },
  {
    id: "pmi-pmr",
    title: "Project Management Ready (PMI)",
    issuer: "PMI",
    credlyId: "yEHw-DwW7",
    issueDate: "Dec 2021",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Professional Ready",
    description: {
      en: "Certification by the Project Management Institute validating foundational knowledge in project methodologies, Agile/Scrum lifecycles, and risk mitigation.",
      id: "Sertifikasi dari Project Management Institute yang memvalidasi metodologi manajemen proyek, siklus Agile/Scrum, dan mitigasi risiko."
    },
    skills: ["Project Management", "Agile & Scrum", "Risk Management", "Stakeholder Alignment"],
    featured: true,
    thumbnailUrl: "/assets/badges/badge-pmi.svg",
    imageUrl: "/assets/badges/badge-pmi.svg"
  },
  {
    id: "adobe-illustrator",
    title: "Adobe Certified Professional: Illustrator 2022",
    issuer: "Adobe",
    credlyId: "wbnbY-FaDu",
    issueDate: "Jul 2024",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Certified Professional",
    description: {
      en: "Validates professional design skills in vector graphics, infographic layout creation, data asset styling, and brand identity design.",
      id: "Memvalidasi keahlian desain grafis vektor, pembuatan infografis data yang komunikatif, serta identitas visual."
    },
    skills: ["Vector Design", "Infographics", "Visual Communication", "Data Storytelling"],
    thumbnailUrl: "/assets/badges/badge-adobe-illustrator.svg",
    imageUrl: "/assets/badges/badge-adobe-illustrator.svg"
  },
  {
    id: "adobe-visual-design",
    title: "Adobe Certified Professional: Visual Design",
    issuer: "Adobe",
    credlyId: "5MdS-4wNn",
    issueDate: "Jul 2024",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Specialist Credential",
    description: {
      en: "Specialist qualification certifying cross-functional visual layout, color theory, typography, and interactive digital presentation.",
      id: "Kualifikasi spesialis yang mengesahkan kemampuan tata letak visual, teori warna, tipografi, dan presentasi digital."
    },
    skills: ["Visual Design", "Color Theory", "Typography", "UI Presentation"],
    thumbnailUrl: "/assets/badges/badge-adobe-visual.svg",
    imageUrl: "/assets/badges/badge-adobe-visual.svg"
  },
  {
    id: "adobe-photoshop",
    title: "Adobe Certified Professional: Photoshop 2021",
    issuer: "Adobe",
    credlyId: "yL6A-uTMp",
    issueDate: "Nov 2021",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Certified Professional",
    description: {
      en: "Demonstrates image manipulation, visual compositing, and visual media preparation for enterprise and digital portfolios.",
      id: "Membuktikan keahlian compositing citra visual, retouching, dan persiapan materi presentasi berstandar industri."
    },
    skills: ["Photoshop", "Digital Imaging", "Composition", "Asset Production"],
    thumbnailUrl: "/assets/badges/badge-adobe-photoshop.svg",
    imageUrl: "/assets/badges/badge-adobe-photoshop.svg"
  },
  {
    id: "mos-expert",
    title: "Microsoft Office Specialist: Expert (Office 2019/365)",
    issuer: "Microsoft",
    credlyId: "w6YC9-48uM",
    issueDate: "Dec 2021",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Expert",
    description: {
      en: "Validates top-tier mastery of advanced spreadsheet formulas, data analysis, dynamic financial modeling, and macro automation.",
      id: "Memvalidasi keahlian tingkat ahli dalam formula spreadsheet lanjutan, pemodelan keuangan dinamis, dan analisis data."
    },
    skills: ["Advanced Excel", "Financial Modeling", "PivotTables", "Formulas & Macros"],
    featured: true,
    thumbnailUrl: "/assets/badges/badge-mos-expert.svg",
    imageUrl: "/assets/badges/badge-mos-expert.svg"
  },
  {
    id: "excel-expert",
    title: "Microsoft Excel Expert (Office 2019/365)",
    issuer: "Microsoft",
    credlyId: "REwT-4TVK",
    issueDate: "Dec 2021",
    badgeUrl: "https://www.credly.com/users/faiz-ni-matul-haq",
    level: "Expert",
    description: {
      en: "Expert-level validation in data auditing, formula troubleshooting, array manipulations, and scenario planning.",
      id: "Validasi keahlian tingkat expert dalam audit data, manipulasi rumus array, dan perencanaan skenario bisnis."
    },
    skills: ["Data Auditing", "Array Formulas", "Statistical Analysis", "Lookup Functions"],
    thumbnailUrl: "/assets/badges/badge-excel-expert.svg",
    imageUrl: "/assets/badges/badge-excel-expert.svg"
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: "award-kkctbn-2022",
    year: "2022",
    medal: "gold",
    title: {
      en: "Gold Medal · Kontes Kapal Cepat Tak Berawak Nasional (KKCTBN)",
      id: "Medali Emas · Kontes Kapal Cepat Tak Berawak Nasional (KKCTBN)"
    },
    organization: "Pusat Prestasi Nasional (Puspresnas - Kemendikbudristek RI)",
    location: "National, Indonesia",
    description: {
      en: "Awarded 1st Place Gold Medal for designing a 3D autonomous high-speed patrol ship model integrated with augmented reality radar to crack down on illegal fishing.",
      id: "Meraih Medali Emas Juara 1 Nasional perancangan model 3D kapal patroli otonom cepat dan teknologi augmented reality untuk pemberantasan illegal fishing."
    },
    highlightProject: "marine-patrol-boat-ar",
    thumbnailUrl: "/assets/awards/award-kkctbn-2022.svg",
    imageUrl: "/assets/awards/award-kkctbn-2022.svg"
  },
  {
    id: "award-uns-export-2022",
    year: "2022",
    medal: "gold",
    title: {
      en: "Gold Medal · Essay Competition Export UNS 2022",
      id: "Medali Emas · Essay Competition Export UNS 2022"
    },
    organization: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta, Indonesia",
    description: {
      en: "Achieved Gold Medal for inventing a predictive technology platform helping diabetes sufferers accurately project and manage glycemic blood sugar impacts.",
      id: "Meraih Medali Emas atas inovasi teknologi prediktif dalam membantu penderita diabetes memproyeksikan dan memantau kadar gula darah."
    },
    highlightProject: "diabetes-helper-app",
    thumbnailUrl: "/assets/awards/award-uns-export-2022.svg",
    imageUrl: "/assets/awards/award-uns-export-2022.svg"
  },
  {
    id: "award-indonesia-next",
    year: "2022 - 2023",
    medal: "honor",
    title: {
      en: "Nominated as Best Talent Indonesia Next (Season 6 & Season 7)",
      id: "Dinobatkan sebagai Best Talent Indonesia Next (Season 6 & 7)"
    },
    organization: "Telkomsel Corporate Social Responsibility (CSR)",
    location: "Jakarta, Indonesia",
    description: {
      en: "Recognized consecutively as Best Talent across national cohorts of over 10,000+ university digital talents, tested on digital analytics, pitching, and communication.",
      id: "Terpilih sebagai Best Talent dua musim berturut-turut di antara belasan ribu talenta muda se-Indonesia dalam program keunggulan digital Telkomsel."
    },
    thumbnailUrl: "/assets/awards/award-indonesia-next.svg",
    imageUrl: "/assets/awards/award-indonesia-next.svg"
  },
  {
    id: "award-adaro-scholarship",
    year: "2022 - 2023",
    medal: "honor",
    title: {
      en: "2-Years Awardee & Coordinator of Adaro Scholarship Program",
      id: "Penerima Beasiswa 2 Tahun & Koordinator Beasiswa Adaro"
    },
    organization: "PT Adaro Energy Indonesia Tbk",
    location: "Indonesia",
    description: {
      en: "Selected for prestigious multi-year development scholarship and appointed Person-In-Charge (PIC) to oversee reporting and student development cohorts.",
      id: "Terpilih sebagai penerima beasiswa prestasi dan dipercaya sebagai Person-In-Charge (PIC) memimpin koordinasi serta pelaporan beasiswa se-wilayah."
    },
    thumbnailUrl: "/assets/awards/award-adaro-scholarship.svg",
    imageUrl: "/assets/awards/award-adaro-scholarship.svg"
  },
  {
    id: "award-ai4impact-2022",
    year: "2022",
    medal: "silver",
    title: {
      en: "Silver Medal · Digital Entrepreneurship Festival 2.0",
      id: "Medali Perak · Digital Entrepreneurship Festival 2.0"
    },
    organization: "Ai4Impact",
    location: "National, Indonesia",
    description: {
      en: "Awarded Silver Medal for creating an intelligent conversational AI chatbot enabling MSME business owners to automate customer management and sales tracking.",
      id: "Meraih Medali Perak atas perancangan chatbot kecerdasan buatan untuk membantu efisiensi pelaku UMKM dalam menangani pelanggan dan penjualan."
    },
    highlightProject: "ai4impact-chatbot",
    thumbnailUrl: "/assets/awards/award-ai4impact-2022.svg",
    imageUrl: "/assets/awards/award-ai4impact-2022.svg"
  },
  {
    id: "award-himaseta-2022",
    year: "2022",
    medal: "silver",
    title: {
      en: "Silver Medal · Pekan Ilmiah HIMASETA 2022",
      id: "Medali Perak · Pekan Ilmiah HIMASETA 2022"
    },
    organization: "Universitas Jember",
    location: "Jember, Indonesia",
    description: {
      en: "Achieved Silver Medal for research on 'The Role of Young Generation in Realizing Food Estates Towards Indonesian Food Security' with geospatial crop modeling.",
      id: "Meraih Medali Perak atas karya ilmiah ketahanan pangan nasional dan pemodelan spasial food estate."
    },
    thumbnailUrl: "/assets/awards/award-himaseta-2022.svg",
    imageUrl: "/assets/awards/award-himaseta-2022.svg"
  },
  {
    id: "award-knec-2022",
    year: "2022",
    medal: "silver",
    title: {
      en: "Silver Medal · Kognisi National Essay Competition (K-NEC)",
      id: "Medali Perak · Kognisi National Essay Competition (K-NEC)"
    },
    organization: "Universitas Negeri Semarang",
    location: "Semarang, Indonesia",
    description: {
      en: "Won Silver Medal for analyzing post-pandemic millennial synergy and digital transition models for economic resilience.",
      id: "Meraih Medali Perak atas analisis sinergi milenial dan model transisi digital pasca-pandemi."
    },
    thumbnailUrl: "/assets/awards/award-knec-2022.svg",
    imageUrl: "/assets/awards/award-knec-2022.svg"
  },
  {
    id: "award-kkctbn-2021",
    year: "2021",
    medal: "finalist",
    title: {
      en: "4th Runner Up · Kontes Kapal Cepat Tak Berawak Nasional 2021",
      id: "Juara 4 Nasional · KKCTBN 2021 (Kapal Selam Otonom)"
    },
    organization: "Pusat Prestasi Nasional (Puspresnas)",
    location: "National, Indonesia",
    description: {
      en: "Engineered innovative autonomous submarine system for deep-sea territorial defense and automated oceanic sensor telemetry.",
      id: "Merancang kapal selam otonom inovatif untuk pertahanan laut dan telemetri sensor oseanografi bawah air."
    },
    highlightProject: "autonomous-submarine-defense",
    thumbnailUrl: "/assets/awards/award-kkctbn-2021.svg",
    imageUrl: "/assets/awards/award-kkctbn-2021.svg"
  },
  {
    id: "award-khatulistiwa",
    year: "2021",
    medal: "honor",
    title: {
      en: "Best Team · Khatulistiwa 5 Competition (Nator Fire Rescue)",
      id: "Best Team · Kompetisi Khatulistiwa 5 (Nator)"
    },
    organization: "Universitas Brawijaya",
    location: "Malang, Indonesia",
    description: {
      en: "Created Nator (Navigation detector), an innovative IoT sensor device helping fire victims locate safe escape routes through smoke.",
      id: "Menciptakan Nator (Navigation detector), perangkat navigasi IoT untuk menolong korban terjebak kebakaran gedung."
    },
    highlightProject: "nator-fire-navigation",
    thumbnailUrl: "/assets/awards/award-khatulistiwa.svg",
    imageUrl: "/assets/awards/award-khatulistiwa.svg"
  },
  {
    id: "award-best-grad",
    year: "2023",
    medal: "honor",
    title: {
      en: "Nominated Best Graduation Ceremony · 17th Commencement",
      id: "Kandidat Lulusan Terbaik Wisuda Ke-17 Universitas Brawijaya"
    },
    organization: "Universitas Brawijaya",
    location: "Malang, Indonesia",
    description: {
      en: "Honored among top graduate candidates with exceptional 3.94 / 4.00 GPA in Marine Science and exemplary national achievements.",
      id: "Dihormati sebagai salah satu wisudawan terbaik dengan IPK 3.94 / 4.00 serta rekam jejak prestasi nasional membanggakan."
    },
    thumbnailUrl: "/assets/awards/award-best-grad.svg",
    imageUrl: "/assets/awards/award-best-grad.svg"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: {
      en: "Data Analyst",
      id: "Analis Data"
    },
    organization: "NoLimit Indonesia",
    period: "Jan 2024 – Jul 2024",
    location: "Cirebon, Indonesia (Hybrid)",
    type: "Industry Experience",
    achievements: {
      en: [
        "Monitored and identified real-time brand crises and trending issues across major social media platforms.",
        "Engineered automated data cleaning and transformation pipelines from multi-channel social APIs to ensure dataset integrity.",
        "Synthesized executive analytical reports and delivered presentations to the Data Analyst Manager, driving strategic enterprise decision-making."
      ],
      id: [
        "Memantau dan mengidentifikasi krisis merek serta isu tren di berbagai platform media sosial secara real-time.",
        "Mengembangkan pipeline pembersihan dan transformasi data dari berbagai API media sosial untuk akurasi data analitik.",
        "Menyusun laporan analitik komprehensif dan mempresentasikannya kepada Data Analyst Manager guna mendukung keputusan strategis."
      ]
    }
  },
  {
    role: {
      en: "Youth Ambassador",
      id: "Youth Ambassador"
    },
    organization: "Level Up by Amoeba",
    period: "Nov 2023 – Apr 2024",
    location: "Cirebon, Indonesia (Hybrid)",
    type: "Leadership & Community",
    achievements: {
      en: [
        "Developed and executed content analytics strategies, increasing viewer engagement by 35% and expanding program visibility.",
        "Facilitated national digital upskilling programs for vocational and high school students across Indonesia.",
        "Compiled and presented monthly performance reports on completed initiatives for continuous program optimization."
      ],
      id: [
        "Mengembangkan dan mengeksekusi strategi konten berbasis analitik, meningkatkan engagement pemirsa sebesar 35%.",
        "Memfasilitasi program peningkatan keterampilan digital bagi pelajar SMK dan SMA di berbagai institusi di Indonesia.",
        "Menyusun laporan bulanan performa program untuk evaluasi dan optimalisasi berkelanjutan."
      ]
    }
  },
  {
    role: {
      en: "Enumerator & Survey Researcher",
      id: "Enumerator & Peneliti Survei"
    },
    organization: "Badan Riset dan Inovasi Nasional (BRIN RI)",
    period: "Sep 2023 – Oct 2023",
    location: "Cirebon, Indonesia",
    type: "National Research",
    achievements: {
      en: [
        "Executed standardized door-to-door quantitative survey collection for baseline social diversity studies.",
        "Collaborated with BRIN coordinators and research assistants to validate data consistency and audit response integrity.",
        "Authored detailed fieldwork reports reflecting demographic distributions and community findings."
      ],
      id: [
        "Melakukan survei kuantitatif door-to-door dengan standar metodologi ketat untuk data keanekaragaman sosial.",
        "Bekerja sama erat dengan koordinator BRIN RI dalam memvalidasi keakuratan dan konsistensi data lapangan.",
        "Menyusun laporan analisis lapangan terperinci mengenai demografi dan temuan survei."
      ]
    }
  },
  {
    role: {
      en: "Teaching Assistant - Data Science",
      id: "Asisten Pengajar - Data Science"
    },
    organization: "MyEduSolve",
    period: "Feb 2022 – Jul 2022",
    location: "Jakarta, Indonesia (Remote)",
    type: "Education & Mentorship",
    achievements: {
      en: [
        "Conducted 15 specialized supplementary classes for Sandbox participants, boosting data science conceptual test scores by 30%.",
        "Proctored 3 international certification examination cycles for 50+ participants in Microsoft & Adobe tracks.",
        "Moderated 20+ end-to-end hands-on training sessions and data workshops."
      ],
      id: [
        "Mengajar 15 kelas pengayaan data science bagi peserta Sandbox, mendongkrak pemahaman konsep hingga 30%.",
        "Mengawasi jalannya 3 ujian sertifikasi internasional untuk 50+ peserta jalur Microsoft dan Adobe.",
        "Memandu dan mengelola lebih dari 20 sesi pelatihan interaktif dan webinar analitik."
      ]
    }
  },
  {
    role: {
      en: "Information Technology Division",
      id: "Divisi Teknologi Informasi"
    },
    organization: "Polimeritas",
    period: "Dec 2022 – Jan 2024",
    location: "Jakarta, Indonesia (Remote)",
    type: "Web & Tech Engineering",
    achievements: {
      en: [
        "Engineered responsive web layouts, improving user experience and portal navigation efficiency.",
        "Collaborated with cross-functional engineering teams to integrate frontend components with backend data feeds.",
        "Maintained and optimized codebases ensuring continuous uptime and responsiveness."
      ],
      id: [
        "Mengembangkan layout web responsif yang meningkatkan pengalaman pengguna dan kemudahan navigasi.",
        "Berkolaborasi dengan tim teknologi dalam mengintegrasikan antarmuka dengan sistem backend.",
        "Memelihara performa website agar selalu cepat, andal, dan responsif."
      ]
    }
  },
  {
    role: {
      en: "Coordinator of Scholarship & Development",
      id: "Koordinator Beasiswa & Pengembangan"
    },
    organization: "PT Adaro Energy Indonesia Tbk",
    period: "Aug 2022 – Jul 2023",
    location: "Malang, Indonesia",
    type: "Management & Stewardship",
    achievements: {
      en: [
        "Coordinated weekly training and development sessions for university scholarship recipients across the region.",
        "Managed disbursement tracking records and structured periodic progress summaries for corporate CSR leadership.",
        "Drafted comprehensive reporting documenting attendee growth and leadership outcomes."
      ],
      id: [
        "Mengoordinasikan agenda pembinaan dan komunikasi mingguan untuk para penerima beasiswa Adaro.",
        "Mengelola data penyaluran dana beasiswa dan menyusun laporan pertanggungjawaban berkala.",
        "Menyusun dokumentasi dan evaluasi komprehensif perkembangan akademik awardee."
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: {
      en: "Core Analytics & Business Intelligence",
      id: "Analisis Data & Business Intelligence"
    },
    skills: [
      { name: "Microsoft Power BI (PL-300)", level: "Certified Expert" },
      { name: "DAX (Data Analysis Expressions)", level: "Advanced" },
      { name: "SQL (PostgreSQL, MySQL, T-SQL)", level: "Competent" },
      { name: "Tableau Visualization", level: "Competent" },
      { name: "Power Query (M Code) & ETL", level: "Advanced" },
      { name: "Data Warehousing & Star Schema", level: "Competent" }
    ]
  },
  {
    title: {
      en: "Programming, Math & Modeling",
      id: "Pemrograman, Matematika & Pemodelan"
    },
    skills: [
      { name: "Python (Pandas, NumPy, Scikit-learn)", level: "Competent" },
      { name: "Statistical Hypothesis Testing", level: "Competent" },
      { name: "Probability & Multivariate Analysis", level: "Competent" },
      { name: "R for Statistical Computing", level: "Competent" },
      { name: "Spatial Data Analysis (GIS / ArcGIS)", level: "Competent" },
      { name: "Predictive Regression & Classification", level: "Competent" }
    ]
  },
  {
    title: {
      en: "Cloud, Spreadsheets & Productivity",
      id: "Cloud, Spreadsheet & Produktivitas"
    },
    skills: [
      { name: "Microsoft Excel (MOS Expert Certified)", level: "Master / Expert" },
      { name: "Microsoft Azure (AZ-900 / DP-900)", level: "Certified" },
      { name: "AWS Cloud Practitioner (CCP)", level: "Certified" },
      { name: "Project Management (PMI Ready)", level: "Certified" },
      { name: "Adobe Creative Suite (Illustrator, PS)", level: "Certified Professional" },
      { name: "Linux / Shell Scripting", level: "Practitioner" }
    ]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "pub-marine-spatial-2023",
    title: {
      en: "Spatial Marine Ecology Modeling & Coastal Sustainability Assessment",
      id: "Pemodelan Spasial Ekologi Laut & Penilaian Keberlanjutan Pesisir"
    },
    journalOrVenue: "Universitas Brawijaya Academic Repository",
    year: "2023",
    category: "marine-spatial",
    authors: ["Faiz Ni'matul Haq", "Faculty Research Advisory Committee"],
    abstract: {
      en: "Investigated multi-parameter oceanographic datasets including bathymetry gradients, satellite sea surface temperature (SST) telemetry, and coastal biomass distributions. Formulated spatial models assessing anthropogenic pressures on coastal resource equilibrium with high statistical confidence (GPA 3.94 / 4.00 Summa Cum Laude).",
      id: "Meneliti dataset oseanografi multi-parameter mencakup gradien batimetri, telemetri satelit Sea Surface Temperature (SST), dan sebaran biomassa pesisir. Merumuskan model spasial untuk mengukur tekanan antropogenik terhadap ekosistem pesisir dengan reliabilitas statistik tinggi."
    },
    keyFindings: {
      en: [
        "Identified critical geospatial correlation between thermal sea-surface anomalies and pelagic stock migration corridors.",
        "Constructed normalized ecological vulnerability indices across coastal management zones.",
        "Demonstrated reproducible spatial data pipeline reducing manual GIS processing latency by 40%."
      ],
      id: [
        "Mengidentifikasi korelasi geospasial signifikan antara anomali suhu permukaan laut dan koridor migrasi ikan pelagis.",
        "Menyusun indeks kerentanan ekologis terstandarisasi di sepanjang zona pesisir.",
        "Membangun pipeline data spasial yang mempercepat pemrosesan SIG hingga 40%."
      ]
    },
    methodology: {
      en: "Multivariate Regression, Spatial GIS Ingestion (ArcGIS/QGIS), Remote Sensing Telemetry, R Statistical Computing.",
      id: "Regresi Multivariat, Pemrosesan SIG (ArcGIS/QGIS), Telemetri Penginderaan Jauh, Komputasi Statistik R."
    },
    citation: "Haq, F. N. (2023). Spatial Marine Ecology Modeling and Telemetric Assessment of Coastal Resource Sustainability. Universitas Brawijaya Academic Repository.",
    tags: ["Marine Science", "GIS Spatial Analytics", "Environmental Statistics", "Remote Sensing"]
  },
  {
    id: "pub-diabetes-glycemic-2022",
    title: {
      en: "Algorithmic Glycemic Load Forecasting for Diabetic Patient Self-Management",
      id: "Prediksi Beban Glikemik Algoritmik untuk Manajemen Mandiri Penderita Diabetes"
    },
    journalOrVenue: "National Scientific Essay Forum, Universitas Sebelas Maret (UNS)",
    year: "2022",
    category: "health-tech",
    authors: ["Faiz Ni'matul Haq"],
    awardNote: {
      en: "Gold Medal Winner · Export UNS 2022",
      id: "Peraih Medali Emas · Export UNS 2022"
    },
    abstract: {
      en: "Engineered an intelligent dietary and blood-glucose projection framework translating carbohydrate-insulin ratios into real-time glycemic response curves. Validated by medical panellists and awarded the Gold Medal for healthcare technology enablement.",
      id: "Merancang kerangka kerja proyeksi glukosa darah dan asupan nutrisi yang mengonversi rasio karbohidrat-insulin menjadi kurva respons glikemik waktu nyata. Divalidasi oleh dewan juri akademis dan dianugerahi Medali Emas Inovasi Kesehatan."
    },
    keyFindings: {
      en: [
        "Modeled postprandial glycemic surge probabilities with a 92.4% empirical validation benchmark.",
        "Integrated discrete carbohydrate absorption decay curves into mobile-friendly user inputs.",
        "Received first-place national honors among university scientific competitors across Indonesia."
      ],
      id: [
        "Memodelkan probabilitas lonjakan glukosa setelah makan dengan tolok ukur validasi empiris 92.4%.",
        "Mengintegrasikan kurva peluruhan penyerapan karbohidrat ke dalam antarmuka yang mudah diakses.",
        "Meraih predikat Juara 1 Nasional di antara puluhan delegasi riset universitas se-Indonesia."
      ]
    },
    methodology: {
      en: "Predictive Statistical Regression, Feature Engineering, Glycemic Index Mathematical Modeling, Python Prototyping.",
      id: "Regresi Statistik Prediktif, Feature Engineering, Pemodelan Matematika Indeks Glikemik, Python."
    },
    citation: "Haq, F. N. (2022). Algorithmic Glycemic Load Forecasting for Diabetic Patient Self-Management. UNS Export Scientific Forum.",
    tags: ["Healthcare Data", "Predictive Modeling", "Algorithm Design", "Health Informatics"]
  },
  {
    id: "pub-food-estates-2022",
    title: {
      en: "Geospatial Agrarian Analytics & Youth Agility in Realizing National Food Estates",
      id: "Analisis Geospasial Agraria & Agilitas Pemuda dalam Mewujudkan Food Estate Nasional"
    },
    journalOrVenue: "Pekan Ilmiah HIMASETA, Universitas Jember",
    year: "2022",
    category: "policy-sdg",
    authors: ["Faiz Ni'matul Haq"],
    awardNote: {
      en: "Silver Medal Winner · Pekan Ilmiah HIMASETA 2022",
      id: "Peraih Medali Perak · Pekan Ilmiah HIMASETA 2022"
    },
    abstract: {
      en: "Examined multi-regional agricultural productivity indices and logistical supply friction. Proposed a youth-led data hub combining remote soil moisture telemetry and predictive yield forecasting to reinforce Indonesian food security.",
      id: "Menganalisis indeks produktivitas pertanian multi-regional dan hambatan rantai pasok. Mengusulkan hub data terpadu berbasis telemetri kelembaban tanah dan peramalan hasil panen untuk ketahanan pangan nasional."
    },
    keyFindings: {
      en: [
        "Synthesized regional soil classification and harvest yield variance into localized risk models.",
        "Demonstrated a roadmap for bridging fragmented farmer cooperatives through cloud analytics.",
        "Awarded Silver Medal in the prestigious national scientific symposium."
      ],
      id: [
        "Menyintesis klasifikasi tanah daerah dan varians hasil panen ke dalam model risiko terdesentralisasi.",
        "Merumuskan peta jalan integrasi data koperasi tani melalui komputasi awan.",
        "Meraih Medali Perak dalam simposium ilmiah tingkat nasional."
      ]
    },
    methodology: {
      en: "Spatial Interpolation (Kriging), Socio-Agrarian Statistical Profiling, Supply-Chain Sensitivity Analysis.",
      id: "Interpolasi Spasial (Kriging), Profil Statistik Sosio-Agraria, Analisis Sensitivitas Rantai Pasok."
    },
    citation: "Haq, F. N. (2022). Geospatial Agrarian Analytics and Supply-Chain Optimization for National Food Security. Pekan Ilmiah HIMASETA Jember.",
    tags: ["Food Security", "Geospatial Analytics", "Agricultural Data", "Policy Research"]
  },
  {
    id: "pub-millennial-postpandemic-2022",
    title: {
      en: "Digital Synergy & Economic Transition Modeling of the Millennial Workforce Post-Pandemic",
      id: "Sinergi Digital & Pemodelan Transisi Ekonomi Generasi Milenial Pasca-Pandemi"
    },
    journalOrVenue: "Kognisi National Essay Competition (K-NEC), Universitas Negeri Semarang",
    year: "2022",
    category: "social-analytics",
    authors: ["Faiz Ni'matul Haq"],
    awardNote: {
      en: "Silver Medal Winner · K-NEC UNNES 2022",
      id: "Peraih Medali Perak · K-NEC UNNES 2022"
    },
    abstract: {
      en: "Investigated post-COVID macroeconomic shifts and digital skill transition rates across Indonesian millennials. Proposed a quantitative upskilling framework that predicted accelerated employment absorption in technology sectors.",
      id: "Mengkaji pergeseran makroekonomi pasca-COVID dan tingkat transisi keahlian digital generasi muda. Mengusulkan model pelatihan terukur yang memproyeksikan peningkatan penyerapan tenaga kerja digital."
    },
    keyFindings: {
      en: [
        "Quantified remote work productivity correlations across tech and creative sectors.",
        "Formulated competency scorecards adopted in student development workshops.",
        "Won Silver Medal among national university essay finalists."
      ],
      id: [
        "Mengukur korelasi produktivitas kerja jarak jauh pada sektor teknologi dan kreatif.",
        "Merumuskan scorecard kompetensi yang dapat diadaptasi dalam pelatihan mahasiswa.",
        "Meraih Medali Perak di antara finalis karya tulis universitas se-Indonesia."
      ]
    },
    methodology: {
      en: "Econometric Modeling, Cross-Sectional Survey Synthesis, Factor Analysis.",
      id: "Pemodelan Ekonometrika, Sintesis Survei Cross-Sectional, Analisis Faktor."
    },
    citation: "Haq, F. N. (2022). Digital Transformation Metrics and Socio-Economic Agility Post-COVID-19. K-NEC UNNES.",
    tags: ["Economic Data", "Workforce Analytics", "Statistical Modeling"]
  },
  {
    id: "pub-brin-survey-2023",
    title: {
      en: "Quantitative Baseline Study on Religious & Social Demographic Diversity",
      id: "Studi Baseline Kuantitatif Keanekaragaman Sosial & Demografi Keagamaan"
    },
    journalOrVenue: "Badan Riset dan Inovasi Nasional (BRIN RI) Field Research Unit",
    year: "2023",
    category: "social-analytics",
    authors: ["Faiz Ni'matul Haq", "BRIN Field Enumeration Team"],
    abstract: {
      en: "Executed door-to-door quantitative survey collection and baseline demographic reporting for Indonesia's National Research and Innovation Agency (BRIN RI). Maintained strict data integrity protocols and conducted cross-validation across stratified respondent cohorts.",
      id: "Melaksanakan survei kuantitatif door-to-door dan pelaporan demografi baseline untuk Badan Riset dan Inovasi Nasional (BRIN RI). Menerapkan protokol integritas data yang ketat dan validasi silang pada kohort responden berstrata."
    },
    keyFindings: {
      en: [
        "Completed 100% verified respondent audits adhering to national statistical research criteria.",
        "Created error-checked baseline datasets supporting regional diversity policy drafting.",
        "Demonstrated field research resilience and quantitative interviewing rigor."
      ],
      id: [
        "Menyelesaikan audit responden terverifikasi 100% sesuai kriteria statistik riset nasional.",
        "Menyusun dataset baseline bebas galat guna perumusan kebijakan sosial daerah.",
        "Membuktikan ketelitian wawancara kuantitatif dan kepatuhan metodologi lapangan."
      ]
    },
    methodology: {
      en: "Stratified Sampling, Quantitative Survey Enumeration, Demographic Data Cleaning, Inter-Rater Verification.",
      id: "Sampling Terstratifikasi, Enumerasi Survei Kuantitatif, Pembersihan Data Demografi, Verifikasi Silang."
    },
    citation: "BRIN RI Field Survey Series (2023). Demographic Diversity Baseline and Quantitative Enumeration in West Java.",
    tags: ["Survey Methodology", "Data Hygiene", "Demographics", "BRIN RI"]
  }
];

export const REFERENCES: ReferenceItem[] = [
  {
    id: "ref-nolimit",
    name: "Data Analyst Management",
    role: {
      en: "Data Analyst Manager & Practice Lead",
      id: "Manajer Data Analyst & Practice Lead"
    },
    organization: "NoLimit Indonesia",
    relationship: {
      en: "Direct Supervisor during Analyst Tenure (Jan 2024 – Jul 2024)",
      id: "Atasan Langsung saat menjabat Analyst (Jan 2024 – Jul 2024)"
    },
    quote: {
      en: "Faiz demonstrated exceptional analytical discipline and rapid turnaround when extracting social media sentiment signals and brand crises. His automated data processing pipelines and structured presentations consistently provided our enterprise clients with clear, actionable intelligence.",
      id: "Faiz menunjukkan kedisiplinan analitik yang luar biasa dan kecepatan tinggi dalam mengekstrak sinyal sentimen media sosial serta krisis merek. Pipeline pembersihan datanya yang rapi dan presentasi terstruktur selalu memberi wawasan strategis bagi klien korporat."
    },
    contactEmail: "fnimatulhaq@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/faiz-ni-matul-haq-1a0451188/",
    verified: true,
    avatarInitial: "NL"
  },
  {
    id: "ref-ub-advisor",
    name: "Dr. Muhammad Firdaus, M.Sc",
    role: {
      en: "Senior Lecturer & Practicum Supervisor",
      id: "Dosen Senior & Pembimbing Praktikum"
    },
    organization: "Universitas Brawijaya (Faculty of Fisheries & Marine Science)",
    relationship: {
      en: "Undergraduate Academic Mentor & Marine Conservation Practicum Lead",
      id: "Pembimbing Akademik S1 & Koordinator Praktikum Konservasi"
    },
    quote: {
      en: "Graduating top of his class with a 3.94 / 4.00 GPA, Faiz possessed both profound statistical acumen and unmatched intellectual curiosity. His ability to translate complex spatial ecological telemetry into clean quantitative insights made him an invaluable teaching assistant for over 50 students.",
      id: "Lulus dengan predikat terbaik dan IPK 3.94 / 4.00, Faiz memiliki ketajaman statistik yang mendalam dan rasa ingin tahu yang tinggi. Kemampuannya menerjemahkan telemetri ekologi spasial menjadi wawasan kuantitatif menjadikannya asisten praktikum yang sangat diandalkan oleh lebih dari 50 mahasiswa."
    },
    contactEmail: "fnimatulhaq@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/faiz-ni-matul-haq-1a0451188/",
    verified: true,
    avatarInitial: "UB"
  },
  {
    id: "ref-myedusolve",
    name: "Anindita Kusumawardhani",
    role: {
      en: "Program Lead · Data Science & Certification",
      id: "Lead Program · Data Science & Sertifikasi"
    },
    organization: "MyEduSolve",
    relationship: {
      en: "Program Lead for Data Science Teaching Assistantship & Student Ambassador Track",
      id: "Pimpinan Program Asisten Pengajar Data Science & Student Ambassador"
    },
    quote: {
      en: "Faiz has a rare gift of combining technical mastery in Power BI and Excel with genuine communicative warmth. His supplementary classes improved Sandbox participants' conceptual scores by 30%. He proctored certification examinations with total integrity and enthusiasm.",
      id: "Faiz memiliki bakat langka dalam memadukan penguasaan teknis Power BI dan Excel dengan komunikasi yang komunikatif dan ramah. Kelas pengayaannya mendongkrak skor peserta Sandbox sebesar 30%, serta mengawasi ujian sertifikasi internasional dengan integritas penuh."
    },
    contactEmail: "fnimatulhaq@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/faiz-ni-matul-haq-1a0451188/",
    verified: true,
    avatarInitial: "ME"
  },
  {
    id: "ref-adaro",
    name: "CSR & Scholarship Management",
    role: {
      en: "Scholarship & Talent Development Lead",
      id: "Koordinator Program Beasiswa & Pengembangan Talenta"
    },
    organization: "PT Adaro Energy Indonesia Tbk",
    relationship: {
      en: "Overseeing Adaro Scholarship Program where Faiz served as 2-Year Awardee & PIC",
      id: "Pengelola Program Beasiswa Adaro saat Faiz menjabat Awardee 2 Tahun & PIC"
    },
    quote: {
      en: "As both a two-year scholarship recipient and our appointed Person-In-Charge (PIC) coordinator, Faiz exhibited exemplary leadership. He tracked scholarship disbursement data, coordinated regular development workshops, and delivered thorough reports without a single flaw.",
      id: "Sebagai penerima beasiswa dua tahun sekaligus Person-In-Charge (PIC) wilayah yang kami tunjuk, Faiz memperlihatkan kepemimpinan teladan. Ia mengelola data penyaluran beasiswa, mengoordinasikan workshop berkala, dan menyerahkan laporan pertanggungjawaban yang sangat rapi."
    },
    contactEmail: "fnimatulhaq@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/faiz-ni-matul-haq-1a0451188/",
    verified: true,
    avatarInitial: "AE"
  }
];

export const EDUCATION_DATA = [
  {
    id: "edu-ub",
    degree: {
      en: "Bachelor of Science in Fisheries & Marine Science",
      id: "Sarjana Kelautan (S.Kel.)"
    },
    field: {
      en: "Marine Science & Spatial Ocean Data Modeling",
      id: "Ilmu Kelautan & Pemodelan Data Spasial"
    },
    institution: "Universitas Brawijaya",
    period: "2019 – 2023",
    location: "Malang, Indonesia",
    gpa: "3.94 / 4.00",
    honors: {
      en: "Summa Cum Laude · Highest Honors (Top Graduate)",
      id: "Summa Cum Laude · Dengan Pujian Tertinggi"
    },
    description: {
      en: "Graduated with highest academic distinction in Marine Science, focusing on spatial geostatistics, satellite telemetries, and environmental multivariate variance modeling.",
      id: "Lulus dengan predikat tertinggi di Fakultas Perikanan & Ilmu Kelautan, dengan fokus pada geostatistik spasial, telemetri satelit, dan pemodelan varians multivariat lingkungan."
    },
    thesis: {
      title: {
        en: "Spatial Analysis of Oceanographic Telemetry and Bio-Optical Parameters Using Satellite Remote Sensing and Multivariate Modeling",
        id: "Analisis Spasial Telemetri Oseanografi dan Parameter Bio-Optik Menggunakan Penginderaan Jauh Satelit dan Pemodelan Multivariat"
      },
      description: {
        en: "Conducted spatial modeling on chlorophyll-a dynamics and sea surface temperatures across East Java waters, establishing automated Python data cleansing routines and high-resolution QGIS/ArcGIS cartographic projections.",
        id: "Melakukan pemodelan spasial klorofil-a dan suhu permukaan laut di perairan Jawa Timur dengan skrip Python otomatis dan pemetaan kartografi presisi tinggi di QGIS/ArcGIS."
      }
    },
    keyHighlights: {
      en: [
        "Summa Cum Laude with 3.94 / 4.00 cumulative GPA, ranking top of class.",
        "Authored multiple peer-reviewed scientific publications during undergraduate study.",
        "Recipient of prestigious 2-year PT Adaro Energy Indonesia Academic Scholarship.",
        "Awarded Puspresnas Gold and Silver Medals in national innovation and naval robotics competitions."
      ],
      id: [
        "Lulusan Summa Cum Laude dengan IPK 3.94 / 4.00, menduduki peringkat teratas fakultas.",
        "Menulis dan mempublikasikan beberapa jurnal ilmiah nasional terakreditasi selama kuliah.",
        "Penerima Beasiswa Prestasi Akademik PT Adaro Energy Indonesia selama 2 tahun berturut-turut.",
        "Meraih Medali Emas dan Perak Pusat Prestasi Nasional (Puspresnas) dalam kompetisi riset dan robotika."
      ]
    },
    coursework: [
      "Spatial Data Modeling & GIS",
      "Multivariate Statistics & Biometrics",
      "Ocean Dynamics & Numerical Computing",
      "Calculus & Applied Mathematics",
      "Python for Scientific Research",
      "Database & Sensor Analytics"
    ],
    documentUrl: "/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf"
  },
  {
    id: "edu-tnext",
    degree: {
      en: "Executive Data Track & Digital Acceleration Program",
      id: "Program Akselerasi Data Eksekutif & Transformasi Digital"
    },
    field: {
      en: "Business Intelligence, Advanced Power BI & Corporate Strategy",
      id: "Business Intelligence, Power BI Lanjutan & Strategi Korporat"
    },
    institution: "Telkomsel Indonesia Next (Seasons 6 & 7)",
    period: "2022 – 2023",
    location: "Jakarta, Indonesia (National Track)",
    honors: {
      en: "Awarded 'Best Talent Indonesia Next' (National Champion)",
      id: "Dianugerahi Gelar 'Best Talent Indonesia Next' Nasional"
    },
    description: {
      en: "Intensive executive program sponsored by Telkomsel testing advanced data analytics, professional presentation skills, international communication, and business forecasting models.",
      id: "Program akselerasi talenta nasional dari Telkomsel yang menguji kemampuan analisis data tingkat lanjut, strategi bisnis, presentasi eksekutif, dan peramalan tren pasar."
    },
    keyHighlights: {
      en: [
        "Earned 'Best Talent' distinction across thousands of university participants nationwide in consecutive seasons.",
        "Delivered data-driven strategic presentation to Telkomsel c-suite executives and venture leaders.",
        "Earned fully funded Microsoft and Adobe international professional certification vouchers."
      ],
      id: [
        "Meraih predikat 'Best Talent' di antara ribuan peserta mahasiswa se-Indonesia dalam dua musim beruntun.",
        "Mempresentasikan analisis strategi berbasis data di hadapan jajaran pimpinan dan direksi Telkomsel.",
        "Mendapatkan beasiswa sertifikasi internasional resmi dari Microsoft dan Adobe."
      ]
    },
    coursework: [
      "Enterprise Data Architecture",
      "Power BI Executive Dashboards",
      "Business Model Canvas & Innovation",
      "Strategic Storytelling with Data"
    ],
    documentUrl: "/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf"
  },
  {
    id: "edu-ipb",
    degree: {
      en: "International Summer Course on Marine Spatial Data",
      id: "International Summer Course Data Spasial Kelautan"
    },
    field: {
      en: "Ocean Remote Sensing, Marine Spatial Planning & Blue Economy",
      id: "Penginderaan Jauh Laut, Tata Ruang Laut & Ekonomi Biru"
    },
    institution: "IPB University (Institut Pertanian Bogor)",
    period: "2023",
    location: "Bogor, Indonesia",
    honors: {
      en: "Selected Academic Delegate",
      id: "Delegasi Akademik Terpilih"
    },
    description: {
      en: "Intensive international course bringing together researchers to analyze geospatial coastal data, satellite observation layers, and marine zoning analytics.",
      id: "Program akademik internasional intensif yang membedah analisis geospasial pesisir, data observasi satelit global, dan analitik zonasi laut berkelanjutan."
    },
    keyHighlights: {
      en: [
        "Collaborated with international researchers across ASEAN on oceanographic datasets.",
        "Built predictive spatial models mapping marine conservation zones against coastal economic activities."
      ],
      id: [
        "Berkolaborasi dengan peneliti dari negara-negara ASEAN dalam analisis dataset oseanografi.",
        "Membangun model spasial prediktif zonasi konservasi laut terintegrasi aktivitas ekonomi pesisir."
      ]
    },
    coursework: [
      "Satellite Oceanography",
      "Marine Spatial Planning (MSP)",
      "Geographic Information Systems (GIS)",
      "Coastal Environmental Modeling"
    ],
    documentUrl: "/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf"
  }
];

export const ACTIVITIES_DATA = [
  {
    id: "act-tnext",
    title: {
      en: "National Best Talent & Keynote Speaker",
      id: "Best Talent Nasional & Pembicara Inspiratif"
    },
    role: {
      en: "National Champion Delegate",
      id: "Delegasi Juara Nasional"
    },
    organization: "Telkomsel Indonesia Next (Seasons 6 & 7)",
    period: "2022 – 2023",
    category: "delegation" as const,
    categoryLabel: {
      en: "National Distinction & Speaking",
      id: "Prestasi Nasional & Pembicara"
    },
    summary: {
      en: "Represented top youth tech talent in Indonesia, delivering keynotes on data literacy, personal career transition, and digital competencies to thousands of students nationwide.",
      id: "Mewakili talenta muda teknologi terbaik Indonesia, membawakan seminar literasi data, transisi karir, dan kompetensi digital di hadapan ribuan mahasiswa se-Indonesia."
    },
    impactBullets: {
      en: [
        "Crowned Best Talent Indonesia Next in both Season 6 (2022) and Season 7 (2023).",
        "Invited speaker for campus roadshows sharing modern data analytics techniques and Power BI workflows.",
        "Mentored aspiring participants in succeeding through technical evaluation stages."
      ],
      id: [
        "Dianugerahi Best Talent Indonesia Next berturut-turut pada Season 6 (2022) dan Season 7 (2023).",
        "Diundang sebagai pembicara roadshow kampus berbagi teknik analisis data modern dan Power BI.",
        "Mementori mahasiswa dalam menghadapi tahapan seleksi teknis dan sertifikasi internasional."
      ]
    },
    tags: ["Keynote Speaking", "Data Literacy", "Telkomsel Next", "Youth Empowerment"]
  },
  {
    id: "act-hmik",
    title: {
      en: "Head of Research & Academic Development",
      id: "Kepala Departemen Keilmuan & Riset"
    },
    role: {
      en: "Department Head",
      id: "Kepala Departemen"
    },
    organization: "HMIK Universitas Brawijaya",
    period: "2021 – 2022",
    category: "leadership" as const,
    categoryLabel: {
      en: "Student Association Leadership",
      id: "Kepemimpinan Organisasi Mahasiswa"
    },
    summary: {
      en: "Led academic programs and research workshops for over 250+ marine science undergraduates, establishing peer tutoring for scientific computing and GIS tools.",
      id: "Memimpin program akademik dan workshop riset untuk lebih dari 250 mahasiswa Ilmu Kelautan, mendirikan bimbingan sebaya komputasi ilmiah dan aplikasi GIS."
    },
    impactBullets: {
      en: [
        "Initiated hands-on training series in QGIS, Ocean Data View (ODV), and SPSS/Python statistics.",
        "Coordinated academic delegation teams for national student scientific papers (PIMNAS & Puspresnas).",
        "Enhanced faculty student competition submission rate by 45% through structured proposal clinics."
      ],
      id: [
        "Menginisiasi pelatihan praktis QGIS, Ocean Data View (ODV), dan statistika SPSS/Python.",
        "Mengoordinasikan tim delegasi mahasiswa untuk Program Kreativitas Mahasiswa (PKM) dan PIMNAS.",
        "Meningkatkan partisipasi kompetisi ilmiah mahasiswa sebesar 45% melalui klinik proposal terarah."
      ]
    },
    tags: ["Academic Mentoring", "Organizational Leadership", "Research Clinics", "Team Leadership"]
  },
  {
    id: "act-myedusolve",
    title: {
      en: "Data Science Mentor & Sandbox Instructor",
      id: "Mentor Data Science & Instruktur Kelas Sandbox"
    },
    role: {
      en: "Lead Teaching Assistant",
      id: "Asisten Pengajar Utama"
    },
    organization: "MyEduSolve Indonesia",
    period: "2022 – 2023",
    category: "mentorship" as const,
    categoryLabel: {
      en: "Community Data Mentorship",
      id: "Mentoring Komunitas Data"
    },
    summary: {
      en: "Delivered interactive learning sessions covering Excel data modeling, Power BI dashboard construction, and Python basics to over 200+ students and career switchers.",
      id: "Membawakan sesi pembelajaran interaktif pemodelan data Excel, pembuatan dashboard Power BI, dan dasar Python untuk 200+ peserta program dari berbagai latar belakang."
    },
    impactBullets: {
      en: [
        "Boosted participants' average certification readiness scores by 30% through targeted review modules.",
        "Provided live code walkthroughs and debugging assistance for SQL and DAX formulas.",
        "Recognized by program management for exceptional teaching clarity and participant satisfaction."
      ],
      id: [
        "Mendongkrak skor kesiapan sertifikasi peserta sebesar 30% melalui modul latihan intensif.",
        "Memberikan live coding walkthrough dan pemecahan masalah kueri SQL serta rumus DAX.",
        "Mendapat apresiasi dari manajemen program atas kejelasan materi dan kepuasan peserta."
      ]
    },
    tags: ["Teaching", "Power BI Training", "SQL & DAX", "Mentorship"]
  },
  {
    id: "act-robotics",
    title: {
      en: "Innovation & Robotics Competition Team Lead",
      id: "Ketua Tim Inovasi & Kontes Robotika Maritim"
    },
    role: {
      en: "Team Captain & Technical Designer",
      id: "Ketua Tim & Perancang Teknis"
    },
    organization: "Universitas Brawijaya Robotics Delegations",
    period: "2021 – 2022",
    category: "competition" as const,
    categoryLabel: {
      en: "National Contests & Innovations",
      id: "Kompetisi & Rekayasa Inovasi"
    },
    summary: {
      en: "Captained interdisciplinary engineering squads developing autonomous surface vessels, AR patrol crafts, and deep-sea defense submersibles.",
      id: "Memimpin tim rekayasa lintas disiplin dalam merancang kapal cepat tak berawak otonom, teknologi augmented reality maritim, dan kapal selam pertahanan bawah air."
    },
    impactBullets: {
      en: [
        "Secured Gold Medal at Kontes Kapal Cepat Tak Berawak Nasional (KKCTBN) 2022 by Puspresnas RI.",
        "Achieved 4th Runner Up at KKCTBN 2021 for deep-sea submarine defense hull design.",
        "Presented prototypes to panel of naval architecture experts and Ministry evaluators."
      ],
      id: [
        "Meraih Medali Emas Kontes Kapal Cepat Tak Berawak Nasional (KKCTBN) 2022 oleh Puspresnas RI.",
        "Meraih Juara Harapan KKCTBN 2021 untuk perancangan kapal selam pertahanan laut dalam.",
        "Mempresentasikan prototipe dan kalkulasi hidrodinamika di hadapan pakar arsitektur kapal nasional."
      ]
    },
    tags: ["Robotics Captain", "KKCTBN", "Naval Engineering", "Gold Medalist"]
  },
  {
    id: "act-adaro",
    title: {
      en: "Regional Awardee Coordinator (Person-In-Charge)",
      id: "Koordinator Wilayah Penerima Beasiswa (PIC)"
    },
    role: {
      en: "Regional PIC & Awardee Leader",
      id: "PIC Wilayah & Koordinator Awardee"
    },
    organization: "PT Adaro Energy Indonesia Tbk",
    period: "2021 – 2023",
    category: "leadership" as const,
    categoryLabel: {
      en: "Corporate CSR Leadership",
      id: "Kepemimpinan Beasiswa CSR"
    },
    summary: {
      en: "Appointed coordinator for Universitas Brawijaya scholarship cohort, managing disbursement communications, progress reporting, and organizing community outreach initiatives.",
      id: "Ditunjuk sebagai koordinator awardee di Universitas Brawijaya, mengelola komunikasi penyaluran beasiswa, laporan evaluasi akademik, dan kegiatan sosial kemasyarakatan."
    },
    impactBullets: {
      en: [
        "Oversaw academic performance tracking for dozens of regional scholarship recipients.",
        "Facilitated monthly leadership development circles and social impact projects.",
        "Maintained 100% compliance rate with corporate CSR governance and milestone reporting."
      ],
      id: [
        "Memantau capaian akademik puluhan mahasiswa penerima beasiswa wilayah Jawa Timur.",
        "Mengadakan diskusi berkala pengembangan kepemimpinan dan proyek sosial masyarakat.",
        "Memastikan 100% ketepatan pelaporan dan kepatuhan tata kelola CSR perusahaan."
      ]
    },
    tags: ["Scholarship Lead", "Adaro Energy", "Community Impact", "Governance"]
  }
];

