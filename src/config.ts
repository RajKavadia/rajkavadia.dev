export const siteConfig = {
  name: "Raj Kavadia",
  title: "Senior Mobile Engineer",
  description:
    "Portfolio of Raj Kavadia, senior mobile engineer in Ahmedabad.",
  accentColor: "#1d4ed8",
  social: {
    email: "rajkavadia78@gmail.com",
    phone: "+918238267544",
    linkedin: "https://www.linkedin.com/in/rajkavadia/",
    twitter: "",
    github: "https://github.com/RajKavadia/",
  },
  aboutMe:
    "Senior Mobile Engineer in Ahmedabad, open to remote work. I have spent about nine years shipping Android and Flutter products across fintech, government schemes, and senior care, and I publish Dart libraries for Flutter state inspection, change-impact analysis, end-to-end automation, dependency injection, logging, and PDFs. Day to day I work with AI-assisted tools, including Cursor, Claude, Kiro, and OpenCode.",
  skillGroups: [
    {
      title: "Languages",
      items: ["Kotlin", "Dart", "Java", "Python"],
    },
    {
      title: "Mobile",
      items: [
        "Android SDK",
        "Flutter",
        "Jetpack Compose",
        "Kotlin Multiplatform",
        "Material Design 3",
        "Material You",
      ],
    },
    {
      title: "Architecture",
      items: [
        "Clean Architecture",
        "MVVM",
        "MVI",
        "Repository pattern",
        "Hilt",
        "Dagger",
      ],
    },
    {
      title: "State",
      items: ["Coroutines", "Flow", "BLoC", "Riverpod", "GetX", "Provider"],
    },
    {
      title: "Data and APIs",
      items: [
        "Room",
        "DataStore",
        "Hive",
        "Retrofit",
        "Ktor",
        "OkHttp",
        "GraphQL",
        "WebSockets",
        "Firebase",
      ],
    },
    {
      title: "Backend",
      items: ["Spring Boot"],
    },
    {
      title: "Testing",
      items: ["JUnit", "MockK", "Mockito", "Espresso", "Appium"],
    },
    {
      title: "Delivery",
      items: ["GitHub Actions", "Gradle", "ProGuard", "Play App Bundles", "Git"],
    },
    {
      title: "AI-assisted tools",
      items: [
        "Cursor",
        "Claude",
        "Kiro",
        "OpenCode",
        "Workflow generators",
        "Codex CLI",
        "MCP",
      ],
    },
  ],
  badges: [
    { label: "Kotlin", color: "7F52FF", logo: "kotlin" },
    { label: "Dart", color: "0175C2", logo: "dart" },
    { label: "Flutter", color: "02569B", logo: "flutter" },
    { label: "Android", color: "3DDC84", logo: "android" },
    { label: "Java", color: "007396", logo: "openjdk" },
    { label: "Spring Boot", color: "6DB33F", logo: "springboot" },
    { label: "Firebase", color: "DD2C00", logo: "firebase" },
    { label: "Jetpack Compose", color: "4285F4" },
    { label: "Appium", color: "662D91", logo: "appium" },
    { label: "GitHub Actions", color: "2088FF", logo: "githubactions" },
    { label: "Cursor", color: "000000" },
    { label: "Claude", color: "D97706" },
    { label: "Kiro", color: "7C3AED" },
    { label: "OpenCode", color: "111827" },
    { label: "Workflow generators", color: "0F766E" },
  ],
  projects: [
    {
      name: "Prayaas",
      description:
        "Flutter and BLoC app for SIDBI partner institutions. It covers the microfinance borrower journey, including paperless loan origination, accessibility, and multilingual support for rural and semi-urban borrowers.",
      skills: ["Flutter", "Dart", "BLoC"],
    },
    {
      name: "CATIE Mobile and CATIE IRP",
      description:
        "Two Flutter and Firebase apps for Status Solutions senior-care communities in the US: real-time emergency tracking, and a resident in-room portal, with Firebase Cloud Messaging and offline-resilient sync.",
      skills: ["Flutter", "Dart", "Firebase"],
    },
    {
      name: "GST Sahay",
      description:
        "Flutter app for FinAGG and OPLinnovate that lets MSMEs apply for invoice financing through OCEN and the Account Aggregator framework, with GST data for eligibility and multi-bank and NBFC co-lending.",
      skills: ["Flutter", "Dart", "GetX", "BLoC"],
    },
    {
      name: "Jan Suraksha",
      description:
        "Flutter and Android app for the PMJJBY, PMSBY, and APY social security schemes, covering policy applications, premium collection, and beneficiaries.",
      skills: ["Flutter", "Dart", "Android"],
    },
    {
      name: "SBI MSME Sahaj",
      description:
        "Flutter app for State Bank of India that takes MSMEs through invoice financing and working-capital eligibility, application, and disbursal.",
      skills: ["Flutter", "Dart"],
    },
    {
      name: "PNB Sahay",
      description:
        "Flutter app for Punjab National Bank that takes MSMEs through working-capital and operational financing against the bank's loan origination systems.",
      skills: ["Flutter", "Dart"],
    },
  ],
  packages: [
    {
      name: "flutter_ai_whisper",
      description:
        "MCP server that inspects and injects state in a running Flutter app over the Dart VM Service, including route navigation and Riverpod, Bloc, and GetX.",
      link: "https://github.com/RajKavadia/flutter_ai_whisper",
      skills: ["Dart", "Flutter", "MCP"],
    },
    {
      name: "Impact Analyzer",
      description:
        "Dart and Flutter change-impact toolkit: a core engine for blast radius, severity, and confidence, a CLI for the working tree, commit ranges, and AI plans, a local HTTP dashboard, and a read-only MCP server.",
      link: "https://github.com/RajKavadia/impact-analyzer",
      skills: ["Dart", "Flutter"],
    },
    {
      name: "marrionate_extended_mcp",
      description:
        "Flutter end-to-end automation in one package: an MCP server, app-side bindings, a scenario model, a replay runtime, a key-injection builder, and vendored Marionette and flutter-skill drivers.",
      link: "https://github.com/RajKavadia/marrionate_extended_mcp",
      skills: ["Dart", "Flutter", "Testing"],
    },
    {
      name: "Stratum",
      description:
        "Flutter state management built on lifetime management, with Atom, FlowController, and AppStore.",
      link: "https://github.com/RajKavadia/stratum",
      skills: ["Dart", "Flutter"],
    },
    {
      name: "di_manager",
      description:
        "Dependency injection for Flutter and Dart, with singleton and factory patterns and type-safe service resolution.",
      link: "https://github.com/RajKavadia/di",
      skills: ["Dart", "Flutter"],
    },
    {
      name: "cross_logger",
      description:
        "Cross-platform logger with AES encryption, real-time WebSocket streaming, and IndexedDB storage on web.",
      link: "https://github.com/RajKavadia/cross_logger",
      skills: ["Dart", "Flutter"],
    },
    {
      name: "flutter_pub_analyzer",
      description:
        "CLI for analyzing and managing Dart and Flutter dependencies, including unused-dependency detection and Graphviz and Mermaid graphs.",
      link: "https://pub.dev/packages/flutter_pub_analyzer",
      skills: ["Dart", "Flutter"],
    },
    {
      name: "pdf_checker",
      description:
        "Pure Dart package that checks whether a PDF is password-protected and verifies a password, using stream-based file reads.",
      link: "https://github.com/RajKavadia/pdfchecker",
      skills: ["Dart"],
    },
  ],
  experience: [
    {
      company: "OPLinnovate (OnlinePSBLoans)",
      title: "Senior Mobile Application Developer",
      dateRange: "Mar 2023 - Present",
      bullets: [
        "Architected a fintech loan-origination app with Kotlin, Jetpack Compose, and Kotlin Multiplatform.",
        "Led the migration of legacy XML layouts to Jetpack Compose and Material Design 3.",
        "Built document upload and e-sign flows with AES encryption.",
        "Set up GitHub Actions in the sprint release workflow.",
        "Used Coroutines, Flow, Retrofit, and OkHttp for state and API layers.",
        "Applied accessibility work aimed at WCAG 2.1 AA.",
        "Shipped with ProGuard, resource shrinking, and Android App Bundles.",
        "Mentored a team of five through weekly code reviews and architecture guidelines.",
        "Wrote unit and UI tests with JUnit, Espresso, and Mockito.",
      ],
    },
    {
      company: "Ekshot Advertcomm Pvt. Ltd.",
      title: "Lead Mobile Application Developer",
      dateRange: "Dec 2022 - Mar 2023",
      bullets: [
        "Owned architecture, Scrum planning, delivery, and code review for a SaaS advertising and commerce app.",
        "Built real-time ad-campaign tracking with WebSockets and Firebase.",
        "Introduced modular, feature-based Clean Architecture.",
        "Mentored junior developers through code review and pair programming.",
        "Shipped releases with Play App Bundles and ProGuard.",
      ],
    },
    {
      company: "E2 Infosystems",
      title: "Mobile Application Developer",
      dateRange: "Oct 2020 - Dec 2022",
      bullets: [
        "Built Kotlin, Jetpack, Flutter, and Kotlin Multiplatform apps for e-commerce clients.",
        "Integrated Razorpay, Stripe, and real-time order tracking.",
        "Designed REST layers with Retrofit and OkHttp.",
        "Shipped CATIE Mobile and CATIE IRP for Status Solutions, with accessibility support for senior-care users.",
        "Used Room for offline storage and Hilt for dependency injection.",
        "Reviewed code and mentored junior developers.",
      ],
    },
    {
      company: "RSP Innovations",
      title: "Android Developer",
      dateRange: "Jul 2018 - Oct 2020",
      bullets: [
        "Shipped consumer Android apps with Kotlin, Kotlin Multiplatform, and MVC.",
        "Integrated Google Maps, location services, and third-party APIs.",
        "Applied Material Design and accessibility improvements.",
        "Worked with backend teams on REST contracts and mobile sync.",
        "Used Gradle, ProGuard, and App Bundles for Play Store releases.",
      ],
    },
    {
      company: "Ghost Technologies",
      title: "Android Developer",
      dateRange: "Jun 2017 - Jul 2018",
      bullets: [
        "Integrated Google Maps and custom animation libraries into consumer Android apps.",
        "Built Android UI to Material Design guidelines.",
        "Profiled performance with Android Profiler, including memory use and frame rendering.",
        "Used Firebase Remote Config and A/B tests for feature flags.",
      ],
    },
    {
      company: "Palle Technologies",
      title: "Trainee Android Developer",
      dateRange: "Aug 2016 - Jun 2017",
      bullets: [
        "Learned Android, Java, Python scripting, UI, SDK integration, and the app lifecycle.",
        "Shipped internal Android utility apps with MVVM, Material Design, and accessibility basics.",
        "Worked through Agile sprints from requirements and design review through QA and Play Store preparation.",
      ],
    },
  ],
  education: [
    {
      school: "Marwadi University",
      degree: "Bachelor of Engineering in Information Technology",
      dateRange: "Jun 2012 - May 2016",
      achievements: ["First Class"],
    },
  ],
};
