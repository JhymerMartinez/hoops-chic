import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import {
  isSanityConfigured,
  sanityDataset,
  sanityProjectId,
} from "@/sanity/env";

const imageBuilder = isSanityConfigured
  ? createImageUrlBuilder({
      projectId: sanityProjectId!,
      dataset: sanityDataset!,
    })
  : null;

export function getSanityImageUrl(source: SanityImageSource) {
  return imageBuilder
    ? imageBuilder
        .image(source)
        .width(1000)
        .height(1000)
        .fit("crop")
        .auto("format")
        .url()
    : undefined;
}
