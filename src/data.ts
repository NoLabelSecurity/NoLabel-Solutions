/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    shortDescription: 'Custom high-performance websites engineered for small businesses, local services, and startups. Fast, mobile-optimized, and conversion-focused.',
    longDescription: "We build tailored digital homes that function cleanly as silent machines for your business. From local contractor portfolios to booking portals, we combine design patterns and lightning-fast code to deliver websites that don't just look slick but actively turn browsers into buyers.",
    iconName: 'Globe',
    category: 'core',
    features: [
      'Custom Responsive Layouts',
      'Lightning-fast Loading Times',
      'SEO-ready Blueprint Structuring',
      'Lead Capture & Interactive Forms',
      'Google Analytics Setup',
      'CMS Integration Options',
      'Complete Mobile Optimization',
      'Secure Hosting Setup'
    ],
    ctaText: 'Build Your Site'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    shortDescription: 'Complete brand systems starting with foundational color palettes, premium typography, and design systems that match your business vibe.',
    longDescription: 'A strong business needs a unified visual layout. We define visual frameworks that scale seamlessly across paper and screen, ensuring your digital and offline presence matches your standard of quality.',
    iconName: 'Palette',
    category: 'branding',
    features: [
      'Distinctive Visual Audits',
      'Premium Cohesive Color Palettes',
      'Typography Selection Strategy',
      'Modern Brand Design Guidelines',
      'Consistent Component Structuring',
      'Vector Asset Deployment'
    ],
    ctaText: 'Define Your Brand'
  },
  {
    id: 'logo-design',
    title: 'Minimal Logo Design',
    shortDescription: 'Timeless vector logo designs forged to represent your core professional identity and scale cleanly down to mobile browser favicons.',
    longDescription: 'Avoid cluttered trends. We design highly legible, smart, and scale-flexible logos. Whether on digital templates, embroidered shirts, or vehicles, your emblem will look flawless at any size.',
    iconName: 'Layers',
    category: 'branding',
    features: [
      'Vector Assets (.SVG, .PDF, .PNG)',
      'High-contrast and Light/Dark Variants',
      'Social Profile Icons Pre-sized',
      'Secondary Icon/Mark Identifiers',
      'Favicon Extraction and Export'
    ],
    ctaText: 'Design Your Logo'
  },
  {
    id: 'business-cards',
    title: 'Premium Business Cards',
    shortDescription: 'Sleek, tactile physical layouts styled to instantly leave a lasting impression, paired with functional digital QR scan code links.',
    longDescription: 'Handing over a contact card is a physical touchpoint of your professionalism. We craft balanced front-and-back designs with modern spacing formats that seamlessly bridge physical introductions to your digital front door.',
    iconName: 'CreditCard',
    category: 'business',
    features: [
      'Print-ready Formatting (300DPI, CMYK)',
      'Premium Front and Back Styling Layout',
      'Integrated QR Code Bridge Links',
      'Sleek Minimalism Aesthetic',
      'Sizing Layout Guides for Safe Margins'
    ],
    ctaText: 'Design Cards'
  },
  {
    id: 'social-media',
    title: 'Social Presence Management',
    shortDescription: 'Cohesive, visually structured templates and dynamic banner layouts customized to amplify your business handles across visual grids.',
    longDescription: 'Establish consistent presence without the daily headaches. We generate beautiful, reusable visual templates, highlight covers, and grid frameworks so your brand looks premium on Instagram, LinkedIn, and Facebook.',
    iconName: 'Instagram',
    category: 'digital',
    features: [
      'Custom Reusable Templates (Canva)',
      'Eye-catching Premium Banner Layouts',
      'Profile Logo/Vibe Alignment',
      'Highlight Cover Architecture',
      'Graphic Templates for Promotions'
    ],
    ctaText: 'Upgrade Channels'
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Business',
    shortDescription: 'Optimize your Google Business Profile and local metadata to rank higher in regional search maps when clients look for local services.',
    longDescription: 'If you aren\'t ranking in your immediate area, you\'re losing clients to competitors. We implement structured local schema details and align your Google profile coordinates with targeted keywords to boost regional reach.',
    iconName: 'MapPin',
    category: 'digital',
    features: [
      'Google Profile Blueprint Mapping',
      'Localized Metadata Optimization',
      'Local Citations and Alignments',
      'Review Acquisition Blueprinting',
      'Strategic Keyword Insertion'
    ],
    ctaText: 'Boost Visibility'
  },
  {
    id: 'qr-solutions',
    title: 'QR & Digital Business Cards',
    shortDescription: 'Interactive contact page screens paired with customized, high-contrast QR codes designed for instantly sharing details on client touchpoints.',
    longDescription: 'Make physical networking fast. We build responsive single-screen digital business cards with one-tap contact save integrations (.vcf files) and design beautiful QR codes to use in window decals, counters, or vehicles.',
    iconName: 'QrCode',
    category: 'business',
    features: [
      'One-Tap Contact Save Integration',
      'Custom Branded QR Vector Graphics',
      'Instant Loading Experience',
      'Beautiful Mobile Landing Grids',
      'Centralized Info Portal Links'
    ],
    ctaText: 'Get QR System'
  },
  {
    id: 'automation',
    title: 'Automation & Business Setup',
    shortDescription: 'Streamline client onboarding with interactive forms, online scheduling, automated receipt routing, and custom local tools.',
    longDescription: 'Stop chasing emails to find slots. We bake scheduling tools (Cal.com, Calendly) and instant response automation right into your website, so your business captures and routes prospects even when you\'re asleep.',
    iconName: 'Cpu',
    category: 'business',
    features: [
      'Interactive Booking Platforms',
      'Automated Lead Intake Pipelines',
      'Centralized CRM Connectivity',
      'Dynamic PDF Spec Sheets',
      'Review Request Automation'
    ],
    ctaText: 'Streamline Operations'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'contractor-web',
    title: 'Apex HVAC & Plumbing Redesign',
    category: 'Web Development',
    description: 'A lightning-fast, conversion-focused website for a premier regional plumbing and HVAC company, engineered featuring real-time booking integrations and high-quality quote funnels.',
    longDescription: 'Apex Plumbing was losing valuable mobile traffic due to a sluggish, legacy website that loaded in over 6 seconds. NoLabel audited their conversion path and fully rebuilt their digital presence. Combining lightning-fast load times with clear local booking triggers and high-legibility contractor layouts, they experienced an immediate surge in organic phone leads.',
    year: '2025',
    client: 'Apex Contractors Ltd.',
    metrics: [
      { label: 'Booking Lead Increase', value: '+142%' },
      { label: 'Mobile Page Speed Score', value: '98/100' },
      { label: 'Form Completion Efficiency', value: '4.8x' }
    ],
    accentColor: 'from-[#00D9FF]/20 to-[#3B82F6]/5',
    tags: ['React SPA', 'Tailwind CSS', 'Booking Integration', 'Local SEO Implementation']
  },
  {
    id: 'restaurant-brand',
    title: 'Seaside Bistro Brand System',
    category: 'Branding',
    description: 'An elegant, typography-driven visual theme and sensory design system crafted for a coastal bistro, applied across responsive web overlays, physical menus, and digital layouts.',
    longDescription: 'Seaside Bistro wanted to stand out in a bustling tourist harbor. We built an organic, typography-first editorial logo, designed a minimal, readable menu, and extended the visual guidelines to an interactive mobile reservation site. The visual tone values clarity and space, translating the quality of their artisanal cuisine to first impressions.',
    year: '2026',
    client: 'Seaside Restaurant Group',
    metrics: [
      { label: 'Direct Bookings Increase', value: '+35%' },
      { label: 'Social Engagement Rate', value: '12.4%' },
      { label: 'Visual Match Score', value: '100%' }
    ],
    accentColor: 'from-pink-500/10 to-indigo-500/5',
    tags: ['Brand Identity Package', 'Menu Design', 'Favicon Systems', 'Color Palette Setup']
  },
  {
    id: 'premium-cards',
    title: 'Vanguard Realty Business Cards',
    category: 'Print Design',
    description: 'Ultra-premium, high-thickness double-sided tactile networking cards paired with embedded high-contrast QR scan codes for instant contact file saving.',
    longDescription: 'Luxury real estate agents require physical touchpoints that instantly establish luxury authority. NoLabel crafted custom cards for Vanguard Realty on velvet-touch thick stock with high-margin modern grids, pairing the physical card with an instant custom mobile landing page for quick digital exchange.',
    year: '2025',
    client: 'Vanguard Elite Real Estate',
    metrics: [
      { label: 'Contact Saves Per Scan', value: '88%' },
      { label: 'Print Resolution', value: '300 DPI' },
      { label: 'Positive Pitch Responses', value: '+45%' }
    ],
    accentColor: 'from-amber-400/10 to-transparent',
    tags: ['Print Materials', 'Tactile Layouts', 'Integrated QR', 'vCard Setup']
  },
  {
    id: 'social-cohesion',
    title: 'Dr. Evelyn Aesthetics Campaign',
    category: 'Marketing',
    description: 'A clean, high-contrast social grid transformation consisting of ready-built post layouts, highlight icons, and consistent typography frameworks.',
    longDescription: 'To transition into medical aesthetics consulting, Dr. Evelyn needed to upgrade her digital presence. We designed a modular grid framework, providing cohesive, beautiful visual palettes for promotional and instructional carousels, driving premium inquiries in her local clinic.',
    year: '2025',
    client: 'Dr. Evelyn Aesthetics',
    metrics: [
      { label: 'Instagram Reach', value: '450k+' },
      { label: 'Direct Message Leads', value: '+115%' },
      { label: 'Post Cohesion Level', value: 'Pristine' }
    ],
    accentColor: 'from-indigo-400/10 to-transparent',
    tags: ['Grid Architecture', 'Canva Layouts', 'Dynamic Copy Banners', 'Visual Vibe Audit']
  },
  {
    id: 'core-logo',
    title: 'ProLink Logistics Identity',
    category: 'Branding',
    description: 'A timeless, geometric vector logo design engineered to maintain high-impact clarity on massive shipping panels, uniform shirts, or small invoices.',
    longDescription: 'ProLink Logistics requested an identity that conveys speed, security, and industrial capability. We developed a bold, balanced emblem using technical typography, delivering complete responsive scaling specifications for trucks, apparel, and digital document headers.',
    year: '2026',
    client: 'ProLink Worldwide Inc.',
    metrics: [
      { label: 'Scalable Vector Nodes', value: 'Clean' },
      { label: 'Exported Files Deliverable', value: '24' },
      { label: 'Resolution Margin', value: 'Infinite' }
    ],
    accentColor: 'from-blue-500/15 to-teal-500/5',
    tags: ['SVG Engineering', 'Typography Hierarchy', 'Favicons & Marks', 'Style Guides']
  },
  {
    id: 'landing-funnel',
    title: 'FitShift Co. Lead Funnel',
    category: 'Web Development',
    description: 'A high-converting, interactive single-page landing site with custom quote configurators, instant calendar booking widgets, and lead routing.',
    longDescription: 'FitShift wanted to launch a local corporate wellness project quickly. We developed a supercharged speed landing page highlighting structured service paths, interactive calculators, and an auto-routing form to filter high-budget leads directly.',
    year: '2025',
    client: 'FitShift Wellness Group',
    metrics: [
      { label: 'Landing Conversion Rate', value: '9.4%' },
      { label: 'Average Interaction Time', value: '2m 15s' },
      { label: 'First Contentful Paint', value: '0.35s' }
    ],
    accentColor: 'from-teal-400/15 to-transparent',
    tags: ['React Elements', 'Lead Routing', 'Conversion Design', 'Speed Engineered']
  },
  {
    id: 'seo-optimized-growth',
    title: 'Elite Roof Repair Local SEO',
    category: 'SEO',
    description: 'Complete regional search map integration and physical metadata targeting, successfully positioning a local contractor onto page one rankings.',
    longDescription: 'To compete in suburban trade zones, Elite Roof Repair needed search rankings that surpassed local directory lists. We aligned business profile schemas, cleaned geographical metadata descriptions, and built micro-portals for local search queries.',
    year: '2026',
    client: 'Elite Services USA',
    metrics: [
      { label: 'Google Maps Views Increase', value: '+210%' },
      { label: 'Organic Inbounds', value: '+85/mo' },
      { label: 'Search Ranking Jump', value: '#14 to #3' }
    ],
    accentColor: 'from-green-500/15 to-transparent',
    tags: ['Metadata Architecture', 'Citations Strategy', 'Google Profile Synced', 'Rankings Boost']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Miller',
    role: 'Founder & Principal',
    company: 'Apex Plumbing & HVAC',
    avatarLetter: 'M',
    quote: 'The speed of our new contractor site under NoLabel development is staggering. In our industry, mobile clients call the first business that loads and looks premium. We doubled our digital lead flow in the first 45 days.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sienna Ross',
    role: 'Executive Chef',
    company: 'Seaside Bistro',
    avatarLetter: 'S',
    quote: 'They understood exactly how to translate our fine-casual dining feel onto screen and print. From our beautiful typography-based menu layouts to our smooth reservation web widget, our customers keep complimenting the style.',
    rating: 5
  },
  {
    id: 't3',
    name: 'David Vance',
    role: 'Managing Broker',
    company: 'Vanguard Realty',
    avatarLetter: 'D',
    quote: 'We wanted physical business cards that felt premium, with instant mobile linkage. The QR contact cards NoLabel made are flawless. Clients are consistently impressed when they tap our custom page and save my number instantly.',
    rating: 5
  },
  {
    id: 't4',
    name: 'Dr. Evelyn Martinez',
    role: 'Medical Director',
    company: 'Evelyn Aesthetics Clinic',
    avatarLetter: 'E',
    quote: 'I was overwhelmed by social media posting schedules. They designed a gorgeous, minimal blueprint series of templates that we can update easily ourselves. Our Instagram grid looks clean, unified, and highly clinical.',
    rating: 5
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Julian Hayes',
    role: 'Creative Director & Lead Developer',
    bio: 'Specialist in custom React architecture, high-end interface typography, and front-of-house UI engineering. Julian believes small businesses deserve the exact same technical elegance as modern Fortune-500 SaaS companies.',
    avatarLetter: 'J'
  },
  {
    name: 'Elena Wright',
    role: 'Brand Planner & Typography Lead',
    bio: 'Crafts flawless brand packages, luxury print mockups, and cohesive color palettes. Elena ensures that NoLabel designs look incredibly distinct, spacing feels elegant, and branding coordinates scale cleanly across physical and screen layers.',
    avatarLetter: 'E'
  }
];

export const COMPANY_STATS = [
  { label: 'Projects Engineered', value: '48+' },
  { label: 'Small Businesses Boosted', value: '35+' },
  { label: 'Average Speed Increase', value: '4.2x' },
  { label: 'Client Satisfaction Score', value: '100%' }
];

export const STEPS = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We audit your current assets, mapping out target local audiences, user booking loops, and desired aesthetic tones.'
  },
  {
    number: '02',
    title: 'Brand Alignment',
    description: 'We establish color tokens, crisp display typography, vector scales, and high-margin spacing mockups that align with your business values.'
  },
  {
    number: '03',
    title: 'Frictionless Engineering',
    description: 'We write performant, responsive React components styled with utility Tailwind CSS – engineered completely clean of unneeded heavy frameworks.'
  },
  {
    number: '04',
    title: 'Frictionless Launch',
    description: 'We provision blazing-fast server networks, complete standard SSL, configure metadata tag outlines, Google Maps points, and review loops.'
  },
  {
    number: '05',
    title: 'Continuous Support',
    description: 'We set up real-time analytics dashboards, auto-backup systems, and provide frictionless tools so you always look fresh and up-to-date.'
  }
];
