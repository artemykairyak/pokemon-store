import Head from 'next/head';
import { FC } from 'react';


export interface PageHeadData {
  title: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  robotsContent?: string;
}

export const PageHead: FC<PageHeadData> = (props) => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage = ``,
    robotsContent = 'all',
  } = props;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, width=device-width"
      />
      <meta name="robots" content={robotsContent} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={ogTitle || title} />
      {description && (
        <meta
          property="og:description"
          content={ogDescription || description}
        />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:width" content="1200" />}
      {ogImage && <meta property="og:image:height" content="630" />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="mos.ru" />
      <meta property="og:locale" content="ru_RU" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <link rel="canonical" href={canonicalUrl} />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/images/favicon/favicon.ico"
      />
    </Head>
  );
};
