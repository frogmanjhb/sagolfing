export interface GolfCourse {
  id: string;
  name: string;
  region: string;
  location?: string;
  nationalRanking?: number;
  image?: string;
  highlights?: string[];
  description?: string;
  designer?: string;
  par?: number;
  length?: string;
  travelTime?: string;
  features?: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon?: string;
  detailedDescription?: string;
  features?: string[];
  benefits?: string[];
  pricing?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery?: string[];
  callToAction?: string;
}

export type Region = 'Johannesburg' | 'Garden Route' | 'Cape Town' | 'Durban' | 'Kruger';

export interface RegionData {
  name: Region;
  courses: GolfCourse[];
}

