// Sidebar Start Here //

const menu_btn = document.getElementById("menu_btn");


const cross = document.getElementById("cross");


const sidebar = document.querySelector(".sidebar");


menu_btn.onclick = () => {
    sidebar.classList.toggle("active");
}

cross.onclick = () => {
    sidebar.classList.remove("active");
}

// Sidebar End Here //


const left = document.getElementById("left");
const right = document.getElementById("right");
const part1 = document.getElementsByClassName("part1")[0];
const part2 = document.getElementsByClassName("part2")[0];
const part3 = document.getElementsByClassName("part3")[0];
const part4 = document.getElementsByClassName("part4")[0];


right.onclick = () => {
    part1.style.display = `none`;
    part2.style.display = `none`;
    part3.style.display = `block`;
    part4.style.display = `block`;
}

left.onclick = () => {
    part1.style.display = `block`;
    part2.style.display = `block`;
    part3.style.display = `none`;
    part4.style.display = `none`;
}



// ==============  The Dropdown Section Start Here =================

const dropo1 = document.querySelector(".dropo1");
const dropo2 = document.querySelector(".dropo2");
const dropo3 = document.querySelector(".dropo3");
const dropo4 = document.querySelector(".dropo4");
const dropo5 = document.querySelector(".dropo5");

const details1 = document.querySelector(".details1");
const details2 = document.querySelector(".details2");
const details3 = document.querySelector(".details3");
const details4 = document.querySelector(".details4");
const details5 = document.querySelector(".details5");

const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const dropdown3 = document.querySelector(".dropdown3");
const dropdown4 = document.querySelector(".dropdown4");
const dropdown5 = document.querySelector(".dropdown5");


let isOpen = false;
let isOpen1 = false;
let isOpen2 = false;
let isOpen3 = false;


dropo1.onclick = () => {
    if (isOpen) {
        dropo1.style.transform = "rotate(0deg)";
        dropdown1.style.height = "60px";
        // dropdown1.style.transition = "all 200ms ease-in-out"
        // details.style.gap = "10px";
    }
    else{
    dropo1.style.transform = "rotate(180deg)";
    dropdown1.style.height = "120px";
    dropdown1.style.transition = "all 400ms ease-in-out"
    details1.style.gap = "20px";
    }
    isOpen = !isOpen;
}



dropo2.onclick = () => {
    if (isOpen1) {
        dropo2.style.transform = "rotate(0deg)";
        dropdown2.style.height = "60px";
        // dropdown1.style.transition = "all 200ms ease-in-out"
        // details.style.gap = "10px";
    }
    else{
    dropo2.style.transform = "rotate(180deg)";
    dropdown2.style.height = "120px";
    dropdown2.style.transition = "all 400ms ease-in-out"
    details2.style.gap = "20px";
    }
    isOpen1 = !isOpen1;
}




dropo3.onclick = () => {
    if (isOpen2) {
        dropo3.style.transform = "rotate(0deg)";
        dropdown3.style.height = "60px";
        // dropdown1.style.transition = "all 200ms ease-in-out"
        // details.style.gap = "10px";
    }
    else{
    dropo3.style.transform = "rotate(180deg)";
    dropdown3.style.height = "120px";
    dropdown3.style.transition = "all 400ms ease-in-out"
    details3.style.gap = "20px";
    }
    isOpen2 = !isOpen2;
}




dropo4.onclick = () => {
    if (isOpen3) {
        dropo4.style.transform = "rotate(0deg)";
        dropdown4.style.height = "60px";
        // dropdown1.style.transition = "all 200ms ease-in-out"
        // details.style.gap = "10px";
    }
    else{
    dropo4.style.transform = "rotate(180deg)";
    dropdown4.style.height = "120px";
    dropdown4.style.transition = "all 400ms ease-in-out"
    details4.style.gap = "20px";
    }
    isOpen3 = !isOpen3;
}




dropo5.onclick = () => {
    if (isOpen) {
        dropo5.style.transform = "rotate(0deg)";
        dropdown5.style.height = "60px";
        // dropdown1.style.transition = "all 200ms ease-in-out"
        // details.style.gap = "10px";
    }
    else{
    dropo5.style.transform = "rotate(180deg)";
    dropdown5.style.height = "120px";
    dropdown5.style.transition = "all 400ms ease-in-out"
    details5.style.gap = "20px";
    }
    isOpen = !isOpen;
}