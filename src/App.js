// App.js

import React ,{ useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import UploadPage from './components/UploadPage';
import GalleryPage from './components/GalleryPage';
import PhotoDetailsPage from './components/PhotoDetailsPage';
import Home from './components/home';

function App() {
  const [photos, setPhotos] = useState([]);
    
  return (
    
      <div className="App">
        <Router>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route exact path="/upload" element={<UploadPage setPhotos={setPhotos}/>} />
          <Route exact path="/gallery" element={<GalleryPage photos={photos}/>} />
          <Route path="/photos" element={<PhotoDetailsPage photos={photos}/>} />
          </Routes>
          </Router>
          
          

      </div>
    
  );
}

export default App;
