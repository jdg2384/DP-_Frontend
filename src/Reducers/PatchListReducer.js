// ANYTHING PipeDriveActions
import {
    DPGETONE,
    UPDATEPROPERTY,
    UPDATEPROPERTYPATCH
  } from '../Actions/types';
    
  const INITIAL_STATE = {
  };


  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATEPROPERTYPATCH:
        //console.log(action.payload.value)
            return { ...state, [action.payload.prop]: action.payload.value };
        case DPGETONE:
        //console.log("int= ",action.payload.application.length)
            return{ ...state, INITIAL_STATE: action.payload};
    default:
        return state;
    }
  };
  
  
  
  
    
  