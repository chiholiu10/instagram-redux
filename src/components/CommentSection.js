import React from 'react';
import { connect } from 'react-redux';
import { likeComment } from '../actions/index';
import { useDispatch } from 'react-redux';

const CommentSection = ({ index, comments }) => {
    const dispatch = useDispatch();
    const checkLikeComment = (generalIndex, nestedCommentIndex) => {
        console.log(generalIndex, nestedCommentIndex);
        dispatch(likeComment(generalIndex, nestedCommentIndex));
    }
    const currentComments = comments.map((image, i) => {
        console.log(image)
        return (
            <div key={i}>
                <div>
                    {image.comments}
                </div>

                <div className="like-button" onClick={() => checkLikeComment(index, i)}>
                    <i className={image.toggle ? 'press' : 'unpress'} ></i>
                    <span className={image.toggle ? 'press' : 'unpress'} ></span>
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