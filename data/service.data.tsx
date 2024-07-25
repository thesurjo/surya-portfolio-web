interface ServiceItem {
    iconClass: string;
    title: string;
    description: string;
    slug: string; // Add the slug property here
}

export const servicesData: ServiceItem[] = [
    {
        iconClass: 'bx bx-code-alt',
        title: 'Web Development',
        description: 'Experienced web developer skilled in creating custom websites using modern technologies like ReactJS and NextJS. Proficient in HTML, CSS, and JavaScript for seamless user experiences.',
        slug: 'web-development' 
    },
    {
        iconClass: 'bx bx-mobile-alt',
        title: 'Mobile App Development',
        description: 'Specializing in mobile app development with Flutter, I create responsive and intuitive designs focused on user needs and experiences.',
        slug: 'mobile-app-development' 
    },
    {
        iconClass: 'bx bxl-wordpress',
        title: 'WordPress Development',
        description: 'Passionate UI/UX designer dedicated to crafting modern, attractive, and user-friendly WordPress interfaces that meet your business needs.',
        slug: 'wordpress-development' 
    },
    {
        iconClass: 'bx bx-line-chart',
        title: 'SEO Services',
        description: 'Offering comprehensive SEO services to improve your website\'s visibility and ranking on search engines. Skilled in keyword research, on-page optimization, and link building strategies.',
        slug: 'seo-services' 
    },
    {
        iconClass: 'bx bxl-facebook-circle',
        title: 'Social Media Marketing',
        description: 'Providing expert social media marketing services to enhance your brand\'s presence on platforms like Facebook, Instagram, and Twitter. Specializing in content creation, community management, and advertising campaigns.',
        slug: 'social-media-marketing' 
    },
    {
        iconClass: 'bx bx-conversation',
        title: 'Training & Consultancy',
        description: 'Offering personalized training and consultancy services to help you understand and leverage the latest technologies and best practices in web and mobile development. Tailored solutions for skill enhancement and strategic guidance.',
        slug: 'training-consultancy' 
    }
];