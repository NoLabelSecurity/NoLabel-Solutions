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
    title: 'Wright-Way Home Inspections & Renovations',
    category: 'Web Development',
    description: 'A modern, lead-focused website for a trusted home inspection and renovation company, engineered to build homeowner confidence and streamline estimate requests.',
    longDescription: 'Wright-Way Home Inspections & Renovations needed a professional online presence that reflected the quality of their inspection and remodeling services. No/Label Solutions redesigned their website from the ground up, focusing on homeowner trust, service clarity, and a frictionless inquiry experience. By combining fast load times, mobile-first design, and strategically placed conversion points, the new platform helps turn visitors into qualified leads while showcasing the company\'s expertise throughout Lexington County and surrounding communities.',
    year: '2025',
    client: 'Wright-Way Services LLC',
    metrics: [
      { label: 'Lead Inquiry Increase', value: '+118%' },
      { label: 'Mobile Performance Score', value: '97/100' },
      { label: 'Visitor Engagement', value: '3.9x' }
    ],
    accentColor: 'from-[#00D9FF]/20 to-[#3B82F6]/5',
    tags: [
      'React SPA',
      'Tailwind CSS',
      'Lead Generation Optimization',
      'Local SEO Implementation'
    ],
    statusLine: 'Deployment Live & Optimized for Local Search Visibility.'
  },
  {
    id: 'easys-welding',
    title: 'Easy\'s Welding & Fabrication',
    category: 'Web Development',
    description: 'A rugged, high-impact web presence for a local metal fabrication and custom welding shop, engineered to drive local service requests and structural contract leads.',
    longDescription: 'Easy\'s Welding & Fabrication needed a rugged yet professional digital showroom to display their industrial, commercial, and residential metal works. No/Label Solutions engineered a modern, speed-optimized showcase featuring high-definition project galleries, structural compliance details, and an interactive quote estimate engine. By focusing on mobile accessibility and local search relevance, the platform drives a steady stream of residential repair jobs and large-scale commercial welding bids directly to their inbox.',
    year: '2026',
    client: 'Easy\'s Welding & Fabrication',
    metrics: [
      { label: 'Commercial Bid Inbound', value: '+134%' },
      { label: 'Mobile Response Speed', value: '0.28s' },
      { label: 'Local Estimate Volume', value: '3.5x' }
    ],
    accentColor: 'from-orange-500/20 to-transparent',
    tags: [
      'Custom React Gallery',
      'Local Lead Routing',
      'Mobile Quote Configurator',
      'Industrial Brand Integration'
    ],
    statusLine: 'Deployment Live & Optimized for Commercial Search Queries.'
  },
  {
    id: 'flashpoint-web',
    title: 'Flashpoint Solutions',
    category: 'Web Development',
    description: 'A premium, lead-focused service portal for handyman, home repair, and renovation services designed to capture residential and commercial contracts.',
    longDescription: 'Flashpoint Solutions delivers expert handyman, home repair, and renovation services with pristine quality and reliability. They partnered with No/Label Solutions to architect a premium, high-trust digital portal that showcases their repair craftsmanship and streamlines booking. The custom interface features zero-friction estimate request tools, categorized service offerings, and secure contact channels. Engineered on a modern lightweight stack, the site achieves pristine speed and accessibility scores while projecting absolute local service authority.',
    year: '2025',
    client: 'Flashpoint Solutions',
    metrics: [
      { label: 'Booking Inquiry Increase', value: '+85%' },
      { label: 'Mobile Performance Score', value: '98/100' },
      { label: 'Service Booking Speed', value: 'Instant' }
    ],
    accentColor: 'from-red-500/20 to-transparent',
    tags: [
      'Handyman Booking',
      'Home Repair & Renovation',
      'Local Lead Routing',
      'Speed Optimized'
    ],
    statusLine: 'System Active & Optimized for Local Home Service Searches.'
  },
  {
    id: 'premium-cards',
    title: 'Easy\'s Welding Business Cards',
    category: 'Print Design',
    description: 'Ultra-premium, heavy-duty double-sided tactile networking business cards custom-designed for a modern industrial brand.',
    longDescription: 'To project physical reliability and heavy-duty craftsmanship in the field, Easy\'s Welding & Fabrication required double-sided business cards that look and feel professional. No/Label Solutions designed high-contrast cards with balanced layouts, clean margins, and an elegant technical grid, providing a physical handshake that builds instant client trust.',
    year: '2026',
    client: 'Easy\'s Welding & Fabrication',
    metrics: [
      { label: 'Print Resolution', value: '300 DPI' },
      { label: 'Grid Precision', value: '100%' },
      { label: 'Brand Uniformity', value: 'Pristine' }
    ],
    accentColor: 'from-orange-500/10 to-transparent',
    tags: ['Print Materials', 'Tactile Layouts', 'Industrial Branding', 'Double-Sided Design']
  },
  {
    id: 'wright-way-cards',
    title: 'Wright-Way Business Cards',
    category: 'Print Design',
    description: 'Ultra-premium double-sided portrait (vertical) business cards designed with precision alignment and technical grid symmetry.',
    longDescription: 'Wright-Way Home Inspections required a distinct offline touchpoint that aligns with their professional, high-standards approach. No/Label Solutions engineered a portrait-oriented vertical layout that breaks standard business card conventions, resulting in an eye-catching, structured piece of marketing collateral.',
    year: '2026',
    client: 'Wright-Way Inspections',
    metrics: [
      { label: 'Print Resolution', value: '300 DPI' },
      { label: 'Grid Precision', value: '100%' },
      { label: 'Card Orientation', value: 'Portrait (Vertical)' }
    ],
    accentColor: 'from-blue-500/10 to-transparent',
    tags: ['Print Materials', 'Tactile Layouts', 'Portrait Orientation', 'Technical Branding', 'Double-Sided Design']
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
    id: 'nolabel-branding',
    title: 'No/Label Brand Board',
    category: 'Branding',
    description: 'A comprehensive branding board consisting of cohesive visual guidelines, modern color profiles, and typographic hierarchies designed to define a crisp tech aesthetic.',
    longDescription: 'To maintain an impeccable brand presence across all digital and print mediums, No/Label Solutions engineered a unified brand guidelines board. This asset lays out exact color coordinates, typography combinations, and geometric placement patterns, providing a rock-solid foundation for subsequent marketing materials and web elements.',
    year: '2026',
    client: 'No/Label Solutions',
    metrics: [
      { label: 'Color Space', value: 'HEX/RGB' },
      { label: 'Visual Uniformity', value: '100%' },
      { label: 'Production Quality', value: 'Pristine' }
    ],
    accentColor: 'from-cyan-500/15 to-transparent',
    tags: ['Brand Identity', 'Style Guidelines', 'Asset Layouts', 'Typography pairing', 'Color Systems']
  },
  {
    id: 'easys-welding-branding',
    title: "Easy's Welding Brand Board",
    category: 'Branding',
    description: 'A comprehensive brand board with technical color parameters, customized typography selections, and a heavy industrial visual identity.',
    longDescription: "To ensure visual continuity across physical signage, heavy-duty service vehicles, uniform apparel, and digital invoices, Easy's Welding & Fabrication utilized a customized industrial brand board. We curated high-contrast safety accent palettes, structural font systems, and clean vector grids, cementing their reputation as a premier fabricator.",
    year: '2026',
    client: "Easy's Welding & Fabrication",
    metrics: [
      { label: 'Color Contrast', value: 'High' },
      { label: 'System Unity', value: '100%' },
      { label: 'Asset Resolution', value: '300 DPI' }
    ],
    accentColor: 'from-orange-500/15 to-transparent',
    tags: ['Brand Identity', 'Style Guidelines', 'Industrial Aesthetic', 'Typography pairing', 'Color Systems']
  },
  {
    id: 'flashpoint-branding',
    title: 'Flashpoint Solutions Brand Board',
    category: 'Branding',
    description: 'A cohesive visual brand board for Flashpoint Solutions, defining color guidelines, typographic pairings, and professional layouts for local services.',
    longDescription: 'To establish a strong and high-trust presence, Flashpoint Solutions required an elite brand board defining color variables, typographic treatments, and geometric logo guidelines. This asset provides a consistent look and feel for service trucks, client forms, and web portals.',
    year: '2026',
    client: 'Flashpoint Solutions',
    metrics: [
      { label: 'Color Guidelines', value: 'Standardized' },
      { label: 'Visual Consistency', value: '100%' },
      { label: 'Resolution Ready', value: '300 DPI' }
    ],
    accentColor: 'from-red-500/15 to-transparent',
    tags: ['Brand Identity', 'Style Guidelines', 'Asset Layouts', 'Typography pairing', 'Color Systems']
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
    name: 'Marcus Wright',
    role: 'Founder & Principal',
    company: 'Wright-Way Services LLC',
    avatarLetter: 'M',
    quote: 'The speed of our new contractor site under No/Label Solutions development is staggering. In our industry, mobile clients call the first business that loads and looks premium. We doubled our digital lead flow in the first 45 days.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Dustin Caldwell',
    role: 'Founder & Owner',
    company: 'Fix It Right Handyman Services',
    avatarLetter: 'D',
    quote: 'They understood exactly how to translate our fine-casual craft into screen and print layouts. The heavy Oswald typography, color specifications, and custom house-hammer vector emblem they designed look sharp on our trucks, shirts, and invoices.',
    rating: 5
  },
  {
    id: 't3',
    name: 'David Vance',
    role: 'Managing Broker',
    company: 'Vanguard Realty',
    avatarLetter: 'D',
    quote: 'We wanted physical business cards that felt premium, with instant mobile linkage. The QR contact cards No/Label Solutions made are flawless. Clients are consistently impressed when they tap our custom page and save my number instantly.',
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
    bio: 'Crafts flawless brand packages, luxury print mockups, and cohesive color palettes. Elena ensures that No/Label Solutions designs look incredibly distinct, spacing feels elegant, and branding coordinates scale cleanly across physical and screen layers.',
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
