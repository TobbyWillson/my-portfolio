import { FaGitAlt, FaGithub, FaLinkedin, FaReact, FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

import { Phone, Mail, MailPlus } from "lucide-react";

import { SiJavascript, SiMongodb, SiNodedotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

import DeskilzPreview from "../assets/images/Deskilz.png";
import MedibotPreview from "../assets/images/Medibot.png";
import EbenezerPreview from "../assets/images/Ebenezer.jpg";

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
  { title: "Projects", http: "/#projects" },
  { title: "About", http: "about" },
  { title: "Contact", http: "contact" },
];

export const experiences = [
  { title: "JavaScript", years: "3 Years Experience", logo: <SiJavascript /> },
  { title: "React", years: "2 Years Experience", logo: <FaReact /> },
  { title: "Tailwind", years: "1 Year Experience", logo: <SiTailwindcss /> },
  { title: "Git", years: "3 Years Experience", logo: <FaGitAlt /> },
  { title: "TypeScript", years: "3 Months Experience", logo: <SiTypescript /> },
  { title: "Node.js", years: "1 Year Experience", logo: <SiNodedotjs /> },
  { title: "MongoDB", years: "1 Year Experience", logo: <SiMongodb /> },
];

export const contactProfiles = [
  { label: "WhatsApp", icon: <FaWhatsapp className='w-6 h-6' />, href: whatsappURL },
  { label: "Twitter", icon: <FaXTwitter className='w-6 h-6' />, href: "https://x.com/tobby_willson" },
  { label: "LinkedIn", icon: <FaLinkedin className='w-6 h-6' />, href: "https://linkedin.com/in/tobby-willson-069341297" },
  { label: "Github", icon: <FaGithub className='w-6 h-6' />, href: "https://github.com/TobbyWillson" },
  { label: "Telegram", icon: <FaTelegram className='w-6 h-6' />, href: "https://t.me/tobby_willson" },
  { label: "Send Email", icon: <MailPlus className='w-6 h-6' />, href: "mailto:adepitantobi@gmail.com" },
];

export const previousProjects = [
  {
    projectName: "Ebenezer Portfolio",
    projectDescription: "A portfolio website designed specially for a product designer. Showcasing amazing products designed by him.",
    projectPreview: EbenezerPreview,
    alt: "Ebenezer Portfolio",
    tools: ["React", "Tailwind", "CSS"],
    liveUrl: "https://akinebenezer.com",
    repoUrl: "https://github.com/TobbyWillson/Eben-Portfolio",
  },
  {
    projectName: "Medibot - Medical Bot",
    projectDescription: "A trusted digital health companion. Our AI-powered chatbot is designed to provide you with accurate and personalized health information, support, and guidance.",
    projectPreview: MedibotPreview,
    alt: "Medibot Preview",
    tools: ["React", "CSS"],
    liveUrl: "https://medibot-coral.vercel.app",
    repoUrl: "https://github.com/TobbyWillson/Medibot",
  },
  {
    projectName: "Deskilz Restaurant (Clone)",
    projectDescription: "Online food ordering service. Where you can order your favorite cuisine.",

    projectPreview: DeskilzPreview,
    alt: "Deskilz Web App Preview",
    tools: ["HTML", "CSS", "JavaScript"],
    liveUrl: "",
    repoUrl: "https://github.com/TobbyWillson/Deskilz-Clone",
  },
];

export const fieldConfigs = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    error: "Full Name is required.",
    customError: "Please enter your full name!",
    grid: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "johndoe@example.com",
    error: "Email Address is required.",
    customError: "Please enter your Email Address!",
    grid: true,
  },
  {
    name: "contactDetail",
    dynamic: true,
    error: "Preferred contact method detail is required.",
    customError: "Please enter your preferred method of contact details!",
  },
  {
    name: "purpose",
    label: "Purpose",
    type: "text",
    placeholder: "Website redesign, Collaboration...",
    error: "Purpose of message is required.",
    customError: "Please let us know your purpose of contacting us!",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Share your project details...",
    error: "Message is required.",
    customError: "Please enter some messages to give more details!",
  },
];

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
    aboutMe: "I am Oluwatobi Wilson, a frontend developer based in Nigeria.",
    whatIDo: "  I build scalable, high-performance web applications that translate complex product ideas into clean, intuitive user interfaces. My work spans fintech, logistics, commerce, and education platforms—developing systems that balance user experience with real business needs.",
    expertise: "Beyond writing code, I think in systems. I approach frontend development as part of a larger product ecosystem, ensuring that interfaces are not only visually clear, but structured, maintainable, and scalable.",
    whatIBuild: " From crypto platforms to logistics dashboards, accounting systems, and digital learning tools, I specialize in simplifying complex workflows into seamless user experiences.",
    aprroachTitle: "My approach combines:",
    approaches: ["Structured component design over isolated UI elements", "Business-aware development over surface-level styling", "Performance and usability over unnecessary complexity"],
    whoIWorkWith: "I work closely with designers, engineers, and stakeholders to turn ideas into reliable, user-focused products that are ready to scale.",
    involvement: "If it involves complex flows, real users, or high-impact systems, I’m interested.",
  },
];
