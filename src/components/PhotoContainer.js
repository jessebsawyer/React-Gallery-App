import React from 'react'
import Photo from './Photo'
// import NoResults from './NoResults'
import Loading from './Loading'

const PhotoContainer = props => {
   
    
    const results = props.data;
    const loading = props.loading;
    let photos;
    if (!loading) {
        photos = results.map(photo => 
            <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />
        );
    }else {
        // photos = <NoResults />
        photos = <Loading />
    }
    
    return (
        <ul>
            {photos}
        </ul>
    )
}

export default PhotoContainer;