import React from 'react';
import { connect } from 'react-redux';
import { likeComment, enableReply } from '../actions/index';
import { useDispatch } from 'react-redux';

const CommentSection = ({ index, comments, getEnableReply }) => {
    const dispatch = useDispatch();

    const checkLikeComment = (generalIndex, nestedCommentIndex) => {
        dispatch(likeComment(generalIndex, nestedCommentIndex));
    }
 
    const enableReplyComment = (generalIndex, nestedCommentIndex, currentEnableReply) => {
        console.log(generalIndex, nestedCommentIndex, currentEnableReply)
        dispatch(enableReply(generalIndex, nestedCommentIndex, currentEnableReply));
        getEnableReply(currentEnableReply, nestedCommentIndex, currentEnableReply)
    }

    const currentComments = comments.map((image, i) => {
        return (
            <div key={i}>
                <div>
                    {image.comment}
                    <div onClick={() => enableReplyComment(index, i, image.enableReply)}>{image.enableReply ? 'x': 'Click here to reply'}</div>
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

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, null)(CommentSection);