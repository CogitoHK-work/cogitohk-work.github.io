// Bilingual content dictionary for Cogito Education website.
// Edit text here to update both EN and 繁 in one place.

export type Lang = "en" | "zh";

export const dict = {
  en: {
    // ───────── Shared ─────────
    nav: {
      home: "Home",
      programmes: "Programmes",
      advantage: "Advantage",
      about: "About",
      parents: "Reviews",
      partners: "Partners & Franchisees",
      joinAsParent: "Join as Parent",
      centres: "Centres",
      menu: "Menu",
    },
    topbar: {
      parents: "Parents",
      others: "Others",
      langEN: "EN",
      langZH: "繁",
      langZHAria: "Switch to Traditional Chinese",
      langENAria: "Switch to English",
    },
    ticker: [
      "Cogito Education — Where Every Child Learns Differently, Brilliantly",
      "Empowering Minds, Nurturing Futures",
      "Just Right for the Mind of Every Child",
      "Learn Effectively, but Effortlessly",
    ],
    footer: {
      tagline:
        "An indigenous Hong Kong education brand using AI-powered personalization and intimate small groups to help every child realize their true potential.",
      motto: "\"Live yourself as light.\"",
      explore: "Explore",
      contact: "Contact",
      programmes: "Programmes",
      advantage: "Cogito Advantage",
      about: "About",
      comments: "Parents' Comments",
      partners: "Partners & Franchisees",
      parentsLine: "Parents 6400 9989",
      othersLine: "Others 9494 0994",
      lamTin: "Lam Tin, Hong Kong",
      copyright:
        "© 2026 Cogito Education (Hong Kong) Ltd. All Rights Reserved.",
      trademark: "is a trademark of Cogito Education (Hong Kong) Ltd.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },

    // ───────── Home ─────────
    home: {
      meta: {
        title:
          "Cogito Education (夏恩教育) — AI-Powered Personalized Learning in Hong Kong",
        description:
          "Cogito Education delivers AI-personalized, small-group (1:3) tutoring for children aged 3–12 in Hong Kong. English, Chinese & Mathematics. Where every child learns differently, brilliantly.",
        ogTitle: "Cogito Education — Where Every Child Learns Differently",
        ogDescription:
          "AI-powered personalization & expert-led small groups for children aged 3–12 in Hong Kong.",
      },
      heroBadge: "AI-powered personalized learning",
      heroTitleA: "Where your child's ",
      heroTitleEm: "unique learning",
      heroTitleB: " journey begins.",
      heroLead:
        "AI-powered personalization and expert-led small groups (1:3) for children aged 3–12 in Hong Kong. Education that thinks with your child.",
      ctaExplore: "Explore Programmes",
      ctaBook: "Book a Free Discovery Session",
      stat40: "Years of expertise",
      stat13: "Teacher to student",
      statAges: "Ages welcome",
      heroCardLabel: "Personalized Path",
      heroCardLine: "Every child has their own pace.",

      philSection: "1.3 · Our Philosophy",
      philTitle: "Teaching how to fish — not feeding answers.",
      philQuote:
        "\"Give a man a fish, feed him for a day. Teach him to fish, feed him for a lifetime.\"",
      philP1:
        "Education today is no longer about disseminating information — technology has made it readily available. Education is about nurturing a culture of problem solving and a habitual reliance on one's own self. At Cogito, we don't just feed answers — we teach children how to catch them. We weave self-learning into the teaching process and make it a habit they won't forget.",
      philP2:
        "Like teaching a child to walk: a little handholding at first, steady guidance along each tiny step. Then one day, they can run. And we're still there, watching proudly, ready to catch them if they stumble.",
      philP3: "Guide first. Then watch them soar. For life.",

      nameSection: "1.4 · Our Name",
      nameTitle: "Education that thinks with your child.",
      nameP1A: "Cogito",
      nameP1B: " — Latin for ",
      nameP1Em: "\"I think\"",
      nameP1C:
        " — is our promise. In the AI era, we believe true learning begins when education adapts to the learner. We use technology to empower our teachers, not replace them. Our intelligent analytics create a unique learning path for every child, ensuring each lesson is purposeful, engaging, and perfectly matched to their strengths and needs.",
      nameP2:
        "We don't just teach subjects. We nurture thinkers, problem-solvers, and confident communicators ready for tomorrow.",

      logoSection: "1.5 · Our Logo",
      logoTitle: "The Tree of Wisdom.",
      logoBodyEm:
        "\"Takes ten years to grow a tree; a hundred to nurture a person.\"",
      logoBody:
        " The Tree of Wisdom, resembling the branching pathways of the brain, symbolizes both our commitment to high-quality educational services and the era's call for balancing logical thinking and creativity. Lush left and right branches bursting with sparks of thought represent the simultaneous activation of both brain hemispheres — and the flourishing of intellect. \"Realizing one's true potential\" is what this logo symbolizes.",

      progSection: "2.0 · Programmes",
      progTitle: "Tailored for everyone, regardless of potential.",
      progViewAll: "View all programmes",
      progLearnMore: "Learn more",
      cards: [
        { name: "Cogito Kids", age: "Ages 3–6" },
        { name: "English Excellence", age: "K1–S3" },
        { name: "Mathematics Mastery", age: "K1–S3" },
        { name: "Chinese Eminence", age: "K1–S3" },
      ],

      ctaTitle: "Begin your child's Cogito journey today.",
      ctaLead:
        "Attend a free Parent Discovery Session, take a friendly placement assessment, and receive a personalized learning plan.",
      ctaStart: "Start now",
      ctaWA: "WhatsApp us",
      newsSection: "1.8 · Latest News",
      newsTitle: "Latest News",
      newsEmpty: "No news yet — check back soon.",
      commentsHomeSection: "1.9 · Parents' Voices",
      commentsHomeTitle: "What parents say.",
      commentsHomeView: "Read all comments",
    },

    // ───────── Programmes ─────────
    programmes: {
      meta: {
        title: "Our Programmes — Cogito Education",
        description:
          "Cogito Kids (3–6), English Excellence, Mathematics Mastery and Chinese Eminence (K1–S3). Personalized, AI-enhanced curriculum aligned with the Hong Kong Education Bureau.",
        ogTitle: "Programmes — Cogito Education",
        ogDescription:
          "Personalized programmes in English, Chinese and Mathematics for children aged 3–12.",
      },
      section: "2.0 · Programmes",
      titleA: "Tailored for everyone, ",
      titleEm: "regardless of potential",
      titleB: ".",
      lead1:
        "Our system of education programmes is developed locally by teachers and professionals under a framework designed by education experts, with reference to the requirements of the Education Bureau. The curriculum covers three prime subjects — English, Chinese and Mathematics — from Grade 1 through 9, optimised by AI to maximise benefit with limited time.",
      lead2:
        "Every child is different in potential. For this reason, the Cogito learning method is highly personalized. Each student starts at their own point (determined by an aptitude test) and progresses at their own pace. The effectiveness of our system has been verified consistently since our inception.",
      highlights: "Highlights",
      comingSoon: "Coming soon: interactive learning",
      comingSoonLead:
        "Watch out for our announcement on next-generation interactive curricula.",
      overview: "Overview",
      learnMore: "Learn more",
      backToAll: "All programmes",
      explore: "Explore each programme",
      list: [
        {
          title: "Cogito Kids",
          age: "Ages 3–6",
          intro:
            "A joyful play-based introduction to learning for kindergarteners that builds foundational literacy, numeracy, social skills, and bilingual confidence in our nurturing small-group setting.",
          body:
            "All three subjects are covered in a one-and-a-half hour weekly lesson cum playtime, preparing children to ascend confidently into primary school. Enough curriculum is covered that the transition to school life — which can feel intense — becomes natural and unintimidating for our Cogito kids.",
          tracks: [],
          highlights: [
            "Foundational literacy & numeracy",
            "Bilingual confidence",
            "Social-skills development",
            "Smooth transition to primary school",
          ],
        },
        {
          title: "English Excellence",
          age: "K1–S3",
          intro:
            "An integrated programme covering all key elements of English as a foreign language — vocabulary, grammar, reading, writing and listening — through a step-by-step systematic curriculum.",
          body:
            "Each one-hour unit covers four interlocked modules around a common theme. Students choose their own pace: one unit per week for efficient learning, multiple units for immersion. Pre-recorded native-speaker audio nurtures listening, speaking and pronunciation; instructors correct aberrations and keep progress on track.",
          tracks: [],
          highlights: [
            "Spiral learning that reinforces without boring repetition",
            "Authentic British English pronunciation & native-speaker audio",
            "Integrated vocabulary, grammar, reading, writing & listening",
            "Vocabulary build-up to 5,600 words by P6 and 9,000 by S3",
            "Idioms, proverbs & phrasal verbs",
            "Weekly writing tasks with personalized feedback",
            "Fully aligned with the HK Education Bureau curriculum",
            "Personalized to fit individual aptitude & needs",
            "Experienced instructors ensure progress and quality",
          ],
        },
        {
          title: "Mathematics Mastery",
          age: "K1–S3",
          intro:
            "If computers and AI can do it better than us, do our children still need to learn Mathematics? Yes. Those who understand maths and use machines for efficiency are masters of machines; those who don't are enslaved by them.",
          body:
            "Mathematics is the universal language — the foundation of rationalism and the building block for science, business, finance and decision making. Our comprehensive programme follows the Education Bureau guidelines, covering all mandatory topics from K1 to S3 with step-by-step illustration so students can self-learn while instructors stand close by to remove roadblocks.",
          tracks: [
            {
              name: "Math Compute",
              desc: "Focuses on speed, accuracy and mental agility in core operations. Heightens mathematical sense — ideal for those seeking to excel in examinations.",
            },
            {
              name: "Math Applications",
              desc: "Emphasises solving real-life problems using techniques learned. Trains critical thinking and logical reasoning.",
            },
          ],
          highlights: [
            "Spiral learning that reinforces without repetition",
            "Topics divided into thematic units with clear objectives",
            "Abundant illustrations & worked examples",
            "Probabilistically sequenced problems — basic to advanced",
            "Fully aligned with the HK Education Bureau curriculum",
            "Personalized programme to fit individual needs",
            "Experienced instructors ensure progress and quality",
          ],
        },
        {
          title: "Chinese Eminence",
          age: "K1–S3",
          intro:
            "5,000 years of culture and 3,000 years of written history make Chinese a beautiful but challenging language to master — even for native speakers. Our integrated programme covers modern Chinese plus literature and Classical Chinese.",
          body:
            "Each one-hour unit covers four interlocked modules — vocabulary, grammar, reading comprehension and expressive writing — around a common theme. Students pace themselves: one unit per week for concentrated learning, multiple for immersion. Instructors keep progress on track and correct aberrations.",
          tracks: [],
          highlights: [
            "Spiral learning carefully planned to reinforce without repetition",
            "Integrated vocabulary, grammar, reading & writing — plus literature & Classical Chinese",
            "Structured vocabulary build-up with abundant 成語 & 諺語 training",
            "Weekly writing tasks with personalized feedback",
            "Fully aligned with the HK Education Bureau curriculum",
            "Personalized programme to fit individual aptitude",
            "Experienced instructors ensure progress and quality",
          ],
        },
      ],
    },

    // ───────── Advantage ─────────
    advantage: {
      meta: {
        title:
          "The Cogito Advantage — Personalized, AI-Enhanced, Small-Group Learning",
        description:
          "Truly personalized learning, intimate 1:3 small groups, British English foundation, in-house teaching content, systematic learning and holistic development — the Cogito advantage.",
        ogTitle: "The Cogito Advantage",
        ogDescription:
          "Why Cogito's method works: personalization, small groups, systematic content and holistic growth.",
      },
      section: "3.0 · The Cogito Advantage",
      titleA: "Built on ",
      titleEm: "forty years",
      titleB: " of trust and result.",
      lead:
        "The key to any successful programme lies in a true understanding of what it takes to be a good learner — and a track record of earning parents' and students' trust. Cogito's founders bring four decades of experience, having nurtured countless students into outstanding performers in public examinations and top universities.",
      principlesTitle: "Six principles that build a brand worth trusting.",
      principlesLead: "These are the foundations every Cogito programme is built on.",
      principles: [
        "Understanding all the core skills required for turning knowledge into understanding and internalizing them as foundations for more learning.",
        "Building a system incorporating all the knowledge content required by the local education system.",
        "A methodology that allows personalized planning to fit individual needs.",
        "Nurturing a habit students can grow into — one that produces positive feedback and continues voluntarily.",
        "Good communication with parents to keep them informed of status and progress.",
        "A student-first culture that puts result above profit.",
      ],
      classSize: "Class size",
      classSizeDesc: "Maximum students per teacher",
      featuresTitle: "In practice — what it looks like.",
      features: [
        {
          title: "Truly Personalized Learning",
          desc: "Data-driven insights from ongoing assessments customize every child's journey. No one is left behind or held back.",
        },
        {
          title: "Intimate Small Groups (1:3 Ratio)",
          desc: "With no more than 3 students (sometimes even less) per teacher, your child receives focused attention, immediate feedback, and a supportive space where curiosity thrives.",
        },
        {
          title: "British English Foundation, Local Relevance",
          desc: "Authentic British English fluency, aligned with Hong Kong's curriculum and enriched with real-world contexts.",
        },
        {
          title: "Proven, High-Quality Content",
          desc: "All teaching materials are developed in-house by our academic team with decades of experience in Hong Kong education.",
        },
        {
          title: "Systematic Learning",
          desc: "Materials are carefully planned to build foundations step-by-step — accumulation without unnecessary strain or repetition.",
        },
        {
          title: "Mentality Shaping",
          desc: "Our method reinforces self-learning ability and encourages positive thinking through positive feedback.",
        },
        {
          title: "Holistic Development",
          desc: "We cultivate integrity, empathy, and intellectual curiosity alongside core academic skills.",
        },
      ],
    },

    // ───────── About ─────────
    about: {
      meta: {
        title: "About Cogito Education — Founders' Story & Vision",
        description:
          "Founded in 2017 (formerly Shane Education) by veteran educators Ms. Grace Choi and Mr. H.C. Ma. An indigenous Hong Kong education brand inspired by Tagore's 'Influence life with life'.",
        ogTitle: "About Cogito Education",
        ogDescription:
          "Forty years of educating Hong Kong's children — and the vision that drives Cogito today.",
      },
      section: "4.0 · About Cogito",
      titleA: "An ",
      titleEm: "indigenous brand",
      titleB: " for Hong Kong's children.",
      lead:
        "Founded in 2017 — formerly known as Shane Education — by two veteran educators with 40 years of experience in the field, Cogito Education is a rebranding of the same institute as we cease to be affiliated with a British company. Given today's technological advances in knowledge management, our new identity marks a focus on being more technology-driven, service-oriented and student-focused. We are now primarily an indigenous platform serving the needs of Hong Kong students. Our curriculum has been significantly revamped with the aid of AI tools to reassess and reprioritize our teaching system.",

      foundersSection: "4.2 · Founders",
      foundersTitle: "Message from Our Founders",

      grace: {
        section: "4.1 · Founder",
        name: "Ms. Grace Choi",
        nameZh: "蔡老師",
        role: "Registered Teacher · Veteran Educator · Founder",
        avatar: "蔡",
        paragraphs: [
          "\"With over 40 years of experience in education — first as a secondary school teacher (also responsible for school discipline), then as the tutorial-centre owner and principal of a multi-national franchise operating in 40 countries — I have, with the help of my husband, built the world's largest centre for that franchise (in terms of students, not space). At the peak of that career we had 3,000 active students.",
          "The headline of that story is not how to build a big business, but how to influence your students to walk the path they need. In our industry, if the motivation is purely pragmatic gain, then gain becomes elusive. My motivation is about influencing the next generation to become upright, respectable people who are always willing to help where help is needed.",
          "My philosophy can be summed up in Tagore's poem, 'Influence life with life', which struck a chord with me.",
          "Due to a lot of inhibiting factors with my previous franchise, I founded Cogito with my husband to realize a dream. In Cogito, we don't just teach; we illuminate. We try to help each child discover their inner light and turn it into a passion for learning.",
          "No good work will ever go to waste. I am especially excited when my first students, now parents themselves, entrust me with their children. This cross-generational trust fuels our mission: to serve, to spread love, and to deliver unparalleled value through education that thinks with your child.\"",
        ],
        signature: "— Ms. Grace Choi",
      },

      poem: {
        eyebrow: "Our Motto · From Tagore",
        title: "Influence life with life.",
        lines: [
          "Live yourself as light,",
          "Because you don't know",
          "Who by thy light,",
          "Out of darkness.",
        ],
        attribution: "— Rabindranath Tagore",
      },

      hc: {
        section: "4.2 · Founder",
        name: "Mr. H.C. Ma",
        nameZh: "馬老師",
        role: "C. Eng., M.Phil. · Founder",
        avatar: "馬",
        paragraphs: [
          "\"I started off as an engineer working my way up the corporate ladder — until one day, out of curiosity, I decided to take part in my wife's tutorial centre to see what it's like to educate children. That decision enlightened me.",
          "Like growing a tree, a botanist would tell you how much sunlight, nutrients and water are needed — but the best tree is always the one you plant with your heart. Thirty years ago, I changed course and joined my wife's centre because there was so much shared vision about what we could do with our students. I have been on that exploratory journey ever since, and seeing how children grow remains the most satisfying experience of my life.",
          "At this juncture, when we found Cogito, the world is full of chaos and drastic change is imminent. It is also a time when humanity must decide what timeline we are going to take — one filled with darkness and hate, or one with light and love. Cogito is created to say: we choose to be a facilitator toward the latter.",
          "Knowing our work is just a drop in an ocean doesn't in any way diminish our wish to serve. We hope to attract like-minded people as franchisees so that more can benefit. From experience, when your mission statement is right, everything good will follow.\"",
        ],
        signature: "— Mr. H.C. Ma",
      },
    },

    // ───────── Comments ─────────
    comments: {
      meta: {
        title: "Parents' Comments — Cogito Education",
        description:
          "Hear from parents whose children have been studying with Cogito Education (formerly Shane Education) — real stories, real benefits.",
        ogTitle: "Parents' Comments — Cogito Education",
        ogDescription: "Real parent stories from our community.",
      },
      section: "5.0 · Parents' Comments",
      titleA: "Real stories from ",
      titleEm: "our families",
      titleB: ".",
      lead:
        "The following are from parents whose children have been studying at Cogito Education (formerly Shane Education). Names are withheld for privacy, but every voice belongs to a real parent reaping real benefits.",
      collected: "Comments collected April 2026.",
      footnote:
        "Note: Additional comments are stored separately and may be added in upcoming updates.",
      list: [
        {
          name: "Mrs. C.",
          relation: "Parent of P3 student",
          body:
            "My daughter has been with Cogito (formerly Shane) for two years. The 1:3 setting means she actually gets attention — and she has gone from dreading English to writing little stories at home for fun.",
        },
        {
          name: "Mr. L.",
          relation: "Parent of K3 & P5 students",
          body:
            "Both my children attend Cogito and what I appreciate most is how each of their learning paths looks completely different. The teachers know exactly where each one is, and never push them where they aren't ready.",
        },
        {
          name: "Mrs. W.",
          relation: "Parent of S1 student",
          body:
            "We tried larger tutorial chains before. The difference here is that the staff actually call you about your child — not to upsell, but to update you on real progress. That trust is rare.",
        },
        {
          name: "Ms. Y.",
          relation: "Parent of P1 student",
          body:
            "The personalized programme suits my son perfectly. He's quick at maths but struggles with reading, and Cogito built him a plan that respects both. He looks forward to his lessons.",
        },
        {
          name: "Mr. T.",
          relation: "Parent of P4 student",
          body:
            "What sold me was a five-minute conversation with the founder. You can tell instantly that she has been doing this for decades and that she genuinely cares. We have not regretted enrolling.",
        },
        {
          name: "Mrs. K.",
          relation: "Parent of P2 student",
          body:
            "My daughter's confidence has changed visibly. The teachers don't just correct her — they explain why and let her arrive at the answer herself. That habit has spilled over into her schoolwork.",
        },
      ],
    },

    // ───────── Partners ─────────
    partners: {
      meta: {
        title: "Partners & Franchisees — Join Cogito Education",
        description:
          "Become a Cogito Partner or Franchisee. Low entry requirements, full headquarter support, and a proven systematic curriculum for educators in Hong Kong and beyond.",
        ogTitle: "Partners & Franchisees — Cogito Education",
        ogDescription:
          "Two simple ways to join us — Cogito Partner or Cogito Franchisee.",
      },
      section: "6.0 · Joining Us",
      titleA: "Two ways to join — ",
      titleEm: "both rooted in passion",
      titleB: ".",
      lead1:
        "If you are a motivated individual, with or without teaching experience, you are welcome to join us either as a franchisee or a partner. Entry requirements are low — but we screen candidates by passion, capability and circumstance. For experienced operators, becoming a partner augments your existing model with minimum disruption at a very affordable monthly fix.",
      lead2:
        "For those who would like full support from Cogito headquarter, becoming a franchisee is advantageous. We don't normally make online quotes — terms depend on size and scale. A face-to-face meeting is the only starting point, because we are not interested in feeding data to an AI machine that may be behind an enquiry.",
      partnerSection: "6.1",
      partnerTitle: "Cogito Partner",
      partnerP1:
        "If you already have an establishment or you're an educator, you can join as a Cogito Partner. A no-hassle way to receive part or all of our teaching content for a small monthly fee — the amount depending on the size of your establishment and the content you need.",
      partnerP2:
        "You retain your own corporate identity and name. Simply put up a sign in your shopfront identifying yourself as a Cogito Partner. You are still free to run your own courses while offering our programmes alongside.",
      partnerNoteLabel: "Note:",
      partnerNote:
        "Verification of how our content is used in your centre is required as part of the partnership.",

      franchiseeSection: "6.2",
      franchiseeTitle: "Cogito Franchisee",
      franchiseeP1:
        "Full headquarter support across every aspect of operation. Whether starting from scratch or scaling up, we assist with centre setup, licencing, recruitment, training, marketing and teaching support. You can start small and plan big — we help design a scalable operation with sound management practices.",
      franchiseeP2:
        "Requires a higher diploma in any discipline (no education experience needed) — but you must have a passion for teaching and the patience to guide children's growth.",
      franchiseeBenefits: [
        "Participation in joint marketing and promotion for brand image",
        "Participation in joint events that boost your position as a recognized quality centre",
        "Training and assistance in daily centre operation",
        "Regular meetings about strategy and how best to move forward",
        "Training in methodology and technology to improve productivity",
        "Training in education to improve teaching quality",
        "Recruitment and manpower assistance",
      ],

      contactTitle:
        "Ready to talk? Let's start with a face-to-face conversation.",
      contactLeadA: "Send your enquiry directly to ",
      contactLeadB: " or message us on WhatsApp at ",
      contactLeadC: " with your name and contact.",
      ctaWA: "WhatsApp 9494 0994",
      ctaEmail: "Email us",

      formTitle: "Express your interest",
      formLead: "Tell us a little about yourself and we'll reach out to schedule a conversation.",
      formName: "Full name",
      formEmail: "Email address",
      formPhone: "Phone number",
      formRegion: "Preferred region",
      formInterest: "I am interested in",
      formInterestPartner: "Becoming a Partner",
      formInterestFranchisee: "Becoming a Franchisee",
      formInterestBoth: "Both — open to discussion",
      formMessage: "Your message (optional)",
      formMessagePlaceholder: "Tell us about your background, experience, or any questions you have...",
      formSubmit: "Submit interest",
      formSubmitting: "Submitting...",
      formSuccessTitle: "Thank you!",
      formSuccessMessage: "We have received your expression of interest and will contact you shortly.",
      formSubmitAnother: "Submit another",
      preferChat: "Prefer to reach us directly?",
    },

    // ───────── Begin ─────────
    begin: {
      meta: {
        title: "Begin Your Cogito Journey — Free Discovery Session",
        description:
          "Book a free Parent Discovery Session with Cogito Education. Friendly placement assessment, personalized learning plan, and supportive small-group lessons in Lam Tin, Hong Kong.",
        ogTitle: "Begin Your Cogito Journey",
        ogDescription:
          "Free consultation, placement assessment and a personalized learning plan.",
      },
      section: "7.0 · Begin Your Journey",
      titleA: "Begin your Cogito journey ",
      titleEm: "as a parent",
      titleB: ".",
      lead:
        "Every parent wants to give their child the best — but finding the right approach isn't always easy. We recommend a face-to-face consultation for serious parents who seek a sustainable solution, not a one-time examination win.",
      steps: [
        {
          n: "01",
          title: "Attend a Free Parent Discovery Session",
          desc: "Make an appointment for a free, no-pressure consultation with our team.",
        },
        {
          n: "02",
          title: "Friendly placement assessment",
          desc: "Your child completes an insightful diagnostic test (DT) so we can pinpoint the perfect starting point.",
        },
        {
          n: "03",
          title: "Personalized learning plan",
          desc: "We deliver a detailed, fully personalized plan tailored to your child's strengths and needs.",
        },
        {
          n: "04",
          title: "Begin in a supportive small group",
          desc: "Start learning in a 1:3 environment where curiosity thrives and progress is constantly checked.",
        },
      ],
      contactTitle: "Contact us today.",
      labels: {
        phone: "Phone",
        waParents: "WhatsApp · Parents",
        waOthers: "WhatsApp · Franchise & Other",
        email: "Email",
        showcase: "Showcase Centre",
        showcaseValue: "Lam Tin, Hong Kong",
        showcaseHint: "Contact us to schedule a visit.",
        social: "Follow our community",
        socialValue: "Cogito Hong Kong",
        socialHint: "Parenting tips & updates.",
      },
      bookCta: "Book my free session",
    },

    // ───────── 404 ─────────
    notFound: {
      title: "Page not found",
      lead: "The page you're looking for doesn't exist or has been moved.",
      home: "Go home",
    },

    // ───────── Centres ─────────
    centres: {
      meta: {
        title: "Our Centres — Cogito Education (夏恩教育)",
        description:
          "Visit Cogito Education centres in Hong Kong: Lam Tin (Sceneway Plaza) and Siu Sai Wan (Fullview Garden). Addresses, phone numbers, and WhatsApp.",
        ogTitle: "Our Centres — Cogito Education",
        ogDescription:
          "Find a Cogito Education centre near you in Lam Tin or Siu Sai Wan, Hong Kong.",
      },
      section: "Visit Us",
      title: "Our Centres",
      lead: "Two welcoming locations across Hong Kong. Drop by, or message us on WhatsApp to schedule a free discovery session.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      directionsCta: "Get directions",
      whatsappCta: "Chat on WhatsApp",
      callCta: "Call",
      list: [
        {
          name: "Shane Grace Choi Education Centre",
          address:
            "Shop 587, Level 5, Sceneway Plaza, 8 Sceneway Road, Lam Tin, Kowloon",
          phone: "2775 1234",
          whatsapp: "6844 9899",
          mapsQuery: "Sceneway Plaza, 8 Sceneway Road, Lam Tin, Kowloon",
          mapsEmbed:
            "https://maps.google.com/maps?q=Sceneway+Plaza%2C+8+Sceneway+Road%2C+Lam+Tin%2C+Kowloon&t=m&z=16&ie=UTF8&iwloc=&output=embed",
        },
        {
          name: "Shane Siu Sai Wan Education Centre",
          address:
            "Shop 160, 1/F, Fullview Garden Shopping Centre, 18 Siu Sai Wan Road, Hong Kong",
          phone: "2898 5187",
          whatsapp: "9732 8072",
          mapsQuery:
            "Fullview Garden Shopping Centre, 18 Siu Sai Wan Road, Hong Kong",
          mapsEmbed:
            "https://maps.google.com/maps?q=Fullview+Garden+Shopping+Centre%2C+18+Siu+Sai+Wan+Road%2C+Hong+Kong&t=m&z=16&ie=UTF8&iwloc=&output=embed",
        },
      ],
    },
  },

  zh: {
    // ───────── Shared ─────────
    nav: {
      home: "首頁",
      programmes: "課程總覽",
      advantage: "競爭優勢",
      about: "關於我們",
      parents: "家長心聲",
      partners: "合作與加盟",
      joinAsParent: "家長預約",
      centres: "教育中心",
      menu: "選單",
    },
    topbar: {
      parents: "家長",
      others: "其他",
      langEN: "EN",
      langZH: "繁",
      langZHAria: "切換為繁體中文",
      langENAria: "Switch to English",
    },
    ticker: [
      "Cogito Education — 讓每個孩子以獨特方式閃亮學習",
      "啟發思維，培育未來",
      "恰到好處，契合每個孩子的心智",
      "高效學習，輕鬆自如",
    ],
    footer: {
      tagline:
        "夏恩教育是植根香港的本土教育品牌，以 AI 個人化學習與親密小班，協助每個孩子實現真正潛能。",
      motto: "「活成一道光。」",
      explore: "瀏覽",
      contact: "聯絡我們",
      programmes: "課程總覽",
      advantage: "夏恩優勢",
      about: "關於我們",
      comments: "家長心聲",
      partners: "合作與加盟",
      parentsLine: "家長 6400 9989",
      othersLine: "其他 9494 0994",
      lamTin: "香港藍田",
      copyright: "© 2026 Cogito Education (Hong Kong) Ltd. 版權所有。",
      trademark: "為 Cogito Education (Hong Kong) Ltd. 之商標。",
      privacy: "私隱政策",
      terms: "使用條款",
    },

    // ───────── Home ─────────
    home: {
      meta: {
        title: "夏恩教育 Cogito Education — 香港 AI 個人化學習中心",
        description:
          "夏恩教育為 3 至 12 歲香港兒童提供 AI 個人化、1:3 小班教學，涵蓋英文、中文及數學。讓每個孩子以獨特方式閃亮學習。",
        ogTitle: "夏恩教育 — 讓每個孩子以獨特方式閃亮學習",
        ogDescription:
          "為香港 3 至 12 歲兒童提供 AI 個人化學習與專家指導小班教學。",
      },
      heroBadge: "AI 驅動個人化學習",
      heroTitleA: "您孩子",
      heroTitleEm: "獨一無二的學習",
      heroTitleB: "之旅，由此開始。",
      heroLead:
        "為香港 3 至 12 歲兒童而設，AI 驅動個人化學習與專家指導小班(1:3)。與您孩子「共思」的教育。",
      ctaExplore: "探索課程",
      ctaBook: "預約免費諮詢",
      stat40: "年教育經驗",
      stat13: "師生比例",
      statAges: "歲適齡學童",
      heroCardLabel: "個人化路徑",
      heroCardLine: "每個孩子，都有自己的步伐。",

      philSection: "1.3 · 教育理念",
      philTitle: "授人以漁，而非單給答案。",
      philQuote: "「授人以魚，不如授人以漁。」",
      philP1:
        "今日的教育不在於傳遞資訊——科技已使資訊隨手可得。教育的真諦在於培養解決問題的文化，以及養成倚靠自己的習慣。夏恩教育的模式不是給答案，而是教導孩子如何找答案，並學會享受這個過程。我們將自主學習融入教學過程，使其成為孩子不忘的習慣。",
      philP2:
        "就像教孩子走路：起初輕輕扶著，每一步都耐心引導。終有一天，他們能夠奔跑。而我們依然在旁，欣慰地看著，隨時準備在他們跌倒時伸出雙手。",
      philP3: "先引導，再看他們展翅高飛。一生受益。",

      nameSection: "1.4 · 我們的名字",
      nameTitle: "與您孩子「共思」的教育。",
      nameP1A: "Cogito",
      nameP1B: "源自拉丁文「",
      nameP1Em: "我思",
      nameP1C:
        "」(I think)，也正是我們的承諾。在 AI 時代，我們相信真正的學習，源於教育對學習者的主動適應。我們運用科技來賦能教師，而非取代他們。透過智能學習分析，我們能為每個孩子繪製獨特的學習路徑，讓每一堂課的目標更清晰、更引人入勝，並完美契合其優勢與需求。",
      nameP2:
        "我們不僅教授學科。我們培養未來的思考者、問題解決者及自信的溝通者。",

      logoSection: "1.5 · 我們的標誌",
      logoTitle: "智慧之樹。",
      logoBodyEm: "「十年樹木，百年樹人。」",
      logoBody:
        "智慧之樹如同大腦的神經網絡，其分枝脈絡，既象徵我們對優質教育服務的承諾，也呼應時代對邏輯思維與創造力平衡的呼喚。左右兩側密茂的枝葉迸發著思想火花，生動地代表左右腦的同步激活與智慧的蓬勃發展。「實現個人真正潛能」正是此標誌所象徵的意義。",

      progSection: "2.0 · 課程總覽",
      progTitle: "為每個孩子量身打造，不論潛能高低。",
      progViewAll: "查看所有課程",
      progLearnMore: "了解更多",
      cards: [
        { name: "夏恩幼兒課程", age: "3–6 歲" },
        { name: "英語精修課程", age: "K1–中三" },
        { name: "數學精研課程", age: "K1–中三" },
        { name: "中文卓越課程", age: "K1–中三" },
      ],

      ctaTitle: "今天就開啟孩子的夏恩之旅。",
      ctaLead:
        "預約免費家長諮詢、輕鬆的學習能力評估，以及度身訂造的個人化學習方案。",
      ctaStart: "立即開始",
      ctaWA: "WhatsApp 我們",
      newsSection: "1.8 · 最新消息",
      newsTitle: "最新消息",
      newsEmpty: "暫無消息，請稍後再來。",
      commentsHomeSection: "1.9 · 家長心聲",
      commentsHomeTitle: "家長怎麼說。",
      commentsHomeView: "查看所有心聲",
    },

    // ───────── Programmes ─────────
    programmes: {
      meta: {
        title: "我們的課程 — 夏恩教育",
        description:
          "夏恩幼兒課程(3–6 歲)、英語精修、數學精研及中文卓越(K1–中三)。AI 強化、緊貼香港教育局課程的個人化學習方案。",
        ogTitle: "課程總覽 — 夏恩教育",
        ogDescription: "為 3 至 12 歲兒童提供英文、中文及數學個人化課程。",
      },
      section: "2.0 · 課程總覽",
      titleA: "為每個人量身打造，",
      titleEm: "不論潛能高低",
      titleB: "。",
      lead1:
        "我們的教育課程體系源自本土，由教師及專業人士所開發。系統架構由教育專家參考教育局要求而設計，並緊貼本地學校實際使用的需要。課程適用於 1 至 9 年級(即幼稚園至中三)，涵蓋英語、中文及數學三大主科，每科均是完整的學習系統。教材提供系統化學習及逐步引導，配合充足的圖解及示例，讓學生透過規律而有紀律的練習掌握每個課題，亦適合自修之用。課程研發經 AI 優化，旨在以有限時間獲得最大效益。",
      lead2:
        "夏恩理解每個孩子的潛能各異。正因如此，Cogito 學習法屬高度個性化的設計，以適合每個人。每位學生都有各自的起點(由能力評估決定)及進度規劃，可按個人需要和步伐，以最能適應的方式學習。自成立以來，我們系統的有效性已在各教學中心持續獲得驗證；迄今，我們已培育無數在校表現優異的學生。",
      highlights: "課程亮點",
      comingSoon: "即將推出：互動式學習",
      comingSoonLead: "我們正計劃將互動式學習納入課程，敬請期待。",
      overview: "課程總覽",
      learnMore: "了解更多",
      backToAll: "返回課程總覽",
      explore: "瀏覽各個課程",
      list: [
        {
          title: "夏恩幼兒課程",
          age: "3–6 歲",
          intro:
            "專為幼稚園學童設計的愉快遊戲式學習，讓幼兒在充滿關愛的小班環境中，建立基礎語文、數理、社交技能及雙語自信。",
          body:
            "每週一個半小時的課程結合遊戲時光，涵蓋三大主科，有效為孩子升讀小學做好學前準備。內容充實，能讓孩子自信地適應小學生活，不必為上全日課而恐懼。",
          tracks: [],
          highlights: [
            "基礎語文與數理能力",
            "雙語學習自信",
            "社交技能發展",
            "順利銜接小學生活",
          ],
        },
        {
          title: "英語精修課程",
          age: "K1–中三",
          intro:
            "夏恩英語精修課程乃一綜合課程，涵蓋英語作為外語學習的所有關鍵元素。以系統化的訓練方式，從基礎開始，透過教材逐步引導，最終讓學生達到進階學習水平。",
          body:
            "課程分多個階段，每個階段包含多個為時一小時的學習單元，每個單元由四個環環相扣的模組組成，圍繞同一主題，涵蓋詞彙、文法、閱讀理解及寫作練習。學生可按個人需要選擇每週學習一個或多個單元，模式極具彈性：可追求效率(每週一單元)，亦可追求沉浸式學習(每週多個單元)。在聽說方面，課程配備預先錄製的語音導航，確保學生在中心課堂中培養聆聽、會話及正宗發音能力。中心導師亦會確保學習偏差獲得糾正，學生進度穩步向前。",
          tracks: [],
          highlights: [
            "螺旋式學習，強化效果而不流於沉悶重複",
            "地道英式英語發音及聆聽訓練(母語人士錄音)",
            "綜合詞彙、文法、閱讀、寫作及聆聽",
            "詞彙累積：小六達 5,600 詞，中三達 9,000 詞",
            "成語、諺語及片語訓練",
            "每週寫作任務，附個人化回饋",
            "完全對接香港教育局課程",
            "個人化配合個別資質與需求",
            "經驗豐富的導師確保進度與品質",
          ],
        },
        {
          title: "數學精研課程",
          age: "K1–中三",
          intro:
            "如果電腦和 AI 比我們做得更好，孩子還需要學習數學嗎？需要。懂數學但運用機器提升效率的人是機器的主人；不懂數學而依賴機器的人則會被機器奴役。考試是通往高等教育的敲門磚，而數學正是其中的核心科目。",
          body:
            "數學是超越國界、甚至超越行星界限的通用語言。它是理性主義的基礎，也是科學、商業管理及金融的基本建構塊。夏恩數學是一個系統化訓練課程，內容遵循教育局指引，覆蓋幼稚園至初中(1–9 年級)程度，涵蓋學校所有必修課題，重點是引導學生批判性思考。教材如同學校教科書，包含大量說明註解及練習，透過逐步圖解引導學生自主解難，而我們的導師隨時在旁為學生排除學習障礙，以達致建立獨立學習的習慣。",
          tracks: [
            {
              name: "數學運算",
              desc: "專注於核心運算的速度、準確性及心算敏捷度。此課程提升學習者的數學感，達到快而準，最適合希望在考試中脫穎而出的學生。",
            },
            {
              name: "數學應用",
              desc: "強調運用課程中教授的技術及技能解決現實生活問題。此課程訓練個人的批判性思考及邏輯推理。",
            },
          ],
          highlights: [
            "螺旋式學習，強化效果而不流於沉悶重複",
            "課題劃分為多個為時一小時的單元，每個單元有核心主題及學習目標",
            "提供大量圖解及示例，引導學生由概念性學習以至自行尋找答案",
            "問題循序漸進——由基礎到進階",
            "完全對接香港教育局課程",
            "個人化配合個別需求",
            "經驗豐富的導師確保進度與品質",
          ],
        },
        {
          title: "中文卓越課程",
          age: "K1–中三",
          intro:
            "香港背靠中國並以中文為母語，能精通運用中文的重要性不言而喻。然而，這個包含五千年文化發展的語言並非容易學習，更遑論精通。夏恩中文是一個綜合課程，內容涵蓋現代中文學習的所有關鍵元素，並額外加入文學及文言文部分，以確保完整性。",
          body:
            "課程從基礎開始，透過教材逐步引導，最終達到進階學習者水平。每個階段細分為多個一小時的學習單元，每個單元包含四個環環相扣的模組——詞彙、語法、閱讀理解及寫作，全部圍繞同一主題發展。學生可選擇每週一個單元追求專注高效，或多個單元追求沉浸式學習；中心導師隨時協助有需要的學生，並確保學習偏差獲得糾正、進度穩步向前。",
          tracks: [],
          highlights: [
            "螺旋式學習，精心規劃，強化而不重複",
            "綜合詞彙、文法、閱讀、寫作，加入文學及文言文",
            "結構化詞彙累積，大量成語及諺語訓練",
            "每週寫作任務，附個人化回饋",
            "完全對接香港教育局課程",
            "個人化配合個別資質",
            "經驗豐富的導師確保進度與品質",
            "從基礎到進階，為終身學習建立穩固根基",
          ],
        },
      ],
    },

    // ───────── Advantage ─────────
    advantage: {
      meta: {
        title: "夏恩優勢 — 個人化、AI 強化、小班教學",
        description:
          "真正個人化、1:3 親密小班、英式英語根基、自家教材、系統化學習與全人發展——夏恩的競爭優勢。",
        ogTitle: "夏恩優勢",
        ogDescription:
          "為何夏恩教學法行之有效：個人化、小班、系統化內容與全人成長。",
      },
      section: "3.0 · 夏恩優勢",
      titleA: "建基於 ",
      titleEm: "四十年",
      titleB: " 信任與成果。",
      lead:
        "任何成功課程的關鍵，在於設計者真正了解成為優秀學生所具備的條件，並於營運中以良好表現建立口碑，贏得家長及學生的信任。夏恩課程背後的創辦人及設計師均擁有四十年教育經驗，曾培育無數孩子從小成長——不僅成為課堂上的優秀學生，更在公開考試中表現卓越，並進入頂尖大學。",
      principlesTitle: "夏恩課程的優勢。",
      principlesLead: "這些是每一個夏恩課程的根基。",
      principles: [
        "有效將知識轉化為理解，助學生建立學習基礎",
        "擁有涵蓋本地教育系統所需的知識內容體系",
        "容許個人化學習規劃的彈性",
        "培養學生持續自主學習的習慣",
        "與家長保持良好溝通，讓他們了解學生學習狀況及進度",
        "奉行學生優先的文化",
      ],
      classSize: "班級人數",
      classSizeDesc: "每位導師最多學生數",
      featuresTitle: "夏恩教室具有以下特點。",
      features: [
        {
          title: "真正的個人化學習",
          desc: "基於持續的評估，為每個孩子量身打造學習旅程。",
        },
        {
          title: "親密小班(1:3 師生比)",
          desc: "每位老師最多照顧 3 名學生(有時更少)，每位學生都獲得充分的關注及支持。",
        },
        {
          title: "英式英語根基，本地課程銜接",
          desc: "夏恩英語課程培養地道英式英語能力，並融入真實生活情境。",
        },
        {
          title: "成熟優質的原創內容",
          desc: "所有教材均由擁有數十年香港教育經驗的本地學術團隊自主研發。",
        },
        {
          title: "系統化學習",
          desc: "教材精心規劃，逐步建立基礎，累積知識而不造成不必要的重複負擔。",
        },
        {
          title: "心態塑造",
          desc: "我們的方法強化自主學習能力的建立，並透過正向回饋機制鼓勵正向思考行為。",
        },
        {
          title: "全人發展",
          desc: "在培養核心學術能力的同時，亦培育誠信、同理心及求知慾。",
        },
      ],
    },

    // ───────── About ─────────
    about: {
      meta: {
        title: "關於夏恩教育 — 創辦人故事與願景",
        description:
          "由蔡老師(Ms. Grace Choi)及馬老師(Mr. H.C. Ma)於 2017 年創立(前稱 Shane Education)，植根香港的本土教育品牌，以泰戈爾「以生命影響生命」為精神信念。",
        ogTitle: "關於夏恩教育",
        ogDescription: "四十年香港兒童教育經驗，以及驅動夏恩前行的願景。",
      },
      section: "4.0 · 關於我們",
      titleA: "為香港孩子而設的 ",
      titleEm: "本土品牌",
      titleB: "。",
      lead:
        "夏恩教育由兩位擁有四十年教育經驗的資深教育工作者於 2017 年創立。隨著公司升級轉型，品牌重新命名為 Cogito(中文名稱保持不變)。鑑於當今知識管理的科技進步，新身份亦標誌著我們更聚焦於科技驅動、服務導向及以學生為本。我們現在是一個服務香港學生需求的本土平台。配合新焦點，我們的課程已透過 AI 工具進行大幅革新，重新評估及優化教學系統，確保新身份與最新教育趨勢接軌。",

      foundersSection: "4.2 · 創辦人",
      foundersTitle: "創辦人的話",

      grace: {
        section: "4.1 · 創辦人",
        name: "蔡老師",
        nameZh: "Ms. Grace Choi",
        role: "註冊教師 · 資深教育家 · 創辦人",
        avatar: "蔡",
        paragraphs: [
          "「我擁有超過四十年教育經驗，曾任中學教師(同時負責校內紀律)，及後成為某知名跨國教育品牌(營運遍及 40 個國家)的加盟補習中心負責人兼校長。在成立夏恩前，我在丈夫的協助下，為該品牌建立了全球最大的教育中心(以學生人數計算)。在那段事業的高峰期，轄下中心擁有 3,000 名活躍學生。",
          "這段寶貴經驗令我明白，一個品牌能否壯大，關鍵是能否影響學生走上該走的道路。在教育行業，如果動機純粹功利，利益反而會遠離。如果動機是為影響下一代成為正直、受尊敬、並願意在需要時伸出援手的人，結果反會超乎想像。",
          "我的理念可以簡潔地以泰戈爾的詩句『以生命影響生命』來概括。",
          "創立夏恩，讓我擺脫以前的種種限制，實現一個夢想。在夏恩屋簷下，我們不僅教授知識，更是點亮內在之光。我們幫助每個孩子發現屬於自己的光芒，並將其轉化為對學習的熱情。",
          "時至今日，我的第一批學生早已為人父母，當他們回來將自己的孩子也託付給我時，是最令人感動的。這份跨世代的信任，正是我們使命的動力：服務他人、傳播愛、透過與孩子『互動共振』，創造無可取代的價值。」",
        ],
        signature: "— 蔡老師",
      },

      poem: {
        eyebrow: "我們的座右銘 · 泰戈爾",
        title: "以生命影響生命。",
        lines: [
          "活成一道光，",
          "因為你不知道，",
          "誰會藉著你的光，",
          "走出黑暗。",
        ],
        attribution: "— 泰戈爾(Rabindranath Tagore)",
      },

      hc: {
        section: "4.2 · 創辦人",
        name: "馬老師",
        nameZh: "Mr. H.C. Ma",
        role: "C. Eng., M.Phil. · 創辦人",
        avatar: "馬",
        paragraphs: [
          "「我原是工程師，本想按企業階梯逐步攀升。然而，命運另有安排。有一天，出於好奇，我決定體驗一下太太的補習中心工作，而這個決定啟發了我的思路。",
          "就以種樹作為比喻，植物學家會告訴你需要多少陽光、養分和水份，但最好的樹永遠是最用心栽種的那棵。三十年前，我決定改變軌道，加入太太的工作，從此我一直走在這條探索路上，與太太一起成就一個共同願景，看著孩子成長，是最令人滿足的體驗。",
          "在創立 Cogito 的此刻，全球充斥著混亂，而且每下愈況。似乎人類正面臨抉擇，必須要重返心與善，以光明壓倒黑暗與仇恨，才可為未來帶來改變。正向教育就是目前我們可以做的事。",
          "莫以善小而不為，Cogito 的創立正是適逢其時。希望有志者願來加盟，讓更多人受益。我深信，只要動機正確，美好的事總會隨之而來。」",
        ],
        signature: "— 馬老師",
      },
    },

    // ───────── Comments ─────────
    comments: {
      meta: {
        title: "家長心聲 — 夏恩教育",
        description:
          "聆聽其子女在夏恩教育(前稱 Shane Education)就讀家長的真實心聲——真實的故事，真實的得益。",
        ogTitle: "家長心聲 — 夏恩教育",
        ogDescription: "來自我們社群的真實家長故事。",
      },
      section: "5.0 · 家長心聲",
      titleA: "來自 ",
      titleEm: "我們家長",
      titleB: " 的真實故事。",
      lead:
        "以下心聲來自其子女在夏恩教育(前稱 Shane Education)就讀的家長。為保護隱私，姓名不予公開，但每一段都來自真實家長，他們正從學習中獲得實際益處。",
      collected: "心聲收集於 2026 年 4 月。",
      footnote: "備註：其他家長心聲存放於另一檔案，將於日後更新中陸續加入。",
      list: [
        {
          name: "C 太",
          relation: "P3 學生家長",
          body:
            "我女兒在夏恩(前稱 Shane)已兩年。1:3 的課堂讓她真正獲得關注——她從以前害怕英文，變成現在會在家寫小故事自娛。",
        },
        {
          name: "L 先生",
          relation: "K3 及 P5 學生家長",
          body:
            "我兩個孩子都在夏恩上課。最讓我欣賞的是，他們的學習路徑完全不同。導師清楚每個孩子在哪個階段，絕不會在他們未準備好時硬推。",
        },
        {
          name: "W 太",
          relation: "中一學生家長",
          body:
            "我們以前試過大型補習集團。夏恩的不同在於，職員會就孩子的事真正打電話給你——不是為了推銷，而是更新真實進度。這份信任很罕見。",
        },
        {
          name: "Y 小姐",
          relation: "P1 學生家長",
          body:
            "個人化課程非常適合我兒子。他數學快但閱讀較弱，夏恩為他訂出兼顧兩者的方案。他每堂都很期待。",
        },
        {
          name: "T 先生",
          relation: "P4 學生家長",
          body:
            "讓我下定決心的，是與創辦人五分鐘的對話。你立即就能感受到她數十年的教育經驗，以及她的真誠關懷。我們從未後悔報讀。",
        },
        {
          name: "K 太",
          relation: "P2 學生家長",
          body:
            "女兒的自信心明顯改變。導師不只是指出錯處，而是解釋原因，讓她自己得出答案。這種習慣已延伸到她的學校功課。",
        },
      ],
    },

    // ───────── Partners ─────────
    partners: {
      meta: {
        title: "合作夥伴與加盟商 — 加入夏恩教育",
        description:
          "成為夏恩合作夥伴或加盟商。低門檻、總部全面支援，以及行之有效的系統化課程，適合香港及海外的教育工作者。",
        ogTitle: "合作夥伴與加盟商 — 夏恩教育",
        ogDescription: "兩種簡單的合作方式——夏恩合作夥伴或夏恩加盟商。",
      },
      section: "6.0 · 加入我們",
      titleA: "兩種加入方式 — ",
      titleEm: "都源自熱誠",
      titleB: "。",
      lead1:
        "如果您是有幹勁的個人，不論是否有教育經驗或曾接受培訓，都歡迎以加盟或合作夥伴身份加入我們。兩者門檻均低，但我們會根據候選人的熱誠、能力及實際情況進行篩選。對於有經驗或已正在營運的業者，成為合作夥伴能以非常實惠的固定月費，強化現有營運模式，對您現有業務有益無損。",
      lead2:
        "對於稍欠經驗、希望獲得夏恩總部全面支援的人士，成為加盟商是最佳選擇。無論選擇哪種協作模式，我們通常要先了解而不會在網上報價，因為合作條件取決於擬議的營運規模及範圍等因素。只要您有教學熱誠並有耐性應付小朋友，我們隨時歡迎。然而，我們需要與您進行面對面會談作為起點，因為我們無意將資料提供給可能隱藏在查詢背後的 AI 機器。",
      partnerSection: "6.1",
      partnerTitle: "夏恩合作夥伴",
      partnerP1:
        "如果您已有正營運中的教育機構，或您本身就是教育工作者，可以以合作夥伴身份加入我們。每月只需支付固定的小額費用，即可獲得夏恩的全套或部分教學內容(金額視乎機構規模及所需內容)。",
      partnerP2:
        "作為合作夥伴，您可以保留自己的企業身份及名稱，只需在中心店面放置標示，表明是夏恩合作夥伴身份。您仍可依舊進行日常營運及開辦自己的課程，同時提供夏恩的課程作為增值服務。",
      partnerNoteLabel: "備註：",
      partnerNote: "關於您在中心如何使用我們的內容，將有額外的驗證要求。",

      franchiseeSection: "6.2",
      franchiseeTitle: "夏恩加盟商",
      franchiseeP1:
        "夏恩為加盟商提供由創業、營運、教學以至客戶服務等各方面的全面支援。如果您從零開始，夏恩會提供從教室設立、設計、取得適當牌照、招聘人員、培訓、市場推廣、教學協助等全程支援。我們可協助您從小規模開始，預先規劃可擴展的設計，以達致遠大的未來。",
      franchiseeP2:
        "成為夏恩加盟商需持有任何學科的高級文憑或以上學歷，但無需擁有任何教育經驗。只要您對教學及引導孩子成長充滿熱誠，您便合乎資格。",
      franchiseeBenefits: [
        "參與聯合市場推廣及宣傳，提升品牌形象",
        "參與聯合活動，提升您作為認可優質教育的地位",
        "日常中心營運培訓及協助",
        "參與定期策略會議及一致行動的權利",
        "營運、管理及科技培訓，提升生產力",
        "教學培訓，提升教學品質",
        "招聘及人力資源協助",
      ],

      contactTitle: "準備好了嗎？讓我們由一次面對面對話開始。",
      contactLeadA: "歡迎將查詢直接發送至 ",
      contactLeadB: " ，或透過 WhatsApp 訊息至 ",
      contactLeadC: " ，並註明您的姓名及聯絡方式。",
      ctaWA: "WhatsApp 9494 0994",
      ctaEmail: "電郵聯絡",

      formTitle: "表達您的意向",
      formLead: "請簡單介紹一下自己，我們會盡快聯絡您安排會面。",
      formName: "姓名",
      formEmail: "電郵地址",
      formPhone: "電話號碼",
      formRegion: "首選地區",
      formInterest: "我有興趣",
      formInterestPartner: "成為合作夥伴",
      formInterestFranchisee: "成為加盟商",
      formInterestBoth: "兩者皆可 — 歡迎商討",
      formMessage: "留言（選填）",
      formMessagePlaceholder: "請簡介您的背景、經驗或任何問題...",
      formSubmit: "提交意向",
      formSubmitting: "提交中...",
      formSuccessTitle: "謝謝！",
      formSuccessMessage: "我們已收到您的意向，將盡快與您聯絡。",
      formSubmitAnother: "再提交一份",
      preferChat: "想直接聯絡我們？",
    },

    // ───────── Begin ─────────
    begin: {
      meta: {
        title: "開啟您的夏恩之旅 — 免費家長諮詢會",
        description:
          "預約夏恩教育免費家長諮詢會。輕鬆的能力評估、個人化學習方案，以及位於香港藍田的小班支持環境。",
        ogTitle: "開啟您的夏恩之旅",
        ogDescription: "免費諮詢、能力評估及個人化學習方案。",
      },
      section: "7.0 · 開啟旅程",
      titleA: "以家長身份開啟您的 ",
      titleEm: "夏恩之旅",
      titleB: "。",
      lead:
        "所有父母都希望給予孩子最好的，但要找到良好的教育方法並不容易。十年樹木，百年樹人——追求一次性的考試優異而非可持續的進步是短視的。我們建議所有認真的家長與夏恩進行面對面諮詢，尋求最合適的解決方案。",
      steps: [
        {
          n: "01",
          title: "參加免費家長諮詢會",
          desc: "預約一次免費、無壓力的諮詢，與我們的團隊面對面交流。",
        },
        {
          n: "02",
          title: "讓孩子完成輕鬆而具洞察力的學習能力評估",
          desc: "完成入學評估(DT)，協助我們找出最合適的起點。",
        },
        {
          n: "03",
          title: "個人化學習方案",
          desc: "夏恩向您提供一份詳盡的個人化學習方案。",
        },
        {
          n: "04",
          title: "在夏恩開始小班學習",
          desc: "在 1:3 的支持性環境中開始學習，讓好奇心茁壯，進度時刻可控。",
        },
      ],
      contactTitle: "立即聯絡我們。",
      labels: {
        phone: "電話",
        waParents: "WhatsApp · 家長",
        waOthers: "WhatsApp · 加盟與其他",
        email: "電郵",
        showcase: "示範中心",
        showcaseValue: "香港藍田",
        showcaseHint: "歡迎聯絡我們預約參觀。",
        social: "關注我們的社群",
        socialValue: "Cogito Hong Kong",
        socialHint: "育兒貼士與最新動態。",
      },
      bookCta: "立即預約免費諮詢",
    },

    // ───────── 404 ─────────
    notFound: {
      title: "找不到頁面",
      lead: "您要尋找的頁面不存在或已被移動。",
      home: "返回首頁",
    },

    // ───────── Centres ─────────
    centres: {
      meta: {
        title: "我們的教育中心 — 夏恩教育 Cogito Education",
        description:
          "歡迎蒞臨夏恩教育中心：藍田匯景廣場及小西灣富景花園。地址、電話及 WhatsApp 一覽。",
        ogTitle: "我們的教育中心 — 夏恩教育",
        ogDescription: "於藍田或小西灣尋找最就近您的夏恩教育中心。",
      },
      section: "親臨參觀",
      title: "我們的教育中心",
      lead: "兩間用心經營的教育中心遍佈港九，歡迎親臨，或透過 WhatsApp 預約免費諮詢。",
      addressLabel: "地址",
      phoneLabel: "電話",
      whatsappLabel: "WhatsApp",
      directionsCta: "查看地圖",
      whatsappCta: "WhatsApp 聯絡",
      callCta: "致電查詢",
      list: [
        {
          name: "夏恩蔡老師教育中心",
          address: "九龍藍田匯景廣場五樓 587 舖（藍田地鐵 B 出口）",
          phone: "2775 1234",
          whatsapp: "6844 9899",
          mapsQuery: "匯景廣場 藍田",
          mapsEmbed:
            "https://maps.google.com/maps?q=%E5%8C%AF%E6%99%AF%E5%BB%A3%E5%A0%B4%20%E8%97%8D%E7%94%B0&t=m&z=16&ie=UTF8&iwloc=&output=embed",
        },
        {
          name: "夏恩小西灣教育中心",
          address: "香港柴灣小西灣道 18 號富景花園商場一樓 160 舖",
          phone: "2898 5187",
          whatsapp: "9732 8072",
          mapsQuery: "富景花園商場 小西灣",
          mapsEmbed:
            "https://maps.google.com/maps?q=%E5%AF%8C%E6%99%AF%E8%8A%B1%E5%9C%92%E5%95%86%E5%A0%B4%20%E5%B0%8F%E8%A5%BF%E7%81%A3&t=m&z=16&ie=UTF8&iwloc=&output=embed",
        },
      ],
    },
  },
};

export type Dict = (typeof dict)["en"];
