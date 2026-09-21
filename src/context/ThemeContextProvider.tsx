import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../DTO/themeContexttype";
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
