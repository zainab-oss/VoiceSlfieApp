var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content == "take my selfie")
    {
        console.log("taking selfie....");
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak()
{

    setTimeout( function()
    {
        image_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your Selfie in 3 Seconds";
        var utterThis = new SpeechSynthesisUtterance (speak_data);
        synth.speak(utterThis);

    },3000);

    setTimeout( function()
    {
        image_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your Selfie in 5 Seconds";
        var utterThis = new SpeechSynthesisUtterance (speak_data);
        synth.speak(utterThis);

    },5000);

    setTimeout( function()
    {
        image_id = "selfie3";
        take_snapshot();
        speak_data = "Taking your Selfie in 7 Seconds";
        var utterThis = new SpeechSynthesisUtterance (speak_data);
        synth.speak(utterThis);

    },7000);

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}

function take_snapshot()
{
    console.log(image_id);
    Webcam.snap(function(data_uri) {
        if (image_id == "selfie1")
        {
            document.getElementById("result1").innerHTML = '<img id = "selfie1" src = "'+data_uri+'"/>';
        }
        if (image_id == "selfie2")
        {
            document.getElementById("result2").innerHTML = '<img id = "selfie2" src = "'+data_uri+'"/>';
        }

        if (image_id == "selfie3")
        {
            document.getElementById("result3").innerHTML = '<img id = "sefiie3" src = "'+data_uri+'"/>';
        }
    });
}