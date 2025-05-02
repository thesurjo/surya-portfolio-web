export interface BlogPost {
  technologies: never[];
  imageUrl: string;
  category: string;
  description: string;
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    image: string;
  };
  tags: string[];
  publishedAt: Date;
  updatedAt: Date;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}