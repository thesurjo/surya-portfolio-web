import serviceDetailsJson from './serviceDetails.json';

// Define types for the service data structure
export interface ServiceExpertiseItem {
  title: string;
  icon: string;
  items: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  iconClass: string;
  heroIcon: string;
  shortDescription: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string[];
  expertise: ServiceExpertiseItem[];
  technologies: string[];
  benefits: string[];
}

// Type assertion for the imported JSON
const serviceDetails: { services: ServiceDetail[] } = serviceDetailsJson;

// Export the services array
export const services = serviceDetails.services;

// Helper function to get a service by slug
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return services.find(service => service.slug === slug);
};

// Helper function to get a service by ID
export const getServiceById = (id: string): ServiceDetail | undefined => {
  return services.find(service => service.id === id);
};

export default services; 