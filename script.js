let menuBtn = document.querySelector('.htext1');
let menu = document.querySelector('.login');
let ex = document.querySelector('.ex');
let activebtn = document.querySelector('.htext2');
let menuBtn1 = document.querySelector('.rtext1');
let search = document.querySelector('.search');
let searchtext = document.querySelector('.searchtext');
let butex = document.querySelector('.butex');
let body = document.querySelector('body');
let menutext = document.querySelector('.menutext');
let butex1 = document.querySelector('.butex1');
let lmenu = document.querySelector('.lmenu');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})

ex.addEventListener('click', function(){
    menu.classList.remove('active');
    
})

activebtn.addEventListener('click', function(){
    search.classList.toggle('active');
})

butex.addEventListener('click', function(){
    search.classList.remove('active');
   
})

menutext.addEventListener('click', function(){
    lmenu.classList.toggle('active1');
})

butex1.addEventListener('click', function(){
    lmenu.classList.remove('active1');
})


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.img3');
  for (let elm of elements) {
    observer.observe(elm);
 }
