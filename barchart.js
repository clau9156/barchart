"use strict";
// array (random numbers - model(40 elements))
// const queueSize = getNumberofCustomers();
let bar = document.querySelector(".bar");
let bars = document.querySelector("#bars");

window.addEventListener("load", init);

const model = [];

function init() {
    console.log("init"); 
    
    loop();
    displayData();
}
// i = measurements
function loop() {
    console.log("loop");
    
    for (let i=0; i<40; i++) {
        // i++;
        model[i] = getNumberofCustomers();
        document.getElementById("bars").getElementsByClassName("bar")[
            i].style.height = model[i] + "%";
    
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
    loop();
    modifyModel();
    setTimeout(displayData, 1000);
}

function modifyModel() {
    console.log("modifyModel");
    // const queueSize = getNumberofCustomers();
    // adds at the end
    model.push();
    // scroll left
    model.shift();
}
