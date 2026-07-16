/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string; // Used to dynamic map to Lucide icons
  category: 'core' | 'branding' | 'digital' | 'business';
  features: string[];
  ctaText: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Branding' | 'Print Design' | 'Marketing' | 'SEO';
  description: string;
  longDescription: string;
  year: string;
  client: string;
  metrics: { label: string; value: string }[];
  accentColor: string; // hex color for gradient backgrounds
  tags: string[];
  statusLine?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarLetter: string;
  quote: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarLetter: string;
}

export interface QuoteRequest {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  servicesNeeded: string[];
  budgetRange: string;
  projectDetails: string;
}
