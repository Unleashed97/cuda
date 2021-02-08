const portfolioNav = () => {
    const links = document.querySelectorAll('.nav-portfolio__link');

    links.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            links.forEach(i => {
                i.classList.remove('active');
            })
            item.classList.add('active')
        })
    })
}
portfolioNav();