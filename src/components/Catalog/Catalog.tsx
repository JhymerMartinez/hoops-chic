import { ICatalogProps } from "@/interfaces";
import { Box, Grid, Pagination } from "@mui/material";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import data from "@/data";

export const Catalog = (props: ICatalogProps) => {
  const { category } = props;
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {(data as any)[category].map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CatalogCard data={item}></CatalogCard>
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} justifyContent={"center"} marginTop={3}>
        <Pagination count={10} variant="outlined" />
      </Box>
    </Box>
  );
};
