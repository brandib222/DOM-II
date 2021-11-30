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
const paras = document.querySelectorAll ('p');

function paraCaps () {
    paras.forEach(function(para) {
        para.textContent = 'NICE TRY BUDDY';f
    })
   
}

document.addEventListener('copy', paraCaps);

// 7) LOAD
//const letsGo = document.querySelector('h2');

//function loaded () {
 //  letsGo.insertAdjacentText('afterbegin', 'Holy Whack-a-mole,');
//}

//letsGo.addEventListener('load', loaded);

//console.log(letsGo);

// 8) WHEEL

const photo2 = document.querySelector('.img-content img');

function changePhoto2 () {
    photo2.src = 'https://images.unsplash.com/photo-1623584973952-182bcb43b8ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
}

photo2.addEventListener('wheel', changePhoto2);
console.log(photo1);
console.log(photo2);