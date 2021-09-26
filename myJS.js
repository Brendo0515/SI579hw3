/*
* Excercise 1
*
*/
const block = document.getElementById("color-block");
block.addEventListener("click", changeColor);
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(block.getAttribute("class") === "salmon"){
        //change the background color using JS
        block.setAttribute("class", "blue");
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#0000FF";
    }
    else{
        //change the background color using JS
        block.setAttribute("class", "salmon");
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#F08080";
    }
}

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const button = document.getElementById("convertbtn");
const field = document.getElementById("f-input");
button.addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    temp = (parseInt(field.value) - 32)*(5/9);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = temp;
}


