interface Project {
    title: string;
    description: string;
    imageUrl: string;
    logoUrl?: string;
    link: string;
    technologies: string[];
    category: string;
    slug: string;
    fullDescription?: string;
    features?: string[];
    gallery?: string[];
    client?: string;
    duration?: string;
    role?: string;
    teamSize?: string;
    projectType?: string;
    status?: 'Completed' | 'In Progress' | 'Ongoing';
}

export const projects: Project[] = [
    {
        title: 'Khorcha - Expense Manager',
        description: 'Created an app for tracking income and expenses, with features like an expense filter and interactive charts for visualizing financial data.',
        imageUrl: 'https://i.imgur.com/IcL2eLY.png',
        logoUrl: 'https://i.imgur.com/4KM7rTp.png',
        link: 'https://play.google.com/store/apps/details?id=com.finance.khorcha',
        gallery: [
            'https://i.imgur.com/IcL2eLY.png',
            'https://i.imgur.com/POzF73d.png',
            'https://i.imgur.com/jkjZk85.png',
            'https://i.imgur.com/CZxOLlP.png',
            'https://i.imgur.com/wLLubO1.png',
            'https://i.imgur.com/Js3uRpY.png',
            'https://i.imgur.com/mXlMQQy.png',
            'https://i.imgur.com/1KheNyI.png',
            'https://i.imgur.com/a3oIaDC.png'
        ],
        technologies: ['Flutter', 'Dart', 'SQLite'],
        category: 'Mobile Development',
        slug: 'expense-manager-app',
        fullDescription: 'The Expense Manager App is a powerful financial tracking tool that helps users monitor their spending habits and manage their budget effectively. The app provides detailed insights through interactive charts and graphs, allowing users to visualize their financial patterns. With features like expense categorization, budget setting, and recurring transaction tracking, it offers a complete solution for personal finance management.',
        features: [
            'Income and expense tracking with categories',
            'Interactive charts for financial visualization',
            'Budget setting and monitoring',
            'Recurring transaction management',
            'Export reports in multiple formats',
            'Secure data backup and restore'
        ],
        client: 'Self-initiated',
        duration: '3 months',
        role: 'Solo Developer',
        teamSize: '1 developer',
        projectType: 'Mobile Application',
        status: 'Completed'
    },
    {
        "title": "K9 Fitness",
        "description": "A comprehensive gym management app that helps gym owners track memberships, manage attendance, and streamline operations.",
        "imageUrl": "https://i.imgur.com/KwjCall.png",
        "logoUrl": "https://i.imgur.com/jjKbnUM.png",
        "link": "https://play.google.com/store/apps/details?id=com.fitness.k9&pcampaignid=web_share",
        "technologies": ["Flutter", "Dart", "Firebase"],
        "category": "Mobile Development",
        "slug": "gym-manager-app",
        "fullDescription": "Gym Manager is a powerful application designed to simplify gym management by tracking member details, attendance, and payments. Gym owners can register new members, monitor their check-ins via QR codes or manual entry, and set automated membership renewal reminders. With Firebase integration, the app ensures secure data storage and real-time updates.",
        "features": [
            "Member registration and profile management",
            "Attendance tracking with QR code support",
            "Automated membership renewal reminders",
            "Payment tracking and due date notifications",
            "Admin dashboard for performance insights",
            "Secure data storage with Firebase"
        ],
        "client": "Self-initiated",
        "duration": "3 months",
        "role": "Solo Developer",
        "teamSize": "1 developer",
        "projectType": "Mobile Application",
        "status": "Completed"
    },
    {
        title: 'Expense Manager App (Landing Page)',
        description: 'Developed a landing page showcasing features of the Expense Manager app, highlighting expense tracking, data visualization, and user convenience.',
        imageUrl: 'https://i.imgur.com/ViKPCHE.png',
        logoUrl: 'https://i.imgur.com/4KM7rTp.png',
        link: 'https://khorcha.netlify.app/',
        technologies: ['Next.Js', 'TailwindCSS'],
        category: 'Web Development',
        slug: 'expense-manager-landing-page',
        fullDescription: 'This landing page serves as the promotional website for the Expense Manager App, showcasing its features and benefits in an engaging and visually appealing manner. The page highlights the app\'s expense tracking capabilities, data visualization tools, and user-friendly interface. With interactive elements and responsive design, it effectively communicates the value proposition of the app to potential users.',
        features: [
            'Feature showcase with interactive demonstrations',
            'App screenshots and usage examples',
            'User testimonials and reviews',
            'Download links and app store badges',
            'FAQ section and support information',
            'Contact form for inquiries'
        ],
        client: 'Self-initiated',
        duration: '2 weeks',
        role: 'Web Developer',
        teamSize: '1 developer',
        projectType: 'Website',
        status: 'Completed'
    },
    {
        "title": "BiLLiT - Quick Invoice Generator",
        "description": "A client-side invoice generator that allows users to create and download invoices instantly without requiring a database.",
        "imageUrl": "https://i.imgur.com/knYm9a7.png",
        "logoUrl": "https://i.imgur.com/gtVwpG8.png",
        "link": "https://billit-invoice.netlify.app/",
        "technologies": ["Next.js", "TailwindCSS"],
        "category": "Web Development",
        "slug": "billit-invoice-generator",
        "fullDescription": "BiLLiT is a fast and lightweight invoice generator designed for freelancers, small businesses, and individuals who need a quick and hassle-free way to create invoices. The app works entirely on the client-side, ensuring privacy and security by not storing any data on a server. Users can customize invoices with their business details, add multiple items, apply taxes or discounts, and download PDFs instantly.",
        "features": [
            "Client-side invoice generation",
            "Customizable invoice fields",
            "Instant PDF download",
            "No database or sign-up required",
            "Supports tax and discount calculations",
            "Lightweight and fast performance"
        ],
        "client": "Self-initiated",
        "duration": "2 months",
        "role": "Solo Developer",
        "teamSize": "1 developer",
        "projectType": "Web Application",
        "status": "Completed"
    },
    {
        "title": "Marich Café",
        "description": "A modern café offering a delightful selection of coffee, pastries, and gourmet meals in a cozy ambiance.",
        "imageUrl": "https://i.imgur.com/g2DD5v8.png",
        "logoUrl": "https://i.imgur.com/hRT3wFI.jpg",
        "link": "https://marich-cafe.netlify.app/",
        "technologies": ["Next.js", "Tailwind CSS", "Firebase"],
        "category": "Web Development",
        "slug": "marich-cafe",
        "fullDescription": "Marich Café is a warm and welcoming space for coffee lovers and food enthusiasts. Our website provides a seamless experience for customers to explore our menu, check out daily specials, and reserve tables online. With a visually appealing interface and real-time updates, the café ensures a smooth and delightful digital experience.",
        "features": [
            "Interactive digital menu",
            "Daily specials and promotions display",
            "Seamless user-friendly design",
            "Fast and responsive web experience"
        ],
        "client": "Self-initiated",
        "duration": "1 months",
        "role": "Solo Developer",
        "teamSize": "1 developer",
        "projectType": "Web Application",
        "status": "Completed"
    },
    {
        title: 'eCommerce and Social App',
        description: 'Designed and implemented a comprehensive e-commerce platform with secure user sign-in, product management, and social sharing features.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        logoUrl: 'https://i.imgur.com/qcWa0wk.png',
        link: '',
        technologies: ['Flutter', 'Firebase', 'Dart'],
        category: 'Mobile Development',
        slug: 'ecommerce-social-app',
        fullDescription: 'This comprehensive e-commerce platform combines shopping functionality with social features, creating an engaging user experience. The app includes secure authentication, product browsing with advanced filtering, shopping cart management, and order tracking. The social aspects allow users to share products, create collections, and follow other users.',
        features: [
            'Secure user authentication and profile management',
            'Product catalog with categories and advanced filtering',
            'Shopping cart and checkout process',
            'Order history and tracking',
            'Social sharing and following capabilities',
            'User collections and favorites'
        ],
        gallery: [
            'https://i.imgur.com/Ctsjouj.jpg',
            'https://i.imgur.com/Ctsjouj.jpg',
            'https://i.imgur.com/Ctsjouj.jpg'
        ],
        client: 'Retail Client',
        duration: '6 months',
        role: 'Lead Mobile Developer',
        teamSize: '4 developers',
        projectType: 'Mobile Application',
        status: 'Completed'
    },
    {
        title: 'Accounting App',
        description: 'Developed an accounting app for managing financial transactions, with features like QR code product addition for convenience and accuracy.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        logoUrl: 'https://i.imgur.com/qcWa0wk.png',
        link: '',
        technologies: ['Flutter', 'Dart'],
        category: 'Mobile Development',
        slug: 'accounting-app',
        fullDescription: 'The Accounting App is a comprehensive financial management solution designed for small to medium businesses. It streamlines the process of tracking income and expenses, managing invoices, and generating financial reports. The app features a user-friendly interface with QR code scanning for quick product entry, real-time financial insights, and secure cloud backup.',
        features: [
            'QR code scanning for quick product entry',
            'Income and expense tracking with categorization',
            'Invoice generation and management',
            'Financial reporting with exportable formats',
            'Multi-currency support',
            'Cloud backup and synchronization'
        ],
        client: 'Financial Services Company',
        duration: '4 months',
        role: 'Mobile Developer',
        teamSize: '2 developers',
        projectType: 'Mobile Application',
        status: 'Completed'
    },
    {
        title: 'NFT Marketplace App',
        description: 'Created an NFT platform for connecting Cardano wallets, exploring NFTs, and securely buying and selling NFTs using blockchain technology.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        logoUrl: 'https://i.imgur.com/qcWa0wk.png',
        link: '',
        technologies: ['Flutter', 'Dart'],
        category: 'Mobile Development',
        slug: 'nft-marketplace-app',
        fullDescription: 'This NFT Marketplace is a cutting-edge platform built on the Cardano blockchain, allowing users to discover, buy, sell, and trade unique digital assets. The app provides a seamless experience for connecting wallets, browsing collections, and executing secure transactions. With features like real-time bidding and collection management, it offers a complete ecosystem for NFT enthusiasts.',
        features: [
            'Secure Cardano wallet integration',
            'NFT browsing and discovery',
            'Auction and fixed-price selling options',
            'Collection creation and management',
            'Transaction history and analytics',
            'Artist verification and profiles'
        ],
        client: 'Blockchain Startup',
        duration: '8 months',
        role: 'Lead Developer',
        teamSize: '5 developers',
        projectType: 'Mobile Application',
        status: 'Ongoing'
    },
    {
        title: 'Fitness Website',
        description: 'Developed a fitness website with dynamic content management, event registration through EventBrite, and venue booking via PeerSpace.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        logoUrl: 'https://i.imgur.com/qcWa0wk.png',
        link: '',
        technologies: ['Next.js', 'EventBrite API', "Strapi"],
        category: 'Web Development',
        slug: 'fitness-website',
        fullDescription: 'The Fitness Website serves as a comprehensive platform for fitness enthusiasts and professionals. It features dynamic content management for workout plans, nutritional advice, and fitness articles. The integration with EventBrite enables seamless event registration for classes and workshops, while PeerSpace integration facilitates venue booking for fitness events. The responsive design ensures a great user experience across all devices.',
        features: [
            'Dynamic content management for fitness resources',
            'EventBrite integration for class registration',
            'PeerSpace integration for venue booking',
            'Membership management and subscription options',
            'Fitness tracking and progress visualization',
            'Community forums and user interaction'
        ],
        client: 'Fitness Studio Chain',
        duration: '5 months',
        role: 'Full Stack Developer',
        teamSize: '3 developers',
        projectType: 'Web Application',
        status: 'Completed'
    },

    {
        title: 'SMS App',
        description: 'Developed an SMS app for sending and receiving text messages. Integrated features include notification replies and contact management.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        logoUrl: 'https://i.imgur.com/qcWa0wk.png',
        link: '',
        technologies: ['Flutter', 'Dart', 'Kotlin'],
        category: 'Mobile Development',
        slug: 'sms-app',
        fullDescription: 'The SMS App is a modern messaging solution that enhances the traditional texting experience with advanced features. It provides a clean, intuitive interface for sending and receiving text messages, with added functionality like quick replies from notifications, contact management, and message categorization. The app also includes features for scheduling messages and backing up conversations.',
        features: [
            'Intuitive messaging interface',
            'Quick reply from notifications',
            'Contact management and favorites',
            'Message scheduling and reminders',
            'Conversation backup and restore',
            'Message categorization and search'
        ],
        client: 'Telecommunications Company',
        duration: '4 months',
        role: 'Mobile Developer',
        teamSize: '3 developers',
        projectType: 'Mobile Application',
        status: 'Completed'
    },
    {
        title: 'TimeSheet Plugin',
        description: 'Developed a WordPress plugin for managing employees, clients, and projects, with efficient time tracking and comprehensive, filterable reports.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        logoUrl: 'https://i.imgur.com/qcWa0wk.png',
        link: '',
        technologies: ['WordPress', 'PHP', 'JavaScript'],
        category: 'Web Development',
        slug: 'timesheet-plugin',
        fullDescription: 'The TimeSheet Plugin is a powerful WordPress extension designed for businesses to efficiently track and manage employee work hours, client projects, and billable time. It features an intuitive interface for time entry, comprehensive reporting with filtering options, and integration with billing systems. The plugin helps businesses improve productivity, ensure accurate client billing, and gain insights into project time allocation.',
        features: [
            'Employee time tracking and management',
            'Client and project organization',
            'Comprehensive, filterable reports',
            'Billable hours calculation',
            'Export functionality for accounting',
            'User role management and permissions'
        ],
        client: 'Business Solutions Provider',
        duration: '3 months',
        role: 'WordPress Developer',
        teamSize: '2 developers',
        projectType: 'WordPress Plugin',
        status: 'Completed'
    },
    {
        title: 'Seller Website',
        description: 'Built a seller website with ReactJS, AWS Chalice, and PostgreSQL, allowing clients to manage product categories, vendors, and access permissions.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        logoUrl: 'https://i.imgur.com/qcWa0wk.png',
        link: '',
        technologies: ['ReactJS', 'Chalice', 'PostgreSQL'],
        category: 'Web Development',
        slug: 'seller-website',
        fullDescription: 'The Seller Website is a comprehensive e-commerce platform built for vendors to manage their online presence and product offerings. Using ReactJS for the frontend, AWS Chalice for serverless backend functions, and PostgreSQL for data storage, the platform provides a robust solution for product management, category organization, and vendor administration. The system includes role-based access control, ensuring that users have appropriate permissions for their responsibilities.',
        features: [
            'Product management and inventory tracking',
            'Category and subcategory organization',
            'Vendor profiles and management',
            'Role-based access control',
            'Order processing and fulfillment',
            'Sales analytics and reporting'
        ],
        client: 'E-commerce Marketplace',
        duration: '7 months',
        role: 'Full Stack Developer',
        teamSize: '5 developers',
        projectType: 'Web Application',
        status: 'Ongoing'
    },
    {
        title: 'Custom WordPress Page Design & Issue Fixing',
        description: 'Enhanced WordPress websites by resolving plugin issues, configuring Advanced Custom Fields, and creating tailored plugins for specific needs.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        logoUrl: 'https://i.imgur.com/qcWa0wk.png',
        link: '',
        technologies: ['WordPress', 'PHP', 'JavaScript', 'ACF'],
        category: 'Web Development',
        slug: 'wordpress-customization',
        fullDescription: 'This project involved comprehensive WordPress customization services for clients with existing websites. The work included troubleshooting and fixing plugin conflicts, optimizing site performance, and implementing Advanced Custom Fields for enhanced content management. Custom plugins were developed to address specific client needs that weren\'t met by existing solutions. The project resulted in improved website functionality, better user experience, and more efficient content management for the clients.',
        features: [
            'Plugin conflict resolution and optimization',
            'Advanced Custom Fields implementation',
            'Custom plugin development',
            'Page template design and customization',
            'Performance optimization',
            'Security enhancements and updates'
        ],
        client: 'Various Small Businesses',
        duration: 'Ongoing',
        role: 'WordPress Developer',
        teamSize: '2 developers',
        projectType: 'Website Maintenance',
        status: 'Ongoing'
    }
];