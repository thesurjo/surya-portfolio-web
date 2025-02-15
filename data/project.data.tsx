interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        title: 'eCommerce and Social App',
        description: 'Designed and implemented a comprehensive e-commerce platform with secure user sign-in, product management, and social sharing features.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['Flutter', 'Firebase', 'Dart']
    },
    {
        title: 'Accounting App',
        description: 'Developed an accounting app for managing financial transactions, with features like QR code product addition for convenience and accuracy.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['Flutter', 'Dart']
    },
    {
        title: 'NFT Marketplace App',
        description: 'Created an NFT platform for connecting Cardano wallets, exploring NFTs, and securely buying and selling NFTs using blockchain technology.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['Flutter', 'Dart']
    },
    {
        title: 'Fitness Website',
        description: 'Developed a fitness website with dynamic content management, event registration through EventBrite, and venue booking via PeerSpace.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['Next.js', 'EventBrite API', "Strapi"]
    },
    {
        title: 'Expense Manager App',
        description: 'Created an app for tracking income and expenses, with features like an expense filter and interactive charts for visualizing financial data.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: 'https://play.google.com/store/apps/details?id=com.finance.khorcha',
        technologies: ['Flutter', 'Dart', 'SQLite']
    },
    {
        title: 'Expense Manager App (Landing Page)',
        description: 'Developed a landing page showcasing features of the Expense Manager app, highlighting expense tracking, data visualization, and user convenience.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: 'https://khorcha.netlify.app/',
        technologies: ['Next.Js', 'TailwindCSS']
    },
    {
        title: 'SMS App',
        description: 'Developed an SMS app for sending and receiving text messages. Integrated features include notification replies and contact management.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['Flutter', 'Dart', 'Kotlin']
    },
    {
        title: 'GYM App',
        description: 'Developed a gym management app enabling users to handle subscriptions and attendance efficiently.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['Flutter', 'Dart', 'Firebase']
    },
    {
        title: 'TimeSheet Plugin',
        description: 'Developed a WordPress plugin for managing employees, clients, and projects, with efficient time tracking and comprehensive, filterable reports.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['WordPress', 'PHP', 'JavaScript']
    },
    {
        title: 'Seller Website',
        description: 'Built a seller website with ReactJS, AWS Chalice, and PostgreSQL, allowing clients to manage product categories, vendors, and access permissions.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['ReactJS', 'Chalice', 'PostgreSQL']
    },
    {
        title: 'Custom WordPress Page Design & Issue Fixing',
        description: 'Enhanced WordPress websites by resolving plugin issues, configuring Advanced Custom Fields, and creating tailored plugins for specific needs.',
        imageUrl: 'https://i.imgur.com/Ctsjouj.jpg',
        link: '',
        technologies: ['WordPress', 'PHP', 'JavaScript', 'ACF']
    }
];