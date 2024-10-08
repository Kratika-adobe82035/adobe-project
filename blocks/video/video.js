export default function decorate(block) {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://drive.google.com/file/d/1G0XzL27Gx9R5UWo5kkrkVgWNV7-6G0K9/view';
    iframe.width = '560';
    iframe.height = '315';
    iframe.Border = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    block.innerHTML = ''; 
    block.appendChild(iframe);
}