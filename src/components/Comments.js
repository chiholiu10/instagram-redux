import React from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
// import { commentPhoto } from '../actions/index';

const Comments = ({ images }) => {
    console.log(images);
    const listComments = images.imageData.map((image, i) => {
        return (
            <div key={i}>
                {image.comments}
            </div>
        )
    });

    return (
        <div>
            {listComments}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    // commentPhoto: (id, text) => dispatch(commentPhoto(id, text))
});

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
