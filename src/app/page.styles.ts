import { styled } from "@mui/material/styles";
import { Tab } from "@mui/material";

export const StyledTab = styled(Tab)(({ theme }) => ({
  "&.MuiTab-root": {
    color: "#000",
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}));
