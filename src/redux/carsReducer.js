import { CREATE_CARS } from "./types"

const initialState = {
  cars: [],
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARS:
      return {cars: [...action.payload]}
    default: return state 
  }
}