const initialState = {
  language: "fr",
  theme: localStorage.getItem("theme") || "dark",
};

const LanguagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update":
      return { ...state, language: action.payload };
    case "updateTheme":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default LanguagesReducer;
