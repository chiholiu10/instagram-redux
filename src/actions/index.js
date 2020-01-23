export const types = {
<<<<<<< HEAD
    TOGGLE_LIKE_IMAGE: 'TOGGLE_LIKE_IMAGE',
    ADD_COMMENT: 'ADD_COMMENT'
=======
    TOGGLE_LIKE_PHOTO: 'TOGGLE_LIKE_PHOTO',
    ADD_COMMENT: 'ADD_COMMENT',
    TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT'
>>>>>>> da8228230b25a6b2bb4aa727e8b1852bad4a3d84
}

export const addPhoto = () => {
}

export const likePhoto = (id) => ({
    type: types.TOGGLE_LIKE_PHOTO,
    id
})

export const commentPhoto = (id, newComment) => ({
    type: types.ADD_COMMENT,
    id,
    newComment
})

export const likeComment = (id, commentIndex) => ({
    type: types.TOGGLE_LIKE_COMMENT,
    id,
    commentIndex
})

export const editCommentPhoto = () => {
    
}

export const removeCommentPhoto = () => {
    
}

export const replyCommentPhoto = () => {
    
}

export const likeCommentPhoto = () => {
    
}




