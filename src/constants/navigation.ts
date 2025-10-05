export interface NavigationItem {
  name: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { name: "Services", href: "services" },
  { name: "About", href: "about" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Contact", href: "contact" }
];

export const headerContent = {
  ctaButton: "Get Started"
};
