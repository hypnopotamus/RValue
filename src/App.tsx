import { ThemeProvider } from "@mui/material";
import { Calculator } from "./Calculator";
import { theme } from "./theme";

export const App = () =>
    <ThemeProvider theme={theme}>
        <Calculator />
    </ThemeProvider>;