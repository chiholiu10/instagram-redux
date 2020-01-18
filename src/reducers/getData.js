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
                errorMsg: "",
                toggle: false
            };
        case types.TOGGLE_LIKE: {
            return {
                ...state,
                imageData: state.imageData.map(image => image.id === action.id ?
                    { ...image, toggle: image.toggle } : image
                ) 
            };
        }
        default:
            return state;
    }
}

export default getImageData;
