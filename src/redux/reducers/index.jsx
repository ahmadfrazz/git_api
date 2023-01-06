import { combineReducers } from "redux";
import DarkLightReducer from "./DarkLightReducer";
import RegisterReducer from "./RegisterReducer";

const reducers = combineReducers({
    themeToggle: DarkLightReducer,
    userRegister: RegisterReducer
})

export default reducers;