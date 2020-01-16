import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { requestData } from '../components/GetData';
import { connect } from 'react-redux';

const Images = ({ images }) => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(url));
    }, [dispatch]); 

    const getImages = images.imageData.map((image) => {
        console.log(image);
        return (
            <div>
                <img alt={image.title} src={image.url}/>
            </div>
        )
    })

    return (
        <div>
            { getImages }
        </div>
    )
}

const mapStateToProps = state => {

    return {
        images: state.imageData
    }
  
}

export default connect(mapStateToProps, null)(Images);