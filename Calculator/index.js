function calc(){
    let operator = document.getElementById("operator").value;
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo= document.getElementById("numberTwo").value;

    numberTwo = Number(numberTwo);
    numberOne = Number(numberOne);

    let answer = document.getElementById("answer");
    answer.style.color = 'green';

    switch(operator){
        case '+':
            answer.innerHTML = numberOne + numberTwo;
            break;
        case '-':
            answer.innerHTML = numberOne - numberTwo;
            break;

        case '*':
            answer.innerHTML = numberOne * numberTwo;
            break;
        case '/':
            answer.innerHTML = numberOne / numberTwo;
            break;
        default:
            answer.style.color = 'red';
            answer.innerHTML = "INVALID OPERATOR";

    }
}