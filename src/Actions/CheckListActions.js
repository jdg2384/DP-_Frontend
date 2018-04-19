import axios from 'axios';

import {
UPDATEPIPEDRIVEID,
UPDATEPROPERTY,
CHECKLISTGETONE,
CHECKLISTPOST,
} from './types';

// Update State CheckListReducer.js
export const updateProperty = ({ prop, value }) => {
  console.log('updatePipeDriveId',prop, value)
  return (dispatch) => {
    dispatch({
      type: UPDATEPROPERTY,
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

// Get One Request
export const checkListGetOne = (id) => {
  return (dispatch) => {
      axios.get(`http://localhost:3000/deals/${id}
      `)
      .then(response => response)
      .then(data => {
          dispatch({
            type: CHECKLISTGETONE,
            payload: data.data,
          });
      })
  }
}
// Post action
export const checkListPost = (obj) => {
  return (dispatch) => {
      axios.post(`http://localhost:3000/deals`, obj)
      .then(function (response) {
        console.log('check list post',response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
