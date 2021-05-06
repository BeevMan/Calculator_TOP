let firstVar = "";
let savedOperator = "";
const elDisplay = document.getElementById( "display" );


// addEventListeners "keypress" for numbers and operators + - / * =     maybe backspace and delete as well??? 
// could consider making them "click" the buttons, would allow for visual of which buttons were pressed on the keyboard???

// addEventListeners to all the html buttons
const elNumButtons = document.getElementsByClassName( "btn-inputs" );
for ( i=0; i<elNumButtons.length; i++ ) {
    elNumButtons[ i ].addEventListener( "click", addNumToDisplay )
}

const elOpButtons = document.getElementsByClassName( "operators" );
for ( i=0; i<elOpButtons.length; i++ ) {
    elOpButtons[ i ].addEventListener( "click", addOpToDisplay )
}


document.getElementById( "clear" ).addEventListener( "click", clear );
document.getElementById( "delete" ).addEventListener( "click", backspaceDisplay );



function operate ( a, b, operator ) {
    if ( operator === "+" ) {
        return a + b
    } else if ( operator === "-" ) {
        return a - b
    } else if ( operator === "*" ) {
        return a * b
    } else if ( operator === "/" ) {
        if ( a === 0 || b === 0 ) {
            alert( "0 is not an applicable number for division." );
        } else {
            return a / b
        }
    }
}


function addNumToDisplay( e ) {
    const num = e.target.innerText;
    if ( num === "." ) {
        if ( !elDisplay.innerText.includes( "." ) ) {
            elDisplay.innerText += num;    
        }
    } else {
        elDisplay.innerText += num;
    }
}


function addOpToDisplay( e ) {
    const operator = e.target.value;
    if ( operator === "=" ) {
        if ( savedOperator !== "" && firstVar !== "" ) {
            const secondVar = elDisplay.innerText;
            const answer = operate( Number( firstVar ), Number( secondVar ), savedOperator );
            answer ? elDisplay.innerText = answer : clear(); // prevent displaying undefined when attempting division with 0
            savedOperator = "";
            firstVar = "";
        }
    } else if ( firstVar === "" && savedOperator === "" && elDisplay.innerText !== "" ) {
        savedOperator = operator;
        firstVar = elDisplay.innerText;
        elDisplay.innerText = "";
    } else if ( firstVar !== "" && savedOperator !== "" && elDisplay.innerText !== "" ) {
        const secondVar = elDisplay.innerText;
        firstVar = operate( Number( firstVar ), Number( secondVar ), savedOperator );
        savedOperator = operator;
        firstVar ? firstVar : clear(); // prevent displaying undefined when attempting division with 0
        elDisplay.innerText = "";
    }
}


function clear() {
    elDisplay.innerText = "";
    firstVar = "";
    savedOperator = ""
}


function backspaceDisplay() {
    elDisplay.innerText = elDisplay.innerText.slice( 0, -1 );
}



/*

Here are some use cases (abilities your project needs to have):

Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide
Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
Do not worry about wiring up the JS just yet.
There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.
Add a “clear” button.
Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
Gotchas: watch out for and fix these bugs if they show up in your code:
Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution. Your calculator should not evaluate more than a single pair of numbers at a time. If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation.
You should round answers with long decimals so that they don’t overflow the screen.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
EXTRA CREDIT: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.
EXTRA CREDIT: Add a “backspace” button, so the user can undo if they click the wrong number.
EXTRA CREDIT: Add keyboard support!



STILL NEED TO:

    You should round answers with long decimals so that they don’t overflow the screen.

    EXTRA CREDIT: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.

    EXTRA CREDIT: Add keyboard support!

*/