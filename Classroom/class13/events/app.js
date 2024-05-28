
const heading = document.querySelector('h2');
const btn = document.querySelector('button');

function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(){

    heading.style.backgroundColor = randomColor();

}

btn.onclick = changeColor;