'use strict';

console.log("skribbl RTL has started.")

//Fetching the current word node
const currentWordNode = document.getElementById("currentWord");

//The observer config
const config = { characterData: true, childList: true};

//The observer's callback. called each time the inner html of current word changes.
const whenWordChanges = () =>{
    
    //The chagnged word.
    let word = currentWordNode.innerHTML;

    //Checking if it contains rtl characters. Atm skribbl only has one rtl language which is hebrew.
    if (containsHebrew(word)){
        // If the word contains hebrew characters we change it's direction to rtl. 
        currentWordNode.style.direction = "rtl";
    }
    //If the word does not contain rtl characters and the current direction is rtl we change it back to ltr.
    else if(currentWordNode.style.direction === "rtl"){
        currentWordNode.style.direction = "ltr";
    }
    
    
}

//Runs a regex test on word and checks if it contains any unicode symbols from hebrew.
const containsHebrew = (word) => {
    return ((/[\u0590-\u05FF]/).test(word));
}

//Initializing the observer.
const observer = new MutationObserver(whenWordChanges);

//Running the observer.
observer.observe(currentWordNode, config);



