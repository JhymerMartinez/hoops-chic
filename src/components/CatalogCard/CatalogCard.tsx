import { ICatalogCardProps } from "@/interfaces";
import { StyledPaper } from "./CatalogCard.styles";
import Image from "next/image";

export const CatalogCard = (props: ICatalogCardProps) => {
  return (
    <StyledPaper {...props} elevation={0}>
      <Image
        src={props.data.images[0].src}
        alt={props.data.images[0].alt}
        width={300}
        height={390}
        loading="lazy"
        style={{ objectFit: "cover", width: "100%" }}
      />
      <h3>{props.data.name}</h3>
      <p>{props.data.price}</p>
    </StyledPaper>
  );
};
