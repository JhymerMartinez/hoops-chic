import { styled } from "@mui/material/styles";
import { AppBar, AppBarProps } from "@mui/material";

export const StyledFooter = styled(({ ...props }: AppBarProps) => (
  <AppBar {...props} component={"footer"} />
))(({ theme }) => ({
  "&.MuiAppBar-colorInherit": {
    backgroundColor: "transparent",
    boxShadow: "none",
    "& .MuiToolbar-root": {
      height: theme.spacing(11),
    },
  },
}));
