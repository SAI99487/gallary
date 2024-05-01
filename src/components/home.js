// App.js

import React ,{ useState } from 'react';

import UploadPage from './UploadPage';
import GalleryPage from './GalleryPage';
//import PhotoDetailsPage from './PhotoDetailsPage';


function Home() {
  
    const [photos, setPhotos] = useState([]);
  return (
    
      <div className="App">
        
        <UploadPage setPhotos={setPhotos} />
          
          <GalleryPage photos={photos} />
          {/*<PhotoDetailsPage photos={photos}/>*/}

      </div>
    
  );
}

export default Home;
