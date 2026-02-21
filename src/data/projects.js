export const projects = [
  {
    id: 'healthcare-booking-app',
    title: 'Healthcare Booking App Redesign',
    category: 'HealthTech',
    shortDescription: 'End-to-end redesign of a patient portal to improve appointment conversion rates and accessibility for senior users.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    metrics: {
      dropOffReduction: '65%',
      conversionIncrease: '42%',
      satisfactionScore: '4.8/5'
    },
    role: 'Lead UX PM',
    timeline: '6 Months',
    team: '3 Designers, 6 Devs',
    tools: ['Figma', 'Jira', 'Mixpanel'],
    challenge: {
      title: 'The Challenge',
      description: 'The existing booking platform was suffering from a 65% drop-off rate during the appointment scheduling flow. The interface was cluttered, non-responsive, and failed accessibility audits, alienating a core demographic of senior patients.',
      goal: 'Lead the product and design team to streamline the process, ensuring HIPAA compliance while reducing the friction from "Search" to "Booked".',
      keyIssues: [
        '7-step booking process was too long',
        'Poor visibility of doctor availability',
        'Not optimized for mobile devices'
      ]
    },
    research: {
      title: 'Research & Discovery',
      methods: [
        {
          name: 'User Interviews',
          description: 'Conducted 20+ deep-dive interviews with patients aged 25-75 to understand booking habits and pain points.'
        },
        {
          name: 'Data Analysis',
          description: 'Analyzed Mixpanel funnels revealing the highest drop-off occurred at the "Insurance Verification" step.'
        },
        {
          name: 'Competitive Audit',
          description: 'Benchmarked against Zocdoc and local providers to identify industry standards for instant booking.'
        }
      ],
      persona: {
        type: 'The Senior Patient',
        quote: 'I just want to see if the doctor accepts my insurance before I fill out all these forms. I get frustrated and call the office instead.'
      }
    },
    strategy: {
      title: 'The Strategy',
      description: 'Based on the research, we pivoted the product strategy to focus on transparency and speed. We established three pillars to guide the redesign:',
      pillars: [
        {
          title: 'Simplify the Path',
          description: 'Reduce booking steps from 7 to 3. Pre-fill known user data.'
        },
        {
          title: 'Transparent Pricing',
          description: 'Show copays upfront by integrating real-time insurance API checks.'
        },
        {
          title: 'Instant Confirmation',
          description: 'Remove "pending approval" states. Provide immediate feedback.'
        }
      ]
    },
    design: {
      title: 'Design & Artifacts',
      deliverables: [
        {
          name: 'Low-Fidelity Wireflows',
          description: 'We iterated rapidly on whiteboard sketches before moving to Figma, ensuring the information architecture supported the linear flow.'
        },
        {
          name: 'Accessible Component Library',
          description: 'Created a AA-compliant color palette and typography scale. Increased touch targets to 48px minimum for mobile accessibility.'
        }
      ]
    },
    impact: {
      title: 'Business Impact',
      metrics: [
        { label: 'Conversion Rate', value: '+42%', description: 'Increase in completed bookings' },
        { label: 'Drop-off Rate', value: '-65%', description: 'Reduction in abandonment' },
        { label: 'User Satisfaction', value: '4.8/5', description: 'Post-launch rating' }
      ],
      testimonial: {
        quote: 'Alex transformed our chaotic booking flow into a seamless experience. The impact on our bottom line has been remarkable.',
        author: 'Sarah Jenkins',
        role: 'VP of Product at MedHealth'
      }
    }
  }
];

export const workCategories = ['All', 'FinTech', 'HealthTech', 'Strategy', 'Agile'];

export const featuredProjects = [
  {
    id: 1,
    category: 'HealthTech',
    title: 'NeuroCare AI',
    description: 'A dual-sided digital healthcare platform designed to streamline patient access, optimize provider workflows, and introduce predictive health intelligence through AI-driven insights.',
    image: '/nurocare-ai/web/NeuroCare AI Landing Page-2.png',
    link: '/projects/neurocare-ai'
  },
  {
    id: 2,
    category: 'FinTech',
    title: 'AI-Powered Job Matching Platform',
    description: 'An AI-enabled career platform designed to help job seekers discover relevant roles through skill-based matching.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '/projects/ai-job-matching-platform'
  },
  {
    id: 3,
    category: 'HealthTech',
    title: 'Smart Healthcare Access Platform',
    description: 'A dual-sided digital ecosystem connecting patients via Mobile App and clinical staff via Web App to streamline access and scheduling.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    link: '/projects/smart-healthcare-access-platform'
  }
];

export const allWorks = [
  {
    id: 1,
    category: 'HealthTech',
    title: 'NeuroCare AI',
    description: 'A dual-sided digital healthcare platform designed to streamline patient access, optimize provider workflows, and introduce predictive health intelligence.',
    metric: '38% faster booking completion',
    image: '/nurocare-ai/web/NeuroCare AI Landing Page-2.png',
    link: '/projects/neurocare-ai'
  },
  {
    id: 2,
    category: 'HealthTech',
    title: 'Smart Healthcare Access Platform',
    description: 'A dual-sided digital ecosystem connecting patients via Mobile App and clinical staff via Web App to streamline access and scheduling.',
    metric: 'Reduced call volumes by 40%',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    link: '/projects/smart-healthcare-access-platform'
  },
  {
    id: 2,
    category: 'FinTech',
    title: 'AI-Powered Job Matching Platform',
    description: 'An AI-enabled career platform designed to help job seekers discover relevant roles through skill-based matching.',
    metric: '45% increase in application completion',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '/projects/ai-job-matching-platform'
  },
  {
    id: 3,
    category: 'Strategy',
    title: 'AI-Enabled Government Service Platform',
    description: 'An AI-enabled government service platform designed to help citizens complete benefit and license applications.',
    metric: '50% increase in form completion',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '/projects/ai-government-service-platform'
  },
  {
    id: 4,
    category: 'Agile',
    title: 'Global Checkout Redesign',
    description: 'Optimized the checkout flow for a global retailer, introducing local payment methods and simplified forms.',
    metric: 'Increased conversion rate by 18%',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: '/projects/smart-healthcare-access-platform'
  }
];
