import React, { useState } from 'react';
import { connect } from 'react-redux';
import { commentPhoto, postReply } from '../actions/index';

const PostComment = ({ id, commentPhoto, checkComment, showInput }) => {
    const [commentValue, setCommentValue] = useState('');
    const [idValue, setIdValue] = useState('');

    const handleCommentChange = (id, event) => {
        event.preventDefault();
        setIdValue(id);
        setCommentValue(event.target.value);
    }

    const handleSubmit = () => {
        if(checkComment) {
            commentPhoto(idValue, commentValue, checkComment);
        } else {
            commentPhoto(idValue, commentValue, checkComment);
        }
        
        setCommentValue('');
        setIdValue('');
    }

    if(showInput) {
        return (
            <div>
                <input type="text" value={ commentValue } onChange={(event) => handleCommentChange(id, event)}/>
                <button type="submit" onClick={handleSubmit}>Post</button>
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }

    
}

const mapDispatchToProps = dispatch => ({
    commentPhoto: (id, text) => dispatch(commentPhoto(id, text)),
    postReply: (id, text) => dispatch(postReply(id, text))
});

const mapStateToProps = state => {
    return {
        checkComment: state.imageData.enableToggleComment
    }
    // images: state.imageData,
    // checkComment: state.enableToggleComment
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
