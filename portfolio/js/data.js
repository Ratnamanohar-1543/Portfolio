/* =========================================================
   PORTFOLIO DATA
   Edit this file to update the site. Every item comes from
   the resume and certificates provided by Manohar.
   To add a certificate: drop the image into assets/certificates/
   and add one object to the CERTIFICATES array below.
   ========================================================= */

const PROFILE = {
  name: "Namburi Naga Venkata Ratna Manohar",
  shortName: "Manohar",
  role: "Full Stack Developer",
  location: "Andhra Pradesh, India",
  email: "ratnamanohar036@gmail.com",
  phone: "8919918942",
  linkedin: "https://www.linkedin.com/in/ratnamanohar",
  github: "https://github.com/Ratnamanohar-1543",
  photo: "assets/profile/manohar-profile.jpg",
  resumePdf: "assets/resume/Manohar_Naga_Venkata_Ratna_Manohar_Resume.pdf",
  resumePreview: "assets/resume/resume-preview.jpg",
  intro:
    "B.Tech Information Technology student building database-driven web applications with Python and Django. I have shipped a College Fee Management System and an Eco Campus Management System, and deployed a Django app on AWS EC2 with RDS during my cloud and DevOps internship.",
  languages: [
    { name: "Telugu", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
    { name: "Hindi", level: "Basic / conversational" }
  ]
};

const EDUCATION = [
  {
    period: "Pursuing",
    title: "B.Tech, Information Technology",
    org: "Andhra Loyola Institute of Engineering and Technology (JNTUK)",
    points: []
  },
  {
    period: "2021 – 2023",
    title: "Intermediate",
    org: "Andhra Loyola College",
    points: []
  },
  {
    period: "2021",
    title: "SSC",
    org: "ZPHS, Godavarru",
    points: []
  }
];

const SKILLS = [
  { group: "Programming", icon: "code", items: ["Python", "Java"] },
  { group: "Web Development", icon: "globe", items: ["HTML", "CSS", "Django"] },
  { group: "Databases", icon: "database", items: ["MySQL", "SQLite"] },
  { group: "Core", icon: "brain", items: ["Data Structures and Algorithms", "Problem Solving"] },
  { group: "Cloud and DevOps", icon: "cloud", items: ["AWS EC2", "AWS RDS", "AWS IAM", "Git", "GitHub"] }
];

const PROJECTS = [
  {
    name: "College Fee Management System",
    initials: "CF",
    description:
      "A web-based system for managing student fee information and payment records.",
    features: [
      "Student registration, login and authentication",
      "Dashboard for each student",
      "Tracks total fees, paid fees and remaining balance through database integration"
    ],
    stack: ["Django", "Python", "Database"],
    github: null,
    demo: null
  },
  {
    name: "Eco Campus Management System",
    initials: "EC",
    description:
      "A Django web application focused on campus management.",
    features: [
      "Database-driven functionality",
      "Structured with Django's model-view-template architecture"
    ],
    stack: ["Django", "Python", "Database"],
    github: null,
    demo: null
  }
];

/* Newest first */
const EXPERIENCE = [
  {
    period: "25 Sep 2026 – 25 Oct 2026",
    title: "App Development (Android) Intern",
    org: "CodeOrbit Tech (Batch IND1)",
    status: "In progress",
    points: [
      "One-month, assignment-driven virtual internship",
      "Offer letter ID: COT/IND1/57258"
    ]
  },
  {
    period: "15 May 2026 – 14 Jul 2026",
    title: "AWS Cloud and DevOps Intern",
    org: "APSSDC (Summer Online Internship, Batch 2)",
    points: [
      "Gained hands-on experience with AWS cloud services and DevOps practices",
      "Deployed a Django web application on AWS EC2",
      "Used AWS RDS for MySQL database management and application integration",
      "Worked with AWS IAM for access management and permissions",
      "Used Git and GitHub for source-code management and version control"
    ]
  },
  {
    period: "Accepted 1 May 2026",
    title: "Cloud and DevOps Intern",
    org: "Datavalley India Pvt Ltd",
    points: [
      "Online short-term internship in Cloud and DevOps",
      "Registration number: AP26S11118156"
    ]
  },
  {
    period: "Completed 11 Mar 2026",
    title: "AI + Sustainability Virtual Intern",
    org: "1M1B (via IBM SkillsBuild)",
    points: ["Completed the 1M1B AI + Sustainability Virtual Internship"]
  },
  {
    period: "12 May 2025 – 12 Jul 2025",
    title: "Web Development using Django Intern",
    org: "APSSDC (Summer Online Internship 2025)",
    points: [
      "Developed web applications using the Django framework",
      "Worked with Django models, views, templates and database integration",
      "Gained practical experience developing and debugging web applications"
    ]
  }
];

/* category values: internship | cloud | programming | ai | design | business | event */
const CERT_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "internship", label: "Internships" },
  { id: "cloud", label: "Cloud and DevOps" },
  { id: "programming", label: "Programming" },
  { id: "ai", label: "AI and Data" },
  { id: "design", label: "Design and HCI" },
  { id: "business", label: "Business and Writing" },
  { id: "event", label: "Workshops and Events" }
];

