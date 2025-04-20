import type { Metadata } from "next";
import { projects } from "@/data/project.data";

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the project with the matching slug
  const project = projects.find(project => project.slug === params.slug);

  // Default metadata if project not found
  if (!project) {
    return {
      title: "Project Not Found | Surya Basak",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Projects | Surya Basak`,
    description: project.fullDescription || project.description,
    openGraph: {
      title: `${project.title} | Projects | Surya Basak`,
      description: project.description,
      url: `https://suryabasak.com/projects/${project.slug}`,
      type: "website",
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
} 