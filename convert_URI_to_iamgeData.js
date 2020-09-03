function convertURIToImageData(URI) {
  return new Promise(function(resolve, reject) {
    if (URI == null) return reject();
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d'),
        image = new Image();
    image.addEventListener('load', function() {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    }, false);
    image.src = URI;
  });
}
var URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXAQMAAABLBksvAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAArElEQVQ4jc3SsQ3EIAwFUEcu6MICDELHZhdYAFZKxxpILEERxWdOyuUKzrShekhY/gYAnrY0USAkKoJXwJDRg2hXo62pTezd3Nx3YkDv7gxDc37u+51l6L7df65iZN3odOStZFBlycdLFcGcLToukQzWaDI6S15aP59Ef8a8av+43wPURJI5WyKzKpDM76u4ZOLQzJYnjhbP+y+N3PvylwPBnD/tx3bNOPSz1huaxwRTQWvpkAAAAABJRU5ErkJggg==";

convertURIToImageData(URI).then(function(imageData) {
  // Here you can use imageData
  window.image=imageData;
  console.log(imageData);
  console.log(jsQR(imageData));
});