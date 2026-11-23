export const trustPoints = [
    'Clear written proposals',
    'Fixed-scope options',
    'Deployed and supported',
];

export const tickerItems = [
    'Websites',
    'SaaS products',
    'Lead management',
    'AI integration',
    'Dashboards',
    'Business automation',
    'Client portals',
];

export const services = [
    {
        icon: '◐',
        color: 'bg-c1',
        title: 'Business websites',
        description: 'Fast, clear sites designed to turn visitors into enquiries and bookings.',
        items: ['Conversion-focused layout', 'Mobile-first, fast loading', 'SEO and analytics setup'],
        cta: 'Get a website quote',
    },
    {
        icon: '▦',
        color: 'bg-c2',
        title: 'Web systems',
        description: 'Dashboards, client portals, booking tools and lead pipelines that keep everything in one place.',
        items: ['Custom dashboards and reporting', 'Client and team portals', 'Lead and project management'],
        cta: 'Scope my system',
    },
    {
        icon: '✦',
        color: 'bg-c3',
        title: 'SaaS & AI tools',
        description: 'Software products and AI features that automate the repetitive work eating your week.',
        items: ['Custom SaaS MVPs', 'AI follow-up and content tools', 'Integrations with payments and email'],
        cta: 'Talk about an AI tool',
    },
];

export const stats = [
    { value: '60', label: 'day build sprint, shipped in public' },
    { value: '3+', label: 'live products across invoicing, schools and leads' },
    { value: '1-on-1', label: 'you speak directly with the person building it' },
    { value: '100%', label: 'written scope before any work begins' },
];

// export const projects = [
//   {
//     id: 'smartreceipt',
//     title: 'SmartReceipt',
//     description: 'Invoicing and receipt platform with customer records, PDF generation and a business dashboard.',
//     meta: 'React · Node · MongoDB',
//     status: 'Built · Live',
//     statusClass: 'bg-c1/15 text-c1',
//     visualClass: 'bg-[linear-gradient(135deg,#6D5DFC,#22D3EE)]',
//     shapes: [
//       'left-[22px] top-[26px] h-[56%] w-[60%] bg-white/90',
//       'bottom-[22px] right-[22px] h-[30%] w-[32%] bg-white/35',
//     ],
//   },
//   {
//     id: 'educustom',
//     title: 'Educustom',
//     description: 'School management platform for records, classes and day-to-day administration.',
//     meta: 'Full-stack web application',
//     status: 'Built · Live',
//     statusClass: 'bg-[#FF6B9A]/15 text-[#E0467A]',
//     visualClass: 'bg-[linear-gradient(135deg,#FF6B9A,#FFB547)]',
//     shapes: [
//       'left-[22px] top-[26px] h-[60%] w-[44%] bg-white/90',
//       'left-1/2 top-[34px] h-[40%] w-[38%] bg-white/40',
//     ],
//   },
//   {
//     id: 'leadflow',
//     title: 'LeadFlow AI',
//     description: 'One pipeline for every lead, from WhatsApp to website forms, with AI-assisted follow-up.',
//     meta: 'Building in public',
//     status: 'In progress',
//     statusClass: 'bg-[#34D399]/[.18] text-[#119669]',
//     visualClass: 'bg-[linear-gradient(135deg,#34D399,#22D3EE)]',
//     shapes: [
//       'left-[22px] top-[26px] h-[60%] w-[28%] bg-white/90',
//       'left-[calc(28%_+_40px)] top-[26px] h-[60%] w-[28%] bg-white/60',
//       'right-[22px] top-[26px] h-[60%] w-[20%] bg-white/35',
//     ],
//   },
// ];

