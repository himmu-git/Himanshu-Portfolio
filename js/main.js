// select loader hear 
const loader = document.querySelector('#loader');
//Hide Loader 
function init() {
    setTimeout(() => {
        loader.classList.remove('show');
        loader.classList.add('hide');
        console.log("here")
        console.log(loader.classList)
    }, 2000)
}

