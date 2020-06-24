const container = document.querySelector('#container')
const sizeBtn = document.querySelector('#setSize')
const colorBtn = document.querySelector('#setColor')
const randomColor = document.querySelector('#setRandomColor')
let clicked = false;
let color = "#000";

function setColor(){
    if(clicked)this.style.backgroundColor = `${color}`;
}

function createGrids(gridNumber){
    container.innerHTML="";
    let NumberOfGrids = gridNumber * gridNumber
    container.setAttribute("style", `grid-template-columns: repeat(${gridNumber}, auto)`)
    for(let i=1;i<=NumberOfGrids;i++){
        const div = document.createElement('div')
        div.classList.add('container-grid')
        div.addEventListener('mouseover', setColor);
        container.appendChild(div)
    }
}

function setClickedTrue() {
    clicked = true;
}

function setClickedFalse() {
    clicked = false;
}

function getNumberOfGrids(){
    let gridSize = prompt("ingrese el numero de columnas, 16 por defecto");
    if(gridSize === null){
        return
    }else{
        createGrids(gridSize);
    }
}

function getColor(){
    color = prompt("Ingresa un color en hexadecimal", "#000000")
}

function getRandomColor() {
    color = "#"+ Math.floor(Math.random()*16777215).toString(16)
}


sizeBtn.addEventListener("click", getNumberOfGrids)
colorBtn.addEventListener("click", getColor)
randomColor.addEventListener("click", getRandomColor)
container.addEventListener("mousedown", setClickedTrue)
window.addEventListener("mouseup", setClickedFalse)
createGrids(16)