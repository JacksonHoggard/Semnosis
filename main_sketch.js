// ml5

let classifier;
let textRes = "loading...";
let userImage;

const featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("Model loaded!");
    classifier = featureExtractor.classification();
    classifier.load('./model/model.json');
    textRes = "ready";
}

// p5

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  textSize(32);
  text(textRes, 200, 200);
}

function testModel() {
  const file = document.getElementById('tester').files[0];
  const img = new Image();
  img.src = URL.createObjectURL(file);
  
  img.onload = () => {
      classifier.classify(img, (err, results) => {
        textRes = results[0].label + "\n" + "confidence: " + (results[0].confidence * 100).toFixed(3) + "%";
      });
  };
}

