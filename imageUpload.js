// frontend/imageUpload.js
// Image upload handler for admin panel

async function uploadToImgbb(file) {
  return await uploadImageToBackend(file);
}
// Export for use in products.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { uploadImageToBackend };
}