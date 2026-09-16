import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "byp5fhoi",
  dataset: "production",
  apiVersion: "2026-09-15",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      slug,
      publishedAt,
      mainImage,
      "author": author->name,
      "category": categories[0]->title
    }
  `);
}