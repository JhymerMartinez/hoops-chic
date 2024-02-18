import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  backgroundColor: "transparent",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "460px",
}));
