// ANYTHING PipeDriveActions
import {
  UPDATEPIPEDRIVEID,
  UPDATEPROPERTY,
  CHECKLISTGETONE,
  DPGETONE
} from '../Actions/types';
  
const INITIAL_STATE = {
  //checkData: [],
  dp_info:[],
  pipedrive_id: 1, 
  application: 'Application',
  product_name: 'Product/Project Name',
  cellular_tech: '',
  cellular_bands: '',
  size_viable: false,
  org_name: 'Organization Name',
  lead_person: 'Lead Person',
  lead_email: 'Lead Person Email',
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
    console.log('reducer',state)
      return { ...state, [action.payload.prop]: action.payload.value };
    case CHECKLISTGETONE:
      return { ...state, checkData: action.payload  };
    default:
      return state;
  }
};
  
