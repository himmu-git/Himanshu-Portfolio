// select loader hear 
const loader = document.querySelector('#loader');
const main = document.querySelector('.main')
const sidebarMenu = document.querySelector('.sidebar__menu')
const hamburgerIcon = document.getElementById('hamburger');
const sidebarDisplay = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-menu');
console.log(hamburgerIcon)
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
})
closeBtn.addEventListener('click', (event) => {
    sidebarDisplay.style.display = "none";
    sidebarMenu.style.display = "none"
})
function sidebarDisplayfn() {

}
