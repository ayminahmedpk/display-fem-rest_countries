

import { ToggleThemeAction } from "./themeActions";

export const toggleTheme: () => ToggleThemeAction = () => ({
  type: "TOGGLE_THEME",
});