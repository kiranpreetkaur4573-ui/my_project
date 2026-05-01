// frontend/imageUpload.js - SIMPLE VERSION THAT WORKS

async function uploadImageToBackend(file) {
  console.log('Uploading image:', file.name);
  
  const formData = new FormData();
  formData.append('image', file);
  
  try {
    const response = await fetch('http://localhost:5000/upload-image', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    console.log('Server response:', data);
    
    if (data.success) {
      console.log('✅ Image uploaded successfully:', data.url);
      return data.url;
    } else {
      throw new Error(data.error || 'Upload failed');
    }
  } catch (error) {
    console.error('❌ Upload error:', error);
    throw error;
  }
}