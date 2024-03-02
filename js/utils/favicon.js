const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');

if (prefersDarkMode){
    favicon.href = '.img/favicon/favicon-light.png';
}
else{
    favicon.href = '.img/favicon/favicon-dark.png'
  
}
favicon.type = 'image/x-icon';
favicon.rel = 'icon';
document.head.appendChild(favicon);