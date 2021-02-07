const portfolioNav = () => {
    const links = document.querySelectorAll('.nav-portfolio__link');

    links.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
        })
    })
}
portfolioNav();