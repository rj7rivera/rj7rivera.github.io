
//toglle icon navbar // alternar barra de navegación del icono
let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset +height) {
            // active navbar links
            // enlaces activos de la barra de navegación

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [ href*= '+ id + ']').classList.add('active');
            });
        }
    })
}