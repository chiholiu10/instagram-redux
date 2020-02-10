import React from 'react';
import { connect } from 'react-redux';

const ReplyComment = ({ replies }) => {
    console.log(replies);
    const currentReplies = replies.map((reply, i) => {
        return (
            <div key={i}>
                {reply.comment}
            </div>
        )
    });

//     comment: "dsfdfs"
// likeComment: undefined
// enableReply: false

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