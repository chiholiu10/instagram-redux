import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { commentPhoto } from '../actions/index';

const PostComments = ({ id, commentPhoto}) => {
    const dispatch = useDispatch();
    const [commentValue, setCommentValue] = useState('');
    const [idValue, setIdValue] = useState('');

    const handleCommentChange = (id, event) => {
        event.preventDefault();
        setIdValue(id);
        setCommentValue(event.target.value)
    }

    const handleSubmit = () => {
        dispatch(commentPhoto(idValue, commentValue));
        setCommentValue('');
        setIdValue('');
    }

    return (
        <div>
            <input type="text" onChange={(event) => handleCommentChange(id, event)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
