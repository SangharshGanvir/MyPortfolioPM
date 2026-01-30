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
    category: 'FinTech',
    title: 'Enterprise Analytics Dashboard',
    description: 'Led a team of 12 to redesign the core banking analytics suite, increasing user retention by 40%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '/projects/healthcare-booking-app'
  },
  {
    id: 2,
    category: 'HealthTech',
    title: 'Patient Portal Mobile App',
    description: 'Orchestrated the mobile transformation for a major healthcare provider, ensuring HIPAA compliance and accessibility.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    link: '/projects/healthcare-booking-app'
  },
  {
    id: 3,
    category: 'Internal Tools',
    title: 'Design System Implementation',
    description: 'Managed the rollout of a unified design system across 5 product lines, reducing development time by 30%.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    link: '/projects/healthcare-booking-app'
  }
];

export const allWorks = [
  {
    id: 1,
    category: 'HealthTech',
    title: 'Patient Portal Redesign',
    description: 'Complete overhaul of a legacy patient check-in system focusing on accessibility and HIPAA compliance.',
    metric: 'Reduced check-in time by 45%',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    link: '/projects/healthcare-booking-app'
  },
  {
    id: 2,
    category: 'FinTech',
    title: 'Investment Dashboard',
    description: 'Designed a high-frequency trading interface for institutional investors with real-time data streaming.',
    metric: 'Facilitated $2M in transactions in Q1',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '/projects/healthcare-booking-app'
  },
  {
    id: 3,
    category: 'Strategy',
    title: 'Enterprise Migration',
    description: 'Led the UX strategy for migrating 50k+ users from on-premise software to a cloud-based SaaS solution.',
    metric: 'Managed 20+ cross-functional team members',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: '/projects/healthcare-booking-app'
  },
  {
    id: 4,
    category: 'Agile',
    title: 'Global Checkout Redesign',
    description: 'Optimized the checkout flow for a global retailer, introducing local payment methods and simplified forms.',
    metric: 'Increased conversion rate by 18%',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: '/projects/healthcare-booking-app'
  }
];
