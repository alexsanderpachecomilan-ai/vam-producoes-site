import { useEffect } from "react";

interface DocumentMetaOptions {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

function upsertMetaTag(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function useDocumentMeta({ title, description, image, url, type = "website" }: DocumentMetaOptions) {
  useEffect(() => {
    document.title = title;
    upsertMetaTag("name", "description", description);

    upsertMetaTag("property", "og:title", title);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag("property", "og:type", type);
    if (url) upsertMetaTag("property", "og:url", url);
    if (image) upsertMetaTag("property", "og:image", image);

    upsertMetaTag("name", "twitter:card", image ? "summary_large_image" : "summary");
    upsertMetaTag("name", "twitter:title", title);
    upsertMetaTag("name", "twitter:description", description);
    if (image) upsertMetaTag("name", "twitter:image", image);
  }, [title, description, image, url, type]);
}
