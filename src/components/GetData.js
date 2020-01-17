import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import getImageData from '../reducers/getData';
import axios from "axios";
  
export const requestData = url => async dispatch => {
    dispatch({
      type: "REQUEST_USERS_DATA"
    });
    try {
      const json = await axios.get(url);
      dispatch({
        type: "RECEIVE_IMAGES_DATA",
        imageData: json.data,
        isError: false,
        errorMsg: "",
        toggle: false
      });
    } catch (e) {
      dispatch({
        type: "RECEIVE_IMAGES_DATA",
        imageData: [],
        isError: true,
        errorMsg: e,
        toggle: false
      });
    }
};

export const store = createStore(getImageData, applyMiddleware(thunkMiddleware));