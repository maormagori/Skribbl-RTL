'use strict';

console.log("skribbl RTL has started.")

const currentWordNode = document.getElementById("currentWord");

const config = { characterData: true, childList: true};


const whenWordChanges = () =>{
    
    console.log("A mutatiםn has occured.")
    let word = currentWordNode.innerHTML;
    console.log(`the word has been changed: ${word}`)
    if (containsHebrew(word)){
        console.log(`the word contains hebrew.`)
        currentWordNode.style.direction = "rtl";
    }
    else if(currentWordNode.style.direction === "rtl"){
        console.log("the word does not contain hebrew.")
        currentWordNode.style.direction = "ltr";
    }
    
    
}

const containsHebrew = (word) => {
    return ((/[\u0590-\u05FF]/).test(word));
}

const observer = new MutationObserver(whenWordChanges);

observer.observe(currentWordNode, config);



