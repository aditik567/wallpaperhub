// This function is called when the "Download" button is clicked
function downloadImage(button) {
    // Find the parent element (div) that contains the image
    const wallpaperDiv = button.parentElement;
    
    // Find the <img> element within this div
    const imgElement = wallpaperDiv.querySelector('img');
    
    // Get the image source (path)
    const imgSrc = imgElement.src;
    
    // Create an anchor (<a>) element for downloading
    const link = document.createElement('a');
    
    // Set the href attribute to the image source
    link.href = imgSrc;
    
    // Set the download attribute to suggest a filename for the image
    link.download = imgSrc.split('/').pop(); // This will use the image file name (e.g., "front1.jpeg")
    
    // Trigger the download by simulating a click
    link.click();
}
