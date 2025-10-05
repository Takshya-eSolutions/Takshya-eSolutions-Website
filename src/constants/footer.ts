import { socialLinks, SocialLink } from "./social";

export interface QuickLink {
  name: string;
  href: string;
}

export const footerContent = {
  cta: {
    title: "Ready to Start Your Digital Journey?",
    description: "Join local businesses and startups that have simplified operations and grown with our practical IT solutions.",
    buttonText: "Get Started Today"
  },
  company: {
    description: "Takshya eSolutions is your trusted technology partner, helping businesses and entrepreneurs leverage technology to grow, automate, and succeed."
  },
  contact: {
    email: "takshya.esolutions@gmail.com",
    phone: "+91 8840942759",
    address: "Gorakhpur, Uttar Pradesh, India"
  },
  legal: {
    copyright: "Takshya eSolutions. All rights reserved.",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
  }
};

export const footerServices: string[] = [
  "Consultation & IT Support",
  "Web Development", 
  "A.I. & Automation",
  "Data & Analytics",
  "Blockchain Solutions",
  "Cloud & DevOps"
];

export const quickLinks: QuickLink[] = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

// Re-export socialLinks from social constants
export { socialLinks };
