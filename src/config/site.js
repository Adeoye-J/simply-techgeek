/*
 * Fill these in once. Every CTA on the site reads from here.
 * Anything left blank is hidden, or falls back to the contact form.
 */
export const CONFIG = {
  booking: 'https://cal.com/jeremiah-bankole/leads-to-customer',
  email: 'jeremiahiasngu@gmail.com',
  whatsapp: 'https://wa.me/2349160338996',
  headshot: '/images/jeremiah.png', // e.g. '/jeremiah.jpg' (file in /public). Empty = "JB" placeholder.
  social: {
    linkedin: 'https://www.linkedin.com/in/jeremiah-bankole',
    youtube: 'https://www.youtube.com/@havefunwithtech',
    x: '',
  },
  projects: {
    smartreceipt: '',
    educustom: '',
    leadflow: '',
  },
  logo: '/images/logo.png'
};

/**
 * Returns link props: opens external URLs in a new tab,
 * otherwise falls back to an in-page anchor.
 */
export function externalProps(url, fallback = '#contact') {
  return url
    ? { href: url, target: '_blank', rel: 'noopener' }
    : { href: fallback };
}