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

// 4) KEYPRESS

// grab the thing
const funBus = document.querySelector('h1');

// write new function
function changeBus () {
    funBus.textContent = 'CLACKETY CLACK';
}

// event listener
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

// 7) MOUSEMOVE
const letsGo = document.querySelector('.text-content h2');

function moved () {
   letsGo.textContent = 'So many changes';
}

document.addEventListener('mousemove', moved);

//console.log(letsGo);

// 8) WHEEL

const photo2 = document.querySelector('.img-content img');

function changePhoto2 () {
    photo2.src = 'https://images.unsplash.com/photo-1623584973952-182bcb43b8ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
}

photo2.addEventListener('wheel', changePhoto2);


// 9) DOUBLE CLICK

const photo3 = document.querySelector('.inverse-content .img-content img');

function changePhoto3 () {
    photo3.src = 'https://images.unsplash.com/photo-1549937914-1296ee55f271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWR2ZW50dXJlJTIwYXdhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
}

document.addEventListener('dblclick', changePhoto3);
console.log(photo3);

// 10) KEYDOWN

const photo4 = document.querySelector('.content-destination img');

function changePhoto4 () {
    photo4.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFkdmVudHVyZSUyMGF3YWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
}

document.addEventListener('keydown', changePhoto4);