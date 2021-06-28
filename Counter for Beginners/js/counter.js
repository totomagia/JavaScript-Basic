var x=0;
var btn = document.createElement('button');
var test = document.getElementById('button');
test.addEventListener('click', increase);
test.addEventListener('click', decrease);


function increase() {
 document.getElementsByClassName('count')[0].innerHTML = x++;
}


function decrease() {
 document.getElementsByClassName('count')[0].innerHTML = --x;
}

document.write(0);





