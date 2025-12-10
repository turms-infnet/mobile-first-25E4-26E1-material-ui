import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = createRoot(document.getElementById("root"));

const theme = createTheme({
    palette: {
        primary: {
            main: "#5D87FF",
        },
        secondary: {
            main: "#64c8ff",
        },
    },
});

root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>
)