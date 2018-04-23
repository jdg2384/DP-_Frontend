import axios from 'axios';

import {
DPGETONE,
UPDATEPIPEDRIVEID,
UPDATEPROPERTY,
CHECKLISTGETONE,
CHECKLISTPOST,
CHECKLISTPATCH,
UPDATEPROPERTYPATCH,
} from './types';

// Update State CheckListReducer.js
export const updateProperty = ({ prop, value }) => {
  //console.log('updatePipeDriveId',prop, value)
  return (dispatch) => {
    dispatch({
      type: UPDATEPROPERTY,
      payload: { prop, value }
    })
  };
};

// Update State CheckListReducer.js
export const updatePropertyPatch = ({ prop, value }) => {
  console.log('updatePropertyPatch',prop, value)
  return (dispatch) => {
    dispatch({
      type: UPDATEPROPERTYPATCH,
      payload: { prop, value }
    })
  };
};

// Update State CheckListReducer.js
export const updatePipeDriveId = (value) => {
  //console.log('updatePipeDriveId', value)
    return  {
        type: UPDATEPIPEDRIVEID,
        payload: value, 
    };
};

// Get One Request From DP-
export const dpGetOne = (id) => {
  //console.log('dpGetOne',id)
  return (dispatch) => {
      axios.get('https://dp-dash.herokuapp.com/deals/'+id)
      .then(response => response)
      .then(data => {
          dispatch({
            type: DPGETONE,
            payload: data.data,
          });
      })
  }
}

// Post action
export const checkListPost = (obj) => {
  return (dispatch) => {
      axios.post(`https://dp-dash.herokuapp.com/deals`, obj)
      .then(function (response) {
        console.log('check list post',response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

// Patch action
export const checkListPatch = (id,obj) => {
   console.log('checkListPatch', id,obj)
  return (dispatch) => {
      axios.patch(`https://dp-dash.herokuapp.com/deals/`+id, obj)
      .then(function (response) {
        console.log('check list post',response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
