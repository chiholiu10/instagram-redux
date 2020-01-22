import { types } from '../actions/index';

const initialState = {
    imageData: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
    toggle: false,
    comments:[]
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
        case types.TOGGLE_LIKE_IMAGE: {
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
                        ...text, 
                        comments: [...text.comments, { comment: action.newComment, toggle: text.toggle } ]
                    } : text
                ) 
            }
        }

        default:
            return state;
    }
}

export default getImageData;
