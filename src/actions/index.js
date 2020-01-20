export const types = {
    TOGGLE_LIKE: 'TOGGLE_LIKE',
    ADD_COMMENT: 'ADD_COMMENT'
}

export const addPhoto = () => {
}

export const likePhoto = (id) => ({
    type: types.TOGGLE_LIKE,
    id
})

export const commentPhoto = (id, newComment) => ({
    type: types.ADD_COMMENT,
    id,
    newComment
})

export const editCommentPhoto = () => {
    
}

export const removeCommentPhoto = () => {
    
}

export const replyCommentPhoto = () => {
    
}

export const likeCommentPhoto = () => {
    
}




