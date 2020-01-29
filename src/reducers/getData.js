import { types } from '../actions/index';

const initialState = {
    imageData: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
    imageLike: false,
    comments:[],
    likeComment: false,
    enableComment: false
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
                        comments: [...text.comments, {comment: action.newComment, likeComment: text.toggle, enableReply: false }]
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
                                likeComment: !newComment.likeComment 
                        } : newComment
                    )
                    } : text
                ) 
            }
        }

        case types.OPEN_INPUT_COMMENT: {
            console.log('open input comments');
            return {
                ...state,
                imageData: state.imageData.map((text, index) => index == action.currentIndex ?
                    {   
                        ...text, 
                        enableComment: !text.enableComment,
                    } : {
                        ...text,
                        enableComment: false
                    }
                ) 
            }
        }

        case types.ENABLE_REPLY: {
            console.log('enable reply');
            return {
                ...state,
                imageData: state.imageData.map((text, index) => index == action.generalIndex ?
                    {   
                        ...text, 
                        enableComment: true,
                        comments: text.comments.map((newComment, index) => index == action.commentIndex ?
                        {   
                            ...newComment, 
                                enableReply: !newComment.enableReply
                        } : {
                            ...newComment,
                            enableReply: false
                        }
                    )
                    } : {
                        ...text,
                        enableComment: false
                    }
                ) 

            }
        }

        default:
            return state;
    }
}

export default getImageData;
