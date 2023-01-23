import {togglelanguage, TOGGLE_LANGUAGE } from "./actions"

const INITIAL_STATE= {
    language: "español",
  };

  export const languageReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case TOGGLE_LANGUAGE:
        
        return {
          ...state,
          language: payload,
        };    
        default:
            return state;
        }
    
  };