const CERTIFICATES = [
  {
    title: "AWS Cloud Computing – DevOps",
    issuer: "APSSDC",
    date: "15 May 2026 – 14 Jul 2026",
    detail: "Summer Online Internship Batch 2, 2026. Certificate No. APSSDC/SIP/2026-27/33670",
    image: "assets/certificates/apssdc-aws-devops.jpg",
    category: "cloud"
  },
  {
    title: "Cloud and DevOps Internship Acceptance Letter",
    issuer: "Datavalley India Pvt Ltd",
    date: "1 May 2026",
    detail: "Online short-term internship. Registration number AP26S11118156",
    image: "assets/certificates/datavalley-cloud-devops-offer.jpg",
    category: "internship"
  },
  {
    title: "Web Development using Django",
    issuer: "APSSDC",
    date: "12 May 2025 – 12 Jul 2025",
    detail: "Summer Online Internship Program 2025. Certificate No. APSSDC/25/INT/WDD-0720",
    image: "assets/certificates/apssdc-django.jpg",
    category: "internship"
  },
  {
    title: "App Development (Android) Internship Offer Letter",
    issuer: "CodeOrbit Tech",
    date: "24 Sep 2026",
    detail: "Batch IND1, 25 Sep 2026 to 25 Oct 2026. ID COT/IND1/57258. Verify at codeorbittech.in/offer-letters",
    image: "assets/certificates/codeorbit-android-offer.jpg",
    category: "internship"
  },
  {
    title: "AI + Sustainability Virtual Internship",
    issuer: "1M1B (via IBM SkillsBuild)",
    date: "11 Mar 2026",
    detail: "Completion certificate, plan ID PLAN-5C114CF1ADED",
    image: "assets/certificates/1m1b-ai-sustainability.jpg",
    category: "internship"
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy · OpenEDG Python Institute",
    date: "7 Sep 2026",
    detail: "Cert ID 24f460ea-386e-4521-9e42-3ac0dbede19c",
    image: "assets/certificates/cisco-python-essentials-1.jpg",
    category: "programming"
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy · OpenEDG Python Institute",
    date: "16 Sep 2026",
    detail: "Cert ID 58b2fdb3-311b-4b6c-a180-ad2db88f957a",
    image: "assets/certificates/cisco-python-essentials-2.jpg",
    category: "programming"
  },
  {
    title: "Dart Programming",
    issuer: "Infosys Springboard",
    date: "4 Sep 2026",
    detail: "Verify at verify.onwingspan.com",
    image: "assets/certificates/infosys-dart-programming.jpg",
    category: "programming"
  },
  {
    title: "Mobile App Development using Flutter",
    issuer: "Infosys Springboard",
    date: "11 Jun 2026",
    detail: "Verify at verify.onwingspan.com",
    image: "assets/certificates/infosys-flutter.jpg",
    category: "programming"
  },
  {
    title: "Generative AI by Google Cloud",
    issuer: "L4G",
    date: "April 2026",
    detail: "45-hour course with 22 skill badges on the Google Skills platform",
    image: "assets/certificates/l4g-genai-google-cloud.jpg",
    category: "ai"
  },
  {
    title: "AI Skills Passport",
    issuer: "EY and Microsoft",
    date: "",
    detail: "Completed the general and employability sections plus an employability section",
    image: "assets/certificates/ey-microsoft-ai-skills-passport.jpg",
    category: "ai"
  },
  {
    title: "AI Tools and Claude Workshop",
    issuer: "Be10x",
    date: "27 Sep 2026",
    detail: "Certificate of completion",
    image: "assets/certificates/be10x-ai-tools-workshop.jpeg",
    category: "ai"
  },
  {
    title: "30 Days Power BI Micro Course",
    issuer: "SkillCourse",
    date: "11 Jun 2026",
    detail: "ISO 9001:2015 registered. Registration no. INQ/AN-20622/127512/1025",
    image: "assets/certificates/skillcourse-powerbi.jpeg",
    category: "ai"
  },
  {
    title: "UI/UX Developers",
    issuer: "APSSDC",
    date: "9 Feb 2026 – 13 Feb 2026",
    detail: "Certificate of completion",
    image: "assets/certificates/apssdc-ui-ux.jpg",
    category: "design"
  },
  {
    title: "Human Computer Interaction (Elite)",
    issuer: "NPTEL · IIIT Delhi",
    date: "Jan – Apr 2026",
    detail: "Consolidated score 81%. 12-week course. Roll No. NPTEL26CS70S168102099",
    image: "assets/certificates/nptel-hci-elite.jpg",
    category: "design"
  },
  {
    title: "Design and Implementation of Human-Computer Interfaces",
    issuer: "NPTEL · IIT Guwahati",
    date: "Jul – Oct 2025",
    detail: "Consolidated score 55%. 12-week course. Roll No. NPTEL25CS135S1272102346",
    image: "assets/certificates/nptel-hci-design.jpg",
    category: "design"
  },
  {
    title: "Design Thinking – A Primer",
    issuer: "NPTEL · IIT Madras",
    date: "Jan – Feb 2025",
    detail: "Consolidated score 56%. 4-week course. Roll No. NPTEL25MG18S532600160",
    image: "assets/certificates/nptel-design-thinking.jpg",
    category: "design"
  },
  {
    title: "Ignite India (Entrepreneurship Development)",
    issuer: "Wadhwani Foundation",
    date: "27 Oct 2025",
    detail: "42 hours of training covering ideation, business modeling and financial planning",
    image: "assets/certificates/wadhwani-ignite-india.jpg",
    category: "business"
  },
  {
    title: "ENGL210: Technical Writing",
    issuer: "Saylor University",
    date: "24 Mar 2026",
    detail: "Grade 100%. 86 hours. Certificate ID 2064779776NN",
    image: "assets/certificates/saylor-technical-writing.jpg",
    category: "business"
  },
  {
    title: "SPARK Startup Bootcamp",
    issuer: "Ratan Tata Innovation Hub (RTIH)",
    date: "7 Sep 2026 – 11 Sep 2026",
    detail: "Five-day idea exploration and startup bootcamp at Andhra Loyola Institute of Engineering and Technology",
    image: "assets/certificates/rtih-spark-bootcamp.jpeg",
    category: "event"
  },
  {
    title: "Exploring the World of IoT and AI with ESP32",
    issuer: "Andhra Loyola Institute of Engineering and Technology · SRC e-Solutions",
    date: "13 Oct 2025 – 15 Oct 2025",
    detail: "Three-day workshop, Department of Information Technology",
    image: "assets/certificates/iot-ai-esp32-workshop.jpeg",
    category: "event"
  },
  {
    title: "Code Spark India 2025",
    issuer: "Kakaraparti Bhavanarayana College (Autonomous)",
    date: "22 – 23 Aug 2025",
    detail: "Certificate of participation. Two-day national-level coding and innovation hackathon",
    image: "assets/certificates/codespark-india-2025.jpeg",
    category: "event"
  }
];

