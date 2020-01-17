import { combineReducers } from 'redux';
import imageData from './getData';
import imageStates from './imagePost';

export default combineReducers({
    imageData,
    imageStates
})