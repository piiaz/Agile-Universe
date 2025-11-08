// 1. All Translations
const translations = {
    // English
    en: {
        langName: "English",
        // --- Homepage ---
        pageTitle: "The Agile Universe",
        heroTitle: "Agile Universe",
        heroSubtitle: "Our company's guide to a more collaborative, flexible, and effective way of working.",
        section1Title: "The Core Nebula: What is the Agile Mindset?",
        section1P1: "Agile is far more than a set of processes; it is a <strong>mindset</strong>. It's a fundamental shift in how we approach our work. It's about viewing challenges and projects through a lens of adaptability, collaboration, and continuous improvement.",
        section1H3_1: "Fixed Mindset vs. Agile Mindset",
        section1P2: "A traditional <strong>Fixed Mindset</strong> (like in Waterfall projects) views failure as a final. Plans are rigid, roles are siloed, and change is seen as a problem.",
        section1P3: "An <strong>Agile Mindset</strong> embraces change as a competitive advantage. It sees failure as a learning opportunity. It prizes collaboration, trusts teams to self-organize, and focuses relentlessly on delivering <em>value</em> to the customer, not just completing a task list.",
        section1H3_2: "The Two Sides of Agile",
        section1P4: "<strong>1. The \"Being Agile\" (Mindset):</strong> This is the 'why'. It's our culture, values, and principles. It's about respect, courage, and collaboration.",
        section1P5: "<strong>2. The \"Doing Agile\" (Practices):</strong> This is the 'how'. It's the frameworks (like Scrum, Kanban), the events (like Daily Scrums, Retrospectives), and the practices that bring the mindset to life.",
        section2Title: "The Guiding Stars: The 4 Agile Values",
        section2P1: "The Agile Manifesto is built on four core values. The wording is specific: \"we value the items on the left <em>more</em>,\" which doesn't mean the items on the right have no value.",
        value1Title: "Individuals and Interactions",
        value1Over: "over processes and tools",
        value1Desc: "The best solutions come from people talking to each other, not from rigid processes. A tool can help, but it's the team's collaboration that solves problems.",
        value2Title: "Working Software",
        value2Over: "over comprehensive documentation",
        value2Desc: "Our ultimate goal is to deliver a functional product that provides value. Documentation is useful, but it is not the measure of success—the product is.",
        value3Title: "Customer Collaboration",
        value3Over: "over contract negotiation",
        value3Desc: "We aim for a partnership, not a transaction. By working <em>with</em> our customers continuously, we can adapt to their needs and build the <em>right</em> thing, not just what was on the initial contract.",
        value4Title: "Responding to Change",
        value4Over: "over following a plan",
        value4Desc: "In a complex world, change is inevitable. A rigid plan is fragile. An agile team welcomes change as an opportunity to deliver a better, more relevant product.",
        section3Title: "The 12 Constellations: The Agile Principles",
        section3P1: "These 12 principles are the tactical guide for applying the Agile mindset and values.",
        principle1: "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.",
        principle2: "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.",
        principle3: "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.",
        principle4: "Business people and developers must work together daily throughout the project.",
        principle5: "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.",
        principle6: "The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.",
        principle7: "Working software is the primary measure of progress.",
        principle8: "Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.",
        principle9: "Continuous attention to technical excellence and good design enhances agility.",
        principle10: "Simplicity—the art of maximizing the amount of work not done—is essential.",
        principle11: "The best architectures, requirements, and designs emerge from self-organizing teams.",
        principle12: "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.",
        section4Title: "Explore the Solar System: Agile Frameworks",
        section4P1: "These frameworks are practical systems for \"Doing Agile.\" Each one applies the Agile mindset in a different way. Click a planet to explore its details.",
        planet1Title: "Scrum Planet",
        planet1Desc: "A framework for managing complex projects with iterative progress and clear roles.",
        planet2Title: "Kanban Planet",
        planet2Desc: "A method for visualizing work, limiting work-in-progress, and managing flow.",
        planet3Title: "XP Planet",
        planet3Desc: "A framework focused on technical excellence and high-quality software engineering practices.",
        footerText: "© 2025 Zaid A. Shukur",

        // --- Scrum Page ---
        scrumPageTitle: "Scrum Planet",
        scrumTitle: "Scrum Planet",
        scrumSubtitle: "A lightweight framework for managing complex work.",
        scrumS1Title: "What is Scrum?",
        scrumS1P1: "Scrum is a framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems. It is deliberately incomplete, only defining the parts required to implement Scrum theory. Scrum is built upon by the collective intelligence of the people using it.",
        scrumS1P2: "Rather than providing people with detailed instructions, the rules of Scrum guide their relationships and interactions.",
        scrumS2Title: "Scrum Theory: The Three Pillars",
        scrumS2P1: "Scrum is founded on empiricism, which asserts that knowledge comes from experience and making decisions based on what is observed. The three pillars of empiricism are:",
        scrumS2Pillar1Title: "Transparency",
        scrumS2Pillar1Desc: "The process and work must be visible to those performing the work and those receiving it. With Scrum, important decisions are based on the perceived state of its three formal artifacts.",
        scrumS2Pillar2Title: "Inspection",
        scrumS2Pillar2Desc: "The Scrum artifacts and the progress toward agreed goals must be inspected frequently and diligently to detect potentially undesirable variances or problems.",
        scrumS2Pillar3Title: "Adaptation",
        scrumS2Pillar3Desc: "If any aspects of a process deviate outside acceptable limits or if the resulting product is unacceptable, the process being applied or the materials being produced must be adjusted.",
        scrumS3Title: "The Five Scrum Values",
        scrumS3P1: "The successful use of Scrum depends on people becoming more proficient in living five values:",
        scrumS3V1: "<strong>Commitment:</strong> Team members commit to achieving the Sprint Goal and supporting each other.",
        scrumS3V2: "<strong>Courage:</strong> The team has the courage to do the right thing and work on tough problems.",
        scrumS3V3: "<strong>Focus:</strong> Everyone focuses on the work of the Sprint and the goals of the Scrum Team.",
        scrumS3V4: "<strong>Openness:</strong> The Scrum Team and its stakeholders are open about all the work and the challenges.",
        scrumS3V5: "<strong>Respect:</strong> Scrum Team members respect each other to be capable, independent individuals.",
        scrumS4Title: "The Scrum Team",
        scrumS4P1: "The fundamental unit of Scrum is a small team of people, a Scrum Team. It consists of one Scrum Master, one Product Owner, and Developers. Within a Scrum Team, there are no sub-teams or hierarchies.",
        scrumS4Role1Title: "The Product Owner",
        scrumS4Role1Desc: "Accountable for maximizing the value of the product resulting from the work of the Scrum Team. Manages the Product Backlog.",
        scrumS4Role2Title: "The Scrum Master",
        scrumS4Role2Desc: "Accountable for establishing Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory and practice.",
        scrumS4Role3Title: "The Developers",
        scrumS4Role3Desc: "The people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint. They are the ones doing the work.",
        scrumS5Title: "The 5 Events (The Scrum Constellation)",
        scrumS5P1: "The Sprint is a container for all other events. Each event in Scrum is a formal opportunity to inspect and adapt Scrum artifacts.",
        scrumS5E1: "<strong>The Sprint:</strong> A fixed-length event of one month or less to create consistency. A new Sprint starts immediately after the conclusion of the previous Sprint.",
        scrumS5E2: "<strong>Sprint Planning:</strong> This is where the team plans the work to be performed for the Sprint.",
        scrumS5E3: "<strong>Daily Scrum:</strong> A 15-minute event for the Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.",
        scrumS5E4: "<strong>Sprint Review:</strong> The purpose is to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders.",
        scrumS5E5: "<strong>Sprint Retrospective:</strong> The purpose is to plan ways to increase quality and effectiveness. The team inspects how the last Sprint went.",
        scrumS6Title: "The 3 Artifacts",
        scrumS6P1: "Scrum’s artifacts represent work or value. They are designed to maximize transparency of key information.",
        scrumS6A1Title: "Product Backlog",
        scrumS6A1Desc: "An emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team.",
        scrumS6A2Title: "Sprint Backlog",
        scrumS6A2Desc: "Composed of the Sprint Goal (the why), the set of Product Backlog items selected for the Sprint (the what), and an actionable plan for delivering the Increment (the how).",
        scrumS6A3Title: "Increment",
        scrumS6A3Desc: "A concrete stepping stone toward the Product Goal. Each Increment is an additive to all prior Increments and thoroughly verified, ensuring that all Increments work together.",

        // --- Kanban Page ---
        kanbanPageTitle: "Kanban Planet",
        kanbanTitle: "Kanban Planet",
        kanbanSubtitle: "A method for visualizing work and managing flow.",
        kanbanS1Title: "What is Kanban?",
        kanbanS1P1: "Kanban is a method to manage and improve work across human systems. This approach aims to manage work by balancing demands with available capacity, and by improving the handling of system-level bottlenecks.",
        kanbanS1P2: "The core idea is to **visualize the workflow**, **limit Work in Progress (WIP)**, and **manage the flow** of work. It is an evolutionary method that promotes gradual improvement.",
        kanbanS2Title: "The Four Core Principles",
        kanbanS2P1: "Kanban is built on a foundation of four principles to manage and improve the flow of value.",
        kanbanS2P1Title: "1. Start With What You Do Now",
        kanbanS2P1Desc: "Kanban does not require radical change. It is designed to be applied directly to your current workflow, respecting existing roles and processes.",
        kanbanS2P2Title: "2. Agree to Pursue Incremental Change",
        kanbanS2P2Desc: "The team agrees that large-scale, radical changes are discouraged as they are often disruptive. Instead, the focus is on small, continuous improvements.",
        kanbanS2P3Title: "3. Respect Current Process & Roles",
        kanbanS2P3Desc: "Unlike other methods, Kanban does not prescribe specific roles or processes. It recognizes that your current setup has value and seeks to improve it, not replace it.",
        kanbanS2P4Title: "4. Encourage Leadership at All Levels",
        kanbanS2P4Desc: "Kanban encourages continuous improvement from everyone in the organization, from individual contributors to senior management.",
        kanbanS3Title: "The Six Core Practices",
        kanbanS3P1: "These are the practical, actionable practices required to implement the Kanban method.",
        kanbanS3P1Title: "1. Visualize the Workflow",
        kanbanS3P1Desc: "This is the **Kanban Board**. By creating a visual model of your work and workflow, you can observe the flow of work and identify problems.",
        kanbanS3P2Title: "2. Limit Work in Progress (WIP)",
        kanbanS3P2Desc: "This is the cornerstone of Kanban. By limiting how many items can be in progress at once, you reduce multitasking, prevent bottlenecks, and encourage a \"pull\" system.",
        kanbanS3P3Title: "3. Manage Flow",
        kanbanS3P3Desc: "The goal is to create a smooth, healthy flow of work. Instead of managing people, you manage the work as it moves through the system, monitoring for blockers.",
        kanbanS3P4Title: "4. Make Policies Explicit",
        kanbanS3P4Desc: "You cannot improve what you don't understand. Make the rules explicit (e.g., \"What does 'Done' mean for this column?\").",
        kanbanS3P5Title: "5. Implement Feedback Loops",
        kanbanS3P5Desc: "Feedback is essential for improvement. Examples include daily stand-up meetings, replenishment meetings, and service delivery reviews.",
        kanbanS3P6Title: "6. Improve Collaboratively",
        kanbanS3P6Desc: "Using the visual board and data from the flow, the team collaborates to identify and implement improvements to their process.",

        // --- XP Page ---
        xpPageTitle: "XP Planet",
        xpTitle: "XP Planet",
        xpSubtitle: "A framework focused on technical excellence.",
        xpS1Title: "What is Extreme Programming (XP)?",
        xpS1P1: "Extreme Programming (XP) is an Agile software development framework that aims to produce higher-quality software and a higher quality of life for the development team. XP is the most specific of the Agile frameworks regarding appropriate engineering practices for software development.",
        xpS1P2: "It is called \"Extreme\" because it takes common-sense principles and practices to extreme levels. For example, if code reviews are good, XP does code reviews *continuously* (this is Pair Programming).",
        xpS2Title: "The Five XP Values",
        xpS2P1: "XP is built on a foundation of five values that guide the team's work and collaboration.",
        xpS2V1: "<strong>Simplicity:</strong> Do the simplest thing that could possibly work. This helps avoid waste and unnecessary complexity.",
        xpS2V2: "<strong>Communication:</strong> Emphasizes face-to-face communication, pair programming, and shared understanding over heavy documentation.",
        xpS2V3: "<strong>Feedback:</strong> Seek and deliver feedback rapidly. This comes from the code (via TDD), the customer, and the team.",
        xpS2V4: "<strong>Respect:</strong> Team members respect each other, the customer, and the code. This fosters a healthy, collaborative environment.",
        xpS2V5: "<strong>Courage:</strong> The courage to speak the truth, refactor code, and adapt to change.",
        xpS3Title: "Core XP Practices",
        xpS3H1: "Feedback Loop Practices",
        xpS3P1: "<strong>Pair Programming:</strong> All production code is written by two programmers sitting at one machine. This provides built-in code review and knowledge sharing.",
        xpS3P2: "<strong>Test-Driven Development (TDD):</strong> Write a failing automated test *before* you write the code to make it pass.",
        xpS3P3: "<strong>On-site Customer:</strong> A real, empowered customer sits with the team full-time to answer questions and set priorities.",
        xpS3H2: "Continuous Process Practices",
        xpS3P4: "<strong>Continuous Integration (CI):</strong> The team integrates their work frequently (multiple times per day). Each integration is verified by an automated build to detect errors quickly.",
        xpS3P5: "<strong>Small Releases:</strong> Release working software to customers in small, frequent increments.",
        xpS3P6: "<strong>Refactoring:</strong> Continuously improve the design of existing code without changing its functionality.",
        xpS3H3: "Shared Understanding Practices",
        xpS3P7: "<strong>Simple Design:</strong> The code should be the simplest, cleanest solution that meets the current requirements.",
        xpS3P8: "<strong>Collective Code Ownership:</strong> Any pair of programmers can improve any code at any time.",
        xpS3P9: "<strong>Coding Standards:</strong> The team agrees on and follows a common set of coding rules.",
        xpS3H4: "Team Welfare Practices",
        xpS3P10: "<strong>Sustainable Pace:</strong> The team works at a pace that they can sustain indefinitely, avoiding burnout and overtime.",
    },
    // Arabic
    ar: {
        langName: "العربية",
        // --- Homepage ---
        pageTitle: "عالم الأجايل",
        heroTitle: "عالم الأجايل",
        heroSubtitle: "دليل شركتنا لأسلوب عمل أكثر تعاوناً ومرونة وفعالية.",
        section1Title: "السديم الأساسي: ما هي عقلية الأجايل؟",
        section1P1: "الأجايل هو أكثر بكثير من مجرد مجموعة عمليات؛ إنه <strong>عقلية</strong>. إنه تحول جوهري في كيفية تعاملنا مع عملنا. يتعلق الأمر برؤية التحديات والمشاريع من خلال عدسة التكيف والتعاون والتحسين المستمر.",
        section1H3_1: "العقلية الثابتة مقابل عقلية الأجايل",
        section1P2: "<strong>العقلية الثابتة</strong> التقليدية (كما في مشاريع Waterfall) تنظر إلى الفشل على أنه نهاية. الخطط جامدة، والأدوار منعزلة، ويُنظر إلى التغيير على أنه مشكلة.",
        section1P3: "<strong>عقلية الأجايل</strong> تتبنى التغيير كميزة تنافسية. إنها ترى الفشل كفرصة للتعلم. إنها تقدر التعاون، وتثق بالفرق لتنظيم نفسها ذاتياً، وتركز بلا هوادة على تقديم <em>القيمة</em> للعميل، وليس فقط إكمال قائمة مهام.",
        section1H3_2: "جانبا الأجايل",
        section1P4: "<strong>1. \"أن تكون أجايل\" (العقلية):</strong> هذا هو 'لماذا'. إنها ثقافتنا وقيمنا ومبادئنا. تتعلق بالاحترام والشجاعة والتعاون.",
        section1P5: "<strong>2. \"تطبيق الأجايل\" (الممارسات):</strong> هذا هو 'كيف'. إنها أطر العمل (مثل سكرم، كانبان)، والأحداث (مثل الاجتماعات اليومية، الاجتماعات الاسترجاعية)، والممارسات التي تجسد العقلية.",
        section2Title: "النجوم المرشدة: قيم الأجايل الأربعة",
        section2P1: "يقوم بيان الأجايل على أربع قيم أساسية. الصياغة محددة: \"نحن نقدّر العناصر الموجودة على اليسار <em>أكثر</em>\"، وهو ما لا يعني أن العناصر الموجودة على اليمين ليس لها قيمة.",
        value1Title: "الأفراد والتفاعلات",
        value1Over: "أهم من العمليات والأدوات",
        value1Desc: "أفضل الحلول تأتي من حوار الناس مع بعضهم البعض، وليس من العمليات الصارمة. يمكن للأداة أن تساعد، ولكن تعاون الفريق هو الذي يحل المشاكل.",
        value2Title: "البرمجيات العاملة",
        value2Over: "أهم من التوثيق الشامل",
        value2Desc: "هدفنا النهائي هو تقديم منتج فعال يقدم قيمة. التوثيق مفيد، لكنه ليس مقياس النجاح - المنتج هو المقياس.",
        value3Title: "التعاون مع العميل",
        value3Over: "أهم من التفاوض على العقد",
        value3Desc: "نحن نهدف إلى شراكة، وليس صفقة. من خلال العمل <em>مع</em> عملائنا باستمرار، يمكننا التكيف مع احتياجاتهم وبناء الشيء <em>الصحيح</em>، وليس فقط ما كان في العقد الأولي.",
        value4Title: "الاستجابة للتغيير",
        value4Over: "أهم من اتباع خطة",
        value4Desc: "في عالم معقد، التغيير حتمي. الخطة الجامدة هشة. يرحب فريق الأجايل بالتغيير كفرصة لتقديم منتج أفضل وأكثر صلة.",
        section3Title: "الأبراج الاثنا عشر: مبادئ الأجايل",
        section3P1: "هذه المبادئ الـ 12 هي الدليل التكتيكي لتطبيق عقلية وقيم الأجايل.",
        principle1: "أولويتنا القصوى هي إرضاء العميل من خلال التسليم المبكر والمستمر لبرمجيات ذات قيمة.",
        principle2: "الترحيب بمتطلبات التغيير، حتى في وقت متأخر من التطوير. عمليات الأجايل تسخر التغيير لصالح الميزة التنافسية للعميل.",
        principle3: "تسليم برمجيات عاملة بشكل متكرر، من أسبوعين إلى شهرين، مع تفضيل للمقياس الزمني الأقصر.",
        principle4: "يجب أن يعمل رجال الأعمال والمطورون معاً يومياً طوال المشروع.",
        principle5: "بناء المشاريع حول أفراد متحمسين. امنحهم البيئة والدعم الذي يحتاجونه، وثق بهم لإنجاز المهمة.",
        principle6: "الطريقة الأكثر كفاءة وفعالية لنقل المعلومات إلى فريق التطوير وداخله هي المحادثة وجهاً لوجه.",
        principle7: "البرمجيات العاملة هي المقياس الأساسي للتقدم.",
        principle8: "تعزز عمليات الأجايل التنمية المستدامة. يجب أن يكون الرعاة والمطورون والمستخدمون قادرين على الحفاظ على وتيرة ثابتة إلى أجل غير مسمى.",
        principle9: "الاهتمام المستمر بالتميز التقني والتصميم الجيد يعزز المرونة.",
        principle10: "البساطة - فن تقليل حجم العمل غير المنجز - ضرورية.",
        principle11: "أفضل المعماريات والمتطلبات والتصاميم تنبثق من فرق ذاتية التنظيم.",
        principle12: "على فترات منتظمة، يفكر الفريق في كيفية أن يصبح أكثر فعالية، ثم يضبط سلوكه ويوائمه وفقاً لذلك.",
        section4Title: "استكشف النظام الشمسي: أطر عمل الأجايل",
        section4P1: "هذه الأطر هي أنظمة عملية لـ \"تطبيق الأجايل\". يطبق كل واحد منها عقلية الأجايل بطريقة مختلفة. انقر على كوكب لاستكشاف تفاصيله.",
        planet1Title: "كوكب سكرم",
        planet1Desc: "إطار عمل لإدارة المشاريع المعقدة بتقدم متكرر وأدوار واضحة.",
        planet2Title: "كوكب كانبان",
        planet2Desc: "طريقة لتصوير العمل، والحد من العمل قيد التنفيذ، وإدارة التدفق.",
        planet3Title: "كوكب إكس بي (XP)",
        planet3Desc: "إطار عمل يركز على التميز التقني وممارسات هندسة البرمجيات عالية الجودة.",
        footerText: "© 2025 Zaid A. Shukur",

        // --- Scrum Page ---
        scrumPageTitle: "كوكب سكرم",
        scrumTitle: "كوكب سكرم",
        scrumSubtitle: "إطار عمل خفيف الوزن لإدارة الأعمال المعقدة.",
        scrumS1Title: "ما هو سكرم؟",
        scrumS1P1: "سكرم هو إطار عمل يساعد الأشخاص والفرق والمؤسسات على تحقيق قيمة من خلال حلول تكيفية للمشاكل المعقدة. إنه غير مكتمل بشكل متعمد، ويحدد فقط الأجزاء المطلوبة لتطبيق نظرية سكرم. يعتمد سكرم على الذكاء الجماعي للأشخاص الذين يستخدمونه.",
        scrumS1P2: "بدلاً من تزويد الأشخاص بتعليمات مفصلة، فإن قواعد سكرم توجه علاقاتهم وتفاعلاتهم.",
        scrumS2Title: "نظرية سكرم: الركائز الثلاث",
        scrumS2P1: "يعتمد سكرم على التجريبية (empiricism)، التي تؤكد أن المعرفة تأتي من التجربة واتخاذ القرارات بناءً على ما يتم ملاحظته. الركائز الثلاث للتجريبية هي:",
        scrumS2Pillar1Title: "الشفافية",
        scrumS2Pillar1Desc: "يجب أن تكون العملية والعمل مرئيين لأولئك الذين يؤدون العمل وأولئك الذين يتلقونه. مع سكرم، تستند القرارات المهمة إلى الحالة المتصورة للمصنوعات الرسمية الثلاث.",
        scrumS2Pillar2Title: "التفتيش",
        scrumS2Pillar2Desc: "يجب فحص مصنوعات سكرم والتقدم نحو الأهداف المتفق عليها بشكل متكرر ودؤوب لاكتشاف الانحرافات أو المشاكل غير المرغوب فيها.",
        scrumS2Pillar3Title: "التكيف",
        scrumS2Pillar3Desc: "إذا انحرفت أي جوانب من العملية خارج الحدود المقبولة أو إذا كان المنتج الناتج غير مقبول، فيجب تعديل العملية المطبقة أو المواد التي يتم إنتاجها.",
        scrumS3Title: "قيم سكرم الخمس",
        scrumS3P1: "يعتمد الاستخدام الناجح لسكرم على أن يصبح الناس أكثر كفاءة في عيش خمس قيم:",
        scrumS3V1: "<strong>الالتزام:</strong> يلتزم أعضاء الفريق بتحقيق هدف السبرينت ودعم بعضهم البعض.",
        scrumS3V2: "<strong>الشجاعة:</strong> يتمتع الفريق بالشجاعة للقيام بالشيء الصحيح والعمل على المشاكل الصعبة.",
        scrumS3V3: "<strong>التركيز:</strong> يركز الجميع على عمل السبرينت وأهداف فريق سكرم.",
        scrumS3V4: "<strong>الانفتاح:</strong> فريق سكرم وأصحاب المصلحة منفتحون حول جميع الأعمال والتحديات.",
        scrumS3V5: "<strong>الاحترام:</strong> يحترم أعضاء فريق سكرم بعضهم البعض كأفراد قادرين ومستقلين.",
        scrumS4Title: "فريق سكرم",
        scrumS4P1: "الوحدة الأساسية في سكرم هي فريق صغير من الأشخاص، يسمى فريق سكرم. يتكون من سكرم ماستر واحد، ومالك منتج واحد، ومطورين. ضمن فريق سكرم، لا توجد فرق فرعية أو تسلسلات هرمية.",
        scrumS4Role1Title: "مالك المنتج (Product Owner)",
        scrumS4Role1Desc: "مسؤول عن تعظيم قيمة المنتج الناتج عن عمل فريق سكرم. يدير قائمة مهام المنتج (Product Backlog).",
        scrumS4Role2Title: "سكرم ماستر (Scrum Master)",
        scrumS4Role2Desc: "مسؤول عن تأسيس سكرم كما هو محدد في دليل سكرم. يقومون بذلك عن طريق مساعدة الجميع على فهم نظرية وممارسة سكرم.",
        scrumS4Role3Title: "المطورون (Developers)",
        scrumS4Role3Desc: "الأشخاص في فريق سكرم الملتزمون بإنشاء أي جانب من جوانب \"الزيادة\" (Increment) القابلة للاستخدام في كل سبرينت. هم الذين ينجزون العمل.",
        scrumS5Title: "الأحداث الخمسة (كوكبة سكرم)",
        scrumS5P1: "السبرينت (Sprint) هو حاوية لجميع الأحداث الأخرى. كل حدث في سكرم هو فرصة رسمية لفحص وتكييف مصنوعات سكرم.",
        scrumS5E1: "<strong>السبرينت (The Sprint):</strong> حدث ثابت المدة (شهر واحد أو أقل) لخلق الاتساق. يبدأ سبرينت جديد فور انتهاء السبرينت السابق.",
        scrumS5E2: "<strong>تخطيط السبرينت (Sprint Planning):</strong> هنا يخطط الفريق للعمل الذي سيتم إنجازه خلال السبرينت.",
        scrumS5E3: "<strong>سكرم اليومي (Daily Scrum):</strong> حدث مدته 15 دقيقة للمطورين لفحص التقدم نحو هدف السبرينت وتكييف قائمة مهام السبرينت حسب الضرورة.",
        scrumS5E4: "<strong>مراجعة السبرينت (Sprint Review):</strong> الغرض هو فحص نتيجة السبرينت وتحديد التعديلات المستقبلية. يقدم فريق سكرم نتائج عملهم إلى أصحاب المصلحة الرئيسيين.",
        scrumS5E5: "<strong>الاجتماع الاسترجاعي (Sprint Retrospective):</strong> الغرض هو التخطيط لطرق زيادة الجودة والفعالية. يقوم الفريق بفحص كيف سار السبرينت الماضي.",
        scrumS6Title: "المصنوعات الثلاث",
        scrumS6P1: "تمثل مصنوعات سكرم العمل أو القيمة. وهي مصممة لزيادة شفافية المعلومات الأساسية إلى أقصى حد.",
        scrumS6A1Title: "قائمة مهام المنتج (Product Backlog)",
        scrumS6A1Desc: "قائمة ناشئة ومرتبة لما هو مطلوب لتحسين المنتج. وهي المصدر الوحيد للعمل الذي يقوم به فريق سكرم.",
        scrumS6A2Title: "قائمة مهام السبرينت (Sprint Backlog)",
        scrumS6A2Desc: "تتألف من هدف السبرينت (لماذا)، ومجموعة عناصر قائمة مهام المنتج المختارة للسبرينت (ماذا)، وخطة قابلة للتنفيذ لتقديم الزيادة (كيف).",
        scrumS6A3Title: "الزيادة (Increment)",
        scrumS6A3Desc: "خطوة ملموسة نحو هدف المنتج. كل زيادة هي إضافة إلى جميع الزيادات السابقة ويتم التحقق منها بدقة، مما يضمن أن جميع الزيادات تعمل معًا.",

        // --- Kanban Page ---
        kanbanPageTitle: "كوكب كانبان",
        kanbanTitle: "كوكب كانبان",
        kanbanSubtitle: "طريقة لتصوير العمل وإدارة التدفق.",
        kanbanS1Title: "ما هو كانبان؟",
        kanbanS1P1: "كانبان هو طريقة لإدارة وتحسين العمل عبر الأنظمة البشرية. يهدف هذا النهج إلى إدارة العمل عن طريق موازنة المتطلبات مع السعة المتاحة، وعن طريق تحسين معالجة اختناقات النظام.",
        kanbanS1P2: "الفكرة الأساسية هي **تصوير سير العمل**، و**الحد من العمل قيد التنفيذ (WIP)**، و**إدارة تدفق** العمل. إنها طريقة تطورية تعزز التحسين التدريجي.",
        kanbanS2Title: "المبادئ الأربعة الأساسية",
        kanbanS2P1: "يعتمد كانبان على أربعة مبادئ لإدارة وتحسين تدفق القيمة.",
        kanbanS2P1Title: "١. ابدأ بما تفعله الآن",
        kanbanS2P1Desc: "لا يتطلب كانبان تغييرًا جذريًا. إنه مصمم ليتم تطبيقه مباشرة على سير عملك الحالي، مع احترام الأدوار والعمليات القائمة.",
        kanbanS2P2Title: "٢. اتفق على متابعة التغيير التدريجي",
        kanbanS2P2Desc: "يوافق الفريق على أن التغييرات الجذرية واسعة النطاق غير مشجعة لأنها غالبًا ما تكون معطلة. بدلاً من ذلك، ينصب التركيز على التحسينات الصغيرة والمستمرة.",
        kanbanS2P3Title: "٣. احترم العمليات والأدوار الحالية",
        kanbanS2P3Desc: "على عكس الطرق الأخرى، لا يصف كانبان أدوارًا أو عمليات محددة. إنه يدرك أن إعدادك الحالي له قيمة ويسعى إلى تحسينه، وليس استبداله.",
        kanbanS2P4Title: "٤. شجع القيادة على جميع المستويات",
        kanbanS2P4Desc: "يشجع كانبان التحسين المستمر من الجميع في المنظمة، من المساهمين الفرديين إلى الإدارة العليا.",
        kanbanS3Title: "الممارسات الست الأساسية",
        kanbanS3P1: "هذه هي الممارسات العملية والقابلة للتنفيذ المطلوبة لتطبيق طريقة كانبان.",
        kanbanS3P1Title: "١. تصوير سير العمل",
        kanbanS3P1Desc: "هذه هي **لوحة كانبان (Kanban Board)**. من خلال إنشاء نموذج مرئي لعملك وسير عملك، يمكنك مراقبة تدفق العمل وتحديد المشاكل.",
        kanbanS3P2Title: "٢. الحد من العمل قيد التنفيذ (WIP)",
        kanbanS3P2Desc: "هذا هو حجر الزاوية في كانبان. عن طريق الحد من عدد العناصر التي يمكن أن تكون قيد التنفيذ في وقت واحد، فإنك تقلل من تعدد المهام، وتمنع الاختناقات، وتشجع نظام \"السحب\".",
        kanbanS3P3Title: "٣. إدارة التدفق",
        kanbanS3P3Desc: "الهدف هو خلق تدفق سلس وصحي للعمل. بدلاً من إدارة الأشخاص، فإنك تدير العمل أثناء تحركه عبر النظام، وتراقبه بحثًا عن العوائق.",
        kanbanS3P4Title: "٤. اجعل السياسات واضحة",
        kanbanS3P4Desc: "لا يمكنك تحسين ما لا تفهمه. اجعل القواعد واضحة (على سبيل المثال، \"ماذا يعني 'تم' لهذه الخانة؟\").",
        kanbanS3P5Title: "٥. تنفيذ حلقات التغذية الراجعة",
        kanbanS3P5Desc: "التغذية الراجعة ضرورية للتحسين. تشمل الأمثلة الاجتماعات اليومية، واجتماعات التجديد، ومراجعات تقديم الخدمة.",
        kanbanS3P6Title: "٦. التحسين بشكل تعاوني",
        kanbanS3P6Desc: "باستخدام اللوحة المرئية والبيانات من التدفق، يتعاون الفريق لتحديد وتنفيذ التحسينات على عمليتهم.",

        // --- XP Page ---
        xpPageTitle: "كوكب إكس بي (XP)",
        xpTitle: "كوكب إكس بي",
        xpSubtitle: "إطار عمل يركز على التميز التقني.",
        xpS1Title: "ما هو البرمجة القصوى (XP)؟",
        xpS1P1: "البرمجة القصوى (XP) هي إطار عمل لتطوير البرمجيات بمرونة (Agile) يهدف إلى إنتاج برمجيات عالية الجودة وحياة أفضل لفريق التطوير. XP هو الأكثر تحديدًا بين أطر عمل الأجايل فيما يتعلق بالممارسات الهندسية المناسبة لتطوير البرمجيات.",
        xpS1P2: "يطلق عليه \"القصوى\" لأنه يأخذ المبادئ والممارسات المنطقية إلى مستويات قصوى. على سبيل المثال، إذا كانت مراجعات الكود جيدة، فإن XP يقوم بمراجعات الكود *بشكل مستمر* (وهذا ما يسمى البرمجة الزوجية).",
        xpS2Title: "قيم XP الخمس",
        xpS2P1: "تعتمد XP على خمس قيم توجه عمل الفريق وتعاونه.",
        xpS2V1: "<strong>البساطة:</strong> قم بأبسط شيء يمكن أن ينجح. هذا يساعد على تجنب الهدر والتعقيد غير الضروري.",
        xpS2V2: "<strong>التواصل:</strong> يؤكد على التواصل وجهاً لوجه، والبرمجة الزوجية، والفهم المشترك بدلاً من التوثيق الثقيل.",
        xpS2V3: "<strong>التغذية الراجعة:</strong> اسعَ للحصول على التغذية الراجعة وقدمها بسرعة. هذا يأتي من الكود (عبر TDD)، ومن العميل، ومن الفريق.",
        xpS2V4: "<strong>الاحترام:</strong> يحترم أعضاء الفريق بعضهم البعض، ويحترمون العميل، والكود. هذا يعزز بيئة صحية وتعاونية.",
        xpS2V5: "<strong>الشجاعة:</strong> الشجاعة لقول الحقيقة، وإعادة هيكلة الكود (refactor)، والتكيف مع التغيير.",
        xpS3Title: "ممارسات XP الأساسية",
        xpS3H1: "ممارسات حلقة التغذية الراجعة",
        xpS3P1: "<strong>البرمجة الزوجية (Pair Programming):</strong> تتم كتابة جميع أكواد الإنتاج بواسطة مبرمجين اثنين يجلسان أمام جهاز واحد. هذا يوفر مراجعة مدمجة للكود ومشاركة المعرفة.",
        xpS3P2: "<strong>التطوير المستند إلى الاختبار (TDD):</strong> اكتب اختبارًا آليًا فاشلاً *قبل* كتابة الكود لجعله ينجح.",
        xpS3P3: "<strong>العميل في الموقع (On-site Customer):</strong> يجلس عميل حقيقي ومفوض مع الفريق بدوام كامل للإجابة على الأسئلة وتحديد الأولويات.",
        xpS3H2: "ممارسات العملية المستمرة",
        xpS3P4: "<strong>التكامل المستمر (CI):</strong> يقوم الفريق بدمج عملهم بشكل متكرر (عدة مرات في اليوم). يتم التحقق من كل عملية دمج بواسطة بناء آلي لاكتشاف الأخطاء بسرعة.",
        xpS3P5: "<strong>الإصدارات الصغيرة (Small Releases):</strong> قم بإصدار برمجيات عاملة للعملاء بزيادات صغيرة ومتكررة.",
        xpS3P6: "<strong>إعادة الهيكلة (Refactoring):</strong> تحسين تصميم الكود الحالي باستمرار دون تغيير وظائفه.",
        xpS3H3: "ممارسات الفهم المشترك",
        xpS3P7: "<strong>التصميم البسيط (Simple Design):</strong> يجب أن يكون الكود أبسط وأنظف حل يلبي المتطلبات الحالية.",
        xpS3P8: "<strong>الملكية الجماعية للكود (Collective Code Ownership):</strong> يمكن لأي زوج من المبرمجين تحسين أي كود في أي وقت.",
        xpS3P9: "<strong>معايير الترميز (Coding Standards):</strong> يتفق الفريق على مجموعة مشتركة من قواعد الترميز ويتبعها.",
        xpS3H4: "ممارسات رفاهية الفريق",
        xpS3P10: "<strong>وتيرة مستدامة (Sustainable Pace):</strong> يعمل الفريق بوتيرة يمكنهم الحفاظ عليها إلى أجل غير مسمى، وتجنب الإرهاق والعمل الإضافي.",
    },
    // Kurdish (Sorani)
    ku: {
        langName: "کوردی",
        // --- Homepage ---
        pageTitle: "گەردوونی ئاجایل",
        heroTitle: "گەردوونی ئاجایل",
        heroSubtitle: "ڕێبەری کۆمپانیاکەمان بۆ شێوازێکی کاری زیاتر هاوبەش، نەرم و کاریگەر.",
        section1Title: "هەوری بنەڕەتی: هزری ئاجایل چییە؟",
        section1P1: "ئاجایل زۆر زیاترە لە کۆمەڵێک پرۆسە؛ ئەوە <strong>هزرێکە</strong>. گۆڕانکارییەکی بنەڕەتییە لە شێوازی مامەڵەکردنمان لەگەڵ کارەکانمان. بریتییە لە سەیرکردنی ئاڵنگاری و پڕۆژەکان لە ڕوانگەی خۆگونجاندن، هاوکاری و باشترکردنی بەردەوام.",
        section1H3_1: "هزری جێگیر بەرامبەر هزری ئاجایل",
        section1P2: "<strong>هزری جێگیری</strong> نەریتی (وەک لە پڕۆژەکانی وۆتەرفۆڵ) سەیری شکست دەکات وەک کۆتایی. پلانەکان ڕەقن، ڕۆڵەکان دابڕاون، و گۆڕانکاری وەک کێشەیەک سەیر دەکرێت.",
        section1P3: "<strong>هزری ئاجایل</strong> گۆڕانکاری وەک سوودێکی کێبڕکێی لە باوەش دەگرێت. شکست وەک دەرفەتێکی فێربوون دەبینێت. ڕێز لە هاوکاری دەگرێت، متمانەی بە تیمەکان هەیە کە خۆیان ڕێکبخەن، و بە شێوەیەکی بەردەوام تیشک دەخاتە سەر گەیاندنی <em>بەها</em> بە کڕیار، نەک تەنها تەواوکردنی لیستێکی ئەرک.",
        section1H3_2: "دوو لایەنی ئاجایل",
        section1P4: "<strong>١. \"بوون بە ئاجایل\" (هزر):</strong> ئەمە 'بۆچی'یە. کەلتوور و بەها و بنەماکانمانە. بریتییە لە ڕێزگرتن، ئازایەتی، و هاوکاری.",
        section1P5: "<strong>٢. \"کردنی ئاجایل\" (پراکتیکەکان):</strong> ئەمە 'چۆن'ە. چوارچێوەکانە (وەک سکرەم، کانبان)، ڕووداوەکانە (وەک کۆبوونەوەی ڕۆژانە، ڕیترۆسپێکتیڤ)، و ئەو پراکتیکانەن کە هزرەکە دەهێننە ژیان.",
        section2Title: "ئەستێرە ڕێنماییەکان: ٤ بەهای ئاجایل",
        section2P1: "بەیاننامەی ئاجایل لەسەر چوار بەهای سەرەki بنیات نراوە. وشەسازییەکە دیاریکراوە: \"ئێمە بەهای شتەکانی لای چەپ <em>زیاتر</em> دادەنێین،\" کە ئەوە ناگەیەنێت شتەکانی lای ڕاست هیچ بەهایەکیان نییە.",
        value1Title: "تاکەکان و کارلێکەکان",
        value1Over: "گرنگترن لە پرۆسە و ئامرازەکان",
        value1Desc: "باشترین چارەسەرەکان لە قسەکردنی خەڵکەوە لەگەڵ یەکتر سەرچاوە دەگرن، نەک لە پرۆسە ڕەقەکانەوە. ئامرازێک دەتوانێت یارمەتیدەر بێت، بەڵام هاوکاری تیمەکەیە کە کێشەکان چارەسەر دەکات.",
        value2Title: "نەرمەکاڵای کارا",
        value2Over: "گرنگترە لە بەڵگەنامەی تێروتەسەل",
        value2Desc: "ئامانجی کۆتاییمان گەیاندنی بەرهەمێکی کارایە کە بەها پێشکەش دەکات. بەڵگەنامە بەسوودە، بەڵام پێوەری سەرکەوتن نییە—بەرهەمەکە پێوەرە.",
        value3Title: "هاوکاری لەگەڵ کڕیar",
        value3Over: "گرنگترە لە دانوستانی گرێبەست",
        value3Desc: "ئامانجمان هاوبەشییە، نەک مامەڵەیەک. بە کارکردن <em>لەگەڵ</em> کڕیارەکانمان بە شێوەیەکی بەردەوام، دەتوانین لەگەڵ پێداویستییەکانیان خۆمان بگوونجێنین و شتە <em>ڕاستەکە</em> دروست بکەین، نەک تەنها ئەوەی لە گرێبەستی سەرەتاییدا بوو.",
        value4Title: "وەڵامدانەوەی گۆڕانکاری",
        value4Over: "گرنگترە لە پەیڕەوکردنی پلانێک",
        value4Desc: "لە جیهانێکی ئاڵۆزدا، گۆڕانکاری نادیدە نییە. پلانێکی ڕەق شلۆقە. تیمی ئاجایل پێشوازی لە گۆڕانکاری دەکات وەک دەرفەتێک بۆ گەیاندنی بەرهەمێکی باشتر و پەیوەندیدارتر.",
        section3Title: "١٢ کۆئەستێرەکە: بنەماکانی ئاجایل",
        section3P1: "ئەم ١٢ بنەمایە ڕێبەری تاکتیکین بۆ جێبەجێکردنی هزر و بەهاکانی ئاجایل.",
        principle1: "ئەرکی سەرەکیمان ڕازیکردنی کڕیارە لە ڕێگەی گەیاندنی زوو و بەردەwami نەرمەکاڵای بەهادار.",
        principle2: "پێشوازیکردن لە گۆڕینی داواکارییەکان، تەنانەت لە قۆناغێکی درەنگی پەرەپێداندا. پرۆسەکانی ئاجایل گۆڕانکاری بۆ سوودی کێبڕکێی کڕیar بەکاردەهێنن.",
        principle3: "گەیاندنی نەرمەکاڵای کارا بە شێوەیەکی بەردەوام، لە چەند هەftەیەکەوە بۆ چەند مانگێک، بە باشتر زانینی ماوەی کورتتر.",
        principle4: "پیاوانی کار و پەرەپێدەران دەبێت ڕۆژانە پێکەوە کاربکەن بە درێژایی پڕۆژەکە.",
        principle5: "پڕۆژەکان لە دەوری تاکە هاندراوەکان بنیات بنێن. ژینگە و پشتیوانی پێویستیان پێ بدەن، و متمانەیان پێ بکەن بۆ ئەنجامدانی کارەکە.",
        principle6: "کاراترین و کاریگەرترین شێوازی گەیاندنی زانیاری بە تیمێکی پەرەپێدان و لەناو تیمدا، گفتوgۆی ڕووبەڕووە.",
        principle7: "نەرمەکاڵای کارا پێوەری سەرەki پێشکەوتنە.",
        principle8: "پرۆسەکانی ئاجایل پەرەپێدانی بەردەوام پەرە پێدەدەن. سپۆنسەرەکان، پەرەپێدەران، و بەکارهێنەران دەبێت بتوانن خێراییەکی جێگیر بۆ ماوەیەکی نادیار بپارێزن.",
        principle9: "گرنگیپێدانی بەردەوام بە نایابی تەکنیکی و دیزاینی باش، ئاجیلیتی بەرز دەکاتەوە.",
        principle10: "سادەیی—هونەری زۆرترین ڕادەی کاری نەکراو—زۆر گرنگە.",
        principle11: "باشترین تەلارسازی، داواکارییەکان، و دیزاینەکان لە تیمە خۆ-ڕێکخەرەکانەوە سەرچاوە دەگرن.",
        principle12: "لە ماوەی دیاریکراودا، تیمەکە بیر لەوە دەکاتەوە چۆن کاریگەرتر بێت، پاشان ڕەفتاری خۆی ڕێکدەخات و دەگوونجێنێت.",
        section4Title: "گەشتی سیستەمی خۆر بکە: چوارچێوەکانی ئاجایل",
        section4P1: "ئەم چوارچێوانە سیستەمی پراکتیکین بۆ \"کردنی ئاجایل\". هەریەکەیان هزری ئاجایل بە شێوازێکی جیاواز جێبەجێ دەکات. کلیک لەسەر هەسارەیەک بکە بۆ بینینی وردەکارییەکانی.",
        planet1Title: "هەسارەی سکرەم",
        planet1Desc: "چوارچێوەیەک بۆ بەڕێوەبردنی پڕۆژە ئاڵۆزەکان بە پێشکەوتنی دووبارەبووەوە و ڕۆڵی ڕوون.",
        planet2Title: "هەسارەی کانبان",
        planet2Desc: "ڕێگایەک بۆ بینینی کار، سنووردارکردنی کاری لە حالەتی جێبەجێکردن، و بەڕێوەبردنی ڕۆیشتن.",
        planet3Title: "هەسارەی ئێکس پی (XP)",
        planet3Desc: "چوارچێوەیەک کە تیشک دەخاتە سەر نایابی تەکنیکی و پراکتیکەکانی ئەندازیاری نەرمەکاڵای کوالێتی بەرز.",
        footerText: "© 2025 Zaid A. Shukur",

        // --- Scrum Page ---
        scrumPageTitle: "هەسارەی سکرەم",
        scrumTitle: "هەسارەی سکرەم",
        scrumSubtitle: "چوارچێوەیەکی سووک بۆ بەڕێوەبردنی کاری ئاڵۆز.",
        scrumS1Title: "سکرەم چییە؟",
        scrumS1P1: "سکرەم چوارچێوەیەکە یارمەتی خەڵک، تیمەکان، و ڕێکخراوەکان دەدات بۆ بەرهەمهێنانی بەها لە ڕێگەی چارەسەری خۆگونجێنەر بۆ کێشە ئاڵۆزەکان. بە ئەنقەست ناتەواوە، تەنها ئەو بەشانە پێناسە دەکات کە بۆ جێبەجێکردنی تیۆری سکرەم پێویستن. سکرەم لەسەر بنەمای زیرەکیی بەکۆمەڵی ئەو کەسانە بنیات نراوە کە بەکاریدەهێنن.",
        scrumS1P2: "لەبری پێدانی ڕێنمایی ورد بە خەڵک، یاساکانی سکرەم ڕێنمایی پەیوەندی و کارلێکەکانیان دەکەن.",
        scrumS2Title: "تیۆری سکرەم: سێ کۆڵەکەکە",
        scrumS2P1: "سکرەم لەسەر بنەمای ئەزموونگەری (empiricism) دامەزراوە، کە جەخت لەوە دەکاتەوە کە زانیاری لە ئەزموون و بڕیاردان لەسەر بنەمای ئەوەی تێبینی دەکرێت بەدەست دێت. سێ کۆڵەکەی ئەزموونگەری بریتین لە:",
        scrumS2Pillar1Title: "ڕوونی (Transparency)",
        scrumS2Pillar1Desc: "پێویستە پرۆسە و کارەکان بۆ ئەوانەی کارەکە ئەنجام دەدەن و ئەوانەی وەریدەگرن دیار بن. لە سکرەمدا، بڕیارە گرنگەکان لەسەر بنەمای دۆخی هەستپێکراوی سێ دەستکەوتە فەرمییەکەیەتی.",
        scrumS2Pillar2Title: "پشکنین (Inspection)",
        scrumS2Pillar2Desc: "پێویستە دەستکەوتەکانی سکرەم و پێشکەوتن بەرەو ئامانجە ڕێککەوتووەکان بە شێوەیەکی بەردەوام و وردبینانە بپشکنرێن بۆ دۆزینەوەی لادان یان کێشە نەخوازراوەکان.",
        scrumS2Pillar3Title: "خۆگونجاندن (Adaptation)",
        scrumS2Pillar3Desc: "ئەگەر هەر لایەنێکی پرۆسەیەک لە دەرەوەی سنوورە قبوڵکراوەکان لابدات یان ئەگەر بەرهەمی کۆتایی قبوڵنەکراو بێت، پێویستە پرۆسەی جێبەجێکراو یان ئەو مادانەی بەرهەم دەهێنرێن ڕێکبخرێنەوە.",
        scrumS3Title: "پێنج بەهاکەی سکرەم",
        scrumS3P1: "بەکارهێنانی سەرکەوتووانەی سکرەم بەندە بەوەی کە خەڵک شارەزاتر بن لە ژیانکردن بەپێی پێنج بەها:",
        scrumS3V1: "<strong>پابەندبوون (Commitment):</strong> ئەندامانی تیم پابەندن بە постигни ئامانجی سپرینت و پشتیوانیکردنی یەکتر.",
        scrumS3V2: "<strong>ئازایەتی (Courage):</strong> تیمەکە ئازایەتی ئەوەی هەیە کە کاری ڕاست بکات و لەسەر کێشە سەختەکان کار بکات.",
        scrumS3V3: "<strong>فۆکەس (Focus):</strong> هەمووان تیشک دەخەنە سەر کاری سپرینت و ئامانجەکانی تیمی سکرەم.",
        scrumS3V4: "<strong>کراوەیی (Openness):</strong> تیمی سکرەم و خاوەن بەرژەوەندییەکانیان کراوە بن دەربارەی هەموو کارەکان و ئاڵنگارییەکان.",
        scrumS3V5: "<strong>ڕێزگرتن (Respect):</strong> ئەندامانی تیمی سکرەم ڕێز لە یەکتر دەگرن وەک تاکێکی بەتوانا و سەربەخۆ.",
        scrumS4Title: "تیمی سکرەم",
        scrumS4P1: "یەکەی بنەڕەتی سکرەم تیمێکی بچووکی خەڵکە، کە پێی دەوترێت تیمی سکرەم. پێکدێت لە یەک سکرەم ماستەر، یەک خاوەن بەرهەم، و پەرەپێدەران. لەناو تیمی سکرەمدا، هیچ تیمێکی لاوەکی یان پلەبەندییەک نییە.",
        scrumS4Role1Title: "خاوەن بەرهەم (Product Owner)",
        scrumS4Role1Desc: "بەرپرسە لە زۆرترین بەها بەرهەمهێنراو لە بەرهەمەکە کە لە ئەنجامی کاری تیمی سکرەمەوە بەدەست دێت. بەڕێوەبردنی لیستی کاری بەرهەم (Product Backlog) دەکات.",
        scrumS4Role2Title: "سکرەم ماستەر (Scrum Master)",
        scrumS4Role2Desc: "بەرپرسە لە دامەزراندنی سکرەم وەک لە ڕێبەری سکرەمدا پێناسە کراوە. ئەمەش بە یارمەتیدانی هەمووان بۆ تێگەیشتن لە تیۆری و پراکتیکی سکرەم ئەنجام دەدات.",
        scrumS4Role3Title: "پەرەپێدەران (Developers)",
        scrumS4Role3Desc: "ئەو کەسانەن لە تیمی سکرەمدا کە پابەندن بە دروستکردنی هەر لایەنێکی 'زیادکراو' (Increment)ی بەکارهێنراو لە هەر سپرینتێکدا. ئەوانن کە کارەکە ئەنجام دەدەن.",
        scrumS5Title: "٥ ڕووداوەکە (کۆئەستێرەی سکرەم)",
        scrumS5P1: "سپرینت (Sprint) دەفرێکە بۆ هەموو ڕووداوەکانی تر. هەر ڕووداوێک لە سکرەمدا دەرفەتێکی فەرمییە بۆ پشکنین و خۆگونجاندنی دەستکەوتەکانی سکرەم.",
        scrumS5E1: "<strong>سپرینت (The Sprint):</strong> ڕووداوێکی ماوە دیاریکراوە (یەک مانگ یان کەمتر) بۆ دروستکردنی جێگیری. سپرینتێکی نوێ دەستبەجێ دوای کۆتایی هاتنی سپرینتی پێشوو دەست پێدەکات.",
        scrumS5E2: "<strong>پلاندانانی سپرینت (Sprint Planning):</strong> لێرەدا تیمەکە پلانی ئەو کارە دادەنێت کە دەبێت لە ماوەی سپرینتدا ئەنجام بدرێت.",
        scrumS5E3: "<strong>سکرەمی ڕۆژانە (Daily Scrum):</strong> ڕووداوێکی ١٥ خولەکییە بۆ پەرەپێدەران تا پێشکەوتن بەرەو ئامانجی سپرینت بپشکنن و لیستی کاری سپرینت بەپێی پێویست بگونجێنن.",
        scrumS5E4: "<strong>پێداچوونەوەی سپرینت (Sprint Review):</strong> ئامانج لێی پشکنینی دەرەنجامی سپرینت و دیاریکردنی گونجاندنەکانی داهاتووە. تیمی سکرەم ئەنجامی کارەکانیان بە خاوەن بەرژەوەندییە سەرەکییەکان نیشان دەدەن.",
        scrumS5E5: "<strong>ڕیترۆسپێکتیڤی سپرینت (Sprint Retrospective):</strong> ئامانج لێی پلاندانانە بۆ ڕێگاکانی زیادکردنی کوالیتی و کاریگەری. تیمەکە پشکنین دەکات کە سپرینتی ڕابردوو چۆن بەڕێوەچوو.",
        scrumS6Title: "٣ دەستکەوتەکە (Artifacts)",
        scrumS6P1: "دەستکەوتەکانی سکرەم نوێنەرایەتی کار یان بەها دەکەن. ئەوان وا دیزاین کراون کە زۆرترین ڕوونی بۆ زانیارییە سەرەکییەکان دابین بکەن.",
        scrumS6A1Title: "لیستی کاری بەرهەم (Product Backlog)",
        scrumS6A1Desc: "لیستێکی نوێبووەوە و ڕێکخراوە لەوەی کە پێویستە بۆ باشترکردنی بەرهەمەکە. تاکە سەرچاوەی کارە کە لەلایەن تیمی سکرەمەوە ئەنجام دەدرێت.",
        scrumS6A2Title: "لیستی کاری سپرینت (Sprint Backlog)",
        scrumS6A2Desc: "پێکدێت لە ئامانجی سپرینت (بۆچی)، کۆمەڵێک لە کارەکانی لیستی بەرهەم کە بۆ سپرینت هەڵبژێردراون (چی)، و پلانێکی کرداری بۆ گەیاندنی زیادکراوەکە (چۆن).",
        scrumS6A3Title: "زیادکراو (Increment)",
        scrumS6A3Desc: "هەنگاوێکی کۆنکرێتییە بەرەو ئامانجی بەرهەم. هەر زیادکراوێک زیاکردنێکە بۆ سەرجەم زیادکراوەکانی پێشوو و بە وردی پشکنراوە، دڵنیایی دەدات کە هەموو زیادکراوەکان پێکەوە کاردەکەن.",

        // --- Kanban Page ---
        kanbanPageTitle: "هەسارەی کانبان",
        kanbanTitle: "هەسارەی کانبان",
        kanbanSubtitle: "ڕێگایەک بۆ بینینی کار و بەڕێوەبردنی ڕۆیشتن.",
        kanbanS1Title: "کانبان چییە؟",
        kanbanS1P1: "کانبان ڕێگایەکە بۆ بەڕێوەبردن و باشترکردنی کار لە سیستەمە مرۆییەکاندا. ئەم ڕێبازە ئامانجی بەڕێوەبردنی کارە لە ڕێگەی هاوسەنگکردنی داواکارییەکان لەگەڵ توانای بەردەست، و بە باشترکردنی مامەڵەکردن لەگەڵ تەنگژەکانی ئاستی سیستەم.",
        kanbanS1P2: "بیری سەرەکی بریتییە لە **بینینیکردنی ڕۆیشتنی کار**، **سنووردارکردنی کاری لە حالەتی جێبەجێکردن (WIP)**، و **بەڕێوەبردنی ڕۆیشتنی** کار. ئەمە ڕێگایەکی پەرەسەندنە کە هانی باشترکردنی پلە بە پلە دەدات.",
        kanbanS2Title: "چوار بنەما سەرەکییەکە",
        kanbanS2P1: "کانبان لەسەر چوار بنەما بنیات نراوە بۆ بەڕێوەبردن و باشترکردنی ڕۆیشتنی بەها.",
        kanbanS2P1Title: "١. بەوە دەست پێبکە کە ئێستا دەیکەیت",
        kanbanS2P1Desc: "کانبان پێویستی بە گۆڕانکاری ڕیشەیی نییە. وا دیزاین کراوە کە ڕاستەوخۆ لەسەر ڕۆیشتنی کاری ئێستات جێبەجێ بکرێت، لەگەڵ ڕێزگرتن لە ڕۆڵ و پرۆسە هەنووکەییەکان.",
        kanbanS2P2Title: "٢. ڕازی بن لەسەر بەدواداچوونی گۆڕانکاری پلە بە پلە",
        kanbanS2P2Desc: "تیمەکە ڕازی دەبێت کە گۆڕانکاری گەورە و ڕیشەیی هان نادرێت چونکە زۆرجار تێکدەرن. لەبری ئەوە، جەخت لەسەر باشترکردنی بچووک و بەردەوام دەکرێتەوە.",
        kanbanS2P3Title: "٣. ڕێز لە پرۆسە و ڕۆڵە هەنووکەییەکان بگرن",
        kanbanS2P3Desc: "بە پێچەوانەی ڕێگا تر، کانبان ڕۆڵ یان پرۆسەی دیاریکراو دانانێت. دان بەوەدا دەنێت کە سیستەمی ئێستات بەهای هەیە و هەوڵی باشترکردنی دەدات، نەک گۆڕینی.",
        kanbanS2P4Title: "٤. هاندانی سەرکردایەتی لە هەموو ئاستەکان",
        kanbanS2P4Desc: "کانبان هانی باشترکردنی بەردەوام دەدات لە هەموو کەسێک لە ڕێکخراوەکەدا، لە بەشداربووانی تاکەکەسییەوە تا بەڕێوەبەرایەتی باڵا.",
        kanbanS3Title: "شەش پراکتیکە سەرەکییەکە",
        kanbanS3P1: "ئەمانە پراکتیکە کرداری و جێبەجێکراوەکانن کە پێویستن بۆ جێبەجێکردنی ڕێگای کانبان.",
        kanbanS3P1Title: "١. بینینیکردنی ڕۆیشتنی کار",
        kanbanS3P1Desc: "ئەمە **تەختەی کانبان (Kanban Board)**ە. بە دروستکردنی مۆدێلێکی بینراو لە کار و ڕۆیشتنی کارەکەت، دەتوانیت چاودێری ڕۆیشتنی کار بکەیت و کێشەکان دیاری بکەیت.",
        kanbanS3P2Title: "٢. سنووردارکردنی کاری لە حالەتی جێبەجێکردن (WIP)",
        kanbanS3P2Desc: "ئەمە بەردی بناغەی کانبانە. بە سنووردارکردنی ژمارەی ئەو کارانەی کە دەکرێت لە یەک کاتدا لە حالەتی جێبەجێکردندا بن، فرەئەرکی کەم دەکەیتەوە، ڕێگری لە تەنگژەکان دەکەیت، و هانی سیستەمی \"ڕاکێشان\" دەدەیت.",
        kanbanS3P3Title: "٣. بەڕێوەبردنی ڕۆیشتن",
        kanbanS3P3Desc: "ئامانج بریتییە لە دروستکردنی ڕۆیشتنێکی هێمن و تەندروستی کار. لەبری بەڕێوەبردنی خەڵک، تۆ کارەکە بەڕێوە دەبەیت کاتێک بەناو سیستەمەکەدا دەڕوات، و چاودێری بەربەستەکان دەکەیت.",
        kanbanS3P4Title: "٤. سیاسەتەکان بە ڕوونی دەربخە",
        kanbanS3P4Desc: "ناتوانیت شتێک باشتر بکەیت کە لێی تێناگەیت. یاساکان بە ڕوونی دەربخە (بۆ نموونە، \"'تەواوبوو' بۆ ئەم ستوونە مانای چییە؟\").",
        kanbanS3P5Title: "٥. جێبەجێکردنی بازنەی پێداچوونەوە (Feedback Loops)",
        kanbanS3P5Desc: "پێداچوونەوە زۆر گرنگە بۆ باشترکردن. نموونەکان بریتین لە کۆبوونەوەی ڕۆژانە، کۆبوونەوەی پڕکردنەوە، و پێداچوونەوەی گەیاندنی خزمەت.",
        kanbanS3P6Title: "٦. باشترکردنی بە هاوکاری",
        kanbanS3P6Desc: "بە بەکارهێنانی تەختە بینراوەکە و داتاکان لە ڕۆیشتنەکەوە، تیمەکە هاوکاری دەکات بۆ دیاریکردن و جێبەجێکردنی باشترکردنەکان لە پرۆسەکەیاندا.",

        // --- XP Page ---
        xpPageTitle: "هەسارەی ئێکس پی (XP)",
        xpTitle: "هەسارەی ئێکس پی",
        xpSubtitle: "چوارچێوەیەک کە جەخت لەسەر نایابی تەکنیکی دەکاتەوە.",
        xpS1Title: "بەرنامەسازیی ئێکسپتریم (XP) چییە؟",
        xpS1P1: "بەرنامەسازیی ئێکسپتریم (XP) چوارچێوەیەکی پەرەپێدانی نەرمەکاڵای ئاجایلە کە ئامانجی بەرهەمهێنانی نەرمەکاڵای کوالیتی بەرزتر و کوالیتی ژیانێکی بەرزترە بۆ تیمی پەرەپێدان. XP دیاریکراوترین چوارچێوەی ئاجایلە سەبارەت بە پراکتیکە ئەندازیارییە گونجاوەکان بۆ پەرەپێدانی نەرمەکاڵا.",
        xpS1P2: "پێی دەوترێت \"ئێکستریم\" (توندڕەو) چونکە بنەما و پراکتیکە باوەکان دەباتە ئاستی توندڕەوی. بۆ نموونە، ئەگەر پێداچوونەوەی کۆد باش بێت، XP پێداچوونەوەی کۆد *بە شێوەیەکی بەردەوام* دەکات (ئەمە پێی دەوترێت پرۆگرامی جووتە).",
        xpS2Title: "پێنج بەهاکەی XP",
        xpS2P1: "XP لەسەر پێنج بەها بنیات نراوە کە ڕێنمایی کار و هاوکاری تیمەکە دەکەن.",
        xpS2V1: "<strong>سادەیی (Simplicity):</strong> سادەترین شت بکە کە لەوانەیە کار بکات. ئەمە یارمەتیدەرە بۆ دوورکەوتنەوە لە بەفیڕۆدان و ئاڵۆزی ناپێویست.",
        xpS2V2: "<strong>پەیوەندی (Communication):</strong> جەخت لەسەر پەیوەندی ڕووبەڕوو، پرۆگرامی جووتە، و تێگەیشتنی هاوبەش دەکاتەوە لەبری بەڵگەنامەی قورس.",
        xpS2V3: "<strong>پێداچوونەوە (Feedback):</strong> بە خێرایی داوای پێداچوونەوە بکە و پێشکەشی بکە. ئەمە لە کۆدەکەوە دێت (لە ڕێگەی TDD)، لە کڕیارەوە، و لە تیمەکەوە.",
        xpS2V4: "<strong>ڕێزگرتن (Respect):</strong> ئەندامانی تیم ڕێز لە یەکتر، کڕیار، و کۆدەکە دەگرن. ئەمە ژینگەیەکی تەندروست و هاوکارانە پەرە پێدەدات.",
        xpS2V5: "<strong>ئازایەتی (Courage):</strong> ئازایەتی بۆ گوتنی ڕاستی، ڕێکخستنەوەی کۆد (refactor)، و خۆگونجاندن لەگەڵ گۆڕانکاری.",
        xpS3Title: "پراکتیکە سەرەکییەکانی XP",
        xpS3H1: "پراکتیکەکانی بازنەی پێداچوونەوە",
        xpS3P1: "<strong>پرۆگرامی جووتە (Pair Programming):</strong> هەموو کۆدی بەرهەمهێنان لەلایەن دوو پرۆگرامەرەوە دەنووسرێت کە لەسەر یەک ئامێر دانیشتوون. ئەمە پێداچوونەوەی کۆدی ناوەکی و هاوبەشکردنی زانیاری دابین دەکات.",
        xpS3P2: "<strong>پەرەپێدانی تاقیکاری-محوەر (TDD):</strong> تاقیکارییەکی ئۆتۆماتیکی شکستخواردوو بنووسە *پێش* ئەوەی ئەو کۆدە بنووسیت کە وای لێدەکات سەرکەوتوو بێت.",
        xpS3P3: "<strong>کڕیاری ناوخۆیی (On-site Customer):</strong> کڕیارێکی ڕاستەقینە و خاوەن دەسەڵات بە شێوەی تەواو کات لەگەڵ تیمەکە دادەنیشێت بۆ وەڵامدانەوەی پرسیارەکان و دانانی ئەرکە لەپێشینەکان.",
        xpS3H2: "پراکتیکەکانی پرۆسەی بەردەوام",
        xpS3P4: "<strong>تێکەڵکردنی بەردەوام (CI):</strong> تیمەکە کارەکانیان بە شێوەیەکی بەردەوام تێکەڵ دەکەن (چەندین جار لە ڕۆژێکدا). هەر تێکەڵکردنێک لە ڕێگەی دروستکردنێکی ئۆتۆماتیکییەوە پشتڕاست دەکرێتەوە بۆ دۆزینەوەی هەڵەکان بە خێرایی.",
        xpS3P5: "<strong>بڵاوکردنەوەی بچووک (Small Releases):</strong> نەرمەکاڵای کارا بە شێوەی زیادکردنی بچووک و بەردەوام بڵاوبکەرەوە بۆ کڕیاران.",
        xpS3P6: "<strong>ڕێکخستنەوە (Refactoring):</strong> بە شێوەیەکی بەردەوام دیزاینی کۆدی هەبوو باشتر بکە بەبێ گۆڕینی کاراییەکەی.",
        xpS3H3: "پراکتیکەکانی تێگەیشتنی هاوبەش",
        xpS3P7: "<strong>دیزاینی سادە (Simple Design):</strong> پێویستە کۆدەکە سادەترین و پاکترین چارەسەر بێت کە داواکارییە هەنووکەییەکان جێبەجێ دەکات.",
        xpS3P8: "<strong>خاوەندارێتی بەکۆمەڵی کۆد (Collective Code Ownership):</strong> هەر جووتێک لە پرۆگرامەران دەتوانن هەر کۆدێک لە هەر کاتێکدا باشتر بکەن.",
        xpS3P9: "<strong>ستانداردی کۆدنووسین (Coding Standards):</strong> تیمەکە لەسەر کۆمەڵێک یاسای هاوبەشی کۆدنووسین ڕێک دەکەون و پەیڕەوی دەکەن.",
        xpS3H4: "پراکتیکەکانی خۆشگوزەرانی تیم",
        xpS3P10: "<strong>خێرایی بەردەوام (Sustainable Pace):</strong> تیمەکە بە خێراییەک کار دەکات کە بتوانن بۆ ماوەیەکی نادیار بەردەوامی پێ بدەن، دوور دەکەونەوە لە ماندووبوون و کاری زیادە.",
    },
    // Persian (Farsi)
    fa: {
        langName: "فارسی",
        // --- Homepage ---
        pageTitle: "جهان اجایل",
        heroTitle: "جهان اجایل",
        heroSubtitle: "راهنمای شرکت ما برای روشی مشارکتی‌تر، انعطاف‌پذیرتر و مؤثرتر برای کار.",
        section1Title: "سحابی هسته: تفکر اجایل چیست؟",
        section1P1: "اجایل بسیار فراتر از مجموعه‌ای از فرآیندها است؛ این یک <strong>ذهنیت</strong> است. این یک تغییر اساسی در نحوه نگرش ما به کارمان است. این در مورد مشاهده چالش‌ها و پروژه‌ها از دریچه سازگاری، همکاری و بهبود مستمر است.",
        section1H3_1: "ذهنیت ثابت در مقابل ذهنیت اجایل",
        section1P2: "یک <strong>ذهنیت ثابت</strong> سنتی (مانند پروژه‌های آبشاری) شکست را نهایی می‌بیند. برنامه‌ها سفت و سخت هستند، نقش‌ها جدا از هم هستند، و تغییر به عنوان یک مشکل دیده می‌شود.",
        section1P3: "یک <strong>ذهنیت اجایل</strong> تغییر را به عنوان یک مزیت رقابتی می‌پذیرد. شکست را فرصتی برای یادگیری می‌بیند. برای همکاری ارزش قائل است، به تیم‌ها اعتماد می‌کند تا خودسازماندهی کنند، و بی‌وقفه بر ارائه <em>ارزش</em> به مشتری تمرکز می‌کند، نه فقط تکمیل یک لیست وظایف.",
        section1H3_2: "دو روی اجایل",
        section1P4: "<strong>۱. \"اجایل بودن\" (ذهنیت):</strong> این 'چرا' است. این فرهنگ، ارزش‌ها و اصول ماست. این در مورد احترام، شجاعت و همکاری است.",
        section1P5: "<strong>۲. \"انجام اجایل\" (روش‌ها):</strong> این 'چگونه' است. این چارچوب‌ها (مانند اسکرام، کانبان)، رویدادها (مانند اسکرام‌های روزانه، بازبینی‌ها) و روش‌هایی هستند که ذهنیت را زنده می‌کنند.",
        section2Title: "ستارگان راهنما: ۴ ارزش اجایل",
        section2P1: "مانیفست اجایل بر چهار ارزش اصلی بنا شده است. جمله بندی مشخص است: \"ما برای موارد سمت چپ <em>بیشتر</em> ارزش قائل هستیم\"، که به این معنی نیست که موارد سمت راست ارزشی ندارند.",
        value1Title: "افراد و تعاملات",
        value1Over: "بر فرآیندها و ابزارها",
        value1Desc: "بهترین راه‌حل‌ها از صحبت کردن افراد با یکدیگر به دست می‌آید، نه از فرآیندهای سفت و سخت. یک ابزار می‌تواند کمک کند، اما این همکاری تیم است که مشکلات را حل می‌کند.",
        value2Title: "نرم‌افزار کارا",
        value2Over: "بر مستندات جامع",
        value2Desc: "هدف نهایی ما ارائه محصولی کاربردی است که ارزش ارائه دهد. مستندات مفید است، اما مقیاس موفقیت نیست - محصول مقیاس است.",
        value3Title: "همکاری با مشتری",
        value3Over: "بر مذاکره قرارداد",
        value3Desc: "ما به دنبال مشارکت هستیم، نه یک معامله. با کار کردن <em>با</em> مشتریانمان به طور مداوم، می‌توانیم با نیازهای آنها سازگار شویم و چیز <em>درست</em> را بسازیم، نه فقط آنچه در قرارداد اولیه بود.",
        value4Title: "پاسخ به تغییر",
        value4Over: "بر پیروی از یک برنامه",
        value4Desc: "در دنیایی پیچیده، تغییر اجتناب‌ناپذیر است. یک برنامه سفت و سخت شکننده است. یک تیم اجایل از تغییر به عنوان فرصتی برای ارائه محصولی بهتر و مرتبط‌تر استقبال می‌کند.",
        section3Title: "۱۲ صورت فلکی: اصول اجایل",
        section3P1: "این ۱۲ اصل راهنمای تاکتیکی برای به کار بستن ذهنیت و ارزش‌های اجایل هستند.",
        principle1: "بالاترین اولویت ما رضایت مشتری از طریق تحویل زودهنگام و مستمر نرم‌افزار ارزشمند است.",
        principle2: "از تغییر نیازمندی‌ها استقبال کنید، حتی در اواخر توسعه. فرآیندهای اجایل تغییر را برای مزیت رقابتی مشتری مهار می‌کنند.",
        principle3: "نرم‌افزار کارا را به طور مکرر تحویل دهید، از چند هفته تا چند ماه، با ترجیح به بازه زمانی کوتاه‌تر.",
        principle4: "اهل کسب و کار و توسعه‌دهندگان باید روزانه در طول پروژه با هم کار کنند.",
        principle5: "پروژه‌ها را حول افراد با انگیزه بسازید. محیط و پشتیبانی مورد نیازشان را به آنها بدهید و به آنها اعتماد کنید تا کار را انجام دهند.",
        principle6: "کارآمدترین و مؤثرترین روش انتقال اطلاعات به و در یک تیم توسعه، گفتگوی چهره به چهره است.",
        principle7: "نرم‌افزار کارا مقیاس اصلی پیشرفت است.",
        principle8: "فرآیندهای اجایل توسعه پایدار را ترویج می‌کنند. حامیان مالی، توسعه‌دهندگان و کاربران باید بتوانند سرعتی ثابت را به طور نامحدود حفظ کنند.",
        principle9: "توجه مستمر به برتری فنی و طراحی خوب، چابکی را افزایش می‌دهد.",
        principle10: "سادگی - هنر به حداکثر رساندن میزان کارهایی که انجام نمی‌شوند - ضروری است.",
        principle11: "بهترین معماری‌ها، نیازمندی‌ها و طراحی‌ها از تیم‌های خودسازمانده پدید می‌آیند.",
        principle12: "در فواصل زمانی منظم، تیم در مورد چگونگی مؤثرتر شدن تامل می‌کند، سپس رفتار خود را تنظیم و تطبیق می‌دهد.",
        section4Title: "کاوش در منظومه شمسی: چارچوب‌های اجایل",
        section4P1: "این چارچوب‌ها سیستم‌های عملی برای \"انجام اجایل\" هستند. هر کدام ذهنیت اجایل را به روشی متفاوت به کار می‌گیرند. برای کاوش جزئیات، روی یک سیاره کلیک کنید.",
        planet1Title: "سیاره اسکرام",
        planet1Desc: "چارچوبی برای مدیریت پروژه‌های پیچیده با پیشرفت تکراری و نقش‌های مشخص.",
        planet2Title: "سیاره کانبان",
        planet2Desc: "روشی برای بصری‌سازی کار، محدود کردن کار در حال انجام، و مدیریت جریان.",
        planet3Title: "سیاره اکس‌پی (XP)",
        planet3Desc: "چارچوبی متمرکز بر برتری فنی و شیوه‌های مهندسی نرم‌افزار با کیفیت بالا.",
        footerText: "© 2025 Zaid A. Shukur",

        // --- Scrum Page ---
        scrumPageTitle: "سیاره اسکرام",
        scrumTitle: "سیاره اسکرام",
        scrumSubtitle: "یک چارچوب سبک برای مدیریت کارهای پیچیده.",
        scrumS1Title: "اسکرام چیست؟",
        scrumS1P1: "اسکرام چارچوبی است که به افراد، تیم‌ها و سازمان‌ها کمک می‌کند تا از طریق راه‌حل‌های تطبیقی برای مسائل پیچیده، ارزش تولید کنند. این چارچوب عمداً ناقص است و فقط بخش‌های مورد نیاز برای پیاده‌سازی نظریه اسکرام را تعریف می‌کند. اسکرام بر پایه هوش جمعی افرادی که از آن استفاده می‌کنند، ساخته شده است.",
        scrumS1P2: "قوانین اسکرام به جای ارائه دستورالعمل‌های دقیق به افراد، روابط و تعاملات آنها را هدایت می‌کند.",
        scrumS2Title: "نظریه اسکرام: سه ستون",
        scrumS2P1: "اسکرام بر پایه تجربه‌گرایی (empiricism) بنا شده است، که تأکید دارد دانش از تجربه و تصمیم‌گیری بر اساس مشاهدات به دست می‌آید. سه ستون تجربه‌گرایی عبارتند از:",
        scrumS2Pillar1Title: "شفافیت",
        scrumS2Pillar1Desc: "فرآیند و کار باید برای کسانی که کار را انجام می‌دهند و کسانی که آن را دریافت می‌کنند، قابل مشاهده باشد. در اسکرام، تصمیمات مهم بر اساس وضعیت درک شده از سه آرتیفکت رسمی آن گرفته می‌شود.",
        scrumS2Pillar2Title: "بازرسی",
        scrumS2Pillar2Desc: "آرتیفکت‌های اسکرام و پیشرفت به سمت اهداف مورد توافق باید به طور مکرر و با دقت بازرسی شوند تا انحرافات یا مشکلات نامطلوب احتمالی شناسایی شوند.",
        scrumS2Pillar3Title: "انطباق",
        scrumS2Pillar3Desc: "اگر هر جنبه‌ای از فرآیند خارج از محدودیت‌های قابل قبول منحرف شود یا اگر محصول نهایی غیرقابل قبول باشد، فرآیند در حال اجرا یا مواد در حال تولید باید تنظیم شوند.",
        scrumS3Title: "پنج ارزش اسکرام",
        scrumS3P1: "استفاده موفقیت‌آمیز از اسکرام به این بستگی دارد که افراد در زندگی با پنج ارزش مهارت بیشتری پیدا کنند:",
        scrumS3V1: "<strong>تعهد:</strong> اعضای تیم متعهد به دستیابی به هدف اسپرینت و حمایت از یکدیگر هستند.",
        scrumS3V2: "<strong>شجاعت:</strong> تیم شجاعت انجام کار درست و کار بر روی مشکلات سخت را دارد.",
        scrumS3V3: "<strong>تمرکز:</strong> همه بر روی کار اسپرینت و اهداف تیم اسکرام تمرکز می‌کنند.",
        scrumS3V4: "<strong>گشودگی:</strong> تیم اسکرام و ذینفعان آن در مورد تمام کارها و چالش‌ها گشوده و شفاف هستند.",
        scrumS3V5: "<strong>احترام:</strong> اعضای تیم اسکرام به یکدیگر به عنوان افراد توانا و مستقل احترام می‌گذارند.",
        scrumS4Title: "تیم اسکرام",
        scrumS4P1: "واحد اساسی اسکرام یک تیم کوچک از افراد است، یک تیم اسکرام. این تیم شامل یک اسکرام مستر، یک مالک محصول و توسعه‌دهندگان است. در یک تیم اسکرام، هیچ تیم فرعی یا سلسله مراتبی وجود ندارد.",
        scrumS4Role1Title: "مالک محصول (Product Owner)",
        scrumS4Role1Desc: "مسئول به حداکثر رساندن ارزش محصول حاصل از کار تیم اسکرام است. بک‌لاگ محصول را مدیریت می‌کند.",
        scrumS4Role2Title: "اسکرام مستر (Scrum Master)",
        scrumS4Role2Desc: "مسئول استقرار اسکرام همانطور که در راهنمای اسکرام تعریف شده است. آنها این کار را با کمک به همه برای درک نظریه و عمل اسکرام انجام می‌دهند.",
        scrumS4Role3Title: "توسعه‌دهندگان (Developers)",
        scrumS4Role3Desc: "افرادی در تیم اسکرام که متعهد به ایجاد هر جنبه‌ای از یک محصول قابل استفاده (Increment) در هر اسپرینت هستند. آنها کسانی هستند که کار را انجام می‌دهند.",
        scrumS5Title: "۵ رویداد (صورت فلکی اسکرام)",
        scrumS5P1: "اسپرینت (Sprint) محفظه‌ای برای تمام رویدادهای دیگر است. هر رویداد در اسکرام یک فرصت رسمی برای بازرسی و انطباق آرتیفکت‌های اسکرام است.",
        scrumS5E1: "<strong>اسپرینت (The Sprint):</strong> یک رویداد با طول ثابت یک ماهه یا کمتر برای ایجاد ثبات. یک اسپرینت جدید بلافاصله پس از پایان اسپرینت قبلی شروع می‌شود.",
        scrumS5E2: "<strong>برنامه‌ریزی اسپرینت (Sprint Planning):</strong> در اینجا تیم کاری را که باید برای اسپرینت انجام شود، برنامه‌ریزی می‌کند.",
        scrumS5E3: "<strong>اسکرام روزانه (Daily Scrum):</strong> یک رویداد ۱۵ دقیقه‌ای برای توسعه‌دهندگان جهت بازرسی پیشرفت به سمت هدف اسپرینت و تطبیق بک‌لاگ اسپرینت در صورت لزوم.",
        scrumS5E4: "<strong>بازبینی اسپرینت (Sprint Review):</strong> هدف، بازرسی نتیجه اسپرینت و تعیین انطباق‌های آینده است. تیم اسکرام نتایج کار خود را به ذینفعان کلیدی ارائه می‌دهد.",
        scrumS5E5: "<strong>بازنگری اسپرینت (Sprint Retrospective):</strong> هدف، برنامه‌ریزی راه‌هایی برای افزایش کیفیت و اثربخشی است. تیم بازرسی می‌کند که اسپرینت گذشته چگونه پیش رفت.",
        scrumS6Title: "۳ آرتیفکت",
        scrumS6P1: "آرتیفکت‌های اسکرام نشان‌دهنده کار یا ارزش هستند. آنها برای به حداکثر رساندن شفافیت اطلاعات کلیدی طراحی شده‌اند.",
        scrumS6A1Title: "بک‌لاگ محصول (Product Backlog)",
        scrumS6A1Desc: "یک لیست نوظهور و مرتب از آنچه برای بهبود محصول مورد نیاز است. این تنها منبع کاری است که توسط تیم اسکرام انجام می‌شود.",
        scrumS6A2Title: "بک‌لاگ اسپرینت (Sprint Backlog)",
        scrumS6A2Desc: "متشکل از هدف اسپرینت (چرا)، مجموعه‌ای از آیتم‌های بک‌لاگ محصول انتخاب شده برای اسپرینت (چه)، و یک برنامه عملی برای تحویل محصول (چگونه).",
        scrumS6A3Title: "محصول (Increment)",
        scrumS6A3Desc: "یک پله ملموس به سمت هدف محصول. هر محصول افزوده‌ای به تمام محصولات قبلی است و به طور کامل تأیید شده است، که تضمین می‌کند همه محصولات با هم کار می‌کنند.",

        // --- Kanban Page ---
        kanbanPageTitle: "سیاره کانبان",
        kanbanTitle: "سیاره کانبان",
        kanbanSubtitle: "روشی برای بصری‌سازی کار و مدیریت جریان.",
        kanbanS1Title: "کانبان چیست؟",
        kanbanS1P1: "کانبان روشی برای مدیریت و بهبود کار در سیستم‌های انسانی است. این رویکرد با هدف مدیریت کار از طریق ایجاد تعادل بین تقاضاها و ظرفیت موجود، و با بهبود رسیدگی به گلوگاه‌های سطح سیستم انجام می‌شود.",
        kanbanS1P2: "ایده اصلی **بصری‌سازی گردش کار**، **محدود کردن کار در حال انجام (WIP)** و **مدیریت جریان** کار است. این یک روش تکاملی است که بهبود تدریجی را ترویج می‌کند.",
        kanbanS2Title: "چهار اصل اسا    سی",
        kanbanS2P1: "کانبان بر پایه چهار اصل برای مدیریت و بهبود جریان ارزش بنا شده است.",
        kanbanS2P1Title: "۱. با آنچه اکنون انجام می‌دهید شروع کنید",
        kanbanS2P1Desc: "کانبان نیازی به تغییر ریشه‌ای ندارد. این روش طوری طراحی شده که مستقیماً بر روی گردش کار فعلی شما اعمال شود و به نقش‌ها و فرآیندهای موجود احترام بگذارد.",
        kanbanS2P2Title: "۲. برای پیگیری تغییرات تدریجی توافق کنید",
        kanbanS2P2Desc: "تیم موافقت می‌کند که تغییرات بزرگ و ریشه‌ای تشویق نمی‌شوند زیرا اغلب مخرب هستند. در عوض، تمرکز بر بهبودهای کوچک و مستمر است.",
        kanbanS2P3Title: "۳. به فرآیند و نقش‌های فعلی احترام بگذارید",
        kanbanS2P3Desc: "برخلاف روش‌های دیگر، کانبان نقش‌ها یا فرآیندهای خاصی را تجویز نمی‌کند. این روش تشخیص می‌دهد که تنظیمات فعلی شما ارزش دارد و به دنبال بهبود آن است، نه جایگزینی آن.",
        kanbanS2P4Title: "۴. رهبری را در تمام سطوح تشویق کنید",
        kanbanS2P4Desc: "کانبان بهبود مستمر را از سوی همگان در سازمان تشویق می‌کند، از مشارکت‌کنندگان فردی گرفته تا مدیریت ارشد.",
        kanbanS3Title: "شش رویه اصلی",
        kanbanS3P1: "اینها رویه‌های عملی و قابل اجرا برای پیاده‌سازی روش کانبان هستند.",
        kanbanS3P1Title: "۱. بصری‌سازی گردش کار",
        kanbanS3P1Desc: "این همان **تخته کانبان (Kanban Board)** است. با ایجاد یک مدل بصری از کار و گردش کار خود، می‌توانید جریان کار را مشاهده کرده و مشکلات را شناسایی کنید.",
        kanbanS3P2Title: "۲. محدود کردن کار در حال انجام (WIP)",
        kanbanS3P2Desc: "این سنگ بنای کانبان است. با محدود کردن تعداد کارهایی که می‌توانند همزمان در حال انجام باشند، چندوظیفگی را کاهش می‌دهید، از ایجاد گلوگاه جلوگیری می‌کنید و یک سیستم \"کششی\" را تشویق می‌کنید.",
        kanbanS3P3Title: "۳. مدیریت جریان",
        kanbanS3P3Desc: "هدف ایجاد یک جریان روان و سالم برای کار است. به جای مدیریت افراد، شما کار را در حین حرکت در سیستم مدیریت می‌کنید و آن را برای موانع نظارت می‌کنید.",
        kanbanS3P4Title: "۴. سیاست‌ها را صریح و شفاف کنید",
        kanbanS3P4Desc: "شما نمی‌توانید چیزی را که درک نمی‌کنید، بهبود بخشید. قوانین را صریح کنید (مثلاً، \"'انجام شده' برای این ستون به چه معناست؟\").",
        kanbanS3P5Title: "۵. حلقه‌های بازخورد را پیاده‌سازی کنید",
        kanbanS3P5Desc: "بازخورد برای بهبود ضروری است. نمونه‌ها شامل جلسات ایستاده روزانه، جلسات تکمیل موجودی، و بازبینی‌های تحویل خدمات است.",
        kanbanS3P6Title: "۶. به صورت مشارکتی بهبود بخشید",
        kanbanS3P6Desc: "با استفاده از تخته بصری و داده‌های جریان، تیم برای شناسایی و پیاده‌سازی بهبودها در فرآیند خود همکاری می‌کند.",

        // --- XP Page ---
        xpPageTitle: "سیاره اکس‌پی (XP)",
        xpTitle: "سیاره اکس‌پی",
        xpSubtitle: "چارچوبی متمرکز بر برتری فنی.",
        xpS1Title: "برنامه‌نویسی مفرط (XP) چیست؟",
        xpS1P1: "برنامه‌نویسی مفرط (XP) یک چارچوب توسعه نرم‌افزار اجایل است که با هدف تولید نرم‌افزار با کیفیت بالاتر و کیفیت زندگی بالاتر برای تیم توسعه ایجاد شده است. XP مشخص‌ترین چارچوب اجایل در مورد شیوه‌های مهندسی مناسب برای توسعه نرم‌افزار است.",
        xpS1P2: "این روش \"مفرط\" (Extreme) نامیده می‌شود زیرا اصول و شیوه‌های عقل سلیم را به سطوح افراطی می‌رساند. به عنوان مثال، اگر بازبینی کد خوب است، XP بازبینی کد را *به طور مداوم* انجام می‌دهد (این برنامه‌نویسی دونفره است).",
        xpS2Title: "پنج ارزش XP",
        xpS2P1: "XP بر پایه پنج ارزش بنا شده است که کار و همکاری تیم را هدایت می‌کند.",
        xpS2V1: "<strong>سادگی:</strong> ساده‌ترین کاری را انجام دهید که احتمالاً کار می‌کند. این به جلوگیری از اتلاف و پیچیدگی‌های غیرضروری کمک می‌کند.",
        xpS2V2: "<strong>ارتباط:</strong> بر ارتباط چهره به چهره، برنامه‌نویسی دونفره و درک مشترک به جای مستندات سنگین تأکید دارد.",
        xpS2V3: "<strong>بازخورد:</strong> به سرعت به دنبال بازخورد باشید و آن را ارائه دهید. این بازخورد از کد (از طریق TDD)، مشتری و تیم می‌آید.",
        xpS2V4: "<strong>احترام:</strong> اعضای تیم به یکدیگر، به مشتری و به کد احترام می‌گذارند. این امر یک محیط سالم و مشارکتی را تقویت می‌کند.",
        xpS2V5: "<strong>شجاعت:</strong> شجاعت گفتن حقیقت، بازآرایی کد (refactor) و انطباق با تغییر.",
        xpS3Title: "رویه‌های اصلی XP",
        xpS3H1: "رویه‌های حلقه بازخورد",
        xpS3P1: "<strong>برنامه‌نویسی دونفره (Pair Programming):</strong> تمام کدهای تولیدی توسط دو برنامه‌نویس که پشت یک دستگاه نشسته‌اند نوشته می‌شود. این امر بازبینی کد داخلی و اشتراک دانش را فراهم می‌کند.",
        xpS3P2: "<strong>توسعه مبتنی بر آزمون (TDD):</strong> یک آزمون خودکار ناموفق را *قبل* از نوشتن کدی که آن را پاس کند، بنویسید.",
        xpS3P3: "<strong>مشتری در محل (On-site Customer):</strong> یک مشتری واقعی و دارای اختیار به صورت تمام وقت با تیم می‌نشیند تا به سؤالات پاسخ دهد و اولویت‌ها را تعیین کند.",
        xpS3H2: "رویه‌های فرآیند مستمر",
        xpS3P4: "<strong>یکپارچه‌سازی مستمر (CI):</strong> تیم کار خود را به طور مکرر (چندین بار در روز) یکپارچه می‌کند. هر یکپارچه‌سازی توسط یک ساخت خودکار برای شناسایی سریع خطاها تأیید می‌شود.",
        xpS3P5: "<strong>انتشارهای کوچک (Small Releases):</strong> نرم‌افزار کارا را در قالب افزایش‌های کوچک و مکرر به مشتریان تحویل دهید.",
        xpS3P6: "<strong>بازآرایی (Refactoring):</strong> به طور مداوم طراحی کد موجود را بدون تغییر در عملکرد آن بهبود بخشید.",
        xpS3H3: "رویه‌های درک مشترک",
        xpS3P7: "<strong>طراحی ساده (Simple Design):</strong> کد باید ساده‌ترین و تمیزترین راه‌حلی باشد که نیازمندی‌های فعلی را برآورده می‌کند.",
        xpS3P8: "<strong>مالکیت جمعی کد (Collective Code Ownership):</strong> هر جفت از برنامه‌نویسان می‌توانند هر کدی را در هر زمانی بهبود بخشند.",
        xpS3P9: "<strong>استانداردهای کدنویسی (Coding Standards):</strong> تیم بر روی مجموعه‌ای مشترک از قوانین کدنویسی توافق کرده و از آنها پیروی می‌کند.",
        xpS3H4: "رویه‌های رفاه تیم",
        xpS3P10: "<strong>سرعت پایدار (Sustainable Pace):</strong> تیم با سرعتی کار می‌کند که بتواند آن را به طور نامحدود حفظ کند، و از فرسودگی شغلی و اضافه‌کاری جلوگیری می‌کند.",
    }
};

