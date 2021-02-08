const skillsAnimation = () =>{
    const skillPercents = document.querySelectorAll('.graph__count');
    const graphBlock = document.querySelector('.graph');
    const graphProgress = document.querySelectorAll('.graph__progress');

    const pageScroll = () =>{
        let showed = false
        window.addEventListener('scroll', () => {
            if(showed == false && pageYOffset + document.documentElement.clientHeight > graphBlock.offsetTop + graphBlock.offsetHeight){
                showed = true;
                graphProgress.forEach(item =>{
                    // item.classList.add('active');

                    let radius = 72;
                    let lengthOfCircle = 2 * Math.PI * radius;
                    item.style.strokeDashoffset = lengthOfCircle;

                    let start = Date.now();
                    const time = 2000;

                    let timer = setInterval(() =>{
                        let timepassed = Date.now() - start;

                        if(timepassed >= time){
                            clearInterval(timer);
                            return;
                        }

                        draw(timepassed);
                    }, 20);

                    function draw(timepassed){
                        let number = parseInt(item.closest('.graph').querySelector('.graph__count').innerText);
                        // let l = item.getTotalLength();
                        let strokeDashOffset = lengthOfCircle * (100 - number) / 100;
                        let incSvg = time / (lengthOfCircle - strokeDashOffset)
                        item.style.strokeDashoffset = lengthOfCircle - (timepassed / incSvg);
                        // number of skill's percent
                        // let incNumber = time / number;
                        

                    }
                })
            }
        })
    }
    pageScroll();
}
skillsAnimation();