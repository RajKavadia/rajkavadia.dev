# Raj Kavadia — portfolio source

Content for a static site based on [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) (Astro, Tailwind, MIT). Personal data for that template lives in `src/config.ts`. This file is the copy source. It is not the site yet.

## Editorial rules

Locked choices:

- OPLinnovate and OnlinePSBLoans are the same organization. The site uses “OPLinnovate (OnlinePSBLoans)”.
- School is Marwadi University. Degree and dates stay Bachelor of Engineering in Information Technology, June 2012–May 2016, First Class.
- No download counts, star ratings, percentages, or audit results on the site.
- Projects include product apps and open-source libraries.
- No photo. No resume link.
- Technology badges sit above the skill chips. They load from shields.io.
- Tradgo and PDRS Multitrade are omitted.
- pub.dev package version numbers are omitted.

## Site fields

| Field | Copy |
|---|---|
| Name | Raj Kavadia |
| Title | Senior Mobile Engineer |
| Description | Portfolio of Raj Kavadia, senior Android and Flutter developer. |
| Accent | `#1d4ed8` (template default; change if a brand color is chosen) |
| Email | rajkavadia78@gmail.com |
| Phone | +91 82382 67544 |
| Location | Ahmedabad, Gujarat, India. Open to remote. |
| LinkedIn | https://www.linkedin.com/in/rajkavadia/ |
| GitHub | https://github.com/RajKavadia/ |
| X / Twitter | Not on the GitHub profile. Leave unset. |

GitHub still lists the location as Bengaluru. The resumes list Ahmedabad. Use Ahmedabad on the site. Bengaluru matches the 2016–2020 jobs only.

## About

Senior Mobile Engineer in Ahmedabad, open to remote work. About nine years of mobile product work, from trainee Android roles in Bengaluru through lead and senior roles on fintech, government, and senior-care apps. Current public code is Dart tooling for Flutter: state inspection, change-impact analysis, and end-to-end automation for AI agents, plus libraries for state, dependency injection, logging, and PDFs.

GitHub bio, kept as a personal line rather than the About paragraph: “The world can be changed with a few thousands of lines of code, I am willing to contribute a few hundred.”

Public LinkedIn headline fragment: “I build scalable Android apps that users love.” The card shows about 2,000 followers and 500+ connections.

## Skills

Shown on the site in labeled groups, plus technology badges. AI-assisted tools are Cursor, Claude, Kiro, OpenCode, and workflow generators. Appium is under Testing. Spring Boot is a badge and a Backend skill.

- Kotlin
- Dart
- Java
- Android SDK
- Jetpack Compose
- Flutter
- Kotlin Multiplatform
- MVVM
- MVI
- Clean Architecture
- Hilt
- Coroutines
- Flow
- BLoC
- Riverpod
- GetX
- Retrofit
- OkHttp
- Firebase
- Room
- GitHub Actions
- Material Design 3

Listed on at least one resume, not in the short skill row unless requested: Python, Swift, Objective-C, GraphQL, WebSockets, Ktor, BLE, TensorFlow Lite, Jenkins, Bitrise, Hive, ObjectBox, Espresso, JUnit, MockK.

## Experience

Dates follow the resumes. The site omits download counts, ratings, and percentages. The current employer is one organization: OPLinnovate (OnlinePSBLoans).

### Senior Mobile Application Developer

OPLinnovate (OnlinePSBLoans) — Ahmedabad, Gujarat  
March 2023 – present

- Architected a fintech loan-origination app with Kotlin, Jetpack Compose, and Kotlin Multiplatform. Resume claim: customer onboarding time reduced by 35%.
- Led a migration of legacy XML layouts to Jetpack Compose across 20+ screens, using Material Design 3. Resume claim: developer velocity up 30%.
- Built document upload and e-sign flows with AES encryption. Resume claim: no critical findings in a production VAPT.
- Set up GitHub Actions with the sprint workflow. Resume claim: release cycle cut from two weeks to three days.
- Used Coroutines, Flow, Retrofit, and OkHttp for state and API layers.
- Applied accessibility work aimed at WCAG 2.1 AA.
- Resume claim: APK size reduced by 40% with ProGuard, resource shrinking, and App Bundles, and Play Store rating at 4.5 or higher.
- Mentored a team of five through weekly code reviews and written architecture guidelines.
- Wrote unit and UI tests with JUnit, Espresso, and Mockito. Resume claim: 80%+ coverage on core modules.

