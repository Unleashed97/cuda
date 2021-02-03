const headerShrinking = () => {
    headerInner = document.querySelector('.header__inner');
    title = document.querySelector('.intro__title')
    let deviceWidth = document.body.clientWidth;
    if(deviceWidth > 768){
        window.addEventListener('scroll', () =>{
            if(pageYOffset + headerInner.offsetHeight > title.offsetTop){
                headerInner.classList.add('shrink');
            }
            else {
                headerInner.classList.remove('shrink');
            }
        })
    }
}
headerShrinking();