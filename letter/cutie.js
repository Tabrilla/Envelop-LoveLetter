// Potential text box for inputing target text
const text = 'Hi boss, sorry pangit ko para alam mo na agad, di ako singer HAHAHA. pero loyal ako';

// Converting the paragraph into an array - string is bad for manipulating
const paragraph = text.split("");


// Initiating how many letters are there
let i = 0; 
// var clickSound = new Audio("http://www.freesfx.co.uk/rx2/mp3s/6/18660_1464810669.mp3");
function dashOut (arr){
    
    if (i<arr.length) {
        console.log(arr[i]);
        document.querySelector(".textCont").textContent += arr[i];
        // $(".textCont").text() = $(".textCont").text() + arr[i];
        // clickSound.play();
        i++;
        console.log ('The i count: ' + i);
        setTimeout(function(){dashOut(arr)},interval(arr[i]));
    }
    
}

// setInterval(function(){(dashOut(paragraph))}, 500);
function interval(letter) {
    console.log(letter);
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}
function startFromBegin (){
    i = 0;
    dashOut(paragraph);
}

startFromBegin();