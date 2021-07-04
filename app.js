const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const mobileMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
hamburger.addEventListener('click',mobileMenu);

const tl = gsap.timeline({defaults: {ease:'power1.out'}})
tl.to('.text',{y:'0%',duration:1,stagger:0.25})
tl.to('.intro',{y:'-100%',duration:.8});
tl.fromTo('nav',{opacity:0},{opacity:1 , duration:1})
tl.fromTo('.intro-sec',{opacity:0},{opacity:1 , duration:1},'-=1')

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-link');

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



