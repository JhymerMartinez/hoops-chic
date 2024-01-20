"use client";

import { Toolbar, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { StyledFooter } from "./Footer.styles";
import { ScrollTop } from "../ScrollTop";

export const Footer = () => {
  return (
    <>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <StyledFooter
        position="relative"
        color="inherit"
        sx={{ top: "auto", bottom: 0, height: 100, marginTop: 4 }}
      >
        <Toolbar>footer</Toolbar>
      </StyledFooter>
    </>
  );
};
