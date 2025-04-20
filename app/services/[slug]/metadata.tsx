import type { Metadata } from "next";
import { servicesData } from "@/data/service.data";

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the service with the matching slug
  const service = servicesData.find(service => service.slug === params.slug);

  // Default metadata if service not found
  if (!service) {
    return {
      title: "Service Not Found | Surya Basak",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | Services | Surya Basak`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Services | Surya Basak`,
      description: service.description,
      url: `https://suryabasak.com/services/${service.slug}`,
      type: "website",
    },
  };
} 