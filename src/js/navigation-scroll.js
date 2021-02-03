const navigation = () =>{
    const navBtns = document.querySelectorAll('[data-target]');
    
    navBtns.forEach(btn =>{
        btn.addEventListener('click', e =>{
            e.preventDefault();
            let navContent = document.querySelector(`${btn.getAttribute('data-target')}`);
            navContent.scrollIntoView({behavior: "smooth"})
        })
    })
}
navigation();