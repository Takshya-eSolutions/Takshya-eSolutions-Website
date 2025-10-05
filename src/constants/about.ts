import { Award, Users, Globe, TrendingUp, LucideIcon, CheckCircle2 } from "lucide-react";

export interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const highlights: string[] = [
  "3+ years of combined IT consulting expertise",
  "Certified specialists in Web Technology, AI and Blockchain Technology",
  "Proven track record of successful implementations",
  "24/7 monitoring and dedicated support",
  "Custom solutions tailored to your needs",
  "Transparent pricing and clear communication"
];


export const achievements: Achievement[] = [
  {
    icon: CheckCircle2,
    title: "Trusted by Businesses",
    description: "Growing portfolio of repeat clients and long-term partnerships"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with diverse technical expertise"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across different locations with localized support"
  },
  {
    icon: TrendingUp,
    title: "Proven Growth",
    description: "Enabled clients to realize up to 3x ROI through smart technology adoption"
  }
];
