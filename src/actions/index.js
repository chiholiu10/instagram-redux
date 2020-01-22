export const types = {
    TOGGLE_LIKE: 'TOGGLE_LIKE',
    ADD_COMMENT: 'ADD_COMMENT'
}

export const addPhoto = () => {
}

export const likePhoto = (id) => ({
    type: types.TOGGLE_LIKE_IMAGE,
    id
})

export const commentPhoto = (id, newComment) => ({
    type: types.ADD_COMMENT,
    id,
    newComment
})

export const likeComment = (id) => ({
    type: types.TOGGLE_LIKE_COMMENT,
    id
})

export const editCommentPhoto = () => {
    
}

export const removeCommentPhoto = () => {
    
}

export const replyCommentPhoto = () => {
    
}

export const likeCommentPhoto = () => {
    
}




