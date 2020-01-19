import { types } from '../actions/index';

const initialState = {
    imageData: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
    toggle: false
};

export const getImageData = (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_IMAGES_DATA":
            return {
                ...state,
                imageData: action.imageData,
                isLoading: false,
                isError: action.isError,
                errorMsg: action.errorMsg
            };
        case "REQUEST_IMAGES_DATA":
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMsg: ""
            };
        case types.TOGGLE_LIKE: {
            return {
                ...state,
                imageData: state.imageData.map(image => image.id === action.id ?
                    { 
                        ...image, toggle: !image.toggle } : image
                ) 
            };
        }
        case types.ADD_COMMENT: {
            return {
                ...state,
                imageData: state.imageData.map(text => text.id === action.id ?
                    {
                        ...text, message: [...state.message, action.newComment] } : text
                ) 

            }
        }
        default:
            return state;
    }
}

export default getImageData;
