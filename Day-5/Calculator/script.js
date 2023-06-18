function processClick(userInput)
{
    document.getElementById("screen").value  += userInput;
}

function clearClaculatorDisplay(){
    document.getElementById("screen").value="";
}

function showResult(){

    let expressionEnteredByUser = document.getElementById("screen").value;
    let result = eval(expressionEnteredByUser);

    // Writing the output to output screen
    document.getElementById("screen").value = result;
}