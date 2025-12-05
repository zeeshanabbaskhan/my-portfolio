export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    gallery?: string[];
    technologies: string[];
    features: string[];
    challenges?: string[];
    liveUrl: string;
    githubUrl?: string;
    githubUrls?: {
        frontend?: string;
        backend?: string;
        fullProject?: string;
    };
    category: string;
    date: string;
}

export const projects: Project[] = [
    {
        id: "viralix-ai-platform",
        title: "VIRALIX - AI Social Media Management Platform",
        shortDescription:
            "A full-stack AI-powered platform to manage, schedule, and analyze social media. Features smart captions, multi-platform publishing to Instagram & Facebook, and comprehensive analytics.",
        fullDescription:
            "Viralix is a full-stack social media management platform that empowers content creators, marketers, and businesses to streamline their social media workflow. Built with modern technologies, it combines AI-powered content generation using Google Gemini, multi-platform publishing to Instagram and Facebook, automated cron-based scheduling, and comprehensive analytics in one unified dashboard. The platform features an AI-first approach with intelligent caption generation, hashtag suggestions, and content optimization. It supports direct OAuth login for Instagram Business/Creator accounts and Facebook Page management with multi-page support.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1763109057/Screenshot_2025-11-14_133030_tco8z5.png",
        technologies: [
            "Next.js 15",
            "React 19",
            "Tailwind CSS",
            "Zustand",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Google Gemini AI",
            "Meta Graph API",
            "Cloudinary",
            "JWT",
            "Zod",
        ],
        features: [
            "AI-Powered Smart Captions - Generate engaging, platform-optimized captions with customizable tone using Google Gemini",
            "Hashtag Engine - AI-suggested hashtags for maximum reach and discoverability",
            "Content Rewriter - Transform existing text for different tones (professional, witty, concise)",
            "Instagram Integration - Direct OAuth login, Business/Creator accounts, Image & Reels publishing, Insights",
            "Facebook Integration - Page management, Multi-page support, Text/Photo/Video posts, Page analytics",
            "Media Library - Cloud-based asset storage via Cloudinary with CDN delivery",
            "Post Composer - Rich editor with real-time preview and draft system",
            "Scheduling Calendar - Visual timeline with cron-based automated publishing",
            "Multi-Account Publishing - Target specific accounts per post from single dashboard",
            "Unified Analytics Dashboard - Views, likes, comments, shares, followers with interactive Recharts",
            "Platform Breakdown - Per-account performance insights with real-time refresh",
            "JWT Authentication with OTP verification and rate limiting",
        ],
        challenges: [
            "Implementing Meta OAuth 2.0 flow for both Instagram Business and Facebook Pages with proper token management",
            "Building real-time analytics aggregation from multiple platforms with efficient data caching",
            "Integrating Google Gemini AI for context-aware content generation with customizable tones",
            "Developing node-cron based scheduler that publishes posts every minute reliably",
            "Handling media uploads through Cloudinary with optimization for different platform requirements",
        ],
        liveUrl: "https://client-autoreach-ai.vercel.app/",
        githubUrls: {
            frontend: "https://github.com/zeeshan-890/client-autoreach-ai",
            backend: "https://github.com/zeeshan-890/server-autoreach-ai",
        },
        category: "Full Stack",
        date: "2025",
    },
    {
        id: "ecommerce-website",
        title: "Handphone E-Commerce Platform",
        shortDescription:
            "A production-ready full-stack e-commerce solution with Next.js 14 storefront, Node.js/Express backend, Stripe payments, and comprehensive admin dashboard for business management.",
        fullDescription:
            "A production-ready, full-stack e-commerce solution built for scalability and performance. This project demonstrates a complete digital marketplace ecosystem featuring a high-performance Next.js storefront with server-side rendering and optimistic UI updates, a robust Node.js/Express backend, and a comprehensive admin dashboard for business management. The platform includes Stripe payment integration, support for local mobile wallets (EasyPaisa/JazzCash), JWT authentication with HttpOnly cookies, and role-based access control separating Customer and Admin privileges.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754287430/WhatsApp_Image_2025-07-25_at_14.47.21_4f783563_gfbvt1.jpg",
        technologies: [
            "Next.js 14",
            "Tailwind CSS",
            "Zustand",
            "Axios",
            "Swiper.js",
            "Lucide React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Stripe API",
            "Cloudinary",
            "JWT",
            "Helmet",
            "Bcrypt",
        ],
        features: [
            "Dynamic Storefront - Server-side rendered product pages with optimistic UI updates for instant feedback",
            "Advanced Search & Filtering - Real-time filtering by brand, price, and category with responsive sidebar",
            "Secure Checkout - Integrated Stripe payment gateway with support for EasyPaisa/JazzCash mobile wallets",
            "User Dashboard - Complete order history tracking, address book management, and profile settings",
            "Smart Cart - Persistent shopping cart with real-time stock validation and inventory checks",
            "Analytics Dashboard - Visualized data for revenue trends, order volumes, and top-performing products",
            "Inventory Control - Full CRUD for products with image uploads via Cloudinary",
            "Order Processing - Order lifecycle management (Processing → Shipped → Delivered) with status updates",
            "Role-Based Access Control (RBAC) - Strict separation between Customer and Admin privileges",
            "Mobile-First Design - Custom Tailwind breakpoints with optimized image delivery and code splitting",
        ],
        challenges: [
            "Implementing Stripe payment integration alongside local mobile wallet support (EasyPaisa/JazzCash)",
            "Building stateless JWT authentication with HttpOnly cookies for maximum security",
            "Designing role-based access control system separating Customer and Admin privileges",
            "Creating real-time inventory validation during checkout to prevent overselling",
            "Optimizing Next.js 14 App Router for server-side rendering with dynamic product pages",
        ],
        liveUrl: "https://ecommerce-client-roan-one.vercel.app/",
        githubUrls: {
            frontend: "https://github.com/zeeshan-890/ecommerce-client",
            backend: "https://github.com/zeeshan-890/ecommerce-server",
        },
        category: "Full Stack",
        date: "2025",
    },
    {
        id: "chat-videocall-app",
        title: "FullStack Realtime Chat & Video Call App",
        shortDescription:
            "A production-ready MERN + Socket.IO + WebRTC application featuring real-time 1:1 messaging, WebRTC video calling with ringtones and call states, JWT authentication, and online presence indicators.",
        fullDescription:
            "A production-ready full-stack MERN + Socket.IO + WebRTC application providing comprehensive real-time communication features. The platform includes JWT-based authentication with HTTP-only cookies for security, instant 1:1 messaging with unread message counts, live online presence indicators, and peer-to-peer WebRTC video calling with ringtones, call states, and duration timers. Built with React (Vite) frontend featuring Zustand state management, protected routes, and Cloudinary-powered profile image uploads. The backend uses Express.js with Socket.IO for real-time event handling and MongoDB for data persistence. Includes Docker configuration for CapRover deployment.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754287431/WhatsApp_Image_2025-07-19_at_15.47.23_f1be91d1_lxbnmq.jpg",
        technologies: [
            "React 18",
            "Vite",
            "Zustand",
            "Socket.IO",
            "PeerJS",
            "WebRTC",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Cloudinary",
            "Docker",
        ],
        features: [
            "JWT Authentication - Secure login with HTTP-only cookies preventing XSS attacks",
            "Real-time 1:1 Messaging - Instant message delivery via Socket.IO with unread counts",
            "Online Presence - Live user status indicators with real-time updates",
            "WebRTC Video Calling - Peer-to-peer video calls with ringtone, call states (idle/outgoing/incoming/connected), and duration timers",
            "Auto Call Timeout - Unanswered calls automatically end after 15 seconds",
            "Profile Management - Cloudinary-powered avatar upload and profile updates",
            "Session Persistence - Auto-restore session on page refresh",
            "Protected Routes - Route guards for authenticated pages",
            "Connection Resilience - Auto-reconnect with Socket.IO and custom monitoring",
            "Responsive Design - Mobile-friendly interface with component-scoped CSS",
        ],
        challenges: [
            "Implementing WebRTC peer-to-peer connections with PeerJS wrapper and proper ICE server configuration",
            "Managing complex call state machine (idle → outgoing → incoming → connected → ended) with Zustand",
            "Handling NAT traversal issues with optional Twilio TURN/STUN servers",
            "Building real-time presence system with Socket.IO broadcast events",
            "Proper media stream cleanup and track release on call termination",
            "Docker multi-stage build configuration for CapRover deployment",
        ],
        liveUrl: "https://chat-videocall.app.viralix.dev",
        githubUrl: "https://github.com/zeeshan-890/Chat-App",
        category: "Full Stack",
        date: "2025",
    },
    {
        id: "portfolio-builder",
        title: "PortfolioBuilder - AI-Powered Portfolio Creator",
        shortDescription:
            "A modern, full-stack portfolio builder with AI-powered resume parsing using Google Gemini, drag & drop sections, multiple themes, and shareable public links.",
        fullDescription:
            "PortfolioBuilder is a comprehensive full-stack application that empowers users to create stunning, professional portfolios with ease. The platform features AI-powered resume parsing using Google Gemini (gemini-2.5-flash) that automatically extracts and maps data from uploaded resumes (PDF, DOC, DOCX) to portfolio sections. Users can customize their portfolios with multiple themes (Modern, Minimal, Creative, Professional, Bold, Elegant) each supporting light and dark variants. The drag-and-drop interface allows easy section organization with real-time preview. Generated portfolios are shareable via SEO-friendly public URLs with privacy controls.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754287388/Screenshot_2025-08-02_170041_i3nzmn.png",
        technologies: [
            "Next.js 16",
            "React 18",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Google Gemini AI",
            "JWT",
            "Docker",
            "Nginx",
        ],
        features: [
            "AI-Powered Resume Parsing - Upload PDF/DOC/DOCX and auto-extract personal info, work experience, education, skills, projects using Google Gemini",
            "Drag & Drop Section Builder - Easily organize portfolio sections with real-time preview",
            "6 Professional Themes - Modern, Minimal, Creative, Professional, Bold, Elegant with light/dark variants",
            "Shareable Public Portfolios - SEO-friendly URLs with privacy toggle controls",
            "Smart Field Mapping - AI automatically fills personal info, work experience, education, skills, projects, achievements",
            "User Authentication - JWT-based secure authentication with persistent cloud storage",
            "Responsive Design - Looks great on all devices",
            "Multiple Portfolio Management - Save and manage multiple portfolios per account",
        ],
        challenges: [
            "Integrating Google Gemini AI for accurate resume parsing across different document formats",
            "Building a flexible drag-and-drop section system with real-time preview",
            "Implementing theme system with dynamic variant switching (light/dark)",
            "Dockerizing full-stack app with Nginx reverse proxy for CapRover deployment",
        ],
        liveUrl: "https://portfolio-builder.app.viralix.dev/",
        githubUrl: "https://github.com/zeeshan-890/latest-portfolio-builder",
        // githubUrls: {
        //     frontend: "https://github.com/zeeshan-890/portfolio-builder-client",
        //     backend: "https://github.com/zeeshan-890/portfolio-builder-server",
        // },
        category: "Full Stack",
        date: "2025",
    },
    {
        id: "remote-vitals-monitoring",
        title: "Remote Vitals Monitoring System",
        shortDescription:
            "A healthcare system enabling hospitals and caregivers to monitor patients' vital signs remotely. Built with Java Spring Boot backend and JavaFX desktop frontend.",
        fullDescription:
            "A comprehensive Remote Vitals Monitoring System designed to enable hospitals, clinics, and caregivers to monitor patients' vital signs and medical history remotely. The system features role-based access for Admins, Doctors, and Patients with separate functionality for each. Admins can manage patients, doctors, and appointments while supervising overall vitals tracking. Doctors can view assigned patients, their medical history, and vital records. Patients can view their medical history, vital records, and schedule appointments. The backend is built with Java Spring Boot using Jakarta EE and Spring Data JPA, while the frontend uses JavaFX for an intuitive desktop interface.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1764916357/Screenshot_2025-12-05_113117_jzdoiq.png",
        technologies: [
            "Java",
            "Spring Boot",
            "Jakarta EE",
            "Spring Data JPA",
            "JavaFX",
            "MySQL",
            "H2 Database",
            "Maven",
        ],
        features: [
            "Role-Based Access Control - Separate Admin, Doctor, and Patient portals with distinct functionality",
            "Vitals Monitoring - Track blood pressure, oxygen levels, heart rate, and other vital signs",
            "Patient Management - Admins can manage patients, doctors, and appointments",
            "Doctor Dashboard - View assigned patients, medical history, and vital records",
            "Appointment Scheduling - Patients can schedule appointments with doctors",
            "Medical History - Patients access their complete medical history, doctors review before consultations",
            "Graphical Vitals Display - View vital records in graphical or tabular format",
            "JavaFX Desktop UI - User-friendly interface with tables, navigation, and alert dialogs",
        ],
        challenges: [
            "Implementing role-based authentication system for Admin, Doctor, and Patient users",
            "Building Spring Data JPA repositories for complex entity relationships (Patient, Doctor, User, Appointment, Vital)",
            "Creating JavaFX desktop frontend with FXML scenes and controller bindings",
            "Designing database schema for patients, vitals tracking, and appointment management",
        ],
        liveUrl: "https://drive.google.com/file/d/1_LwV-QvoZtN-33BFwwXDd1KQW6JqiFhM/view?usp=sharing",
        githubUrl: "https://github.com/zeeshan-890/RHMS",
        category: "Full Stack",
        date: "2025",
    },
    {
        id: "nust-internship-system",
        title: "NUST INTERNSHIP Management System",
        shortDescription:
            "A comprehensive internship management system designed for NUST students. Facilitates internship applications, tracking, and management.",
        fullDescription:
            "A complete internship management solution built for the National University of Sciences and Technology (NUST). The system streamlines the entire internship lifecycle from application submission to final evaluation. It provides separate portals for students, faculty coordinators, and company representatives.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754288358/WhatsApp_Image_2025-05-15_at_10.35.31_18aad438_scneja.jpg",
        technologies: ["JavaScript", "HTML", "CSS3", "Java", "Spring Boot"],
        features: [
            "Student application portal",
            "Company registration and job posting",
            "Faculty coordinator dashboard",
            "Application tracking and status updates",
            "Document upload and verification",
            "Automated email notifications",
            "Report generation and analytics",
        ],
        liveUrl: "",
        githubUrl: "https://github.com/zeeshan-890/Nust-Internship-Mangement-System",
        category: "Full Stack",
        date: "2025",
    },
    // {
    //     id: "cafe-management-system",
    //     title: "Cafe Management System",
    //     shortDescription:
    //         "A comprehensive cafe management system built with React, Node.js, and MongoDB. Features include order management, inventory tracking, and customer management.",
    //     fullDescription:
    //         "A complete point-of-sale and management solution for cafes and restaurants. The system handles everything from order taking to inventory management, providing real-time insights into sales and stock levels. The intuitive interface ensures quick order processing during busy hours.",
    //     image:
    //         "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754889359/Screenshot_2025-08-11_101445_otnctr.png",
    //     technologies: ["HTML", "CSS", "JavaScript", "Django", "Python"],
    //     features: [
    //         "Point-of-sale interface for quick ordering",
    //         "Inventory tracking with low-stock alerts",
    //         "Customer management and loyalty programs",
    //         "Sales reports and analytics",
    //         "Menu management with categories",
    //         "Staff management and shift scheduling",
    //         "Receipt printing integration",
    //     ],
    //     liveUrl: "",
    //     githubUrl: "https://github.com/zeeshan-890",
    //     category: "Full Stack",
    //     date: "2025",
    // },
    {
        id: "weather-application",
        title: "Weather Application",
        shortDescription:
            "A weather application that provides real-time weather updates and forecasts. Built with React, Node.js, and OpenWeatherMap API.",
        fullDescription:
            "A beautiful and functional weather application that provides accurate weather information for any location worldwide. The app features current conditions, hourly forecasts, and extended 7-day predictions. With a clean interface and smooth animations, checking the weather becomes a pleasant experience.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754287430/WhatsApp_Image_2025-06-27_at_16.30.20_e684ea9b_grsfty.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
        features: [
            "Current weather conditions with detailed metrics",
            "Hourly and 7-day weather forecasts",
            "Location search with autocomplete",
            "Geolocation support for automatic location detection",
            "Weather alerts and notifications",
            "Beautiful weather animations and icons",
            "Temperature unit conversion (°C/°F)",
        ],
        liveUrl: "https://weather-app-five-sooty-22.vercel.app/",
        githubUrl: "https://github.com/zeeshan-890/weather--app",
        category: "Frontend",
        date: "2025",
    },
    {
        id: "currency-converter",
        title: "Currency Converter",
        shortDescription:
            "A currency converter application that provides real-time exchange rates and conversion functionality.",
        fullDescription:
            "A fast and reliable currency converter that provides real-time exchange rates for currencies worldwide. The application features an intuitive interface for quick conversions, historical rate charts, and support for all major world currencies.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1754888536/Screenshot_2025-08-11_100135_u49sol.png",
        technologies: ["HTML", "CSS", "JavaScript", "Currency Exchange API"],
        features: [
            "Real-time exchange rates",
            "Support for 150+ world currencies",
            "Quick swap between currencies",
            "Historical rate comparison",
            "Favorite currency pairs",
            "Offline mode with cached rates",
            "Clean and intuitive interface",
        ],
        liveUrl: "https://currency-converter-tawny-phi.vercel.app/",
        githubUrl: "https://github.com/zeeshan-890/currency-Converter",
        category: "Frontend",
        date: "2025",
    },
    {
        id: "financer-app",
        title: "Financer - Personal & Group Finance Platform",
        shortDescription:
            "A comprehensive full-stack finance management platform with expense tracking, group bill splitting, savings goals, smart email reminders, and visual analytics dashboard.",
        fullDescription:
            "Financer is a production-ready, full-stack personal and group finance management web application. The platform enables users to track income/expenses with detailed analytics, split bills with friends using equal or custom amounts, set and monitor savings goals with progress visualization, and receive customizable email reminders. Features include JWT authentication with email OTP verification, PKR currency support with multi-currency options, contact management for easy expense sharing, payment request system with professional invoices, bank account integration, and a modern responsive sidebar layout with full dark mode support.",
        image:
            "https://res.cloudinary.com/dxkzjrwgf/image/upload/v1763110173/Screenshot_2025-11-14_134859_syuagi.png",
        technologies: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "Recharts",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Nodemailer",
            "Node Cron",
            "Bcrypt",
        ],
        features: [
            "Personal Finance Management - Track income/expenses with categories, date filtering, and transaction history",
            "Dashboard Analytics - Balance overview, monthly trends (bar charts), spending by category (pie charts), budget tracking",
            "Group Bill Splitting - Equal or custom split amounts with friends, payment status tracking, automated notifications",
            "Smart Email Reminders - Flexible scheduling (immediate, custom hours, manual) with automated cron job delivery",
            "Payment Request System - Professional invoices with due dates, bank account details, and status tracking",
            "Savings Goals - Target amounts, deadlines, contribution tracking, progress visualization with completion status",
            "Contact Management - Organize friends/family/colleagues for easy expense sharing across all features",
            "Email OTP Verification - Secure 6-digit code with 10-minute expiry for account activation",
            "Bank Account Integration - Track expenses and payments with automatic transaction records",
            "Dark Mode Support - Full dark mode with consistent styling across all pages",
        ],
        challenges: [
            "Building comprehensive email notification system with Nodemailer and flexible reminder scheduling via Node Cron",
            "Implementing JWT authentication with secure email OTP verification flow and session persistence",
            "Creating real-time analytics dashboard with Recharts for spending patterns and budget tracking",
            "Designing group expense splitting with equal/custom amounts and multi-user payment status tracking",
            "Developing responsive collapsible sidebar navigation that works seamlessly on desktop and mobile",
        ],
        liveUrl: "https://financer.app.viralix.dev/",
        githubUrl: "https://github.com/zeeshan-890/financer",
        // githubUrls: {
        //     frontend: "https://github.com/zeeshan-890/financer-client",
        //     backend: "https://github.com/zeeshan-890/financer-server",
        // },
        category: "Full Stack",
        date: "2025",
    },
];

export const getProjectById = (id: string): Project | undefined => {
    return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter((project) => project.category === category);
};