export const projects = [
    {
        id: "smartreceipt",
        title: "SmartReceipt",
        status: { label: "Built · Live", tone: "violet" },
        summary: "Invoicing and receipt platform with customer records, PDF generation and a business dashboard.",
        meta: "React · Node · MongoDB",
        cta: "View case study",
        links: { live: "https://www.perfectreceipt.com", repo: "https://www.github.com/Adeoye-J" },
        visual: {
            gradient: ["#6D5DFC", "#22D3EE"],
            shapes: [
                { top: "26px", left: "22px", width: "60%", height: "56%", background: "rgba(255,255,255,.9)" },
                { bottom: "22px", right: "22px", width: "32%", height: "30%", background: "rgba(255,255,255,.35)" }
            ]
        },
        details: {
            problem: "Small businesses often send invoices and receipts from scattered tools, so records get lost and payments are slow to chase.",
            solution: "SmartReceipt keeps customer records in one place, generates PDF receipts, and gives the business owner a dashboard showing what is outstanding.",
            features: ["Customer records", "PDF receipt generation", "Business dashboard"],
            outcomes: [],
            stack: ["React", "Node", "MongoDB"]
        }
    },
    {
        id: "educustom",
        title: "Educustom",
        status: { label: "Built · Live", tone: "pink" },
        summary: "School management platform for records, classes and day-to-day administration.",
        meta: "Full-stack web application",
        cta: "View case study",
        links: { live: "", repo: "" },
        visual: {
            "gradient": ["#FF6B9A", "#FFB547"],
            "shapes": [
                { top: "26px", left: "22px", width: "44%", height: "60%", background: "rgba(255,255,255,.9)" },
                { top: "34px", left: "50%", width: "38%", height: "40%", background: "rgba(255,255,255,.4)" }
            ]
        },
        details: {
            problem: "Schools juggle student records, class schedules and admin work across separate files and tools.",
            solution: "Educustom brings records, classes and day-to-day administration into one system that staff can actually use.",
            features: ["Student and staff records", "Class management", "Day-to-day admin workflows"],
            outcomes: [],
            stack: []
        }
    },
    {
        id: "leadflow",
        title: "LeadFlow AI",
        status: { label: "In progress", tone: "mint" },
        summary: "One pipeline for every lead, from WhatsApp to website forms, with AI-assisted follow-up.",
        meta: "Building in public",
        cta: "Follow the build",
        links: { live: "", repo: "" },
        visual: {
            gradient: ["#34D399", "#22D3EE"],
            shapes: [
                { top: "26px", left: "22px", width: "28%", height: "60%", background: "rgba(255,255,255,.9)" },
                { top: "26px", left: "calc(28% + 40px)", width: "28%", height: "60%", background: "rgba(255,255,255,.6)" },
                { top: "26px", right: "22px", width: "20%", height: "60%", background: "rgba(255,255,255,.35)" }
            ]
        },
        details: {
            problem: "Leads arrive through WhatsApp, website forms and chats, and many go cold before anyone follows up.",
            solution: "LeadFlow collects every lead into one pipeline and uses AI to help draft and schedule follow-ups.",
            features: ["WhatsApp and website form capture", "One pipeline for every lead", "AI-assisted follow-up"],
            outcomes: [],
            stack: []
        }
    }
]

export const processSteps = [
    {
        title: 'Tell me the problem',
        description: 'A short call about what’s slowing your business down and what success looks like.',
    },
    {
        title: 'Agree the scope',
        description: 'You get a written proposal and fixed price or phased options before any work starts.',
    },
    {
        title: 'Build in short cycles',
        description: 'Regular working demos so you see progress and can steer it early.',
    },
    {
        title: 'Launch & support',
        description: 'Deployment, handover, and optional ongoing maintenance or retainer.',
    },
];

export const budgetOptions = [
    'Not sure yet',
    'Under ₦500K',
    '₦500K – ₦1.5M',
    '₦1.5M – ₦3M',
    '₦3M+',
];

export const needOptions = [
    'Business website',
    'Web system or dashboard',
    'SaaS or AI tool',
    'Not sure, need advice',
];

export const modal = {
    problemTitle: "The problem",
    solutionTitle: "The solution",
    featuresTitle: "What it does",
    outcomesTitle: "Outcomes",
    stackTitle: "Built with",
    liveLabel: "Visit live site →",
    repoLabel: "View code",
    discussLabel: "Discuss a similar project"
}