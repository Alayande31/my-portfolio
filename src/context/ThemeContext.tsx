import { createContext } from "react";
import type { ThemeContextType } from "../DTO/themeContexttype";

export const ThemeContext = createContext<ThemeContextType | null>(null);


