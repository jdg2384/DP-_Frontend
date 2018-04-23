import { combineReducers } from 'redux';
import PipeDriveReducer from './PipeDriveReducer'
import CheckListReducer from './CheckListReducer';
import PatchListReducer from './PatchListReducer'

export default combineReducers({
  checkList: PipeDriveReducer,
  data: CheckListReducer,
  info: PatchListReducer
});