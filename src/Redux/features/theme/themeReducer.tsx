

import { Reducer } from "redux";
import { ThemeActions } from "./themeActions";

export type ThemeState = {
  isDarkMode: boolean;
};

const initialState: ThemeState = {
  isDarkMode: false,
};


const themeReducer: Reducer<ThemeState, ThemeActions> = (
  state = initialState,
  action,
) => {
  switch(action.type) {

    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      }
      
    default:
      return state;
  }
};

export default themeReducer;