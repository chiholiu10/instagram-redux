import React, { useState } from 'react';
import { connect } from 'react-redux';
import { commentPhoto } from '../actions/index';

const PostComment = ({ id, commentPhoto}) => {
    const [commentValue, setCommentValue] = useState('');
    const [idValue, setIdValue] = useState('');

    const handleCommentChange = (id, event) => {
        event.preventDefault();
        setIdValue(id);
        setCommentValue(event.target.value)
    }

    const handleSubmit = () => {
        commentPhoto(idValue, commentValue);
        setCommentValue('');
        setIdValue('');
    }

    return (
        <div>
            <input type="text" value={commentValue} onChange={(event) => handleCommentChange(id, event)}/>
            <button type="submit" onClick={handleSubmit}>Post</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    commentPhoto: (id, text) => dispatch(commentPhoto(id, text))
});

const mapStateToProps = state => ({
    images: state.imageData
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
