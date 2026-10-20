import * as React from "react";

export type AuraTheme = "dark" | "light" | "system";

interface ThemeProviderProps {
  theme?: AuraTheme;
  children: React.ReactNode;
}

function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ theme = "system", children }: ThemeProviderProps) {
  const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">(
    theme === "system" ? getSystemTheme() : theme,
  );

  React.useEffect(() => {
    if (theme !== "system") {
      setResolvedTheme(theme);
      return;
    }

    const query = window.matchMedia("(prefers-color-scheme: light)");
    const updateTheme = () => setResolvedTheme(query.matches ? "light" : "dark");
    updateTheme();
    query.addEventListener("change", updateTheme);
    return () => query.removeEventListener("change", updateTheme);
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  return <>{children}</>;
}
