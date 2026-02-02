// store.jsx
import { createStore } from "redux";
import LanguagesReducer from "./LanguagesReducer";

const store = createStore(LanguagesReducer);

export default store;
