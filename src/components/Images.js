import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from './GetData';
import { connect } from 'react-redux';
import { likePhoto, openInputComment, toggleInput } from '../actions/index';
import { InfiniteScroll } from 'react-simple-infinite-scroll';
import PostComment from './PostComment';
import CommentSection from './CommentSection';

const Images = ({ images, likePhoto, openInputComment }) => {
    // const url = 'https://jsonplaceholder.typicode.com/photos';
    const url = 'https://api.myjson.com/bins/mofjy';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(url));
    }, [dispatch]); 

    const getEnableReply = (toggleInputCheck, index) => {
        dispatch(toggleInput(toggleInputCheck, index));
    }

    const getImages = images.imageData.map((image, index) => {
        return (
            <InfiniteScroll
                throttle={100}
                threshold={100}
            >
            <div key={index} className="image-container">
                <div className="image-container-inner-block">
                    <img alt={image.title} src={image.url}/>

                    <div className="first-block">
                        <div className="like-button like-button-image" onClick={() => likePhoto(index)}>
                            <i className={image.imageLike ? 'image-like press' : 'image-like'} ></i>
                        </div>

                        <div className="open-input-field" onClick={() => openInputComment(index)}>
                            <img src="image/message-icon.png"/>
                        </div>
                    </div>
    
                    <CommentSection id={image.id} comments={image.comments} replies={image.replyComments} index={index} getEnableReply={getEnableReply}/> 

                    <PostComment id={image.id} getEnableReply={getEnableReply} showInput={image.enableComment} />
                </div>
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
    openInputComment: id => dispatch(openInputComment(id))
});

const mapStateToProps = state => {
    console.log(state.imageData);

    return {
        images: state.imageData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);