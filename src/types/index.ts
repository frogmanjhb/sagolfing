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
  title: string;
  description: string;
  icon?: string;
}

export type Region = 'Johannesburg' | 'Garden Route' | 'Cape Town' | 'Durban';

export interface RegionData {
  name: Region;
  courses: GolfCourse[];
}

