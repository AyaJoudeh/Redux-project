import { TOGGLE_THEME } from './themeActions';

const savedTheme = localStorage.getItem('theme');
const initialState = {
  isDarkMode: savedTheme === 'dark' ? true : false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const isDarkMode = !state.isDarkMode;
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      return {
        ...state,
        isDarkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
