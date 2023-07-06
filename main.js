/*---Menu show Y hidden---*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


//show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

//hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})  

/*---remove menu---*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*---scroll section active link---*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}
