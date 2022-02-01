import { combineReducers } from "redux";
import { carsReducer} from "./carsReducer";
import { inputReducer } from "./inputReducer";
import { selectReducer } from './selectReducer'

export const rootReducer = combineReducers({
  cars: carsReducer,
  input: inputReducer,
  select: selectReducer
})