LinkedIn’s public card names OPLinnovate instead of OnlinePSBLoans. Confirm before publish.

### Lead Mobile Application Developer

Ekshot Advertcomm Pvt. Ltd. — Gandhidham, Kutch  
December 2022 – March 2023

- Owned architecture, Scrum planning, delivery, and code review for a SaaS advertising and commerce app.
- Built real-time ad-campaign tracking with WebSockets and Firebase. Resume claim: client reporting accuracy up 40%.
- Introduced modular, feature-based Clean Architecture. Resume claim: build time down 30%.
- Mentored juniors with code review and pair programming. Resume claim: bug escape rate down 25%.
- Shipped with Play App Bundles. Resume claim: release APK size down 35%.

### Mobile Application Developer

E2 Infosystems — Chennai, Tamil Nadu  
October 2020 – December 2022

- Built Kotlin, Jetpack, Flutter, and Kotlin Multiplatform apps for e-commerce clients. Resume claim: user retention up 20%.
- Integrated Razorpay, Stripe, and real-time order tracking. Resume claim: transaction success up 30%.
- Designed REST layers with Retrofit and OkHttp. Resume claim: app load time down 25%.
- Shipped CATIE Mobile and CATIE IRP for Status Solutions, with accessibility support for senior-care users.
- Used Room for offline storage and Hilt for dependency injection. Resume claim: APK size down 30%.
- Reviewed code and mentored three junior developers. Resume claim: production bug rate down 20%.

### Android Developer

RSP Innovations — Bengaluru, Karnataka  
July 2018 – October 2020

- Shipped consumer Android apps with Kotlin, Kotlin Multiplatform, and MVC. Resume claim: engagement up 25%.
- Integrated Google Maps, location services, and third-party APIs. Resume claim: load time down 25%.
- Applied Material Design and accessibility work across 10+ screens. Resume claim: Play rating moved from 3.9 to 4.3.
- Worked with backend teams on REST contracts and mobile sync.
- Used Gradle, ProGuard, and App Bundles. Resume claim: APK size down 28%.

### Android Developer

Ghost Technologies — Bengaluru, Karnataka  
June 2017 – July 2018

- Integrated Google Maps and custom animation libraries. Resume claim: satisfaction up 20%.
- Built Android UI to Material Design. Resume claim: load time cut by 50%.
- Profiled performance, including memory leaks, toward a stable 60 fps.
- Used Firebase Remote Config and A/B tests for feature flags.

### Trainee Android Developer

Palle Technologies — Bengaluru, Karnataka  
August 2016 – June 2017

- Learned Android, Java, Python scripting, UI, SDK integration, and the app lifecycle.
- Shipped three internal Android utility apps with MVVM, Material Design, and accessibility basics.
- Worked through Agile sprints from requirements and design review through QA and Play Store prep.

## Projects for the site

Product apps stay in Projects. Published Dart and Flutter packages stay in a separate Packages section.

### Open source

**flutter_ai_whisper**  
https://github.com/RajKavadia/flutter_ai_whisper  
MCP server that inspects and injects state in a running Flutter app over the Dart VM Service. Supports route navigation and Riverpod, Bloc, and GetX.  
Skills: Dart, Flutter, MCP

**Impact Analyzer**  
https://github.com/RajKavadia/impact-analyzer  
Dart and Flutter change-impact toolkit: a core engine for blast radius, severity, and confidence; a CLI for the working tree, commit ranges, and AI plans; a local HTTP dashboard with a file list, severity, and an interactive graph; and a read-only MCP server for AI agents. Packages: impact_analyzer, impact_analyzer_cli, impact_analyzer_dashboard, impact_analyzer_mcp.  
Skills: Dart, Flutter, static analysis

