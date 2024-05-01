// GalleryPage.js

import React from 'react';

function GalleryPage({ photos }) {
  return (
    <div>
      <h2>Gallery Page</h2>
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.file} alt={photo.title} />
          <h3>{photo.title}</h3>
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default GalleryPage;
