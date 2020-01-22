import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from '../components/GetData';
import { connect } from 'react-redux';
import { likePhoto, commentPhoto } from '../actions/index';
import { InfiniteScroll } from 'react-simple-infinite-scroll';
import Comments from '../components/Comments';
import PostComments from '../components/PostComments';

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
                throttle={80}
                threshold={100}
            >
            <div key={image.id} >
                <img alt={image.title} src={image.url}/>

                <div className="like-button" onClick={() => likePhoto(image.id)}>
                    <i className={image.toggle ? 'press' : ''} ></i>
                    <span className={image.toggle ? 'press' : ''} >liked!</span>
                </div>
                
                <Comments/>
                <PostComments id={image.id}/>
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
    likePhoto: id => dispatch(likePhoto(id)),
    commentPhoto: (id, text) => dispatch(commentPhoto(id, text))
});

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, mapDispatchToProps)(Images);