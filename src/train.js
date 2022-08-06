const dirBenign = '/public/data/train/benign/';
const dirMalignant = '/public/data/train/malignant/';

let classifier;

const featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("Model loaded!");

    classifier = featureExtractor.classification();

    classifier.addImage(document.getElementById("benign1"), "benign");
    classifier.addImage(document.getElementById("benign2"), "benign");
    classifier.addImage(document.getElementById("benign3"), "benign");
    classifier.addImage(document.getElementById("benign4"), "benign");
    classifier.addImage(document.getElementById("benign5"), "benign");
    classifier.addImage(document.getElementById("benign6"), "benign");
    classifier.addImage(document.getElementById("benign7"), "benign");
    classifier.addImage(document.getElementById("benign8"), "benign");
    classifier.addImage(document.getElementById("benign9"), "benign");
    classifier.addImage(document.getElementById("benign10"), "benign");
    classifier.addImage(document.getElementById("benign11"), "benign");
    classifier.addImage(document.getElementById("benign12"), "benign");
    classifier.addImage(document.getElementById("benign13"), "benign");
    classifier.addImage(document.getElementById("benign14"), "benign");
    classifier.addImage(document.getElementById("benign15"), "benign");
    classifier.addImage(document.getElementById("benign16"), "benign");
    classifier.addImage(document.getElementById("benign17"), "benign");
    classifier.addImage(document.getElementById("benign18"), "benign");
    classifier.addImage(document.getElementById("benign19"), "benign");
    classifier.addImage(document.getElementById("benign20"), "benign");
    classifier.addImage(document.getElementById("benign21"), "benign");
    classifier.addImage(document.getElementById("benign22"), "benign");
    classifier.addImage(document.getElementById("benign23"), "benign");
    classifier.addImage(document.getElementById("benign24"), "benign");
    classifier.addImage(document.getElementById("benign25"), "benign");
    classifier.addImage(document.getElementById("benign26"), "benign");
    classifier.addImage(document.getElementById("benign27"), "benign");
    classifier.addImage(document.getElementById("benign28"), "benign");
    classifier.addImage(document.getElementById("benign29"), "benign");
    classifier.addImage(document.getElementById("benign30"), "benign");
    classifier.addImage(document.getElementById("benign31"), "benign");
    classifier.addImage(document.getElementById("benign32"), "benign");
    classifier.addImage(document.getElementById("benign33"), "benign");
    classifier.addImage(document.getElementById("benign34"), "benign");
    classifier.addImage(document.getElementById("benign35"), "benign");
    classifier.addImage(document.getElementById("benign36"), "benign");
    classifier.addImage(document.getElementById("benign37"), "benign");
    classifier.addImage(document.getElementById("benign38"), "benign");
    classifier.addImage(document.getElementById("benign39"), "benign");
    classifier.addImage(document.getElementById("benign40"), "benign");
    classifier.addImage(document.getElementById("benign41"), "benign");
    classifier.addImage(document.getElementById("benign42"), "benign");
    classifier.addImage(document.getElementById("benign43"), "benign");
    classifier.addImage(document.getElementById("benign44"), "benign");
    classifier.addImage(document.getElementById("benign45"), "benign");
    classifier.addImage(document.getElementById("benign46"), "benign");
    classifier.addImage(document.getElementById("benign47"), "benign");
    classifier.addImage(document.getElementById("benign48"), "benign");
    classifier.addImage(document.getElementById("benign49"), "benign");
    classifier.addImage(document.getElementById("benign50"), "benign");
    classifier.addImage(document.getElementById("benign51"), "benign");
    classifier.addImage(document.getElementById("benign52"), "benign");
    classifier.addImage(document.getElementById("benign53"), "benign");
    classifier.addImage(document.getElementById("benign54"), "benign");
    classifier.addImage(document.getElementById("benign55"), "benign");
    classifier.addImage(document.getElementById("benign56"), "benign");
    classifier.addImage(document.getElementById("benign57"), "benign");
    classifier.addImage(document.getElementById("benign58"), "benign");
    classifier.addImage(document.getElementById("benign60"), "benign");
    classifier.addImage(document.getElementById("benign61"), "benign");
    classifier.addImage(document.getElementById("benign62"), "benign");
    classifier.addImage(document.getElementById("benign63"), "benign");
    classifier.addImage(document.getElementById("benign64"), "benign");
    classifier.addImage(document.getElementById("benign65"), "benign");
    classifier.addImage(document.getElementById("benign66"), "benign");
    classifier.addImage(document.getElementById("benign67"), "benign");
    classifier.addImage(document.getElementById("benign68"), "benign");
    classifier.addImage(document.getElementById("benign69"), "benign");
    classifier.addImage(document.getElementById("benign70"), "benign");
    classifier.addImage(document.getElementById("benign71"), "benign");
    classifier.addImage(document.getElementById("benign72"), "benign");
    classifier.addImage(document.getElementById("benign73"), "benign");
    classifier.addImage(document.getElementById("benign74"), "benign");
    classifier.addImage(document.getElementById("benign75"), "benign");
    classifier.addImage(document.getElementById("benign76"), "benign");
    classifier.addImage(document.getElementById("benign77"), "benign");
    classifier.addImage(document.getElementById("benign78"), "benign");
    classifier.addImage(document.getElementById("benign79"), "benign");
    classifier.addImage(document.getElementById("benign80"), "benign");
    classifier.addImage(document.getElementById("benign81"), "benign");
    classifier.addImage(document.getElementById("benign82"), "benign");
    classifier.addImage(document.getElementById("benign83"), "benign");
    classifier.addImage(document.getElementById("benign84"), "benign");
    classifier.addImage(document.getElementById("benign85"), "benign");
    classifier.addImage(document.getElementById("benign86"), "benign");
    classifier.addImage(document.getElementById("benign87"), "benign");
    classifier.addImage(document.getElementById("benign88"), "benign");
    classifier.addImage(document.getElementById("benign89"), "benign");
    classifier.addImage(document.getElementById("benign90"), "benign");
    classifier.addImage(document.getElementById("benign91"), "benign");
    classifier.addImage(document.getElementById("benign92"), "benign");
    classifier.addImage(document.getElementById("benign93"), "benign");
    classifier.addImage(document.getElementById("benign94"), "benign");
    classifier.addImage(document.getElementById("benign95"), "benign");
    classifier.addImage(document.getElementById("benign96"), "benign");
    classifier.addImage(document.getElementById("benign97"), "benign");
    classifier.addImage(document.getElementById("benign98"), "benign");
    classifier.addImage(document.getElementById("benign99"), "benign");
    classifier.addImage(document.getElementById("benign100"), "benign");



    classifier.addImage(document.getElementById("malignant1"), "malignant");
    classifier.addImage(document.getElementById("malignant2"), "malignant");
    classifier.addImage(document.getElementById("malignant3"), "malignant");
    classifier.addImage(document.getElementById("malignant4"), "malignant");
    classifier.addImage(document.getElementById("malignant5"), "malignant");
    classifier.addImage(document.getElementById("malignant6"), "malignant");
    classifier.addImage(document.getElementById("malignant7"), "malignant");
    classifier.addImage(document.getElementById("malignant8"), "malignant");
    classifier.addImage(document.getElementById("malignant9"), "malignant");
    classifier.addImage(document.getElementById("malignant10"), "malignant");
    classifier.addImage(document.getElementById("malignant11"), "malignant");
    classifier.addImage(document.getElementById("malignant12"), "malignant");
    classifier.addImage(document.getElementById("malignant13"), "malignant");
    classifier.addImage(document.getElementById("malignant14"), "malignant");
    classifier.addImage(document.getElementById("malignant15"), "malignant");
    classifier.addImage(document.getElementById("malignant16"), "malignant");
    classifier.addImage(document.getElementById("malignant17"), "malignant");
    classifier.addImage(document.getElementById("malignant18"), "malignant");
    classifier.addImage(document.getElementById("malignant19"), "malignant");
    classifier.addImage(document.getElementById("malignant20"), "malignant");
    classifier.addImage(document.getElementById("malignant21"), "malignant");
    classifier.addImage(document.getElementById("malignant22"), "malignant");
    classifier.addImage(document.getElementById("malignant23"), "malignant");
    classifier.addImage(document.getElementById("malignant24"), "malignant");
    classifier.addImage(document.getElementById("malignant25"), "malignant");
    classifier.addImage(document.getElementById("malignant26"), "malignant");
    classifier.addImage(document.getElementById("malignant27"), "malignant");
    classifier.addImage(document.getElementById("malignant28"), "malignant");
    classifier.addImage(document.getElementById("malignant29"), "malignant");
    classifier.addImage(document.getElementById("malignant30"), "malignant");
    classifier.addImage(document.getElementById("malignant31"), "malignant");
    classifier.addImage(document.getElementById("malignant32"), "malignant");
    classifier.addImage(document.getElementById("malignant33"), "malignant");
    classifier.addImage(document.getElementById("malignant34"), "malignant");
    classifier.addImage(document.getElementById("malignant35"), "malignant");
    classifier.addImage(document.getElementById("malignant36"), "malignant");
    classifier.addImage(document.getElementById("malignant37"), "malignant");
    classifier.addImage(document.getElementById("malignant38"), "malignant");
    classifier.addImage(document.getElementById("malignant39"), "malignant");
    classifier.addImage(document.getElementById("malignant40"), "malignant");
    classifier.addImage(document.getElementById("malignant41"), "malignant");
    classifier.addImage(document.getElementById("malignant42"), "malignant");
    classifier.addImage(document.getElementById("malignant43"), "malignant");
    classifier.addImage(document.getElementById("malignant44"), "malignant");
    classifier.addImage(document.getElementById("malignant45"), "malignant");
    classifier.addImage(document.getElementById("malignant46"), "malignant");
    classifier.addImage(document.getElementById("malignant47"), "malignant");
    classifier.addImage(document.getElementById("malignant48"), "malignant");
    classifier.addImage(document.getElementById("malignant49"), "malignant");
    classifier.addImage(document.getElementById("malignant50"), "malignant");
    classifier.addImage(document.getElementById("malignant51"), "malignant");
    classifier.addImage(document.getElementById("malignant52"), "malignant");
    classifier.addImage(document.getElementById("malignant53"), "malignant");
    classifier.addImage(document.getElementById("malignant54"), "malignant");
    classifier.addImage(document.getElementById("malignant55"), "malignant");
    classifier.addImage(document.getElementById("malignant56"), "malignant");
    classifier.addImage(document.getElementById("malignant57"), "malignant");
    classifier.addImage(document.getElementById("malignant59"), "malignant");
    classifier.addImage(document.getElementById("malignant60"), "malignant");
    classifier.addImage(document.getElementById("malignant61"), "malignant");
    classifier.addImage(document.getElementById("malignant62"), "malignant");
    classifier.addImage(document.getElementById("malignant63"), "malignant");
    classifier.addImage(document.getElementById("malignant64"), "malignant");
    classifier.addImage(document.getElementById("malignant65"), "malignant");
    classifier.addImage(document.getElementById("malignant66"), "malignant");
    classifier.addImage(document.getElementById("malignant67"), "malignant");
    classifier.addImage(document.getElementById("malignant68"), "malignant");
    classifier.addImage(document.getElementById("malignant69"), "malignant");
    classifier.addImage(document.getElementById("malignant70"), "malignant");
    classifier.addImage(document.getElementById("malignant71"), "malignant");
    classifier.addImage(document.getElementById("malignant72"), "malignant");
    classifier.addImage(document.getElementById("malignant73"), "malignant");
    classifier.addImage(document.getElementById("malignant74"), "malignant");
    classifier.addImage(document.getElementById("malignant75"), "malignant");
    classifier.addImage(document.getElementById("malignant76"), "malignant");
    classifier.addImage(document.getElementById("malignant77"), "malignant");
    classifier.addImage(document.getElementById("malignant78"), "malignant");
    classifier.addImage(document.getElementById("malignant79"), "malignant");
    classifier.addImage(document.getElementById("malignant80"), "malignant");
    classifier.addImage(document.getElementById("malignant81"), "malignant");
    classifier.addImage(document.getElementById("malignant82"), "malignant");
    classifier.addImage(document.getElementById("malignant83"), "malignant");
    classifier.addImage(document.getElementById("malignant84"), "malignant");
    classifier.addImage(document.getElementById("malignant85"), "malignant");
    classifier.addImage(document.getElementById("malignant86"), "malignant");
    classifier.addImage(document.getElementById("malignant87"), "malignant");
    classifier.addImage(document.getElementById("malignant88"), "malignant");
    classifier.addImage(document.getElementById("malignant89"), "malignant");
    classifier.addImage(document.getElementById("malignant90"), "malignant");
    classifier.addImage(document.getElementById("malignant91"), "malignant");
    classifier.addImage(document.getElementById("malignant92"), "malignant");
    classifier.addImage(document.getElementById("malignant93"), "malignant");
    classifier.addImage(document.getElementById("malignant94"), "malignant");
    classifier.addImage(document.getElementById("malignant95"), "malignant");
    classifier.addImage(document.getElementById("malignant96"), "malignant");
    classifier.addImage(document.getElementById("malignant97"), "malignant");
    classifier.addImage(document.getElementById("malignant98"), "malignant");
    classifier.addImage(document.getElementById("malignant99"), "malignant");
    classifier.addImage(document.getElementById("malignant100"), "malignant", imagesLoaded);
}

function imagesLoaded() {
    console.log("do train", classifier.hasAnyTrainedClass)

    classifier.train(lossValue => {
      console.log("Loss is", lossValue)
      if (lossValue == null) {
        trainFinished()
      }
    })
  }

function trainFinished() {
  console.log("train finished")

    classifier.classify(
      document.getElementById("malignant"),
      (err, result) => {
        console.log("is cancerous?", result, result[0].label)
      }
    )
    classifier.classify(
      document.getElementById("benign"),
      (err, result) => {
        console.log("is benign?", result, result[0].label)
      }
    )
    // Saves two files model.json and model.weights.bin
  classifier.save()
}
