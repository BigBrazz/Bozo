let count = 0  
let round = 0   
document.getElementById("again").classList.add("position");
document.getElementById("again").classList.add("hide")

function random_int(){
    let int = Math.floor(Math.random() * 6) + 1; //storing random number in variable
    return int //returnin the number 
}; 

function dice_rolling(){
    let temp = 0
    if (count < 3){ //if statement to check if the player has rolled less than 3 times
        var die = document.getElementsByClassName("dice"); //list of the dice 
        for (let i = 0; i < die.length; i++) { //for statement looping through the dice
            if (die[i].classList.contains('selected')){ //decision to check if the dice has been "selected"
                continue;
            }; 
            var img = "assets/dice" + Under(random_int()) + ".png"; //set the new image of the dice to a variable
            die.item(i).setAttribute("src", img);  //change the image of the dice
        };   
        document.getElementById("under").classList.remove("under-mode");
        scores()  //function to count the scores
        Quadra() //function to check for a Quadra
        General() //function to check for a General
        Straight()  //function to check for a Straight
        Full()//function to check for a Full
        count ++;   //increment count to represent another dice roll
    };   
}; 

function toggle(){
    if (count != 0){ //This is to make sure the player has rolled the dice before selecting
        this.classList.toggle('selected'); //This will toggle the select class onto the dice which has been clicked
    };
}; 

function add_class(){
    var die = document.getElementsByClassName('dice'); 
    for (let i = 0; i < die.length; i++) { //This will loop through the dice
    die[i].addEventListener('click', toggle); //Adds the event to all the dice, this makes sure that the toggle function will activate when a dice is clicked
    };
};

function scores(){ 
    for (let j = 1; j < 7; j++){ //loop through the scores category
        if (document.getElementById(j + "_score").classList.contains("chosen")){ //will check if the current category has been chosen
            continue;
        };
        var score = 0; 
        document.getElementById(j + "_score").innerHTML = score; //changes the inner HTML of the category to its appropriate score
        var die = document.getElementsByClassName("dice"); //list of dice
        for (let i = 0; i < die.length; i++){ //loops through the dice
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){ //counts how many times a number appears on the face of the dice
                score += j;
                document.getElementById(j + "_score").innerHTML = score; 
            }; 
        };   
    };
};  

function Quadra(){
    let found = false;  
    let j = 1;    
    let check = 0
    if (document.getElementById("Quadra").classList.contains("chosen")) { //checks to see if the Quadra category has already been chosen
        return;
    };
    document.getElementById("Quadra").innerHTML = 0; //will initally set it to 0
    while (found === false){ //will loop until a certain condition is met
        var die = document.getElementsByClassName("dice"); 
        let amount = 0;
        for (let i = 0; i < die.length; i++){ //loop through the dice
            if (die[i].classList.contains('selected')){ //will check if the current dice has been selected
                check ++; 
            };
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){ //check how many times a number appears 
                amount ++;
        }; 
        };
        if (amount >= 4 && check === 0){ //will check to see if there are more than 3 of the same dice and if it was all rolled in the same roll
            found = true; //ends the loop
            document.getElementById("Quadra").innerHTML = 45; //awards the correct points
        } else if (amount >= 4) { //checks to see if there are more than 3 or the same dice
            found = true; //ends the loop
            document.getElementById("Quadra").innerHTML = 40; //awards the correct points
        };
        j ++; 
        if (j === 7){ //checks if the function has looped through all of the possible numbers
            found = true; //ends the loop
        };
    };  
}; 

function General(){
    let found = false;  
    let j = 1; 
    let check = 0;   
    if (document.getElementById("General").classList.contains("chosen")) { //will check if the category has been chosen already 
        return;
    };    
    document.getElementById("General").innerHTML = 0; //initialise the points to 0
    while (found === false){ //loop until found is true 
        var die = document.getElementsByClassName("dice"); 
        let amount = 0;
        for (let i = 0; i < die.length; i++){ //loop through the dice
            if (die[i].classList.contains('selected')){ //check to see if any of the dice are selected
                check ++; 
            };
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){ //count up how many times a number appears on the dice 
                amount ++;
            }; 
        };
        if (amount >= 5 && check === 0){ //checks if a number appears 5 times and there were no selected dice
            found = true; //ends the loop
            document.getElementById("General").innerHTML = 60; //awards the correct points
        } else if (amount >= 5) { //check to see if a number appears 5 times
            found = true; //ends the loop
            document.getElementById("General").innerHTML = 50; //awards the correct points
        };
        j ++; 
        if (j === 7){ //check to see if the algorithm has looped through all numbers
            found = true; //ends the while loop
        };
    }; 
}; 

function Straight(){
    let found = false;  
    let j = 1;    
    let check = 0 
    let num = 0;
    if (document.getElementById("Straight").classList.contains("chosen")) { //check to see if the category has been chosen
        return;
    };    
    document.getElementById("Straight").innerHTML = 0; //initialise the points to 0
    while (found === false){ //while loop until found is true
        var die = document.getElementsByClassName("dice"); 
        let amount = 0;
        for (let i = 0; i < die.length; i++){ //loop through the dice
            if (die[i].classList.contains('selected')){ //check if any of the dice have been selected 
                num ++; //represents how many dice are selected
            };
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){
                check += j //adds the value of the dice to check
                amount ++; //keeps track of how many times each number appears 
            }; 
        };
        if (amount > 1){ //checks to see if a number has appeared more than once
            found = true; //ends the loop
        }; 
        if (j === 7 && (check === 15 || check === 20) && num === 0){ //checks to see if the dice add up to the correct amount, either 15 or 20
            document.getElementById("Straight").innerHTML = 25; //awards correct points
            found = true; //ends the loop
        } else if (j === 7 && (check === 15 || check === 20)) { //checks to see if conditions are met for the straight
            document.getElementById("Straight").innerHTML = 20; //awards correct points
            found = true; //ends the loop
        } else if (j === 7){ //checks to see if the algorithm has gone through everything
            found = true; //ends the loop
        };
        j ++; 
    };  
}; 

