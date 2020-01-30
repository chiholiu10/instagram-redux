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
        dispatch(enableReply(generalIndex, nestedCommentIndex, getEnableReply));
        getEnableReply(currentEnableReply)
    }

    const currentComments = comments.map((image, i) => {
        return (
            <div key={i}>
                <div>
                    {image.comment}
                    <div onClick={() => enableReplyComment(index, i, image.enableReply)}>{image.enableReply ? 'x': 'Reply'}</div>
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