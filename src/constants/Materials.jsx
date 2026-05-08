import { FaGitAlt, FaGithub, FaLinkedin, FaReact, FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

import { Phone, Mail, MailPlus, Framer } from "lucide-react";

import { SiFigma, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiRender, SiShadcnui, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

import DeskilzPreview from "../assets/images/Deskilz.png";
import MedibotPreview from "../assets/images/Medibot.png";
import EbenezerPreview from "../assets/images/Ebenezer.jpg";
import { VscVscode } from "react-icons/vsc";

// FramerMotion Logo
const FramerMotion = ({ size = 7, color = "currentColor" }) => (
  <svg viewBox='0 0 34 12' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ height: size, width: "auto" }}>
    <path
      d='M 12.838 0 L 6.12 11.989 L 0 11.989 L 5.245 2.628 C 6.059 1.176 8.088 0 9.778 0 Z M 27.846 2.997 C 27.846 1.342 29.216 0 30.906 0 C 32.596 0 33.966 1.342 33.966 2.997 C 33.966 4.653 32.596 5.995 30.906 5.995 C 29.216 5.995 27.846 4.653 27.846 2.997 Z M 13.985 0 L 20.105 0 L 13.387 11.989 L 7.267 11.989 Z M 21.214 0 L 27.334 0 L 22.088 9.362 C 21.275 10.813 19.246 11.989 17.556 11.989 L 14.496 11.989 Z'
      fill={color}
    />
  </svg>
);

// WhatsApp link and message

const time = new Date().getHours();

