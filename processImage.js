var processImage = function(){
  emage = window.emage;
  console.log("Hello!");
  
  var source = document.querySelectorAll("#source")[0];
  var canvas = document.createElement("Canvas");
  var processor = new emage.Processor(canvas, source);

  // Create a layer
  var colorLayer = new emage.Layer("buildin.coloradjust");

  // Add layers to processor and update the image
  processor.add(colorLayer);
  colorLayer.set({
    gamma: 30.0
  });
  processor.update();
  
  // Export the final image
  var target = document.querySelectorAll("#target")[0];
  target.src = processor.canvas.toDataURL();
  
};

window.processImage = processImage;