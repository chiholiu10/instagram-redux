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
        imageData: json.data.map((item) => {
          return {
            ...item, 
            toggle: false
          }
        }),
        isError: false,
        errorMsg: ""
      });
    } catch (e) {
      dispatch({
        type: "RECEIVE_IMAGES_DATA",
        imageData: [],
        isError: true,
        errorMsg: e
      });
    }
};

export const store = createStore(getImageData, applyMiddleware(thunkMiddleware));