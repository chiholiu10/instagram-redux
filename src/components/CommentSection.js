import React, { useState } from 'react';
import { connect } from 'react-redux';
import { likeComment, enableReply, replyComment, postReply } from '../actions/index';
import { useDispatch } from 'react-redux';

const CommentSection = ({ index, comments }) => {
    const [replyComment, setReplyComment] = useState('');
    const dispatch = useDispatch();

    const checkLikeComment = (generalIndex, nestedCommentIndex) => {
        console.log(generalIndex, nestedCommentIndex);
        dispatch(likeComment(generalIndex, nestedCommentIndex));
    }

    const enableReplyComment = (generalIndex, nestedCommentIndex) => {
        console.log(generalIndex, nestedCommentIndex, enableReply);
        dispatch(enableReply(generalIndex, nestedCommentIndex))
    }

    const getReplyComment = (getReply) => {
        console.log(getReply);
    }

    const postReplyComment = () => {
        dispatch(postReply(postReply));
    }

    const currentComments = comments.map((image, i) => {
        console.log(image)
        return (
            <div key={i}>
                <div>
                    {image.comment}
                    <div onClick={() => enableReplyComment(index, i, false)}>{image.enableReply ? 'x': 'Reply'}</div>
                    {image.enableReply.enablingReply ? <div><input type="input" onChange={(event) => getReplyComment(event.target.value)}/><button onClick={postReplyComment}>Post</button></div> : <div></div>} 
                </div>

                <div className="like-button" onClick={() => checkLikeComment(index, i)}>
                    <i className={image.likeComment ? 'press' : ''} ></i>
                    <span className={image.likeComment ? 'press' : ''} ></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            {currentComments}
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     likeComment: (id, text) => dispatch(likeComment(id, text))
// });

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, null)(CommentSection);