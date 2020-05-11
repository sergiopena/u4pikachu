console.log("u4pikachu - content script running");
images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
  console.log(`Found image ${images[i].src}`);
  src = images[i].src.replace(/blur.php\?foto=/g, "contactos/medio/");
  src = src.replace(/jpg.*/g, "jpg");
  console.log(`going to replace for ${src}`)
  images[i].src = src
  console.log(`Replaced image ${images[i].src}`);
}
