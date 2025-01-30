let featureExtractor;
let classifier;
let trainingImages = [];

// Initialize ML5
function setup() {
    featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
}

function modelReady() {
    classifier = featureExtractor.classification();
    console.log('Model ready!');
}

// Handle image uploads
document.getElementById('uploader').onchange = function(event) {
    trainingImages = Array.from(event.target.files);
};

// Add images to classifier
function addImages() {
    const label = document.getElementById('labelSelector').value;
    
    trainingImages.forEach(file => {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            classifier.addImage(img, label, () => {
                console.log(`Added ${file.name} as ${label}`);
            });
        };
    });
}

// Train the model
function trainModel() {
    classifier.train((lossValue) => {
        document.getElementById('loss').innerHTML = `Current Loss: ${lossValue}`;
        
        if (lossValue === null) {
            console.log('Training complete!');
            classifier.save(() => {
                console.log('Model downloaded');
            });
        }
    });
}

// Initialize the setup
setup();