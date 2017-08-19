var a = 0,
    b = 0,
    c = 0;

document.getElementById('add').onclick=add;

document.getElementById('sub').onclick=sub;

document.getElementById('times').onclick=times;

document.getElementById('divide').onclick=divide;

document.getElementById('mod').onclick=mod;

document.getElementById('root').onclick=root;

document.getElementById('power').onclick=power;

document.getElementById('log').onclick=log;

function add(){
  Values();
  var c = "= " + (a + b);
  document.getElementById('operation').innerHTML= "+";
  document.getElementById('c').innerHTML= c;
  document.getElementById('a').value=0;
  document.getElementById('b').value=0;
}

function sub(){
  Values();
  var c = "= " + (a - b);
  document.getElementById('operation').innerHTML= "-";
  document.getElementById('c').innerHTML= c;
  document.getElementById('a').value=0;
  document.getElementById('b').value=0;
}

function times(){
  Values();
  var c = "= " + (a * b);
  document.getElementById('operation').innerHTML= "&times;";
  document.getElementById('c').innerHTML= c;
  document.getElementById('a').value=0;
  document.getElementById('b').value=0;
}

function divide(){
  Values();
  var c = "= " + (a / b);
  document.getElementById('operation').innerHTML= "&divide;";
  document.getElementById('c').innerHTML= c;
  document.getElementById('a').value=0;
  document.getElementById('b').value=0;
}

function mod(){
  Values();
  var c = "= " + (a % b);
  document.getElementById('operation').innerHTML= "%";
  document.getElementById('c').innerHTML= c;
  document.getElementById('a').value=0;
  document.getElementById('b').value=0;
}


function root(){
  Values();
  var c = "= " + (Math.pow(b, 1/a)) ;
  document.getElementById('operation').innerHTML= "&radic;";
  document.getElementById('c').innerHTML= c;
  document.getElementById('a').value=0;
  document.getElementById('b').value=0;
}

function power(){
  Values();
  var c = "= " + Math.pow(a, b);
  document.getElementById('operation').innerHTML= "^";
  document.getElementById('c').innerHTML= c;
  document.getElementById('a').value=0;
  document.getElementById('b').value=0;
}

function log(){
  Values();
  var c = "= " + ((Math.log(b))/(Math.log(a))) ;
  document.getElementById('operation').innerHTML= "&radic;";
  document.getElementById('c').innerHTML= c;
  document.getElementById('a').value=0;
  document.getElementById('b').value=0;
}

function Values(){
  a = document.getElementById('a').value;
  a = parseFloat(a, 10);
  b = document.getElementById('b').value;
  b = parseFloat(b, 10);
}
