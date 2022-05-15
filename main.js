function preload() {
}
  
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();}


    function draw() {
        image(video, 0, 0, 300, 300);
        image(clown_nose, noseX, noseY, 80, 35);
      }
      
      function take_snapshot(){    
        save('myFilterImage.png');
      }