// select loader hear 
const loader = document.querySelector('#loader');
const main = document.querySelector('.main')
const sidebarMenu = document.querySelector('.sidebar__menu')
const hamburgerIcon = document.getElementById('hamburger');
const sidebarDisplay = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-menu');
const blurClass = document.querySelectorAll('.blur-class');
const experienceSection = document.getElementById('experience');
const jugnooDetails = document.getElementById('jugnoo-details');
const infoedgeDetails = document.getElementById('infoedge-details');
const jugnoo = document.getElementById('jugnoo');
const infoedge = document.getElementById('infoedge');
const slider = document.querySelector('.slider');
//Hide Loader 
function init() {
    setTimeout(() => {
        // loader.classList.remove('show');
        // loader.classList.add('hide');
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(()=>(main.style.opacity = 1),50)
    }, 200)
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

experienceSection.addEventListener('click', (event) => {
    console.log(event)

    if (event.target.id == 'jugnoo') {
        slider.classList.add('move__bottom')
        infoedge.classList.remove('active');
        jugnoo.classList.add('active')
        jugnooDetails.style.display = 'block';
        infoedgeDetails.style.display = 'none';
    }
    else if (event.target.id == 'infoedge') {
        slider.classList.remove('move__bottom')
        infoedge.classList.add('active')
        jugnoo.classList.remove('active');
        infoedgeDetails.style.display = 'block';
        jugnooDetails.style.display = 'none';
    }
})

const words = ["I love to build Web Apps", "I'm a Software Engineer", "I'm a Hobbyist Photographer"]
let i = 0;
let counter;
function typeNow() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById('dynamic-text').innerHTML += word.shift();

        } else {
            deleteNow();
            return false;
        };
        counter = setTimeout(loopTyping, 200);
    };
    loopTyping();
};
function deleteNow() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('dynamic-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            }
            else {
                i = 0;
            };
            typeNow();
            return false;
        };
        counter = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};
typeNow();