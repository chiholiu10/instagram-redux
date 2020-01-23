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
        case types.TOGGLE_LIKE_PHOTO: {
            console.log('toggle like photo');
            return {
                ...state,
                imageData: state.imageData.map(image => image.id === action.id ?
                    { 
                        ...image, toggle: !image.toggle } : image
                ) 
            };
        }
        case types.ADD_COMMENT: {
            console.log('add comment');
            return {
                ...state,
                imageData: state.imageData.map(text => text.id === action.id ?
                    {   
                        ...text, 
<<<<<<< HEAD
                        comments: {...text.comments, 
                                    comment: action.newComment, 
                                    toggle: text.toggle
                                },
=======
                        comments: [...text.comments, {comments: action.newComment, toggle: text.toggle }]
                    } : text
                ) 
            }
        }

        case types.TOGGLE_LIKE_COMMENT: {
            console.log('like comment');
            return {
                ...state,
                imageData: state.imageData.map(text => text.id === action.id?
                    {   
                        ...text, 
                        comments: {
                            [action.commentIndex]: {
                                toggle: !state.toggle
                            }
                        }
>>>>>>> da8228230b25a6b2bb4aa727e8b1852bad4a3d84
                    } : text
                ) 
            }
        }

        default:
            return state;
    }
}

export default getImageData;
