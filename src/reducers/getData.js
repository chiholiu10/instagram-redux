import { types } from '../actions/index';

const initialState = {
    imageData: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
    imageLike: false,
    comments:[],
    likeComment: false
};

let id = 0;

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
            return {
                ...state,
                imageData: state.imageData.map((image, index) => index === action.index ?
                    { 
                        ...image, imageLike: !image.imageLike } : image
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
                        comments: [...text.comments, {comments: action.newComment, likeComment: text.toggle }]
                    } : text
                ) 
            }
        }

        case types.TOGGLE_LIKE_COMMENT: {
            return {
                ...state,
                imageData: state.imageData.map((text, index) => index == action.generalIndex ?
                    {   
                        ...text, 
                        comments: text.comments.map((newComment, index) => index == action.commentIndex ?
                        {   
                            ...newComment, 
                                comments: newComment.comment,
                                likeComment: !newComment.likeComment } : newComment
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
