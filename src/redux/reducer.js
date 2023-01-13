import {toggleLenguage, TOGGLE_LENGUAGE } from "./actions"

const INITIAL_STATE= {
    lenguage: "español",
  };

  export const lenguageReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case TOGGLE_LENGUAGE:
        
        return {
          ...state,
          lenguage: payload,
        };    
        default:
            return state;
        }
    
  };