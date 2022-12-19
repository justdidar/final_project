let menuBtn = document.querySelector('.htext1');
let menu = document.querySelector('.login');
let ex = document.querySelector('.ex');
let activebtn = document.querySelector('.htext2');
let search = document.querySelector('.search');
let butex = document.querySelector('.butex');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    body.classList.toggle('shadow');
})

ex.addEventListener('click', function(){
    menu.classList.remove('active');
    body.classList.toggle('shadow');
})


activebtn.addEventListener('click', function(){
    search.classList.toggle('active');
    body.classList.toggle('shadow');
})

butex.addEventListener('click', function(){
    search.classList.remove('active');
    body.classList.remove('shadow');
})
