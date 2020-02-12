import React from 'react';
import { connect } from 'react-redux';
import { likeReply, enableReply } from '../actions/index';

const ReplyComment = ({ index, commentIndex, replies, dispatch, getEnableReply }) => {


    const checkLikeReply = (generalIndex, nestedCommentIndex, replyIndex) => {
        console.log(generalIndex, nestedCommentIndex, replyIndex);
        dispatch(likeReply(generalIndex, nestedCommentIndex, replyIndex));
    }

    // const enableReplyComment = (generalIndex, nestedCommentIndex, currentEnableReply) => {
    //     dispatch(enableReply(generalIndex, nestedCommentIndex, currentEnableReply));
    //     getEnableReply(currentEnableReply, nestedCommentIndex, currentEnableReply)
    // }

    const currentReplies = replies.map((reply, i) => {
        return (
              <div key={i}>
                <div className="reply-block">
                    <div className="reply-block-top">
                        <div className="reply-parent">
                            {reply.comment}
                        </div>
            
                        <div>
                            <div className="like-button-parent" onClick={() => checkLikeReply(index, commentIndex, i)}>
                                <i className={reply.likeComment ? 'like-button-child press' : 'like-button-child'} ></i>
                                <span className={reply.likeComment ? 'press' : ''} ></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div onClick={() => enableReplyComment(index, i, reply.enableReply)} className={reply.enableReply ? 'reply_text reply_active' : 'reply_text eply_default'}>reply</div> */}
            </div>
        )
    });

    return (
        <div>
            { currentReplies }
        </div>
    )
}

const mapStateToProps = state => ({
    images: state.imageData
});

export default connect(mapStateToProps, null)(ReplyComment);