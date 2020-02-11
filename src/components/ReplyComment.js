import React from 'react';
import { connect } from 'react-redux';

const ReplyComment = ({ replies }) => {
    console.log(replies);
    const currentReplies = replies.map((reply, i) => {
        return (
              <div key={i}>
                <div className="reply-block">
                    <div className="reply-block-top">
                        <div className="reply-parent">
                            {reply.comment}
                        </div>
                        
                        <div>
                            {/* <div className="like-button-parent" onClick={() => checkLikeComment(index, i)}>
                                <i className={image.likeComment ? 'like-button-child press' : 'like-button-child'} ></i>
                                <span className={image.likeComment ? 'press' : ''} ></span>
                            </div> */}
                        </div>
                    </div>
                </div>
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