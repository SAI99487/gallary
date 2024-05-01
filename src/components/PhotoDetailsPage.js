import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useHistory

function PhotoDetailsPage({ photos }) {
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  // Function to handle navigation back to the GalleryPage

  return (
    <div>
      <h2>Photo Details Page</h2>
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.file} alt={photo.title} />
          <h3>{photo.title}</h3>
          <p>{photo.description}</p>
        </div>
      ))}
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}

export default PhotoDetailsPage;