**marrionate_extended_mcp**  
https://github.com/RajKavadia/marrionate_extended_mcp  
Flutter end-to-end automation: MCP server, app-side bindings, a scenario model, a replay runtime, a key-injection builder, and vendored Marionette and flutter-skill drivers in one package.  
Skills: Dart, Flutter, testing

**Stratum**  
https://github.com/RajKavadia/stratum  
Flutter state management built on lifetime management. Resume description adds Atom, FlowController, and AppStore.  
Skills: Dart, Flutter

**di_manager**  
https://github.com/RajKavadia/di  
Dependency injection for Flutter and Dart. Resume description: singleton and factory patterns and type-safe service resolution.  
Skills: Dart, Flutter

**cross_logger**  
https://github.com/RajKavadia/cross_logger  
Cross-platform logger. Resume description: AES encryption, real-time WebSocket streaming, and IndexedDB storage on web.  
Skills: Dart, Flutter

**flutter_pub_analyzer**  
CLI for analyzing and managing Dart and Flutter dependencies. Resume description: unused-dependency detection and Graphviz and Mermaid graphs. The pub.dev homepage field points at `google/gemini-cli`. That URL does not match this package’s other repos. Do not link it, and do not describe Raj as a Gemini CLI maintainer.  
Skills: Dart, Flutter

**pdf_checker**  
https://github.com/RajKavadia/pdfchecker  
Pure Dart package that checks whether a PDF is password-protected and verifies a password. Resume description: stream-based RandomAccessFile processing.  
Skills: Dart

### Product apps

No Tradgo entry.

**Prayaas** — SIDBI  
Flutter and BLoC app for the microfinance borrower journey at SIDBI partner institutions: paperless origination, accessibility, and multilingual support. Resume claim: 10K+ downloads and 4.1 stars. Omit the numbers on the site unless Raj wants resume claims shown.  
Skills: Flutter, Dart, BLoC

**CATIE Mobile and CATIE IRP** — Status Solutions  
Two Flutter and Firebase apps for US senior-care communities: real-time emergency tracking, and a resident in-room portal. Firebase Cloud Messaging for alerts and offline-resilient sync. Resume claim: 1K+ downloads.  
Skills: Flutter, Dart, Firebase

**GST Sahay** — FinAGG / OPLinnovate  
January 2024 – present on the resumes. Flutter app (GetX and BLoC) for MSME invoice financing through OCEN and the Account Aggregator framework, GST data for eligibility, and multi-bank and NBFC co-lending.  
Skills: Flutter, Dart, GetX, BLoC

**Jan Suraksha**  
March 2023 – September 2023. Flutter and Android app for PMJJBY, PMSBY, and APY: policy applications, premium collection, and beneficiaries.  
Skills: Flutter, Dart, Android

**SBI MSME Sahaj** — State Bank of India  
October 2023 – March 2024. Flutter app for invoice financing and working capital: eligibility, application, and disbursal against SBI systems.  
Skills: Flutter, Dart

**PNB Sahay** — Punjab National Bank  
April 2024 – October 2024. Flutter app for MSME working capital and operational financing against PNB origination systems.  
Skills: Flutter, Dart

### Other public repositories

Not recommended for the main project grid. Thin or empty descriptions, learning repos, or forks.

| Repo | Language | Note |
|---|---|---|
| kotlin-mcp | Kotlin | Pushed October 2026. No description. |
| tokio-mcp-inspector | Rust | MIT. Pushed October 2026. No description. |
| automation-studio | Dart | Description is the repo name. |
| resume-forge | Dart | Pushed September 2026. No description. |
| pure_pdf_viewer | Dart | No description. |
| blinkit-animation | Dart | “Small Demo for animation in Flutter.” |
| mcpProvider | Kotlin | No description. |
| RajKavadia.github.io | HTML | Existing GitHub Pages repo. Last push August 2025. |
| springTutorial | Java | Tutorial. |
| TMDB, bloctest, Ecommerce-app-template, DeliverySlotChoose, ImageCrop, expense_tracker | Mixed | Older experiments. |
| flutter-snippets, getx | — | Forks, not original products. |

