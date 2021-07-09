const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const  navLinks = document.querySelectorAll('.nav-link');
const cursorr = document.querySelector('.cursor');


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

//mobile nav
const mobileMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('noScroll')
}
navLinks.forEach(n => n.addEventListener('click',() => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('noScroll');
}))
hamburger.addEventListener('click',mobileMenu);


//splash intro
const tl = gsap.timeline({defaults: {ease:'power1.out'}})
tl.to('.text',{y:'0%',duration:1,stagger:0.25})
tl.to('.intro',{y:'-100%',duration:.8});
tl.fromTo('nav',{opacity:0},{opacity:1 , duration:1})
tl.fromTo('.intro-sec',{opacity:0},{opacity:1 , duration:1},'-=1')


//custom cursor 
const cursorScale = document.querySelector('.cursor-scale')
window.addEventListener('mousemove',cursor);
function cursor(e) {
    cursorr.style.top = e.pageY + 'px';
    cursorr.style.left = e.pageX + 'px';
}


cursorScale.addEventListener('mouseover',() => {
    cursorr.style.mixBlendMode = 'difference';
    cursorr.style.transform = 'scale(7)';
})
cursorScale.addEventListener('mouseleave',() => {
    cursorr.style.mixBlendMode = 'normal';
    cursorr.style.transform = 'scale(1)';
})



//reveal navbar on scroll
const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll',() => {
    const currentscroll = window.pageYOffset;

    if(currentscroll <= 0){
        body.classList.remove('scroll-up')
    }

    if(currentscroll > lastScroll && !body.classList.contains('scroll-down')){
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }
    if(currentscroll < lastScroll && body.classList.contains('scroll-down')){
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }
    
    
    lastScroll = currentscroll;
})





