import axios from 'axios';

import {
DPGETONE,
UPDATEPIPEDRIVEID,
UPDATEPROPERTY,
CHECKLISTPOST,
CHECKLISTPATCH,
UPDATEPROPERTYPATCH,
UPDATESTATE,
} from './types';

const URL = "https://dp-dash.herokuapp.com/deals/"
//const URL = "http://localhost:3000/deals/"


// Update State CheckListReducer.js
export const updateProperty = ({ prop, value }) => {
  return (dispatch) => {
    dispatch({
      type: UPDATEPROPERTY,
      payload: { prop, value }
    })
  };
};

// Update State CheckListReducer.js
export const updatePropertyPatch = ({ prop, value }) => {
  return (dispatch) => {
    dispatch({
      type: UPDATEPROPERTYPATCH,
      payload: { prop, value } 
    })
  };
};

// Update State CheckListReducer.js
export const updatePipeDriveId = (value) => {
    return  {
        type: UPDATEPIPEDRIVEID,
        payload: value, 
    };
};

// Get One Request From DP-
export const dpGetOne = (id) => {
  return (dispatch) => {
      axios.get(`${URL}`+id)
      .then(response => response)
      .then(data => {
          dispatch({
            type: DPGETONE,
            payload: data.data,
          });
      })
  }
}

export const upDateState = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATESTATE,
      payload: data,
    });
  }
}

// Post action
export const checkListPost = (obj) => {
  console.log(obj)
  return (dispatch) => {
      axios.post(`${URL}`, obj)
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
   console.log('checkListPatch', id, obj)
  return (dispatch) => {
      axios.patch(`${URL}`+id, obj)
      .then(function (response) {
        console.log('check list post',response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
