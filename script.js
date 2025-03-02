var numbers =  Math.floor(Math.random() * 10); 

console.log(numbers);


function checkGuess(){
    var UserInput = document.getElementById("UserIn").value;

    if(UserInput == numbers){
        alert("You are right");
    }else if(UserInput <= numbers){
        alert("Try Highier Value");
    }else{
        alert("Try Lower Value");
    }
}