// ----------------------------------------------------------------
// --- THIS IS THE START OF THE LOGIC (PART 2) ---
// ----------------------------------------------------------------

// 2. Language Switching Logic
const elementsToTranslate = document.querySelectorAll('[data-key]');
const dropdown = document.querySelector('.lang-dropdown');
const selectedLang = document.querySelector('.lang-selected');
const langOptions = document.querySelectorAll('.lang-options button');

// --- NEW: Store the current language globally ---
let currentLang = 'en';

// --- NEW: Function to check if we're on a mobile screen ---
function isMobile() {
    return window.innerWidth <= 768;
}

// --- NEW: Function to build the animated titles ---
function buildAnimatedTitle(element, titleString, lang) {
    element.innerHTML = ''; // Clear it
    element.setAttribute('aria-label', titleString);

    // FIX: Check if English AND NOT mobile
    if (lang === 'en' && !isMobile()) {
        // ENGLISH (Desktop): Split by letter
        titleString.split('').forEach(letter => {
            const span = document.createElement('span');
            span.innerHTML = letter === ' ' ? '&nbsp;' : letter; 
            element.appendChild(span);
        });
    } else {
        // RTL or ENGLISH (Mobile): Split by word
        titleString.split(' ').forEach(word => {
            const span = document.createElement('span');
            span.innerHTML = word;
            element.appendChild(span);

            // Add a space span
            const spaceSpan = document.createElement('span');
            spaceSpan.innerHTML = '&nbsp;';
            element.appendChild(spaceSpan);
        });
    }
}

