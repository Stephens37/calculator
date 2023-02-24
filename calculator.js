let numArray = [];
let mathArray = [];



let displayValue = document.getElementById("displayvalue");



function erase(){
    while(displayValue.hasChildNodes()) {
        displayValue.removeChild(displayValue.firstChild);
    }
    numArray = [];
    mathArray = [];
}
document.querySelector("button#erase").addEventListener("click", erase);



function zero(){
    numArray.push(0);
    let zeroDiv = document.createElement("div");
    zeroDiv.classList.add("toclear");
    zeroDiv = document.createTextNode("0");
    displayValue.appendChild(zeroDiv);
}
document.querySelector("button#zero").addEventListener("click", zero);

function one(){
    numArray.push(1);
    let oneDiv = document.createElement("div");
    oneDiv.classList.add("toclear");
    oneDiv = document.createTextNode("1");
    displayValue.appendChild(oneDiv);
}
document.querySelector("button#one").addEventListener("click", one);

function two(){
    numArray.push(2);
    let twoDiv = document.createElement("div");
    twoDiv.classList.add("toclear");
    twoDiv = document.createTextNode("2");
    displayValue.appendChild(twoDiv);
}
document.querySelector("button#two").addEventListener("click", two);

function three(){
    numArray.push(3);
    let threeDiv = document.createElement("div");
    threeDiv.classList.add("toclear");
    threeDiv = document.createTextNode("3");
    displayValue.appendChild(threeDiv);
}
document.querySelector("button#three").addEventListener("click", three);

function four(){
    numArray.push(4);
    let fourDiv = document.createElement("div");
    fourDiv.classList.add("toclear");
    fourDiv = document.createTextNode("4");
    displayValue.appendChild(fourDiv);
}
document.querySelector("button#four").addEventListener("click", four);

function five(){
    numArray.push(5);
    let fiveDiv = document.createElement("div");
    fiveDiv.classList.add("toclear");
    fiveDiv = document.createTextNode("5");
    displayValue.appendChild(fiveDiv);
}
document.querySelector("button#five").addEventListener("click", five);

function six(){
    numArray.push(6);
    let sixDiv = document.createElement("div");
    sixDiv.classList.add("toclear");
    sixDiv = document.createTextNode("6");
    displayValue.appendChild(sixDiv);
}
document.querySelector("button#six").addEventListener("click", six);

function seven(){
    numArray.push(7);
    let sevenDiv = document.createElement("div");
    sevenDiv.classList.add("toclear");
    sevenDiv = document.createTextNode("7");
    displayValue.appendChild(sevenDiv);
}
document.querySelector("button#seven").addEventListener("click", seven);

function eight(){
    numArray.push(8);
    let eightDiv = document.createElement("div");
    eightDiv.classList.add("toclear");
    eightDiv = document.createTextNode("8");
    displayValue.appendChild(eightDiv);
}
document.querySelector("button#eight").addEventListener("click", eight);

function nine(){
    numArray.push(9);
    let nineDiv = document.createElement("div");
    nineDiv.classList.add("toclear");
    nineDiv = document.createTextNode("9");
    displayValue.appendChild(nineDiv);
}
document.querySelector("button#nine").addEventListener("click", nine);



function divide(){
    return mathArray[0] / mathArray[2];
}

function multiply(){
    return mathArray[0] * mathArray[2];
}

function add(){
    return mathArray[0] + mathArray[2];
}

function subtract(){
    return mathArray[0] - mathArray[2];
}



function dividedBy(){
    let numJoin = +numArray.join("");
    console.log(numJoin);
    mathArray.push(numJoin);
    console.log(mathArray);
    numArray = [];
    mathArray.push("/");
    let dividedByDiv = document.createElement("div");
    dividedByDiv = document.createTextNode("/");
    displayValue.appendChild(dividedByDiv);
}
document.querySelector("button#dividedby").addEventListener("click", dividedBy);

function times(){
    let numJoin = +numArray.join("");
    console.log(numJoin);
    mathArray.push(numJoin);
    console.log(mathArray);
    numArray = [];
    mathArray.push("*");
    let timesDiv = document.createElement("div");
    timesDiv = document.createTextNode("*");
    displayValue.appendChild(timesDiv);
}

document.querySelector("button#times").addEventListener("click", times);

function plus(){
    let numJoin = +numArray.join("");
    console.log(numJoin);
    mathArray.push(numJoin);
    console.log(mathArray);
    numArray = [];
    mathArray.push("+");
    let plusDiv = document.createElement("div");
    plusDiv = document.createTextNode("+");
    displayValue.appendChild(plusDiv);
}
document.querySelector("button#plus").addEventListener("click", plus);

function minus(){
    let numJoin = +numArray.join("");
    console.log(numJoin);
    mathArray.push(numJoin);
    console.log(mathArray);
    numArray = [];
    mathArray.push("-");
    let minusDiv = document.createElement("div");
    minusDiv = document.createTextNode("-");
    displayValue.appendChild(minusDiv);
}
document.querySelector("button#minus").addEventListener("click", minus);



function operate(){
    let numJoin = +numArray.join("")
            console.log(numJoin)
            mathArray.push(numJoin);
            console.log(mathArray);
    for(let i = 0; i<mathArray.length; i++){
        if(mathArray[1] === "/"){
            let divideAns = divide();
            let divideRoAns =Math.round((divideAns + Number.EPSILON)* 100) / 100;
            mathArray.splice(0, 3, divideRoAns);
            }
        else if(mathArray[1] === "*"){
            let multiplyAns = multiply();
            let multiplyRoAns =Math.round((multiplyAns + Number.EPSILON)* 100) / 100;
            mathArray.splice(0, 3, multiplyRoAns);
        }
        else if(mathArray[1] === "+"){
            let addAns = add();
            let addRoAns =Math.round((addAns + Number.EPSILON)* 100) / 100;
            mathArray.splice(0, 3, addRoAns);
        }
        else if(mathArray[1] === "-"){
            let subtractAns = subtract();
            let subtractRoAns =Math.round((subtractAns + Number.EPSILON)* 100) / 100;
            mathArray.splice(0, 3, subtractRoAns);
        }
    }
    if(mathArray[0] === Infinity){
        displayValue.innerHTML = "";
        displayValue.innerHTML = "Don't do that.";
    }
    else{
    let mathString = mathArray;
    mathString.toString();
    displayValue.innerHTML = "";
    displayValue.innerHTML = mathString;
    }
    console.log(mathArray)
    
    if(mathArray.at(9) !== null){
        displayValue.innerHTML = "";
        displayValue.innerHTML = "Calculation is limited to 4 separate numbers per equation."
    }
}
document.querySelector("button#equals").addEventListener("click", operate);
