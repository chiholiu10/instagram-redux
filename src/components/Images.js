import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from './GetData';
import { connect } from 'react-redux';
import { likePhoto, likeComment } from '../actions/index';
import { InfiniteScroll } from 'react-simple-infinite-scroll';
import PostComment from './PostComment';
import CommentSection from './CommentSection';

const Images = ({ images, likePhoto }) => {
    // const url = 'https://jsonplaceholder.typicode.com/photos';
    const url = 'https://api.myjson.com/bins/mofjy';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(url));
    }, [dispatch]); 

    const getImages = images.imageData.map((image, index) => {
        return (
            <InfiniteScroll
          throttle={100}
          threshold={100}
        >
            <div key={index} >
                <img alt={image.title} src={image.url}/>

                <div className="like-button" onClick={() => likePhoto(index)}>
                    <i className={image.imageLike ? 'press' : ''} ></i>
                    <span className={image.imageLike ? 'press' : ''} >liked!</span>
                </div>
 
                <CommentSection id={image.id} comments={image.comments} index={index} /> 
                <PostComment id={image.id}/>
            </div>
            </InfiniteScroll>
        )
    
    });

    return (
        <div>
            { getImages }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    likePhoto: id => dispatch(likePhoto(id))
});

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, mapDispatchToProps)(Images);