const ACHIEVEMENTS = [
  {
    title: "Elite certification in Human Computer Interaction",
    text: "Scored 81% with full marks on online assignments in the NPTEL course by IIIT Delhi.",
    meta: "NPTEL · Jan – Apr 2026",
    icon: "award"
  },
  {
    title: "100% grade in Technical Writing",
    text: "Completed the 86-hour ENGL210 course at Saylor University with a perfect grade.",
    meta: "Saylor University · Mar 2026",
    icon: "award"
  },
  {
    title: "22 skill badges in Generative AI",
    text: "Finished a 45-hour Google Cloud Generative AI program covering beginner, advanced and leader pathways.",
    meta: "L4G · April 2026",
    icon: "spark"
  },
  {
    title: "Code Spark India 2025 hackathon",
    text: "Participated in a two-day national-level coding and innovation hackathon.",
    meta: "KBN College · 22 – 23 Aug 2025",
    icon: "trophy"
  },
  {
    title: "SPARK startup bootcamp",
    text: "Five days on the start-up journey, Lean Canvas, customer segmentation, revenue models, USP and pitching.",
    meta: "Ratan Tata Innovation Hub · Sep 2026",
    icon: "spark"
  },
  {
    title: "IoT and AI with ESP32 workshop",
    text: "Three-day hands-on workshop from concept to smart control.",
    meta: "ALIET × SRC e-Solutions · Oct 2025",
    icon: "trophy"
  }
];
