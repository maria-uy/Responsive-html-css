window.onload = () => {
    menuMobile()
}

function menuMobile() {
    let visible = 0;
    const hamb = document.querySelector('#hamb')
    const navbar = document.querySelector('#navbar')
    hamb.onclick = () => visible == 0 ? (visible = 1, navbar.style.left = '10px', hamb.style.backgroundImage = 'url("../img/icon-close.svg")') : (visible = 0, navbar.style.left = '-160px', hamb.style.backgroundImage = 'url("../img/hamb.svg")')
} 
