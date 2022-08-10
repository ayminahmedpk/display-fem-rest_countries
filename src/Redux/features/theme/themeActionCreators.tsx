

import { ActionCreator } from "redux";
import { NormalAction } from "../../commonReduxTypes";

import { TOGGLE_THEME } from "./themeConstants";

export const toggleTheme: ActionCreator<NormalAction> = () => ({
  type: TOGGLE_THEME,
});