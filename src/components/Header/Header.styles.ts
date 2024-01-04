import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Logo } from "../Logo";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  "&.MuiAppBar-colorInherit": {
    backgroundColor: "transparent",
    boxShadow: "none",
    "& .MuiToolbar-root": {
      height: theme.spacing(11),
    },
  },
}));

export const StyledLogo = styled(Logo)(() => ({
  "&.MuiSvgIcon-root": {
    height: "2em",
    width: "2em",
  },
}));
