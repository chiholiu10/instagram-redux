import { types } from '../actions/index';

const initialState = {
    imageData: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
    toggle: false,
    comments:[],
    likeComment: false
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
                imageData: state.imageData.map((image, index) => index === action.index ?
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
                        comments: [...text.comments, {comments: action.newComment, toggle: text.toggle }]
                    } : text
                ) 
            }
        }

        case types.TOGGLE_LIKE_COMMENT: {
            console.log(state.imageData[action.generalIndex].comments[action.commentIndex].toggle)
            return {
                ...state,
                imageData: state.imageData.map((text, index) => index === action.generalIndex ?
                    {   
                        ...text, 
                        comments: state.comments.map((newComment, index) => index === action.commentIndex ?
                        {   
                            ...newComment, 
                                toggle: !newComment.likeComment
                        } : newComment
                    ) 
                    } : text
                ) 
            }
        }

        default:
            return state;
    }
}

export default getImageData;
