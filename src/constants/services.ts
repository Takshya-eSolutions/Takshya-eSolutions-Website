import { Monitor, Shield, Cloud, Zap, Users, BarChart3, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  iconBg: string;
  iconColor: string;
}

export const services: Service[] = [
  {
    icon: Users,
    title: "Consultation & IT Support",
    description: "We guide businesses and startups with the right technology choices to save costs, grow faster, and avoid common pitfalls.",
    features: [
      "Affordable Tech Consultation",
      "Project Planning & Guidance",
      "On-Demand Troubleshooting",
      "Simple, Practical IT Solutions"
    ],
    gradient: "from-green-500/10 to-green-600/10",
    iconBg: "from-green-100 to-green-200",
    iconColor: "text-green-600"
  },
  {
    icon: Monitor,
    title: "Website and Application Development",
    description: "Get a professional online presence with fast, mobile-friendly, and easy-to-manage websites/apps that attract and retain customers.",
    features: [
      "Business Websites/Apps",
      "E-Commerce Stores",
      "Booking & Inquiry Systems",
      "Performance & SEO Optimization"
    ],
    gradient: "from-blue-500/10 to-blue-600/10",
    iconBg: "from-blue-100 to-blue-200",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    title: "A.I. & Automation",
    description: "Simplify daily operations with AI tools and automations designed for businesses, saving time and boosting efficiency.",
    features: [
      "Chatbots for Customer Support",
      "Generative AI for Content & Marketing",
      "Agentic AI Workflows for Repetitive Tasks",
      "Smart Process Automation"
    ],
    gradient: "from-yellow-500/10 to-yellow-600/10",
    iconBg: "from-yellow-100 to-yellow-200",
    iconColor: "text-yellow-600"
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Make informed decisions by turning your sales and business data into simple, easy-to-understand dashboards and reports.",
    features: [
      "Sales & Expense Dashboards",
      "Customer Insights",
      "Predictive Sales Trends",
      "Custom Business Reports"
    ],
    gradient: "from-indigo-500/10 to-indigo-600/10",
    iconBg: "from-indigo-100 to-indigo-200",
    iconColor: "text-indigo-600"
  },
  {
    icon: Shield,
    title: "Blockchain Solutions",
    description: "Explore secure and modern solutions like loyalty systems, digital ownership, and decentralized apps tailored for businesses ready to step into Web3.",
    features: [
      "Smart Contracts",
      "Simple DApps & Wallet Integration",
      "NFT Loyalty Programs",
      "Blockchain Consulting"
    ],
    gradient: "from-purple-500/10 to-purple-600/10",
    iconBg: "from-purple-100 to-purple-200",
    iconColor: "text-purple-600"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Move your business to the cloud with cost-effective hosting, backups, and automation so your services stay fast and reliable.",
    features: [
      "Affordable Cloud Setup",
      "Data Backup & Recovery",
      "Automated Deployments",
      "Scalable Hosting Solutions"
    ],
    gradient: "from-cyan-500/10 to-cyan-600/10",
    iconBg: "from-cyan-100 to-cyan-200",
    iconColor: "text-cyan-600"
  }
];



export const servicesContent = {
  sectionTitle: "Comprehensive IT Solutions",
  sectionDescription: "From strategic planning to implementation, we offer end-to-end IT consulting services that drive digital transformation and business growth.",
  badgeText: "Our Expertise",
  customSolutionTitle: "Need a Custom Solution?",
  customSolutionDescription: "Every business is unique. Let's discuss how we can tailor our services to meet your specific needs and challenges.",
  customSolutionButtonText: "Schedule Consultation"
};
