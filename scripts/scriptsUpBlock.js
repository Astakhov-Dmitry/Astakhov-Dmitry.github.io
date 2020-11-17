
const offset = 500;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLenght = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLenght} ${pathLenght}`;
scrollUpSvgPath.style.transition = 'sroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//updateDashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLenght - (getTop() * pathLenght / height);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onScroll
window.addEventListener('scroll', () =>{
    updateDashoffset();
    

   if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active');
   } else {
    scrollUp.classList.remove('scroll-up--active'); 
   }
});

// click
scrollUp.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});