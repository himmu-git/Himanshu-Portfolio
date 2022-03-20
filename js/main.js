// select loader hear 
const loader = document.querySelector('#loader');
const main = document.querySelector('.main')
//Hide Loader 
function init() {
    setTimeout(() => {
        // loader.classList.remove('show');
        // loader.classList.add('hide');
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(()=>(main.style.opacity = 1),50)
    }, 2000)
}
init();

