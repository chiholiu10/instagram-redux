import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from '../components/GetData';
import { connect } from 'react-redux';
import { likePhoto } from '../actions/index';

const Images = ({ images, likePhoto }) => {
    console.log(images);
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(url));
    }, [dispatch]); 

    const getImages = images.imageData.map((image) => {
        return (
            <div key={image.id} className={image.toggle ? 'toggle_default' : 'toggle_like'}>
                <img alt={image.title} src={image.url}/>
                <div onClick={() => likePhoto(image.id)}>Like</div>
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
    likePhoto: id => dispatch(likePhoto(id))
});

const mapStateToProps = state => ({
    images: state.imageData
})

export default connect(mapStateToProps, mapDispatchToProps)(Images);