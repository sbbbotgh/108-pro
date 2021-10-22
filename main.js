function startClassification(){
    navigator.mediaDevices.getUserMedia('audio:true');
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8CLFK8CHw/model.json', modelReady);
}

function modelReady(){
   classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('gotResults');
    if(error){
        console.error("error");
    }
    else{
        console.log(results);
        random_number_r =  Math.floor(Math.random() * 255) + 1;
        random_number_g =  Math.floor(Math.random() * 255) + 1;
        random_number_b =  Math.floor(Math.random() * 255) + 1;
        document.getElementById("hear_you").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("button_no").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        img = document.getElementById("image_noower");
        if(results[0].label=="cat"){
            img.src = "cat.gif";
        }
        else if(results[0].label=="Chicken"){
            img.src = "chicken.gif";
        }
        else if(results[0].label=="dog"){
            img.src = "dog.gif";
        }
        else{
            img.src = "hear.gif";
        }
    }
}