import { CssBaseline, ThemeProvider } from "@mui/material";

import App, { AppProps } from "./App";
import theme from "./theme";

function EmailBuilderW(props: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App {...props} />
    </ThemeProvider>
  );
}

export default EmailBuilderW;
