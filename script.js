function downloadImage(imagePath) {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = imagePath.split('/').pop();
    link.click();
}
