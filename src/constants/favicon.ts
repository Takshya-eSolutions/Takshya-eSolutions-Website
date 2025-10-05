// Favicon constants
export const FAVICON_URLS = {
  svg: '/favicon.svg',
  ico: '/favicon.ico',
  apple: '/favicon.svg', // Using SVG for Apple touch icon as well
} as const;

export const FAVICON_CONFIG = {
  defaultIcon: FAVICON_URLS.svg,
  fallbackIcon: FAVICON_URLS.ico,
  appleIcon: FAVICON_URLS.apple,
} as const;
