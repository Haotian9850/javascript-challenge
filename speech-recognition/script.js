//need to be run on a server...

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;  //SpeechRecognition is a global var living in the browser

const recognition = new SpeechRecognition();
recognition.interimResults = true;  //recognize while speaking...

//create a paragraph
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    //convert result to string
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript).join('');
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
    console.log(transcript);
});

//can do all sorts of fun stuff in here...


recognition.addEventListener('end', recognition.start);

recognition.start();

