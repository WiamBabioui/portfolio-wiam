const initialState = {
  language: "fr",
};

const LanguagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default LanguagesReducer;
