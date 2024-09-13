// blocks/video/video.js

export default function decorate(block) {
    // Create iframe element for the video
    const iframe = document.createElement('iframe');
    
    // Configure iframe settings
    iframe.src = 'https://drive.google.com/file/d/1G0XzL27Gx9R5UWo5kkrkVgWNV7-6G0K9/view'; // Replace with actual video URL or dynamic handling
    iframe.width = '560';
    iframe.height = '315';
    iframe.Border = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
  
    // Append iframe to the block
    block.innerHTML = ''; // Clear any existing content
    block.appendChild(iframe);
  }
  