import React from 'react';
import { connect } from 'react-redux';
import { likeComment } from '../actions/index';

const CommentSection = ({id, comments }) => {
    const currentComments = comments.map((image, i) => {
        return (
            <div key={i}>
                <div>
                    {image.comments}
                </div>

                 <div className="like-button" onClick={() => likeComment(id, i)}>
                    <i className={image.toggle ? 'press' : ''} ></i>
                    <span className={image.toggle ? 'press' : ''} ></span>
                    {image.toggle}
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

const mapDispatchToProps = dispatch => ({
    likeComment: id => dispatch(likeComment(id))
});

export default connect(null, mapDispatchToProps)(CommentSection );