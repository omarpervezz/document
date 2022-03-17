const pushbar = new Pushbar({
    blur: true,
    overlay: true,
});

//open a pushbar
pushbar.open("mypushbar1");
//close all pushbars
pushbar.close();

// mobile menu sab collpase
const roatateArrow = document.querySelector('.main-nav-bar-mobile ul li span');
console.log(roatateArrow)
const collpaseMenu = document.getElementById('collapse_menu');
const mobileMenuC = document.querySelector('#mobile-sub-menu');


collpaseMenu.addEventListener(('click'), () => {
    mobileMenuC.classList.toggle('collapseMobileMenu');
    roatateArrow.classList.toggle('rotate')

})