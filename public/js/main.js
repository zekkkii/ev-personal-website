// i could have used jquery instead of  raw js, but i wanted to practice js so then i would be good enough to use other technologies :) :V

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const drkText = document.querySelector(".drk-text");
const evText = document.querySelector(".logo-text");
const baseSwitch = document.querySelector(".base-dark");
const deslizador = document.querySelector(".deslizador");
const sideBar = document.querySelector(".sidebar");
const boxFixed = document.querySelector(".box");
const iconBox = document.querySelector(".fa-plus");
const loader = document.querySelector(".loader-wrapper")

window.onload = () => {

    loader.classList.add("opacity")
    body.classList.remove('overflow-off')
    body.classList.remove('opacity')

    setTimeout(() => { loader.classList.add("d-none") }, 900)


}


darkMode = () => {

    deslizador.addEventListener("click", () => {
        deslizador.classList.toggle('drk-m-on');
        baseSwitch.classList.toggle('bg-secondary');
        navbar.classList.toggle('bg-white');
        drkText.classList.toggle('text-white');
        evText.classList.toggle('text-white');
        sideBar.classList.toggle('whitesmoke');
        sideBar.classList.toggle('text-dark');
        body.classList.toggle('bg-white');

    })

}

function showBox() {
    iconBox.addEventListener("click", () => {
        boxFixed.classList.toggle('box-on');
    })
}

darkMode()
showBox()