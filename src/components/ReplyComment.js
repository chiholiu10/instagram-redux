import React from 'react';
import { connect } from 'react-redux';

const ReplyComment = ({ replies }) => {
    console.log(replies);
    // const currentReplies = replies.map((reply, i) => {
    //     return (
    //         <div key={i}>
    //             {reply}
    //         </div>
    //     )
    // });

    return (
        <div>
            {/* { currentReplies } */}
        </div>
    )
}

const mapStateToProps = state => ({
    images: state.imageData
});

export default connect(mapStateToProps, null)(ReplyComment);