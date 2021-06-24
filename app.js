let audio = document.getElementById('audio');
let duck = document.getElementById('duck');
let duckTwo = document.getElementById('duck-two');
let par = document.getElementsByTagName('p');
let p = document.querySelector('#p');
let container = document.getElementById('container');
let count = 0;
let span = document.getElementById('span');
let array = ["Вы разозлили утку раз", "Вы разозлили утку два", "Вы разозлили утку три", "Вы разозлили утку четыре","Вы разозлили утку пять"];
let colors = ['#3cff00', '#ff00c8', '#ff0000', '#00eeff', '#1100ff', '#00ff88'];

duck.addEventListener('click', () => {
    audio.play();
    duck.style.opacity = "1";
    createRandomItem();
    if (count >= 5) {

        duck.style.display = "none";
        p.style.visibility = "hidden";
        duckTwo.style.visibility = "visible";
        span.style.visibility = "visible";
    }
})

function createRandomItem() {
    const p = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = duck.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    
    p.innerHTML = array[count];
    count++;
    p.classList.add('item');
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.top = `${y}px`;
    p.style.left = `${x}px`;
    container.append(p);
    setColor(p);
}


function setColor (e) {
    let color = getRandomColor();
    e.style.color = color;
    e.style.textShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

