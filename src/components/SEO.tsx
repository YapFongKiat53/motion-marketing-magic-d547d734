// src/components/SEO.tsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export default function SEO({ title, description, keywords, ogImage }: SEOProps) {
  const { pathname } = useLocation();
  const baseUrl = "https://workconnect.com.my";

  // ✅ 统一 URL（无尾斜杠，首页除外）
  const normalizedPath =
    pathname !== "/" ? pathname.replace(/\/$/, "") : "/";

  const fullUrl = `${baseUrl}${normalizedPath}`;
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const finalTitle = `${title}`;
  const isBlogPost = normalizedPath.startsWith("/blog/");

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {keywords ? <meta name="keywords" content={keywords} /> : null}

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:type" content={isBlogPost ? "article" : "website"} />
    </Helmet>
  );
}
