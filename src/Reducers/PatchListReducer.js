// ANYTHING PipeDriveActions
import {
    DPGETONE,
    UPDATEPROPERTYPATCH,
    UPDATESTATE,
  } from '../Actions/types';
    
  const INITIAL_STATE = {

  };


  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATEPROPERTYPATCH:
            return { ...state, [action.payload.prop]: action.payload.value };
        case DPGETONE:
            return{ ...action.payload};
        // case UPDATESTATE:
        //     return {...state,...action.payload}
    default:
        return state;
    }
  };
  
  
  
  
    
  