import { styled } from "@mui/material/styles";
import { AppBar, AppBarProps } from "@mui/material";

export const StyledFooter = styled(({ ...props }: AppBarProps) => (
  <AppBar {...props} component={"footer"} />
))(({ theme }) => ({
  "&.MuiAppBar-colorInherit": {
    backgroundColor: "#282828",
    boxShadow: "none",
    color: theme.palette.common.white,
    "& .MuiToolbar-root": {
      height: theme.spacing(11),
    },
  },
}));
