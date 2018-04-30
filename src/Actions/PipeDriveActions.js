import axios from 'axios';

import {
  CHECKLISTID,
  PIPEDRIVEGETREQUEST,
  PIPEDRIVEGETONE,
} from './types';

// Get All Request

//const api = 'https://api.pipedrive.com/v1/pipelines/1/deals?start=0&api_token=54abfdfc7f6e118414a485eeda4d643425a7de36';
//const api = 'http://localhost:3000/seed_deals'
const api = 'https://dp-dash.herokuapp.com/seed_deals'
//Get One Request
//const apiOne = 'https://api.pipedrive.com/v1/deals/${id}?api_token=54abfdfc7f6e118414a485eeda4d643425a7de36'
//const apiOne = 'http://localhost:3000/seed_deals/'
const apiOne = 'https://dp-dash.herokuapp.com/seed_deals/'

export const pipeDriveGetRequest = () => {
    return (dispatch) => {
      axios.get(`${api}`)
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
        dispatch({
          type: CHECKLISTID,
          payload: id,
        });
    }
}

export const pipeDriveGetOne = (id) => {
  return (dispatch) => {
      axios.get(`${apiOne}`+id)
      .then(response => response)
      .then(data => {
          dispatch({
            type: PIPEDRIVEGETONE,
            payload: data.data,
          });
      })
  }
}

