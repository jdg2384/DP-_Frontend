// ANYTHING PipeDriveActions
import {
  UPDATEPIPEDRIVEID,
  UPDATEPROPERTY,
  CHECKLISTGETONE,
  DPGETONE
} from '../Actions/types';
  
const INITIAL_STATE = {
  dp_info:[],
  pipedrive_id: null, 
  application: '',
  product_name: '',
  cellular_tech: '',
  cellular_bands: '',
  size_viable: false,
  org_name: '',
  lead_person: '',
  lead_email: '',
  org_person_email: false,
  mnda_started: false,
  mnda_archived: false
};



export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DPGETONE:
      return{ ...state, dp_info: action.payload};
    case UPDATEPIPEDRIVEID:
      return{ ...state, pipedrive_id: action.payload};
    case UPDATEPROPERTY:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CHECKLISTGETONE:
      return { ...state, checkData: action.payload  };
    default:
      return state;
  }
};




  
