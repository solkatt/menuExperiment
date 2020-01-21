let gridContainer;
let toggleState;

let div5ButtonUp;
let div5ButtonDown;
let div5ButtonRight;
let div5ButtonLeft;

let div2ButtonDown;
let div2ButtonRight;
let div2ButtonLeft;

let div6ButtonLeft;
let div4ButtonRight;

let parallaxObject;

let moveX = -100;
let moveY = -25;

let numberWang;



// transform: translate(-100%, -25%)


// LOAD

window.addEventListener("load", function () {
    gridContainer.classList.add("transition");

});


//element.classList.add("my-class");

gridContainer = document.getElementById('grid-container');



////////////////DIV 5////////////////////////
// Div 5 Button Up
div5ButtonUp = document.getElementById('div5ButtonUp');
div5ButtonUp.addEventListener('click', function () {
    page5Animation('DIV5UP');
});

// Div 5 Button Down
div5ButtonDown = document.getElementById('div5ButtonDown');
div5ButtonDown.addEventListener('click', function () {
    page5Animation('DIV5DOWN');
});

// Div 5 Button Right
div5ButtonRight = document.getElementById('div5ButtonRight');
div5ButtonRight.addEventListener('click', function () {
    page5Animation('DIV5RIGHT');
});

// Div 5 Button Left
div5ButtonLeft = document.getElementById('div5ButtonLeft');
div5ButtonLeft.addEventListener('click', function () {
    page5Animation('DIV5LEFT');
});

//Div 6 Button Left
div6ButtonLeft = document.getElementById('div6ButtonLeft');
div6ButtonLeft.addEventListener('click', function () {
    page5Animation('DIV6LEFT');
});

// Div 4 Button Right
div4ButtonRight = document.getElementById('div4ButtonRight');
div4ButtonRight.addEventListener('click', function () {
    page5Animation('DIV4RIGHT');
});
//////////////////////////////////////////////

parallaxObject = document.getElementById('parallaxObject');
parallaxObject1 = document.getElementById('parallaxObject1');
parallaxObject2 = document.getElementById('parallaxObject2');
parallaxObject3 = document.getElementById('parallaxObject3');

//// 
numberWang = document.getElementById('numberWang');



function page5Animation(location) {

    if (location == 'DIV5UP') {
        gridContainer.style.transform = "translate(-100%, 0)";

        // parallax
        // parallaxObject.style.transform = "translate(0, 100%)";
        // parallaxObject1.style.transform = "translate(0, 150%)";
        // parallaxObject2.style.transform = "translate(0, 200%)";
        // parallaxObject3.style.transform = "translate(0, 250%)";


    } else if (location == 'DIV5DOWN') {
        gridContainer.style.transform = "translate( -100%, -50%)";
        numberWang.style.animation = "scale 2s ease forwards";
    } else if (location == 'DIV5RIGHT') {
        gridContainer.style.transform = "translate( -200%, -25%)";
    } else if (location == 'DIV5LEFT') {
        gridContainer.style.transform = "translate( 0, -25%)";
    } else if (location == 'DIV6LEFT') {
        gridContainer.style.transform = "translate( -100%, -25%)";
        // parallaxObject3.style.animation = "fade 1s ease infinite";
    } else if (location == 'DIV4RIGHT') {
        gridContainer.style.transform = "translate( -100%, -25%)";
        // parallaxObject3.style.animation = "fade 1s ease infinite";
    }
}


//////////////////DIV 2////////////////////////////


// Div 2 Button Down
div2ButtonDown = document.getElementById('div2ButtonDown');
div2ButtonDown.addEventListener('click', function () {
    page2Animation('DOWN');
});

// Div 2 Button Right
div2ButtonRight = document.getElementById('div2ButtonRight');
div2ButtonRight.addEventListener('click', function () {
    page2Animation('RIGHT');
});

// Div 2 Button Left
div2ButtonLeft = document.getElementById('div2ButtonLeft');
div2ButtonLeft.addEventListener('click', function () {
    page2Animation('LEFT');
});

//////////////////////////////////////////////

function page2Animation(location) {



    if (location == 'DOWN') {
        gridContainer.style.transform = "translate( -100%, -25%)";
    } else if (location == 'RIGHT') {
        gridContainer.style.transform = "translate( -200%, 0)";
    } else if (location == 'LEFT') {
        gridContainer.style.transform = "translate( 0, 0)";
    }
}



//////////////////DIV 8////////////////////////////


// Div 8 Button Up
div8ButtonUp = document.getElementById('div8ButtonUp');
div8ButtonUp.addEventListener('click', function () {
    page8Animation('UP');
});

// Div 8 Button Right
div8ButtonRight = document.getElementById('div8ButtonRight');
div8ButtonRight.addEventListener('click', function () {
    page8Animation('RIGHT');
});

// Div 8 Button Left
div8ButtonLeft = document.getElementById('div8ButtonLeft');
div8ButtonLeft.addEventListener('click', function () {
    page8Animation('LEFT');
});

//////////////////////////////////////////////

function page8Animation(location) {



    if (location == 'UP') {
        gridContainer.style.transform = "translate( -100%, -25%)";
    } else if (location == 'RIGHT') {
        gridContainer.style.transform = "translate( -200%, -50%)";
    } else if (location == 'LEFT') {
        gridContainer.style.transform = "translate( 0, -50%)";
    }
}