const myNav = document.getElementById('header');

window.onscroll = function() {
  if(window.scrollY > (window.innerHeight)){
    myNav.classList.add('scrolled')
  }else{
    myNav.classList.remove('scrolled')
  }
}