import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import theme from "./theme";

function EmailBuilderW() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

export default EmailBuilderW;
