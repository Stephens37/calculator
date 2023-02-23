let mathArray = [];

function add(){
    return mathArray[0] + mathArray[2];
}

function subtract(){
    return mathArray[0] - mathArray[2];
}

function multiply(){
    return mathArray[0] * mathArray[2];
}

function divide(){
    return mathArray[0] / mathArray[2];
}


const numDisplay = document.getElementById("displayvalue")

function plus(){
    mathArray.push("+");
    const plusDiv = document.createElement("div");
    plusDiv.classList.add("toclear");
    const plusSign = document.createTextNode("+");
    plusDiv.appendChild(plusSign);
    displayValue.appendChild(plusDiv);
}
document.querySelector("button#plus").addEventListener("click", plus);

function minus(){
    mathArray.push("-")
    const minusDiv = document.createElement("div");
    minusDiv.classList.add("toclear");
    const minusSign = document.createTextNode("-");
    minusDiv.appendChild(minusSign);
    displayValue.appendChild(minusDiv);
}
document.querySelector("button#minus").addEventListener("click", minus);

function times(){
    mathArray.push("*")
    const timesDiv = document.createElement("div");
    timesDiv.classList.add("toclear");
    const timesSign = document.createTextNode("*");
    timesDiv.appendChild(timesSign);
    displayValue.appendChild(timesDiv);
}
document.querySelector("button#times").addEventListener("click", times);

function dividedBy(){
    mathArray.push("/")
    const dividedByDiv = document.createElement("div");
    dividedByDiv.classList.add("toclear");
    const dividedBySign = document.createTextNode("/");
    dividedByDiv.appendChild(dividedBySign);
    displayValue.appendChild(dividedByDiv);
}
document.querySelector("button#dividedby").addEventListener("click", dividedBy);

function erase(){
    while(displayValue.hasChildNodes()) {
        displayValue.removeChild(displayValue.firstChild);
    }
}
document.querySelector("button#erase").addEventListener("click", erase);

displayValue = document.getElementById("displayvalue");
let mathValue;

function zero(){
    mathArray.push(0);
    const zeroDiv = document.createElement("div");
    zeroDiv.classList.add("toclear");
    const digitZero = document.createTextNode("0");
    zeroDiv.appendChild(digitZero);
    displayValue.appendChild(zeroDiv);
}
document.querySelector("button#zero").addEventListener("click", zero);

function one(){
    mathArray.push(1);
    const oneDiv = document.createElement("div");
    oneDiv.classList.add("toclear");
    const digitOne = document.createTextNode("1");
    oneDiv.appendChild(digitOne);
    displayValue.appendChild(oneDiv);
}
document.querySelector("button#one").addEventListener("click", one);

function two(){
    mathArray.push(2);
    const twoDiv = document.createElement("div");
    twoDiv.classList.add("toclear");
    const digitTwo = document.createTextNode("2");
    twoDiv.appendChild(digitTwo);
    displayValue.appendChild(twoDiv);
}
document.querySelector("button#two").addEventListener("click", two);

function three(){
    mathArray.push(3);
    const threeDiv = document.createElement("div");
    threeDiv.classList.add("toclear");
    const digitThree = document.createTextNode("3");
    threeDiv.appendChild(digitThree);
    displayValue.appendChild(threeDiv);
}
document.querySelector("button#three").addEventListener("click", three);

function four(){
    mathArray.push(4);
    const fourDiv = document.createElement("div");
    fourDiv.classList.add("toclear");
    const digitFour = document.createTextNode("4");
    fourDiv.appendChild(digitFour);
    displayValue.appendChild(fourDiv);
}
document.querySelector("button#four").addEventListener("click", four);

function five(){
    mathArray.push(5);
    const fiveDiv = document.createElement("div");
    fiveDiv.classList.add("toclear");
    const digitFive = document.createTextNode("5");
    fiveDiv.appendChild(digitFive);
    displayValue.appendChild(fiveDiv);
}
document.querySelector("button#five").addEventListener("click", five);

function six(){
    mathArray.push(6);
    const sixDiv = document.createElement("div");
    sixDiv.classList.add("toclear");
    const digitSix = document.createTextNode("6");
    sixDiv.appendChild(digitSix);
    displayValue.appendChild(sixDiv);
}
document.querySelector("button#six").addEventListener("click", six);

function seven(){
    mathArray.push(7);
    const sevenDiv = document.createElement("div");
    sevenDiv.classList.add("toclear");
    const digitSeven = document.createTextNode("7");
    sevenDiv.appendChild(digitSeven);
    displayValue.appendChild(sevenDiv);
}
document.querySelector("button#seven").addEventListener("click", seven);

function eight(){
    mathArray.push(8);
    const eightDiv = document.createElement("div");
    eightDiv.classList.add("toclear");
    const digitEight = document.createTextNode("8");
    eightDiv.appendChild(digitEight);
    displayValue.appendChild(eightDiv);
}
document.querySelector("button#eight").addEventListener("click", eight);

function nine(){
    mathArray.push(9);
    const nineDiv = document.createElement("div");
    nineDiv.classList.add("toclear");
    const digitNine = document.createTextNode("9");
    nineDiv.appendChild(digitNine);
    displayValue.appendChild(nineDiv);
}
document.querySelector("button#nine").addEventListener("click", nine);




console.log(mathArray)

function operate(){
    for(let i = 0; i<mathArray.length; i++){
            if(mathArray[1] === "/"){
                let divideAns = divide();
                mathArray.splice(0, 3, divideAns);
                }

            else if(mathArray[1] === "*"){
                let multiplyAns = multiply();
                mathArray.splice(0, 3, multiplyAns);
            }
            else if(mathArray[1] === "+"){
                let addAns = add();
                mathArray.splice(0, 3, addAns);
            }
            else if(mathArray[1] === "-"){
                let subtractAns = subtract();
                mathArray.splice(0, 3, subtractAns);
            }
        }
        if(mathArray[0] === Infinity){
            displayValue.innerHTML = "";
            displayValue.innerHTML = "Don't do that.";
        }else{
        let mathString = mathArray;
        mathString.toString();
        displayValue.innerHTML = "";
        displayValue.innerHTML = mathString;
        }
    }
    
    
    document.querySelector("button#equals").addEventListener("click", operate);
