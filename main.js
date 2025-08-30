var typed = new Typed('.text', {
  strings:['FrontendDeveloper' , "Youtuber" , "Webdeveloper"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
      let menu = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.nevbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nevbar.classList.toggle('active');
}
window.onscroll = () => {
   menu.classList.remove('bx-x');
   nevbar.classList.remove('active');
}




