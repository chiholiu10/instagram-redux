import React from 'react';
import { connect } from 'react-redux';
import { likeComment } from '../actions/index';
import { useDispatch } from 'react-redux';

const CommentSection = ({ id, comments }) => {
    const dispatch = useDispatch();
    const checkLikeComment = (index, commentIndex) => {
        console.log(index, commentIndex);
        dispatch(likeComment(index, commentIndex));
    }
    const currentComments = comments.map((image, i) => {
        return (
            <div key={i}>
                <div>
                    {image.comments}
                </div>

                 <div className="like-button" onClick={() => checkLikeComment(id, i)}>
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

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, null)(CommentSection );