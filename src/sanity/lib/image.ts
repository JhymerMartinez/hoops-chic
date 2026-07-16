import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import {
  sanityDataset,
  sanityProjectId,
} from "@/sanity/env";

const imageBuilder = createImageUrlBuilder({
  projectId: sanityProjectId,
  dataset: sanityDataset,
});

export function getSanityImageUrl(source: SanityImageSource) {
  return imageBuilder
    .image(source)
    .width(1000)
    .height(1000)
    .fit("crop")
    .auto("format")
    .url();
}
