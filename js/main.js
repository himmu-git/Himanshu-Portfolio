// select loader hear 
const loader = document.querySelector('#loader');
const main = document.querySelector('.main')
const sidebarMenu = document.querySelector('.sidebar__menu')
const hamburgerIcon = document.getElementById('hamburger');
const sidebarDisplay = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-menu');
const blurClass = document.querySelectorAll('.blur-class');
console.log(blurClass)
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
hamburgerIcon.addEventListener('click', (event) => {
    sidebarDisplay.style.display = "flex";
    sidebarMenu.style.display = "flex"
    blurClass.forEach((element) => {
        element.style.filter = "blur(4px)"
    })
    sidebarDisplay.style.animation = "slide-left 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";


})
closeBtn.addEventListener('click', (event) => {
    sidebarDisplay.style.animation = "slide-right 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    blurClass.forEach((element) => {
        setTimeout(() => {
            element.style.filter = "blur(0px)"
            sidebarDisplay.style.display = "none";
            sidebarMenu.style.display = "none"
        }, 750)
    })
})
