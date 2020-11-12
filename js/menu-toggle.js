let menuToggle = () =>{
    let btnToggle = document.querySelector('.nav-toggle');
    let menu = document.querySelector('.nav');
    let header= document.querySelector('.header');
    btnToggle.addEventListener('click', () => {
        btnToggle.classList.toggle('active');
        menu.classList.toggle('active');
        // document.body.classList.toggle('stop-scroll');
    });
}


menuToggle();