GitHub account: created 4 September 2017, 35 public repositories, 13 followers, 11 following. Almost all original repos have 0 stars. flutter_ai_whisper had 1 star when checked.

## Education

Published school line:

- School: Marwadi University
- Degree: Bachelor of Engineering in Information Technology
- Dates: June 2012 – May 2016
- Note: First Class

## pub.dev

Account email matches the resume. Joined about five years before October 2026. No verified publisher. Package names only:

- flutter_ai_whisper
- impact_analyzer
- impact_analyzer_cli
- impact_analyzer_dashboard
- impact_analyzer_mcp
- marrionate_extended_mcp
- stratum
- di_manager
- cross_logger
- flutter_pub_analyzer
- pdf_checker

## Suggested `config.ts` shape

Short enough for one page. Employer and school are placeholders until confirmed. Product apps are omitted from `projects` so the grid stays the public libraries. Resume metrics are omitted.

```ts
export const siteConfig = {
  name: "Raj Kavadia",
  title: "Senior Mobile Engineer",
  description: "Portfolio of Raj Kavadia, senior mobile engineer in Ahmedabad.",
  accentColor: "#1d4ed8",
  social: {
    email: "rajkavadia78@gmail.com",
    linkedin: "https://www.linkedin.com/in/rajkavadia/",
    github: "https://github.com/RajKavadia/",
  },
  aboutMe:
    "Senior Mobile Engineer in Ahmedabad, open to remote work. I have spent about nine years shipping Android and Flutter products, including fintech, government-scheme, and senior-care apps, and I publish Dart libraries for Flutter state inspection, change-impact analysis, end-to-end automation, dependency injection, logging, and PDFs.",
  skills: [
    "Kotlin",
    "Dart",
    "Flutter",
    "Jetpack Compose",
    "Android SDK",
    "Kotlin Multiplatform",
    "Clean Architecture",
    "Firebase",
  ],
  projects: [
    {
      name: "flutter_ai_whisper",
      description:
        "MCP server that inspects and injects state in a running Flutter app over the Dart VM Service, including routes and Riverpod, Bloc, and GetX.",
      link: "https://github.com/RajKavadia/flutter_ai_whisper",
      skills: ["Dart", "Flutter", "MCP"],
    },
    {
      name: "Impact Analyzer",
      description:
        "Dart and Flutter change-impact toolkit: blast radius, severity, and confidence, with a CLI, a local dashboard, and a read-only MCP server.",
      link: "https://github.com/RajKavadia/impact-analyzer",
      skills: ["Dart", "Flutter"],
    },
    {
      name: "marrionate_extended_mcp",
      description:
        "Flutter end-to-end automation in one package: MCP server, scenario replay, key injection, and vendored Marionette and flutter-skill drivers.",
      link: "https://github.com/RajKavadia/marrionate_extended_mcp",
      skills: ["Dart", "Flutter", "Testing"],
    },
  ],
  experience: [],
  education: [],
};
```

Fill `experience` from the Experience section after the current employer is confirmed. Fill `education` after the school is confirmed. The template’s experience entries are company, title, date range, and bullets. Education entries are school, degree, date range, and achievements.

## Sources

- `Raj Kavadia - Senior Android Developer (1).pdf` — created 1 June 2026. Title inside the file is “Senior Android Engineer | Flutter Developer | Mobile Tech Lead.” Summary says 6–9 years. Same jobs and apps as the other two PDFs.
- `Raj Kavadia - Senior Android and Flutter Developer Document (13).pdf` — created 1 June 2026. Headline includes “9+ Years Experience.”
- `Raj Kavadia - Senior Flutter Developer (1).pdf` — created 25 May 2026. Summary says 9+ years, including 5+ years on Flutter and Dart.
- https://www.linkedin.com/in/rajkavadia/ — public card only.
- https://github.com/RajKavadia/ — profile and repository list checked October 2026.
- pub.dev package pages for the names listed above. Versions were read and then dropped from this document.

## Site

The static site is this repository, filled from the choices above. Personal data is in `src/config.ts`. Technology badges render in `src/components/About.astro`. Build with `npm run build`. The static files land in `dist/`.