const checkTimeOfDay = () => {
  if (time >= 0 && time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time < 16) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const phoneNumber = "2348036524258";
const message = encodeURIComponent(`${checkTimeOfDay()}, Tobby!`);
const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

export const navbarSection = [
  { title: "Projects", http: "/#projects", id: "projects", state: "active" },
  { title: "About", http: "/about", id: "about", state: "" },
  { title: "Contact", http: "/contact", id: "contact", state: "" },
];

export const experiences = [
  { title: "JavaScript", years: "3 Years Experience", logo: <SiJavascript /> },
  { title: "Next.js", years: "2 Years Experience", logo: <SiNextdotjs /> },
  { title: "React", years: "2 Years Experience", logo: <FaReact /> },
  { title: "Tailwind", years: "1 Year Experience", logo: <SiTailwindcss /> },
  { title: "Git", years: "3 Years Experience", logo: <FaGitAlt /> },
  { title: "TypeScript", years: "3 Months Experience", logo: <SiTypescript /> },
  { title: "Node.js", years: "1 Year Experience", logo: <SiNodedotjs /> },
  { title: "MongoDB", years: "1 Year Experience", logo: <SiMongodb /> },
];

export const contactProfiles = [
  // { label: "WhatsApp", icon: <FaWhatsapp className='w-6 h-6' />, href: whatsappURL },
  { label: "Twitter", icon: <FaXTwitter className='w-6 h-6' />, href: "https://x.com/tobby_willson" },
  { label: "LinkedIn", icon: <FaLinkedin className='w-6 h-6' />, href: "https://linkedin.com/in/tobby-willson-069341297" },
  { label: "Github", icon: <FaGithub className='w-6 h-6' />, href: "https://github.com/TobbyWillson" },
  // { label: "Telegram", icon: <FaTelegram className='w-6 h-6' />, href: "https://t.me/tobby_willson" },
  { label: "Send Email", icon: <MailPlus className='w-6 h-6' />, href: "mailto:adepitantobi@gmail.com" },
];

// case study
export const previousProjects = [
  {
    id: "eben-portfolio",
    projectName: "Ebenezer Portfolio",
    projectDescription: "A portfolio website designed for a product designer to showcase projects, skills, and experience.",
    projectPreview: EbenezerPreview,
    alt: "Ebenezer Portfolio",
    tools: ["React", "Tailwind", "CSS"],
    liveUrl: "https://akinebenezer.com",
    repoUrl: "https://github.com/TobbyWillson/Eben-Portfolio",

    caseStudy: {
      hero: {
        title: "Designing a High-Impact Portfolio for a Product Designer",
        subtitle: "Built a modern, conversion-focused portfolio to improve visibility and client engagement.",
        role: "Frontend Developer & Designer",
        duration: "3 weeks",
        team: "Solo project",
        tools: ["React", "Tailwind CSS"],
      },

      overview: {
        context: "A product designer needed a personal portfolio to showcase work and attract clients.",
        problem: "Existing portfolio lacked structure, clarity, and failed to communicate value effectively.",
        goal: "Create a clean, modern portfolio that highlights projects and improves user engagement.",
      },

      research: {
        methods: ["Portfolio benchmarking", "Competitor analysis", "UX best practices review"],
        insights: ["Users scan portfolios quickly rather than reading in detail", "Clear project structure improves engagement", "Strong visuals increase perceived credibility"],
      },

      problemDefinition: {
        painPoints: ["Unclear project presentation", "Poor visual hierarchy", "Low engagement from visitors"],
        statement: "Design a portfolio that clearly communicates skills and showcases projects in a structured and engaging way.",
      },

      process: {
        ideas: ["Minimalist layout", "Strong typography focus", "Project-first structure"],
        iterations: ["Refined layout for better spacing and readability", "Improved navigation for easier access to projects"],
      },

      solution: {
        features: ["Clean and minimal UI", "Dedicated project sections", "Responsive design across devices"],
        decisions: ["Used whitespace to improve readability", "Prioritized projects over excessive text"],
      },

      results: {
        metrics: ["Improved visual clarity and structure", "Better user navigation experience"],
        qualitative: "Users found the portfolio easier to navigate and more visually appealing.",
      },

      nextSteps: ["Integrate CMS for easy updates", "Add blog/articles section"],
    },
  },

  {
    id: "medibot",
    projectName: "Medibot - Medical Bot",
    projectDescription: "An AI-powered chatbot providing personalized health information and support.",
    projectPreview: MedibotPreview,
    alt: "Medibot Preview",
    tools: ["React", "CSS", "Node/Express API", "MongoDB"],
    liveUrl: "https://medibot-coral.vercel.app",
    repoUrl: "https://github.com/TobbyWillson/Medibot",

    caseStudy: {
      hero: {
        title: "Designing an AI Health Assistant for Better Accessibility",
        subtitle: "Developed a chatbot to provide quick and reliable health guidance.",
        role: "Fullstack Developer",
        duration: "5 weeks",
        team: "Solo project",
        tools: ["React", "CSS", "Node.js", "MongoDB"],
      },

      overview: {
        context: "Access to quick and reliable health information is often limited.",
        problem: "Users struggle to get immediate, trustworthy health advice online.",
        goal: "Create an accessible chatbot that delivers accurate and helpful responses.",
      },

      research: {
        methods: ["User research", "Health platform analysis"],
        insights: ["Users want fast responses", "Trust is critical in health-related apps", "Simple UI improves usability"],
      },

      problemDefinition: {
        painPoints: ["Delayed access to information", "Information overload from search engines"],
        statement: "Provide users with a fast, reliable, and simple way to access health information.",
      },

      process: {
        ideas: ["Chat-based interface", "Simple input/output flow"],
        iterations: ["Improved chatbot response handling", "Enhanced UI for readability"],
      },

      solution: {
        features: ["AI chatbot interface", "Real-time responses", "Simple and clean UI"],
        decisions: ["Used chat UI for familiarity", "Kept design minimal to reduce cognitive load"],
      },

      results: {
        metrics: ["Improved response accessibility", "Reduced time to get basic health info"],
        qualitative: "Users appreciated the speed and simplicity of the chatbot.",
      },

      nextSteps: ["Add voice interaction", "Improve AI accuracy"],
    },
  },

  {
    id: "deskilz",
    projectName: "Deskilz Restaurant (Clone)",
    projectDescription: "A food ordering web app allowing users to browse and order meals easily.",
    projectPreview: DeskilzPreview,
    alt: "Deskilz Web App Preview",
    tools: ["HTML", "CSS", "JavaScript"],
    liveUrl: "",
    repoUrl: "https://github.com/TobbyWillson/Deskilz-Clone",

    caseStudy: {
      hero: {
        title: "Building a Seamless Food Ordering Experience",
        subtitle: "Created a responsive food ordering interface focused on usability.",
        role: "Frontend Developer",
        duration: "2 weeks",
        team: "Solo project",
        tools: ["HTML", "CSS", "JavaScript"],
      },

      overview: {
        context: "Food delivery platforms require intuitive and fast ordering experiences.",
        problem: "Complex navigation can frustrate users and reduce conversions.",
        goal: "Design a simple and intuitive ordering interface.",
      },

      research: {
        methods: ["Competitor analysis"],
        insights: ["Users prefer simple navigation", "Clear CTAs improve ordering flow"],
      },

      problemDefinition: {
        painPoints: ["Confusing menus", "Too many steps to order"],
        statement: "Simplify the food ordering process for faster and easier transactions.",
      },

      process: {
        ideas: ["Grid-based menu layout", "Clear call-to-action buttons"],
        iterations: ["Improved layout spacing", "Enhanced button visibility"],
      },

      solution: {
        features: ["Clean menu layout", "Responsive design", "Simple ordering flow"],
        decisions: ["Used grid layout for clarity", "Highlighted key actions"],
      },

      results: {
        metrics: ["Improved usability", "Faster navigation experience"],
        qualitative: "Users found the interface straightforward and easy to use.",
      },

      nextSteps: ["Integrate backend", "Add user accounts"],
    },
  },
];

// Projects
// export const previousProjects = [
//   {
//     id: "Eben-portfolio",
//     projectName: "Ebenezer Portfolio",
//     projectDescription: "A portfolio website designed specially for a product designer. Showcasing amazing products designed by him.",
//     projectPreview: EbenezerPreview,
//     alt: "Ebenezer Portfolio",
//     tools: ["React", "Tailwind", "CSS"],
//     liveUrl: "https://akinebenezer.com",
//     caseStudy: "#",
//     repoUrl: "https://github.com/TobbyWillson/Eben-Portfolio",
//   },
//   {
//     id: "Medibot",
//     projectName: "Medibot - Medical Bot",
//     projectDescription: "A trusted digital health companion. Our AI-powered chatbot is designed to provide you with accurate and personalized health information, support, and guidance.",
//     projectPreview: MedibotPreview,
//     alt: "Medibot Preview",
//     tools: ["React", "CSS", "Node/Express API", "MongoDB"],
//     liveUrl: "https://medibot-coral.vercel.app",
//     caseStudy: "#",
//     repoUrl: "https://github.com/TobbyWillson/Medibot",
//   },
//   {
//     id: "Deskilz",
//     projectName: "Deskilz Restaurant (Clone)",
//     projectDescription: "Online food ordering service. Where you can order your favorite cuisine.",

//     projectPreview: DeskilzPreview,
//     alt: "Deskilz Web App Preview",
//     tools: ["HTML", "CSS", "JavaScript"],
//     liveUrl: "",
//     caseStudy: "#",
//     repoUrl: "https://github.com/TobbyWillson/Deskilz-Clone",
//   },
// ];

// export const fieldConfigs = [
//   {
//     name: "fullName",
//     label: "Full Name",
//     type: "text",
//     placeholder: "John Doe",
//     error: "Full Name is required.",
//     customError: "Please enter your full name!",
//     grid: true,
//   },
//   {
//     name: "email",
//     label: "Email Address",
//     type: "email",
//     placeholder: "johndoe@example.com",
//     error: "Email Address is required.",
//     customError: "Please enter your Email Address!",
//     grid: true,
//   },
//   {
//     name: "contactDetail",
//     dynamic: true,
//     error: "Preferred contact method detail is required.",
//     customError: "Please enter your preferred method of contact details!",
//   },
//   {
//     name: "purpose",
//     label: "Purpose",
//     type: "text",
//     placeholder: "Website redesign, Collaboration...",
//     error: "Purpose of message is required.",
//     customError: "Please let us know your purpose of contacting us!",
//   },
//   {
//     name: "message",
//     label: "Message",
//     type: "textarea",
//     placeholder: "Share your project details...",
//     error: "Message is required.",
//     customError: "Please enter some messages to give more details!",
//   },
// ];

export const methodConfigs = {
  phone: { label: "Phone Number", placeholder: "+234 800 000 0000", type: "tel", inputMode: "numeric" },
  chat: { label: "WhatsApp", placeholder: "WhatsApp number", type: "tel", inputMode: "numeric" },
  email: { label: null, placeholder: null, type: null },
};

export const methods = [
  { id: "phone", label: "Phone", icon: <Phone size={16} className='shrink-0' /> },
  { id: "email", label: "Email", icon: <Mail size={16} className='shrink-0' /> },
  { id: "chat", label: "WhatsApp", icon: <FaWhatsapp size={16} className='shrink-0' /> },
];

export const aboutConfigs = [
  {
    greeting: "Hi",
    welcomeMsg: "You are welcome to read and understand more about me!",
    aboutMe: "I am Tobby Wilson, a frontend developer based in Nigeria.",
    whatIDo: ["  I build scalable, high performance web applications that translate complex product ideas into clean, intuitive user interfaces. ", "My work spans fintech, logistics, commerce, and education platforms—developing systems that balance user experience with real business needs."],
    expertise: "Beyond writing code, I think in systems. I don't just build interfaces, I build systems that scale.",
    whatIBuild: " From crypto platforms to logistics dashboards, accounting systems, and digital learning tools, I specialize in simplifying complex workflows into seamless user experiences.",
    aprroachTitle: "My approach combines:",
    approaches: ["Structured component design over isolated UI elements", "Business-aware development over surface-level styling", "Performance and usability over unnecessary complexity"],
    whoIWorkWith: "I work closely with designers, engineers, and stakeholders to turn ideas into reliable, user-focused products that are ready to scale.",
    involvement: "If it involves complex flows, real users, or high-impact systems, I’m interested.",
  },
];

export const Services = [
  {
    id: 1,
    category: "FRONTEND DEVELOPMENT",
    title: "Modern & Scalable Designs",
    body: "Building modern and scalable apps with React, Next.js, and Tailwind CSS.",
    core: "true",
  },
  {
    id: 2,
    category: "API & DATA INTEGRATION",
    title: "Bridging Systems",
    body: "Connecting frontend interfaces to complex backend systems and building functional prototypes with Node.js.",
    core: "false",
  },
  {
    id: 3,
    category: "UI/UX DESIGN",
    title: "Smooth User Interface",
    body: "Bridging the gap between design and code to create intuitive, user-friendly experiences.",
    core: "false",
  },
];

export const Skills = [
  {
    id: 1,
    category: "Frontend Architecture",
    items: [
      { title: "JavaScript", logo: <SiJavascript /> },
      { title: "TypeScript", logo: <SiTypescript /> },
      { title: "React", logo: <FaReact /> },
      { title: "Next.js", logo: <SiNextdotjs /> },
    ],
  },
  {
    id: 2,
    category: "UI Engineering",
    items: [
      { title: "Tailwind CSS", logo: <SiTailwindcss /> },
      { title: "Shadcn/ui", logo: <SiShadcnui /> },
      { title: "Framer Motion", logo: <FramerMotion /> },
    ],
  },
  {
    id: 3,
    category: "API & Data Integration",
    items: [
      { title: "Node.js/Express", logo: <SiNodedotjs /> },
      { title: "MongoDB", logo: <SiMongodb /> },
      { title: "Render", logo: <SiRender /> },
    ],
  },
  {
    id: 4,
    category: "Development & Tooling",
    items: [
      { title: "Vercel", logo: <SiVercel /> },
      { title: "Git", logo: <FaGitAlt /> },
      { title: "VS Code", logo: <VscVscode /> },
    ],
  },
  {
    id: 5,
    category: "Design & Prototyping",
    items: [{ title: "Figma", logo: <SiFigma /> }],
  },
];
