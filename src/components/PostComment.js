import React, { useState } from 'react';
import { connect } from 'react-redux';
import { commentPhoto } from '../actions/index';

const PostComment = ({ id, commentPhoto }) => {
    const [idImage, setIdImage] = useState('');
    const [comment, setComment] = useState('');
    
    const handleCommentChange = (id, event) => {
        event.preventDefault();
        setIdImage(id);
        setComment(event.target.value);
    }
    
    const handleSubmit = () => {
        commentPhoto(idImage, comment);
        setComment('');
    }

    return (
        <div>
            <input type="text" value={comment} onChange={(event) => handleCommentChange(id, event)}/>
            <button type="submit" onClick={handleSubmit}>Post</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    commentPhoto: (id, text) => dispatch(commentPhoto(id, text))
});

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);