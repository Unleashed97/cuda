let menuToggle = () =>{
    let btnToggle = document.querySelector('.nav-toggle');
    let menu = document.querySelector('.nav');
    let navLinks = document.querySelectorAll('.nav__link');
    let header = document.querySelector('.header');
    btnToggle.addEventListener('click', () => {
        btnToggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    navLinks.forEach(item =>{
        item.addEventListener('click', () => {
            navLinks.forEach(i =>{
                i.classList.remove('active');
            })
            item.classList.add('active');
            btnToggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.classList.remove('no-scroll')
        })
    })
}
menuToggle();