import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://picbox.app';
const SITE_NAME = 'PicBox';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TWITTER_HANDLE = '@picboxapp';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'PicBox - Digital Photo Frame for iPad',
  type = 'website',
  noIndex = false,
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  // Build canonical URL
  const pathname = location.pathname;
  const canonicalUrl = `${SITE_URL}${pathname}`;

  // Build alternate language URLs
  const getAlternateUrl = (lang: string) => {
    // Remove existing language prefix if present
    let basePath = pathname;
    if (pathname.startsWith('/es')) {
      basePath = pathname.replace(/^\/es/, '') || '/';
    }

    if (lang === 'en') {
      return `${SITE_URL}${basePath}`;
    }
    return `${SITE_URL}/${lang}${basePath === '/' ? '' : basePath}`;
  };

  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Digital Photo Frame for iPad`;

  // Default structured data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [
      'https://twitter.com/picboxapp',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@picbox.app',
      contactType: 'customer support',
    },
  };

  // Software Application schema for the app
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'PhotographyApplication',
    operatingSystem: 'iOS, iPadOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    description: description || 'Transform your iPad into a stunning digital photo frame with cinematic Ken Burns effects and smart face detection.',
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Tags */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={currentLang === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLang === 'es' ? 'en_US' : 'es_ES'} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Hreflang Tags for International SEO */}
      <link rel="alternate" hrefLang="en" href={getAlternateUrl('en')} />
      <link rel="alternate" hrefLang="es" href={getAlternateUrl('es')} />
      <link rel="alternate" hrefLang="x-default" href={getAlternateUrl('en')} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
