// UploadPage.js

import React, { useState } from 'react';

function UploadPage({ setPhotos }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setUploading(true);

    // Simulated backend upload (setTimeout to mimic delay)
    setTimeout(() => {
      const uploadedPhoto = { file: URL.createObjectURL(file), title, description };
      setPhotos((prevPhotos) => [...prevPhotos, uploadedPhoto]);
      // Reset form fields
      setFile(null);
      setTitle('');
      setDescription('');
      setUploading(false);
    }, 2000);
  };

  return (
    <div>
      <h2>Upload Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit" disabled={uploading}>{uploading ? 'Uploading...' : 'Upload'}</button>
      </form>
    </div>
  );
}

export default UploadPage;
