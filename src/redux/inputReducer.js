import { CREATE_INPUT } from "./types"

const initialState = {
  input: '',
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INPUT:
      return {input: action.payload}
    default: return state 
  }
}