import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from '../components/GetData';
import { connect } from 'react-redux';
import { likePhoto } from '../actions/index';
import { InfiniteScroll } from 'react-simple-infinite-scroll';
import PostComment from '../components/PostComment';
import CommentSection from '../components/CommentSection';

const Images = ({ images, likePhoto }) => {
    console.log(images);
    // const url = 'https://jsonplaceholder.typicode.com/photos';
    const url = 'https://api.myjson.com/bins/mofjy';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(url));
    }, [dispatch]); 

    const getImages = images.imageData.map((image) => {
        return (
            <InfiniteScroll
          throttle={100}
          threshold={100}
        >
            <div key={image.id} >
                <img alt={image.title} src={image.url}/>

                <div className="like-button" onClick={() => likePhoto(image.id)}>
                    <i className={image.toggle ? 'press' : ''} ></i>
                    <span className={image.toggle ? 'press' : ''} >liked!</span>
                </div>
                    
                <CommentSection comments={image.comments} id={image.id} /> 
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