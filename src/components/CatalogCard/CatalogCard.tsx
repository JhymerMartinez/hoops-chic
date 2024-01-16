import { ICatalogCardProps } from "@/interfaces";
import { StyledPaper } from "./CatalogCard.styles";

export const CatalogCard = (props: ICatalogCardProps) => {
  return <StyledPaper {...props} elevation={0} />;
};
