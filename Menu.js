const MenuHamburesa= document.querySelectorAll('.Menu_h');
const navMovil=document.querySelectorAll('.nav_movil');
const navLinks =document.querySelectorAll('.link_nav');


MenuHamburesa.forEach(element => {
    element.addEventListener('click', () => {
      navMovil.forEach(nav => nav.classList.toggle('mostrar'));
      navLinks.forEach(link => link.classList.toggle('visible'));
    });
  });

  