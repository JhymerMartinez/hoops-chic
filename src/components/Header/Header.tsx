"use client";

import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, IconButton } from "@mui/material";
import { StyledAppBar, StyledLogo } from "./Header.styles";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  return (
    <StyledAppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          <Box
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              flexGrow: {
                xs: 0,
                md: 1,
              },
            }}
          >
            <StyledLogo
              sx={{
                display: { xs: "none", md: "flex" },

                mr: 1,
              }}
            />
          </Box>

          <Box
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              width: "100%",
            }}
          >
            <StyledLogo
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                flexGrow: {
                  xs: 1,
                  md: 0,
                },
                mr: 1,
              }}
            />
          </Box>

          <IconButton aria-label="delete">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
