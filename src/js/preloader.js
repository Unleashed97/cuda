const preloader = () =>{
    const preloaderBlock = document.querySelector('.preloader');
    document.body.classList.add('stop-scroll');

    setInterval(() =>{
        preloaderBlock.classList.add('fadeout');
        setInterval(()=>{
            preloaderBlock.style.display = 'none';
            // preloader.classList.remove('fadeout');
        }, 500)
        document.body.classList.remove('stop-scroll');
    }, 1000)

}

preloader();