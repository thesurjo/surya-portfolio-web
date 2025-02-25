interface Skill {
    name: string;
    proficiency?: number; // 1-5 scale
}

export const skillsData: Skill[] = [
    // Frontend
    { name: 'React', proficiency: 5 },
    { name: 'Next.js', proficiency: 5 },
    { name: 'HTML', proficiency: 5 },
    { name: 'CSS', proficiency: 5 },
    { name: 'JavaScript', proficiency: 5 },
    { name: 'TypeScript', proficiency: 4 },
    { name: 'Tailwind CSS', proficiency: 5 },
    
    // Mobile
    { name: 'Flutter', proficiency: 5 },
    { name: 'Dart', proficiency: 4 },
    { name: 'React-Native', proficiency: 4 },
    
    // Backend
    { name: 'Django', proficiency: 4 },
    { name: 'Flask', proficiency: 4 },
    { name: 'Chalice', proficiency: 3 },
    { name: 'PHP', proficiency: 3 },
    
    // CMS & Marketing
    { name: 'WordPress', proficiency: 4 },
    { name: 'SEO', proficiency: 3 },
    { name: 'Digital Marketing', proficiency: 3 },
    
    // DevOps & Tools
    { name: 'AWS', proficiency: 4 },
    { name: 'Git', proficiency: 5 },
    { name: 'Consulting', proficiency: 4 },
];