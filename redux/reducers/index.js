import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
   appR : appReducer,
});

export default rootReducer;