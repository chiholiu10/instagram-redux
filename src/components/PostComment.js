import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment, replyComment } from '../actions/index';

const PostComment = ({ id, addComment, replyComment, checkComment, showInput, majorIndex, minorIndex }) => {
    const [commentValue, setCommentValue] = useState('');
    const [idValue, setIdValue] = useState('');
    const [toggle, setToggle] = useState('');

    const handleCommentChange = (id, event) => {
        event.preventDefault();
        setIdValue(id);
        setCommentValue(event.target.value);
        setToggle(checkComment);
        console.log(toggle, checkComment);
    }

    const addNewComment = () => {

        addComment(idValue, commentValue, toggle);
        setCommentValue('');
        setIdValue('');
    }

    const replyToComment = () => {
        replyComment(idValue, commentValue, toggle, majorIndex, minorIndex);
        setCommentValue('');
        setIdValue('');
    }

    if(showInput) {
        return (
            <div>
                <input type="text" value={ commentValue } onChange={(event) => handleCommentChange(id, event)}/>
                <button type="submit" onClick={toggle ? addNewComment : replyToComment}>Post</button>
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
    addComment: (id, text, toggle) => dispatch(addComment(id, text. toggle)),
    replyComment: (id, text, toggle, majorIndex, minorIndex) => dispatch(replyComment(id, text, toggle, majorIndex, minorIndex))
});

const mapStateToProps = state => {
    // console.log(state);
    return {
        checkComment: state.imageData.enableToggleComment,
        majorIndex: state.imageData.majorIndex,
        minorIndex: state.imageData.minorIndex

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
