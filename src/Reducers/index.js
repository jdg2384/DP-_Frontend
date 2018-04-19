import { combineReducers } from 'redux';
import PipeDriveReducer from './PipeDriveReducer'
import CheckListReducer from './CheckListReducer';

export default combineReducers({
  checkList: PipeDriveReducer,
  data: CheckListReducer
});