function Full(){
    var die = document.getElementsByClassName("dice"); 
    let total = 0;  
    let check = 0;
    if (document.getElementById("Full").classList.contains("chosen")) { //checks to see if the category has been chosen
        return;
    };    
    document.getElementById("Full").innerHTML = 0; //initialises the points to 0
    for (let j = 1; j < 7; j++){ //loops through all of the numbers
        let amount = 0; 
        for (let i = 0; i < die.length; i++){ //loops through all of the dice
            if (die[i].classList.contains('selected')){ //checks to see if any of the dice have been selected
                check ++; 
            };
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){ //checks how many times a number has appeared 
                amount ++;  
            };   
        }; 
        if (amount === 3){ //checks to see if a number has appeared 3 times
            total ++;
        } 
        else if (amount === 2){ //checks to see if a number has appeared 2 times
            total += 2;
        }
    };  
    if (total === 3 && check === 0){ //if the conditions for the full is met then the total should equal 3 then it will check for that, it will also check if the player has any dice selected before this
        document.getElementById("Full").innerHTML = 15; //award proper points
    } else if (total === 3) { //check to see if the full requirements are met
        document.getElementById("Full").innerHTML = 10; //award proper points
    };
}; 

function Choose(){
    if (count === 0) { //check to see if the player has rolled yet
        alert("Can't choose before rolling") //alert the user that they can't choose points before rolling
        return; 
    };
    var die = document.getElementsByClassName("dice"); 
    this.classList.add('chosen'); //will add the class chosen to the category which has been clicked
    round ++;  
    for (let j = 1; j < 7; j++){ //loop through the numbers
        if (document.getElementById(j + "_score").classList.contains('chosen')){ //check to see if the category has been chosen
            continue;
        }; 
        document.getElementById(j + "_score").innerHTML = 0; //if the category has not been chosen then it will reset it to 0 
    };  
    document.querySelectorAll('.Special').forEach(function(item) { //add a function to all of the special events
        if (item.classList.contains('chosen') === false) { //checks to see if any of the categories have the chosen class on them
            item.innerHTML = 0; //resets all of the categories which have not been chosen to 0
        };
    });   
    document.getElementById("Sum").innerHTML = Number(this.innerHTML) + Number(document.getElementById("Sum").innerHTML); //update the sum 
    if (round === 10){ //checks to see if this is the last round
        document.getElementById("win_screen").classList.add('win'); //adds the class win to the win screen 
        document.getElementById("play_again").classList.add('again'); //add the class again to the play again button 
        document.getElementById("again").classList.remove("hide") //removes the hide class from the again elemnt 
        document.getElementById("play_again").innerHTML = "YOUR TOTAL SCORE IS " + Number(document.getElementById("Sum").innerHTML); //displays the total on the final screen
    };
    count = 0;   
    for (let i = 0; i < 5; i++) { //loops through the dice
        die.item(i).classList.remove("selected"); //removes the selected class from them
        die.item(i).setAttribute("src", "assets/dice" + (i+1) + ".png"); //resets them in ascending order        
    };
};

function Select(){
    for (let j = 1; j < 7; j++){ //loops throught the numbers 
        document.getElementById(j + "_score").addEventListener("click", Choose); //adds the choose function to all of the normal categories
    }; 
    document.querySelectorAll('.Special').forEach(function(item) {
        item.addEventListener('click', Choose) //adds the choose function to all of the special categories 
    });
};  

function Under(number) { 
    let array = [1,2,3,4,5,6]; //initialise the array 
    let last = array[array. length - 1]; //gets the last number in the array
    if (document.getElementById("under").classList.contains("under-mode")) { //checks to see if the class is on, this means that the dice should be flipped
        number = last - (number - 1); //finds out the number under the dice
    }; 
    return number; //returns the number
}; 

function Set_Class() {
    var element = document.getElementById("under"); 
    element.classList.toggle("under-mode"); //assigns the class to the under button
};

function Dark() {
    var element = document.body;
    element.classList.toggle("dark-mode"); //toggles the dark mode to the body 
};

function Reset() {
    document.getElementById("win_screen").classList.remove('win'); //removes the class win
    document.getElementById("play_again").classList.remove('again');  //removes the class again
    document.getElementById("again").classList.add("hide")   //adds the class hide
    document.getElementById("play_again").innerHTML = "";  //resets the text in the final screen so it doesnt show when the game is reset
    document.getElementById("Sum").innerHTML = 0; //resets the sum 
    round = 0; //resets the rounds
    for (let j = 1; j < 7; j++){ //loops throught the categories
        document.getElementById(j + "_score").innerHTML = 0; //sets all the categories to 0
        document.getElementById(j + "_score").classList.remove("chosen"); //removes the class chosen from everything 
    }; 
    document.querySelectorAll('.Special').forEach(function(item) {
        item.innerHTML = 0; //sets all of the special events to 0
        item.classList.remove("chosen"); //removes the chosen class from all of the special events
    }); 
};

Select()
add_class() 
document.getElementById("under").addEventListener("click", Set_Class); //adds an event listener to the under button 
document.getElementById("button").addEventListener("click", dice_rolling);  //adds an event listener to the dice rolling button  
document.getElementById("dark_mode").addEventListener("click", Dark); //adds an event listener to the dark mode button 
document.getElementById("again").addEventListener("click", Reset);     //adds an event listener to the play again button 