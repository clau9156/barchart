"use strict";

const queueSize = getNumberofCustomers();
let bars = document.querySelector("#bars");

window.addEventListener("load", init);

function init() {

    loop();
}

function loop() {
    setTimeout(loop, 1000);
    getNumberofCustomers();
}

function getNumberofCustomers() {
    // FAKE: gives a completely random number
    return Math.floor(Math.random()*32);
    
    displayData();
}

function displayData() {
    queueSize.shift(bars);
    modifyModel();
}

function modifyModel() {

    console.log(modifyModel);
}