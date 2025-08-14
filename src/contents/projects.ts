import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: 'Tic-Tac-Toe',
    description: 'A browser-based interactive Tic-Tac-Toe game implemented with responsive design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/DaniyahRehman/Tic-Tac-Toe', // replace with actual link
    demoLink: 'https://ticy-tacy-toeygame.netlify.app/',
    image: '/projects/Tic-Tac-Toe.png',
  },
  {
    title: 'E-Commerce Website',
    description: 'Developed a dynamic e-commerce landing page showcasing responsive design and basic shopping features.',
    technologies: ['HTML', 'CSS', 'JavaScript','Firebase'],
    githubLink: 'https://github.com/DaniyahRehman/ecommerce-website', 
    demoLink: 'https://ecommerce-website-indol-five.vercel.app/', 
    image: '/projects/e-commerce.png',
  },
  {
    title: 'Serenity Website',
    description: 'An AI-powered platform for mental wellness with personalized tools, tracking, and community support.',
    technologies: ['HTML', 'CSS', 'JavaScript','Firebase'],
    githubLink: 'https://github.com/DaniyahRehman/Serenity',
    demoLink: 'https://serenity-mind-one.vercel.app/', 
    image: '/projects/Serenity.png',
  },
  {
    title: 'ATS Resume Tracker',
    description: 'A Streamlit-based AI tool combining ATS keyword scanning with resume feedback, role suggestions, and LinkedIn comparisons.',
    technologies: ['Python', 'Streamlit', 'Gemini API'],
    githubLink: 'https://github.com/DaniyahRehman/ATS_New', // replace with actual link
    demoLink: 'https://demo.com', // replace with actual demo link
    image: '/projects/ATS_tracker.png',
  },
  {
    title: 'AI Accessibility Assistant',
    description: 'An powered voice assistant for visually impaired users offering document reading, object recognition, and navigation.',
    technologies: ['Python', 'Speech Recognition', 'Computer Vision'],
    githubLink: 'https://github.com/DaniyahRehman/Smart-Visual-Assisstant.git', // replace with actual link
    demoLink: 'http://localhost:5501/', // replace with actual demo link
    image: '/projects/Accessibility assistant.png',
  }
];
