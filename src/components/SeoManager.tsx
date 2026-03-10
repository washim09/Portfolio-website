import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  robots: 'index,follow' | 'noindex,follow';
}

const SITE_NAME = 'Washim Akram';
const SITE_DESCRIPTION =
  'Portfolio of Washim Akram, a frontend-focused full-stack developer building responsive interfaces, scalable web apps, and product experiences.';
const OG_IMAGE_PATH = '/profile.png';

const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Washim Akram | Frontend Developer & Full-Stack Developer',
    description: SITE_DESCRIPTION,
    canonicalPath: '/',
    robots: 'index,follow',
  },
  '/about': {
    title: 'About | Washim Akram',
    description:
      'Learn more about Washim Akram, a frontend-focused full-stack developer with experience building scalable web products from idea to deployment.',
    canonicalPath: '/',
    robots: 'noindex,follow',
  },
  '/experience': {
    title: 'Experience | Washim Akram',
    description:
      'Professional experience of Washim Akram across frontend development, full-stack delivery, SEO, and digital product execution.',
    canonicalPath: '/',
    robots: 'noindex,follow',
  },
  '/service': {
    title: 'Services | Washim Akram',
    description:
      'Explore web design, web development, SEO, and digital marketing services offered by Washim Akram.',
    canonicalPath: '/',
    robots: 'noindex,follow',
  },
  '/portfolio': {
    title: 'Portfolio | Washim Akram',
    description:
      'Selected portfolio projects by Washim Akram across web design, web development, digital marketing, and personal products.',
    canonicalPath: '/',
    robots: 'noindex,follow',
  },
  '/contactme': {
    title: 'Contact | Washim Akram',
    description:
      'Contact Washim Akram for freelance, remote, and full-time frontend or full-stack development opportunities.',
    canonicalPath: '/',
    robots: 'noindex,follow',
  },
};

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let meta = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
};

const upsertStructuredData = (data: Record<string, unknown>) => {
  const existing = document.getElementById('structured-data');
  const script = existing instanceof HTMLScriptElement ? existing : document.createElement('script');

  script.id = 'structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.appendChild(script);
  }
};

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? ROUTE_META['/'];
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
    const canonicalUrl = `${siteUrl}${meta.canonicalPath === '/' ? '' : meta.canonicalPath}`;
    const ogImageUrl = `${siteUrl}${OG_IMAGE_PATH}`;

    document.title = meta.title;

    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'robots', meta.robots);
    upsertMeta('name', 'theme-color', '#09101d');
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', ogImageUrl);
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', ogImageUrl);

    upsertCanonical(canonicalUrl);

    upsertStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: siteUrl,
          inLanguage: 'en',
          description: SITE_DESCRIPTION,
        },
        {
          '@type': 'Person',
          name: 'Washim Akram',
          url: siteUrl,
          image: ogImageUrl,
          email: 'mailto:akrmwashim09@gmail.com',
          telephone: '+91 9999413369',
          jobTitle: 'Frontend Developer & Full-Stack Developer',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Delhi',
            addressCountry: 'IN',
          },
          sameAs: [
            'https://github.com/washim09',
            'https://www.linkedin.com/in/washim-akram-frontend-developer/',
            'https://www.instagram.com/washim975?igsh=ZDgwMm5vYTRidndw',
          ],
        },
        {
          '@type': 'WebPage',
          name: meta.title,
          url: canonicalUrl,
          description: meta.description,
          isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: siteUrl,
          },
        },
      ],
    });
  }, [pathname]);

  return null;
};

export default SeoManager;
