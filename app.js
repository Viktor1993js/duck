let audio = document.getElementById('audio');
let duck = document.getElementById('duck');
let par = document.getElementsByTagName('p');
let container = document.getElementById('container');
let count = 0;
let span = document.getElementById('span');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3');
let span4 = document.getElementById('span4');
let span5 = document.getElementById('span5');
let span6 = document.getElementById('span6');
let array = ["Вы разозлили утку раз", "Вы разозлили утку два"];

duck.addEventListener('click', () => {
    audio.play();
    count++;
    duck.style.opacity = "1";
    if (count > 5) {
        container.style.display = "none";
        span.style.visibility = "visible";
    }
   switch (count) {
       case 1:
           span2.style.visibility = "visible";
           break;
        case 2:
           span3.style.visibility = "visible";
           break;
        case 3:
           span4.style.visibility = "visible";
           break;
        case 4:
           span5.style.visibility = "visible";
           break;
        case 5:
           span6.style.visibility = "visible";
           break;
   }
})

for (let p of par) {
    p.addEventListener('click', () => {
        audio.play();
        count++;
        if (count > 5) {
            container.style.display = "none";
            span.style.visibility = "visible";
        }
    
    })
}

