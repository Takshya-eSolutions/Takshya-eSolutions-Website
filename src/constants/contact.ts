import { Mail, Phone, MapPin, Clock, CheckCircle, Star, LucideIcon, Linkedin } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string;
  action: string;
  color: string;
}

export interface ContactBenefit {
  icon: LucideIcon;
  text: string;
}

export const contactContent = {
  badge: "Get Started Today",
  title: "Ready to Transform Your Business?",
  description: "Take the first step towards digital transformation. Our experts are ready to discuss your unique challenges and create a tailored solution that drives results.",
  form: {
    title: "Let's Build Something Amazing Together",
    description: "Share your vision with us and receive a comprehensive consultation within a few hours. Our experts are ready to transform your ideas into reality.",
    fields: {
      name: {
        label: "Full Name *",
        placeholder: "e.g. Arjun Mehta"
      },
      email: {
        label: "Business Email *",
        placeholder: "e.g. arjun@freshbakes.in"
      },
      company: {
        label: "Company Name",
        placeholder: "e.g. FreshBakes Bakery"
      },
      message: {
        label: "Project Details *",
        placeholder: "Tell us about your project, challenges, and goals..."
      }
    },
    button: "Send Message"
  },
  responsePromise: {
    title: "Our Response Promise",
    description: "We aim to reply to all inquiries within a few hours during business time. For urgent issues, dedicated support is available 24/7."
  }
};

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    details: "takshya.esolutions@gmail.com",
    action: "mailto:takshya.esolutions@gmail.com",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    details: "Takshya eSolutions",
    action: "https://linkedin.com/company/takshya-esolutions",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 8840942759",
    action: "#",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: MapPin,
    title: "Head Quarters",
    details: "Gorakhpur, Uttar Pradesh, India",
    action: "#",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 11 AM-9 PM IST",
    action: "#",
    color: "bg-orange-100 text-orange-600"
  }
];

export const contactBenefits: ContactBenefit[] = [
  { icon: CheckCircle, text: "Free first consultation to understand your needs" },
  { icon: Star, text: "Clear pricing with no hidden charges" },
  { icon: CheckCircle, text: "One point of contact for smooth communication" },
  { icon: Star, text: "Ongoing support, even after project delivery" },
  { icon: CheckCircle, text: "Solutions tailored to your business goals" },
  { icon: Star, text: "Built to grow with your business" }
];

