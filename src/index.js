import './less/index.less'

// CLICK LINKS

// grab the thing from the dom

// this is each individual nav on a nodeList
const links = document.querySelectorAll('.nav-link');
//this is the whole nav section
const navLinks = document.querySelector('nav');

// create a reusable function
function rickRoll () {
    links.forEach(function(link) {
        link.textContent = 'Rick Roll';
        link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    })
}
// add the event listener
navLinks.addEventListener('click', rickRoll);

// 2) MOUSEOVER PHOTO

// grab the thing
const photo1 = document.querySelector('img:nth-of-type(1)');

// write a reusable function
function changePhoto () {
    photo1.src = 'https://images.pexels.com/photos/4220084/pexels-photo-4220084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
}
//event listen
photo1.addEventListener('mouseenter', changePhoto);

// 3) MOUSEOUT PHOTO

function changePhotoAgain () {
    photo1.src = 'https://images.pexels.com/photos/4334944/pexels-photo-4334944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
photo1.addEventListener('mouseout', changePhotoAgain);

// 4) DOUBLE CLICK

// grab the thing
const funBus = document.querySelector('h1');

// write new function
function changeBus () {
    funBus.textContent = 'CLACKETY CLACK';
}

// event listen
document.addEventListener('keypress', changeBus);

// 5) SCROLL

function changeBusAgain () {
    funBus.textContent = 'HOlY MOLY';
}

document.addEventListener('scroll', changeBusAgain);

// 6) ON COPY
const paras = document.querySelectorAll('p');

function paraCaps () {
    paras.forEach(function(para) {
        para.textContent = 'NICE TRY BUDDY';
    })
   
}

document.addEventListener('copy', paraCaps);