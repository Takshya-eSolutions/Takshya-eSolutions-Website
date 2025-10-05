import { TrendingUp, Shield, Zap, Award, CheckCircle2, Sparkles, LucideIcon } from "lucide-react";

export interface HeroStat {
  value: number;
  label: string;
  icon: LucideIcon;
  suffix: string;
}

export interface TrustIndicator {
  icon: LucideIcon;
  text: string;
}

export interface FloatingCard {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export const heroContent = {
  badge: {
    text: "Driven by Innovation",
    icon: Award
  },
  title: {
    main: "Transform Your",
    highlight: "Digital Future",
    suffix: "Today"
  },
  description: "At Takshya eSolutions, we partner with businesses to craft modern IT solutions that streamline operations, enhance customer experiences, and accelerate growth. Your vision, powered by our expertise.",
  buttons: {
    primary: "Start Your Transformation",
    secondary: "See Our Work"
  }
};

export const trustIndicators: TrustIndicator[] = [
  {
    icon: CheckCircle2,
    text: "24/7 Global Support"
  },
  {
    icon: CheckCircle2,
    text: "Client-Centric Approach"
  },
  {
    icon: CheckCircle2,
    text: "Skilled & Dedicated Team"
  }
];

export const heroStats: HeroStat[] = [
  { value: 10, label: "Projects Delivered", icon: TrendingUp, suffix: "+" },
  { value: 99, label: "Client Satisfaction", icon: Shield, suffix: "%" },
  { value: 3, label: "Years Experience", icon: Zap, suffix: "+" }
];

export const floatingCards: FloatingCard[] = [
  {
    title: "Enterprise Security",
    subtitle: "Bank-Grade Protection",
    icon: Shield,
    bgColor: "from-green-100 to-green-200",
    iconColor: "text-green-600"
  },
  {
    title: "Lightning Fast",
    subtitle: "Optimized Performance",
    icon: Zap,
    bgColor: "from-blue-100 to-blue-200",
    iconColor: "text-blue-600"
  },
  {
    title: "99.9%",
    subtitle: "Uptime",
    icon: Award,
    bgColor: "from-primary to-primary/90",
    iconColor: "text-primary-foreground"
  }
];
