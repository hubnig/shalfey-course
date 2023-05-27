import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#73ad4e",
    },
    secondary: {
      main: "#f44336"
    }
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
