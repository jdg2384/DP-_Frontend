// ANYTHING PipeDriveActions
import {
    PIPEDRIVEGETREQUEST,
    PIPEDRIVEGETONE,
    CHECKLISTID,
  } from '../Actions/types';
  
  const INITIAL_STATE = {
    pipe: [],
    one:[],
    checkId: null,
  };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case PIPEDRIVEGETREQUEST:
        return { ...state, pipe: action.payload  };
      case PIPEDRIVEGETONE:
        return { ...state, one: action.payload  };
      case CHECKLISTID:
        return {...state, checkId: action.payload,};
        
      default:
        return state;
    }
    // console.log('reducer',INITIAL_STATE.checkId)
  };
  
  