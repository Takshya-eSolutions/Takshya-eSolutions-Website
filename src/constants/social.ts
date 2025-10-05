import { Linkedin, Twitter, Facebook, Instagram, Github, Youtube, LucideIcon, X } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  name: string;
  handle?: string;
}

export const SOCIAL_MEDIA_LINKS = {
  linkedin: "https://www.linkedin.com/company/takshya-esolutions",
  twitter: "https://twitter.com/takshya_esol",
  facebook: "https://www.facebook.com/takshyaesolutions",
  instagram: "https://www.instagram.com/takshya.esolutions",
  github: "https://github.com/takshyaesolutions",
  youtube: "https://www.youtube.com/@takshyaesolutions"
} as const;

export const SOCIAL_HANDLES = {
  linkedin: "@takshya-esolutions",
  twitter: "@takshyaesolutions",
  facebook: "@takshyaesolutions",
  instagram: "@takshya.esolutions",
  github: "@takshyaesolutions",
  youtube: "@takshyaesolutions"
} as const;

export const socialLinks: SocialLink[] = [
  { 
    icon: Linkedin, 
    href: SOCIAL_MEDIA_LINKS.linkedin, 
    name: "LinkedIn",
    handle: SOCIAL_HANDLES.linkedin
  },
  { 
    icon: Twitter, 
    href: SOCIAL_MEDIA_LINKS.twitter, 
    name: "Twitter",
    handle: SOCIAL_HANDLES.twitter
  },
  { 
    icon: Instagram, 
    href: SOCIAL_MEDIA_LINKS.instagram, 
    name: "Instagram",
    handle: SOCIAL_HANDLES.instagram
  }
];

// Additional social platforms that can be used elsewhere
export const extendedSocialLinks: SocialLink[] = [
  ...socialLinks,
  { 
    icon: Instagram, 
    href: SOCIAL_MEDIA_LINKS.instagram, 
    name: "Instagram",
    handle: SOCIAL_HANDLES.instagram
  },
  { 
    icon: Github, 
    href: SOCIAL_MEDIA_LINKS.github, 
    name: "GitHub",
    handle: SOCIAL_HANDLES.github
  },
  { 
    icon: Youtube, 
    href: SOCIAL_MEDIA_LINKS.youtube, 
    name: "YouTube",
    handle: SOCIAL_HANDLES.youtube
  }
];
