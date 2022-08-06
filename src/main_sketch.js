// ml5

let classifier;
let textRes = "loading...";
let userImage;

const featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("Model loaded!");

    classifier = featureExtractor.classification();

    classifier.load('model.json');

    input = createFileInput(handleImage);
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

function handleImage(file) {
  console.log(file);

  if(userImage != null)
    userImage.hide();
  if (file.type === 'image') {
    userImage = createImg(file.data, '');
    userImage.show();
  } else {
    userImage = null;
  }

  if(userImage != null)
    classifyImage(userImage);
}

function classifyImage(image) {
  classifier.classify(
    image,
    (err, result) => {
      console.log("is cancerous?", result, result[0].label);
      textRes = result[0].label + "\n" + "confidence: " + (result[0].confidence * 100).toFixed(3) + "%";
    }
  );
}
