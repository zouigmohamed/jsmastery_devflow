'use client'
import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderWrapperProps extends ThemeProviderProps {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children, ...props }: ThemeProviderWrapperProps) => {
  return (
    <NextThemeProvider  {...props}>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProviderWrapper;
