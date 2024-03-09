"use client";

import * as React from "react";
import {
  Box,
  IconButton,
  Button,
  Typography,
  MenuItem,
  Menu,
  Container,
  Toolbar,
} from "@mui/material";
import { StyledAppBar, StyledLogo } from "./Header.styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  const pages = ["Products", "Pricing", "Blog"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters id="back-to-top-anchor">
          {/* Mobile menu  */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              flexGrow: 2,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <StyledLogo />
          </Box>

          {/* Large menu */}
          <Box
            component="a"
            href="/"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <StyledLogo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Search button */}
          <Box
            sx={{
              flexGrow: {
                md: 0,
                xs: 1,
              },
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton aria-label="delete">
              <SearchIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
