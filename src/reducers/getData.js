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
                state.imageData.map((item) => {
                    console.log(action.id, item.id)
                    if(action.id === item.id) {
                        return {
                            ...state,
                            toggle: true
                        }
                    }
                    console.log(item);
                });
                
            }
        default:
            return state;
    }
}

export default getImageData;