// --- NEW: Function to build the footer (always by letter) ---
function buildFooter(element, titleString) {
    element.innerHTML = ''; // Clear it
    element.setAttribute('aria-label', titleString);
    
    // The copyright is always English, so always split by letter
    titleString.split('').forEach(letter => {
        const span = document.createElement('span');
        span.innerHTML = letter === ' ' ? '&nbsp;' : letter; 
        element.appendChild(span);
    });
}


function switchLanguage(lang) {
    currentLang = lang; // Store the new language

    // Set RTL/LTR direction
    if (lang === 'ar' || lang === 'ku' || lang === 'fa') {
        document.body.dir = 'rtl';
    } else {
        document.body.dir = 'ltr';
    }

    // Update the selected button text
    if (translations[lang]) {
        selectedLang.innerHTML = translations[lang].langName;
    }
    
    // Set active button style in dropdown
    langOptions.forEach(opt => {
        if (opt.getAttribute('data-lang') === lang) {
            opt.style.background = '#4a2b6e'; 
        } else {
            opt.style.background = 'none';
        }
    });

    // Translate all elements
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            
            const titleString = translations[lang][key];

            // --- UPDATED: Use the new builder functions ---
            if (key === 'heroTitle' || key === 'scrumTitle' || key === 'kanbanTitle' || key === 'xpTitle') {
                buildAnimatedTitle(el, titleString, lang);
            } 
            else if (key === 'footerText') {
                buildFooter(el, titleString);
            }
            else if (key === 'backLink') {
                // FIX: This stops the text from appearing in the button
                el.setAttribute('aria-label', titleString); // Set for accessibility
                // Do not set el.innerHTML
            }
            else {
                // Default behavior for all other elements
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Translate page title
    if (translations[lang] && translations[lang].pageTitle) {
        document.title = translations[lang].pageTitle;
    }
}

// 3. Event Listeners
if(dropdown) { // Check if dropdown exists on this page
    selectedLang.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            localStorage.setItem('agileUniverseLang', lang); // Save choice
            switchLanguage(lang);
            dropdown.classList.remove('open'); // Close the dropdown
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
}


// Interactive Title Effect
function handleMouseEffect(e) {
    const spans = document.querySelectorAll('#hero-title span, footer p span');
    const maxDistance = 100; // The radius of the effect in pixels

    spans.forEach(span => {
        const rect = span.getBoundingClientRect();
        // Calculate the center of the span
        const spanX = rect.left + rect.width / 2;
        const spanY = rect.top + rect.height / 2;
        
        // Get mouse position
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate distance between mouse and span center
        const distance = Math.sqrt(
            Math.pow(mouseX - spanX, 2) + Math.pow(mouseY - spanY, 2)
        );

        if (distance < maxDistance) {
            // Mouse is close. Calculate a "force" from 1 (center) to 0 (edge)
            const force = 1 - (distance / maxDistance);
            
            // Apply the effect
            const newY = -force * 20; // Max 20px "bump" up
            const newScale = 1 + force * 0.2; // Max 1.2x scale
            const glow = force * 15; // Max 15px glow

            span.style.transform = `translateY(${newY}px) scale(${newScale})`;
            span.style.filter = `drop-shadow(0 0 ${glow}px #fff)`;
        } else {
            // Revert to normal state
            span.style.transform = 'translateY(0px) scale(1)';
            span.style.filter = 'none';
        }
    });
}
// Attach the listener to the whole document body
document.body.addEventListener('mousemove', handleMouseEffect);


// --- NEW: Function to rebuild titles on resize ---
function rebuildTitles() {
    const titleElement = document.getElementById('hero-title');
    const footerElement = document.querySelector('[data-key="footerText"]');
    
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-key');
        buildAnimatedTitle(titleElement, translations[currentLang][titleKey], currentLang);
    }
    if (footerElement) {
        buildFooter(footerElement, translations[currentLang].footerText);
    }
}

// --- NEW: Listen for window resize ---
let resizeTimer;
window.addEventListener('resize', () => {
    // Debounce the resize event to avoid running the code too often
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(rebuildTitles, 100);
});


// 4. Set Initial Language
document.addEventListener('DOMContentLoaded', () => {
    // Check local storage for a saved language
    const savedLang = localStorage.getItem('agileUniverseLang') || 'en';
    
    if (selectedLang) {
      selectedLang.innerHTML = translations[savedLang].langName;
    }
    
    // Switch to the saved language (or default)
    switchLanguage(savedLang);
});