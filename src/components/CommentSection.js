import React from 'react';
import { connect } from 'react-redux';
import { likeComment, enableReply } from '../actions/index';
import { useDispatch } from 'react-redux';
import ReplyComment from './ReplyComment';

const CommentSection = ({ index, comments, getEnableReply }) => {
    const dispatch = useDispatch();

    const checkLikeComment = (generalIndex, nestedCommentIndex) => {
        dispatch(likeComment(generalIndex, nestedCommentIndex));
    }
 
    const enableReplyComment = (generalIndex, nestedCommentIndex, currentEnableReply) => {
        dispatch(enableReply(generalIndex, nestedCommentIndex, currentEnableReply));
        getEnableReply(currentEnableReply, nestedCommentIndex, currentEnableReply)
    }

    const currentComments = comments.map(( image, i ) => {
        return (
            <div key={i}>
                <div className="comment-block">
                    <div className="comment-block-top">
                        <div className="comment-parent">
                            {image.comment}
                        </div>
                        
                        <div>
                            <div className="like-button-parent" onClick={() => checkLikeComment(index, i)}>
                                <i className={image.likeComment ? 'like-button-child press' : 'like-button-child'} ></i>
                                <span className={image.likeComment ? 'press' : ''} ></span>
                            </div>
                        </div>
                    </div>
             
                    <div onClick={() => enableReplyComment(index, i, image.enableReply)} className={image.enableReply ? 'reply_text reply_active' : 'reply_text eply_default'}>reply</div>


                    
                </div>
                

                <ReplyComment replies={image.replyComments}/>
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