let asidebtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');

asidebtn.addEventListener('click', () =>{
    aside.classList.add('show');
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');
});

backdrop.addEventListener('click', () =>{
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
});

  