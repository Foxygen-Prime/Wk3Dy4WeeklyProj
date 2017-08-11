// set up a loop that creates a new variable every time a button is pushed. This should probably be something like a temp variable. If only working with two nubers, youll need to variables sets. maybe make up to 4 or 5 variable sets?//

//DISPLAY on top of Calculator//
let result = document.getElementById('result');
//DISPLAY on top of Calculator//
const maxlength = 20;

//Button EVENT LISTENERS//

//9//
press9 = document.getElementById("but9");
press9.addEventListener("click", butentry9);

function butentry9() {
  console.log("iama9");
  result.innerHTML += "9";
}

//8//
press8 = document.getElementById("but8");
press8.addEventListener("click", butentry8);

function butentry8() {
  console.log("iaman8");
  result.innerHTML += "8";
}

//7//
press7 = document.getElementById("but7");
press7.addEventListener("click", butentry7);

function butentry7() {
  console.log("iama7");
  result.innerHTML += "7";
}


//6//
press6 = document.getElementById("but6");
press6.addEventListener("click", butentry6);

function butentry6() {
  console.log("iama6");
  result.innerHTML += "6";
}


//5//
press5 = document.getElementById("but5");
press5.addEventListener("click", butentry5);

function butentry5() {
  console.log("iama5");
  result.innerHTML += "5";
}

//4//
press4 = document.getElementById("but4");
press4.addEventListener("click", butentry4);

function butentry4() {
  console.log("iama4");
  result.innerHTML += "4";
}


//3//
press3 = document.getElementById("but3");
press3.addEventListener("click", butentry3);

function butentry3() {
  console.log("iama3");
  result.innerHTML += "3";
}

//2//
press5 = document.getElementById("but2");
press5.addEventListener("click", butentry2);

function butentry2() {
  console.log("iama2");
  result.innerHTML += "2";
}


//1//
press5 = document.getElementById("but1");
press5.addEventListener("click", butentry1);

// document.getElementById("but1");
// press5.addEventListener('keyPress=downKey', butentry1)

function butentry1() {
  console.log("iama1");
  result.innerHTML += "1";
}

//1//
press0 = document.getElementById("but0");
press0.addEventListener("click", butentry0);


function butentry0() {
  console.log("iama0");
  result.innerHTML += "0";
}

//.//
pressperi = document.getElementById("butperi");
pressperi.addEventListener("click", butentryperi);


function butentryperi() {
  console.log(".");
  result.innerHTML += ".";
}

//C//
pressC = document.getElementById("butC");
pressC.addEventListener("click", butentryC);

function butentryC() {
  console.log("Clear!");
  result.innerHTML = "";
}

//+//
pressplus = document.getElementById("butplus");
pressplus.addEventListener("click", butentryplus);

function butentryplus() {
  console.log("plus");
  result.innerHTML += "+";
}

//-//
pressminus = document.getElementById("butminus");
pressminus.addEventListener("click", butentryminus);

function butentryminus() {
  console.log("subtract");
  result.innerHTML += "-";
}

//X//
pressmult = document.getElementById("butmult");
pressmult.addEventListener("click", butentrymult);

function butentrymult() {
  console.log("multiply");
  result.innerHTML += "*";
}
//divide//
pressdiv = document.getElementById("butdiv");
pressdiv.addEventListener("click", butentrydiv);

function butentrydiv() {
  console.log("divide");
  result.innerHTML += "/";
}


//equals//

pressequals = document.getElementById("butequals");
pressequals.addEventListener("click", butentryequals);

function butentryequals() {
  if (result.innerHTML.length <= 20) {
  result.innerHTML = eval(result.innerHTML)
}
  else {
    result.innerHTML = "Too long! Hit C";
  }
}


//End of Button EVENT LISTENERS//

//Button Entry Storage//



///COMPUTATIONS///
