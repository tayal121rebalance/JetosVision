import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Replace the URL with the endpoint where you want to upload the file
    fetch('http://18.191.200.1:8081/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('File uploaded successfully');
      })
      .catch(error => {
        console.error('Error uploading file', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}
