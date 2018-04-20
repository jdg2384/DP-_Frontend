import axios from 'axios';

import {
  CHECKLISTID,
  PIPEDRIVEGETREQUEST,
  PIPEDRIVEGETONE,
} from './types';


export const pipeDriveGetRequest = () => {
    return (dispatch) => {
        axios.get(`https://api.pipedrive.com/v1/pipelines/1/deals?start=0&api_token=54abfdfc7f6e118414a485eeda4d643425a7de36
        `)
        .then(response => response)
        .then(data => {
          dispatch({
            type: PIPEDRIVEGETREQUEST,
            payload: data.data,
          });
        })
    }
}

export const checkListId = (id) => {
    return (dispatch) => {
      //console.log('clicked',id)
        dispatch({
          type: CHECKLISTID,
          payload: id,
        });
    }
}

export const pipeDriveGetOne = (id) => {
  return (dispatch) => {
      axios.get(`https://api.pipedrive.com/v1/deals/${id}?api_token=54abfdfc7f6e118414a485eeda4d643425a7de36
      `)
      .then(response => response)
      .then(data => {
          dispatch({
            type: PIPEDRIVEGETONE,
            payload: data.data,
          });
      })
  }
}

