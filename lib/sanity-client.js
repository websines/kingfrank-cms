import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const sanity_client = createClient({
  projectId: "9hbkqe70",
  apiVersion: "2022-03-27",
  dataset: "production",
  useCdn: true,
});

const builder = ImageUrlBuilder(sanity_client);

export function urlFor(source) {
  return builder.image(source);
}
