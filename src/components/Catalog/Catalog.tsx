import { ICatalogProps } from "@/interfaces";
import { Box, Grid, Pagination } from "@mui/material";
import { CatalogCard } from "../CatalogCard/CatalogCard";

export const Catalog = (props: ICatalogProps) => {
  const { category } = props;
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CatalogCard>{category}</CatalogCard>
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} justifyContent={"center"} marginTop={3}>
        <Pagination count={10} variant="outlined" />
      </Box>
    </Box>
  );
};
