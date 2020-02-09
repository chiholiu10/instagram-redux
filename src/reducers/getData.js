import { types } from '../actions/index';

const initialState = {
    imageData: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
    imageLike: false,
    comments:[],
    likeComment: false,
    enableComment: false,
    enableToggleComment: true
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
            return {
                ...state,
                imageData: state.imageData.map(text => text.id === action.id ?
                    {   
                        ...text, 
                        comments: [...text.comments, {comment: action.newComment, likeComment: text.toggle, enableReply: false, replyComments: [{}] }]
                        } : text
                    )
            }
        }

        case types.REPLY_COMMENT: {
            return {
                ...state,
                enableToggleComment: true,
                imageData: state.imageData.map(image => image.id === action.majorIndex ?
                    {   
                        ...image, 
                        comments: {
                            [action.commentIndex]: {
                                replyComments: [...image.comments, {comment: action.newComment, likeComment: image.toggle, enableReply: false, replyComments: [{}] }]
                            }
                        }
                        } : image
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
            return {
                ...state,
                enableToggleComment: action.enablingReply,
                majorInxex: action.generalIndex,
                minorIndex: action.commentIndex,
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

        case types.TOGGLE_INPUT: {
            return {
                ...state,
                imageData: state.imageData.map((text, index) => index == action.generalIndex ?
                    {   
                        ...text, 
                        enableToggleComment: action.inputToggle,
                        comments: text.comments.map((newComment, index) => index == action.index ?
                        {   
                            ...newComment, 
                                replyComments: [...newComment.replyComments, {comment: action.replyText, likeComment: text.toggle, enableReply: false }],
                                enableReply: !newComment.enableReply
                        } : {
                            ...newComment,
                            enableReply: false
                        }
                    )
                    } : {
                        ...text,
                        enableToggleComment: false
                    }
                ) 

              
            }
        }

        default:
            return state;
    }
}

export default getImageData;
