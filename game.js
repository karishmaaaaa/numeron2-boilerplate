// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num_1 = Math.round(Math.random()*100);
var num_2 = Math.round(Math.random()*100);

var num1div = document.getElementById("number1");
var num2div = document.getElementById("number2");
// Iteration 3: Creating variables required to make the game functional
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var divide = document.getElementById("divide");
var modulus = document.getElementById("modulus");
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num_3;
var num3div = document.getElementById("number3");
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    var operation = Math.round(Math.random()*7);
    var temp;
    if(num_1<num_2){
        temp = num_1; 
        num_1 = num_2; 
        num_2 = temp;
    }
    switch(operation){
        case 0:
            num_3 = num_1 + num_2;
            break;
        case 1:
            num_3 = num_1-num_2;
            break;
        case 2:
            num_3 = num_1*num_2;
            break;
        case 3:
            num_3 = Math.round(num_1/num_2);
            break;
        case 4:
            num_3 = num_1%num_2;
            break;
        default:
            randomise();
    } 
    num1div.innerHTML = num_1;
    num2div.innerHTML = num_2;
    num3div.innerHTML = num_3;
}
randomise()

// Iteration 6: Making the Operators (button) functional
var score = 0;
plus.onclick = ()=>{
    if(num_1+num_2 == num_3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;
    }
}
minus.onclick = ()=>{
    if(num_1-num_2 == num_3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}
mul.onclick = ()=>{
    if(num_1*num_2 == num_3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}
divide.onclick = ()=>{
    if(Math.round(num_1/num_2) == num_3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}
modulus.onclick = ()=>{
    if(num_1%num_2 == num_3){
        score++;
        randomise()
        clearout(timerId);
    }else{
        window.location.href = `./gameover.html`;

    }
}
// Iteration 7: Making Timer functional
var time = 20;
var timer = document.getElementById("timer");
var timerId;
function startTimer(){
    time = 20;
    timerId = setInterval(()=>{
        time--;
        timer.innerHTML = time;
        if(time<=0){
            window.location.href = `./gameover.html`;
        }
    }, 1000);
    localStorage.setItem("totalscore", score);
}
function clearout(timerId){
    clearInterval(timerId);
    startTimer();
}
startTimer();