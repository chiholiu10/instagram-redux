import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from '../components/GetData';
import { connect } from 'react-redux';
import { likePhoto} from '../actions/index';

const Images = ({ images, likePhoto }) => {
    console.log(images);
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(url));
    }, [dispatch]); 

    // const submitComment = (event) => {
    //     event.preventDefault();
    //     let input = this.refs.input;
    //     if(!input.value.trim()) {
    //         return;
    //     }
    //     dispatch(input.value);
    //     input.value = "";

    // }

    const getImages = images.imageData.map((image) => {
        return (
            <div key={image.id} >
                <img alt={image.title} src={image.url}/>

                <div className="like-button" onClick={() => likePhoto(image.id)}>
                    <i className={image.toggle ? 'press' : ''} ></i>
                    <span className={image.toggle ? 'press' : ''} >liked!</span>
                </div>

                {/* <form onSubmit={submitComment}>
                    <input ref="input"/>
                    <button type="submit">
                        POST
                    </button>
                </form> */}
               
            </div>
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
    // addTodo: text => dispatch(commentPhoto(text))
});

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, mapDispatchToProps)(Images);