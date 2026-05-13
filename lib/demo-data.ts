export const demoUser: User = {
  id: "demo-user",
  name: "Abhishek Bhardwaj",
  email: "abhishek@prepwise.ai",
};

export const demoInterviews: Interview[] = [
  {
    id: "frontend",
    userId: demoUser.id,
    role: "Frontend Developer",
    type: "Technical",
    level: "Mid-level",
    techstack: ["React", "TypeScript", "Next.js"],
    questions: [
      "Walk me through how React reconciles state updates.",
      "How would you improve Core Web Vitals on a dashboard page?",
      "Explain a recent accessibility issue you solved.",
    ],
    finalized: true,
    createdAt: "2026-05-10T10:00:00Z",
  },
  {
    id: "fullstack",
    userId: demoUser.id,
    role: "Full Stack Developer",
    type: "Mixed",
    level: "Senior",
    techstack: ["Node.js", "MongoDB", "React"],
    questions: [
      "How do you design a resilient API contract?",
      "Describe a production incident you debugged end to end.",
      "What tradeoffs do you consider when choosing a database?",
    ],
    finalized: false,
    createdAt: "2026-05-09T15:30:00Z",
  },
  {
    id: "backend",
    userId: demoUser.id,
    role: "Backend Engineer",
    type: "Behavioral",
    level: "Junior",
    techstack: ["Node.js", "PostgreSQL", "Docker"],
    questions: [
      "Tell me about a time you handled ambiguous requirements.",
      "How do you communicate risk to non-technical teammates?",
      "What does ownership mean to you on a backend team?",
    ],
    finalized: false,
    createdAt: "2026-05-08T09:15:00Z",
  },
  {
    id: "data-analyst",
    userId: demoUser.id,
    role: "Data Analyst",
    type: "Technical",
    level: "Mid-level",
    techstack: ["SQL", "Python", "Tableau"],
    questions: [
      "How would you investigate a sudden drop in weekly active users?",
      "Explain the difference between an inner join and a left join.",
      "How do you decide which visualization best explains a metric?",
    ],
    finalized: false,
    createdAt: "2026-05-07T12:20:00Z",
  },
  {
    id: "business-analyst",
    userId: demoUser.id,
    role: "Business Analyst",
    type: "Mixed",
    level: "Mid-level",
    techstack: ["Excel", "SQL", "Power BI"],
    questions: [
      "How do you turn stakeholder requests into clear requirements?",
      "Tell me about a time you challenged a business assumption with data.",
      "How would you prioritize conflicting reporting needs?",
    ],
    finalized: false,
    createdAt: "2026-05-06T11:10:00Z",
  },
  {
    id: "product-analyst",
    userId: demoUser.id,
    role: "Product Analyst",
    type: "Behavioral",
    level: "Senior",
    techstack: ["A/B Testing", "SQL", "Amplitude"],
    questions: [
      "How would you measure success for a new onboarding flow?",
      "What makes an experiment trustworthy?",
      "Describe a time you influenced a product decision.",
    ],
    finalized: false,
    createdAt: "2026-05-05T14:45:00Z",
  },
  {
    id: "data-scientist",
    userId: demoUser.id,
    role: "Data Scientist",
    type: "Technical",
    level: "Senior",
    techstack: ["Python", "Machine Learning", "Statistics"],
    questions: [
      "How do you handle imbalanced classification data?",
      "Explain overfitting to a non-technical stakeholder.",
      "How would you validate that a model is ready for production?",
    ],
    finalized: false,
    createdAt: "2026-05-04T16:00:00Z",
  },
  {
    id: "project-manager",
    userId: demoUser.id,
    role: "Project Manager",
    type: "Behavioral",
    level: "Mid-level",
    techstack: ["Agile", "Jira", "Risk Management"],
    questions: [
      "How do you recover a project that is slipping?",
      "How do you communicate scope changes to leadership?",
      "Tell me about a time you resolved a cross-functional conflict.",
    ],
    finalized: false,
    createdAt: "2026-05-03T13:00:00Z",
  },
  {
    id: "ux-designer",
    userId: demoUser.id,
    role: "UX Designer",
    type: "Mixed",
    level: "Junior",
    techstack: ["Figma", "Research", "Prototyping"],
    questions: [
      "Walk me through your design process for a complex feature.",
      "How do you respond when research contradicts product assumptions?",
      "What makes a prototype useful before engineering starts?",
    ],
    finalized: false,
    createdAt: "2026-05-02T09:30:00Z",
  },
];

export const demoFeedback: Feedback = {
  id: "feedback-frontend",
  interviewId: "frontend",
  totalScore: 86,
  createdAt: "2026-05-10T10:35:00Z",
  finalAssessment:
    "You communicated clearly, structured your answers well, and showed strong frontend fundamentals. Your best moments came when you connected technical choices to user impact. Add more concrete metrics and deeper tradeoff analysis to make senior-level answers feel sharper.",
  categoryScores: [
    {
      name: "Communication Skills",
      score: 90,
      comment:
        "Clear pacing, direct answers, and confident summaries made your responses easy to follow.",
    },
    {
      name: "Technical Knowledge",
      score: 84,
      comment:
        "Strong React and performance knowledge, with room to deepen browser rendering examples.",
    },
    {
      name: "Problem Solving",
      score: 82,
      comment:
        "Good breakdowns overall. Include more explicit constraints and alternatives before choosing a solution.",
    },
    {
      name: "Cultural Fit",
      score: 88,
      comment:
        "Collaborative tone and ownership mindset came through naturally.",
    },
    {
      name: "Confidence and Clarity",
      score: 86,
      comment:
        "Confident delivery. A few answers would benefit from tighter endings.",
    },
  ],
  strengths: [
    "Explains technical concepts with practical product context.",
    "Keeps answers organized and easy to evaluate.",
    "Shows healthy collaboration habits and ownership.",
  ],
  areasForImprovement: [
    "Use more quantified impact from previous projects.",
    "Name tradeoffs earlier when discussing architecture choices.",
    "Prepare one stronger example around debugging production issues.",
  ],
};

export const getDemoInterview = (id: string) =>
  demoInterviews.find((interview) => interview.id === id) ?? demoInterviews[0];
