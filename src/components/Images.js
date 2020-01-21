import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from '../components/GetData';
import { connect } from 'react-redux';
import { likePhoto, commentPhoto } from '../actions/index';
import { InfiniteScroll } from 'react-simple-infinite-scroll'

const Images = ({ images, likePhoto }) => {
    console.log(images);
    const url = 'https://jsonplaceholder.typicode.com/photos';
    // const url = 'https://api.myjson.com/bins/mofjy';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(url));
    }, [dispatch]); 

    const handleCommentChange = (id, event) => {
        event.preventDefault();
        console.log(id, event.target.value);
        dispatch(commentPhoto(id, event.target.value));
    }

    // const handleSubmit = () => {
    //     dispatch(commentPhoto(id, event.target.value));
    // }

    const getImages = images.imageData.map((image) => {
  
        return (
            <InfiniteScroll
          throttle={10}
          threshold={100}
        >
            <div key={image.id} >
                <img alt={image.title} src={image.url}/>

                <div className="like-button" onClick={() => likePhoto(image.id)}>
                    <i className={image.toggle ? 'press' : ''} ></i>
                    <span className={image.toggle ? 'press' : ''} >liked!</span>
                </div>
                <input type="text" onChange={(event) => handleCommentChange(image.id, event)}/>
                {/* <button type="submit" onClick={handleSubmit}>Post</button> */}
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