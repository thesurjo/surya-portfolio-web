interface Skill {
    name: string;
    proficiency?: number; // 1-5 scale
}

export const skillsData: Skill[] = [
    // Frontend
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Tailwind CSS' },

    // Mobile
    { name: 'Flutter' },
    { name: 'Dart' },
    { name: 'React-Native' },

    // Backend
    { name: 'Django' },
    { name: 'Flask' },
    { name: 'Chalice' },
    { name: 'PHP' },

    // CMS & Marketing
    { name: 'WordPress' },
    { name: 'SEO' },
    { name: 'Digital Marketing' },

    // DevOps & Tools
    { name: 'AWS' },
    { name: 'Git' },
    { name: 'Consulting' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'Shopify' },
];