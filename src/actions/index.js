export const types = {
    TOGGLE_LIKE_PHOTO: 'TOGGLE_LIKE_PHOTO',
    ADD_COMMENT: 'ADD_COMMENT',
    TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT'
}

export const addPhoto = () => {
}

export const likePhoto = (index) => ({
    type: types.TOGGLE_LIKE_PHOTO,
    index
});

export const commentPhoto = (id, newComment) => ({
    type: types.ADD_COMMENT,
    id,
    newComment
});

export const likeComment = (generalIndex, commentIndex) => ({
    type: types.TOGGLE_LIKE_COMMENT,
    generalIndex,
    commentIndex
});

export const editCommentPhoto = () => {
    
}

export const removeCommentPhoto = () => {
    
}

export const replyCommentPhoto = () => {
    
}

export const likeCommentPhoto = () => {
    
}




