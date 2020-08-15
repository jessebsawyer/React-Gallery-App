import React from 'react'
import Photo from './Photo'
import Loading from './Loading'
import NoResults from './NoResults'

// Provides Container for Photos to Show
const PhotoContainer = props => {

    
   
    const results = props.data;
    const loading = props.loading;
    let photos;
    if (!loading) {
        photos = results.map(photo => 
            <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />
        );
    }else {
        photos = <Loading />
    }
    
    return (
        <ul>
            {photos}
            {
                (photos.length === 0)
                ?  <NoResults />
                : console.log(`${photos.length} photos found.`)
            }
        </ul>
    )
}

export default PhotoContainer;