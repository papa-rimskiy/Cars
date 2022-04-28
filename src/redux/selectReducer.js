import { CREATE_SELECT } from "./types"

const initialState = {
  select: '',
}

export const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SELECT:
      return {select: action.payload}
    default: return state 
  }
}
