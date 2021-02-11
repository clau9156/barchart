"use strict";
// array (random numbers - model(40 elements))
// const queueSize = getNumberofCustomers();
let bar = document.querySelector(".bar");
let bars = document.querySelector("#bars");

window.addEventListener("load", init);

function init() {
    console.log("init"); 
    loop();
    // displayData();
}
// i = measurements
// if to loop
function loop() {
    console.log("loop");
    for (let i=0; i<40;) {
        i++;
        bar.style.height = i + "%";
    
    }
}

function getNumberofCustomers() {
    console.log("getNumberofCustomers");
    // FAKE: gives a completely random number
    return Math.floor(Math.random()*32);
}

function displayData() {
    console.log("displayData");
    bars.appendChild(bar);
    modifyModel();
    setTimeout(displayData, 1000);
}

function modifyModel() {
    console.log("modifyModel");
    const queueSize = getNumberofCustomers();
    // adds at the end
    bars.push();
    // scroll left
    bars.shift();
}