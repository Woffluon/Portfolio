import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, keywords, image, url }) => {
  const defaultKeywords = 'Efe Arabacı, Portfolio, Web Developer, Frontend, React, Next.js, Yapay Zeka, AI, UI/UX, SkalGPT, Biocrypter';
  const combinedKeywords = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords;
  const siteDescription = 'Efe Arabacı - Teknolojiyle düşünen, düşünceyi kodla buluşturan genç geliştirici. Yapay zeka, modern web teknolojileri ve felsefi yaklaşımla projeler üretiyorum.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type || "WebSite",
    "name": name || "Efe Arabacı | Portfolio",
    "description": description || siteDescription,
    "url": url || "https://efe-arabaci.dev",
    "image": image || "https://efe-arabaci.dev/assets/projects/skalgpt.webp",
    "author": {
      "@type": "Person",
      "name": "Efe Arabacı"
    }
  };

  return (
    <Helmet>
      <title>{title || 'Efe Arabacı | Portfolio'}</title>
      <meta name='description' content={description || siteDescription} />
      <meta name='keywords' content={combinedKeywords} />
      <meta name='author' content='Efe Arabacı' />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content={url || 'https://efe-arabaci.dev/'} />
      <meta property="og:title" content={title || 'Efe Arabacı | Portfolio'} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image || 'https://www.efearabaci.com/logo.png'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || 'https://efe-arabaci.dev/'} />
      <meta property="twitter:title" content={title || 'Efe Arabacı | Portfolio'} />
      <meta property="twitter:description" content={description || siteDescription} />
      <meta property="twitter:image" content={image || 'https://www.efearabaci.com/logo.png'} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
