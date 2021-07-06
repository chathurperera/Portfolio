const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
let navLinks = document.querySelectorAll('.nav-link');


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
let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove',cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', ( ) => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    })
    link.addEventListener('mouseleave', ( ) => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })
})



