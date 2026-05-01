// frontend/imageUpload.js - SIMPLE VERSION THAT WORKS
async function uploadImageToBackend(file) {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('http://localhost:5000/upload-image', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log('✅ Image uploaded:', data.url);
      return data.url;
    } else {
      throw new Error(data.error || 'Upload failed');
    }
  } catch (error) {
    console.error('❌ Error:', error);
    throw error;
  }
}