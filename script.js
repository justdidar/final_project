let menuBtn = document.querySelector('.htext1');
let menu = document.querySelector('.login');
let ex = document.querySelector('.ex');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})

ex.addEventListener('click', function(){
    menu.classList.remove('active');
})