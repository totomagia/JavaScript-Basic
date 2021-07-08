var btnMinus = document.createElement('button');
var textMinus = document.createTextNode('-');
btnMinus.appendChild(textMinus);
var positionMinus = document.getElementById('minus');
positionMinus.appendChild(btnMinus);
btnMinus.className='buttonProperties';


var btnPlus = document.createElement('button');
var textPlus = document.createTextNode('+');
btnPlus.appendChild(textPlus);
var positionPlus = document.getElementById('plus');
positionPlus.appendChild(btnPlus);
btnPlus.className='buttonProperties'


var x=0;
function increase() {
 document.getElementsByClassName('count')[0].innerHTML = x++;
}
btnPlus.addEventListener('click', increase);

function decrease() {
 document.getElementsByClassName('count')[0].innerHTML = --x;
}
btnMinus.addEventListener('click', decrease);

document.write(0);





