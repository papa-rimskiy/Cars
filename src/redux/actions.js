import { CREATE_CARS } from "./types"
import { CREATE_INPUT } from "./types"
import { CREATE_SELECT } from './types'

export function createCars(cars) {
  return {
    type: CREATE_CARS,
    payload: cars,
  };
}

export function createInput(input) {
  return {
    type: CREATE_INPUT,
    payload: input,
  };
}

export function createSelect(select) {
  return {
    type: CREATE_SELECT,
    payload: select,
  };
}
