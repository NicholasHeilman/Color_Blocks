console.log( 'js' );

$(readyNow); 

function readyNow(){
    console.log('Ready');
    redButtonClick();
    blueButtonClick();
    yellowButtonClick();
    greenButtonClick();
}

//red button
function redButtonClick(){
$('#redButton').on('click', redCount);
}

redClick = 0;
function redCount() {
  redClick += 1;
  redButton.innerHTML = "Red: " + redClick;
  $(container).append('<div id="redBox" class="red"> </div>');
};

// blue button
function blueButtonClick(){
    $('#blueButton').on('click', blueCount);
}
// blue button counter  
blueClick = 0;
function blueCount() {
  blueClick += 1;
  blueButton.innerHTML = "Blue: " + blueClick;
  $(container).append('<div id="blueBox" class="blue"> </div>');
};
// yellow button
function yellowButtonClick(){
    $('#yellowButton').on('click', yellowCount);
}
// yellow button counter  
yellowClick = 0;
function yellowCount() {
  yellowClick += 1;
  yellowButton.innerHTML = "Yellow: " + yellowClick;
  $(container).append('<div id="yellowBox" class="yellow"> </div>');
}
// green button
function greenButtonClick(){
    $('#greenButton').on('click', greenCount);
}
// green button counter  
greenClick = 0;
function greenCount() {
    greenClick += 1;
    greenButton.innerHTML = "Green: " + greenClick;
    $(container).append('<div id="greenBox" class="green"> </div>');
}