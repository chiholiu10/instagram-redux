import React from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { commentPhoto } from '../actions/index';

const Comments = ({ images }) => {
    console.log(images.imageData);
    const listComments = images.imageData.map((comments, i) => {
        return (
    <div>{comments.comments}{comments.toggle}
    </div>
        )
    })

    return (
        <div>
            {listComments}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    commentPhoto: (id, text) => dispatch(commentPhoto(id, text))
});

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
