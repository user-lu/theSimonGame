let buttonColors = ["red" , "blue" , "green" , "yellow"];

function nextSequence() {
    let generateNum = Math.random();
    generateNum = Math.floor(generateNum * 4);
    let randomNumber = generateNum;    
    
    let randomChosenColor = Math.floor(randomNumber * buttonColors);
    
    console.log(randomNumber);
    
};

