let count = 0  
let round = 0   
document.getElementById("again").classList.add("position");
document.getElementById("again").classList.add("hide")

function random_int(){
    let int = Math.floor(Math.random() * 6) + 1; 
    return int
}; 

function dice_rolling(){
    let temp = 0
    if (count < 3){ 
        var die = document.getElementsByClassName("dice"); 
        for (let i = 0; i < die.length; i++) { 
            if (die[i].classList.contains('selected')){ 
                continue;
            }; 
            var img = "assets/dice" + Under(random_int()) + ".png";
            die.item(i).setAttribute("src", img);  
        };   
        document.getElementById("under").classList.remove("under-mode");
        scores()  
        Quadra() 
        General() 
        Straight()  
        Full()
        count ++;   
    };   
}; 

function toggle(){
    if (count != 0){
        this.classList.toggle('selected');
    };
}; 

function add_class(){
    var die = document.getElementsByClassName('dice');
    for (let i = 0; i < die.length; i++) {
    die[i].addEventListener('click', toggle);
    };
};

function scores(){ 
    for (let j = 1; j < 7; j++){       
        if (document.getElementById(j + "_score").classList.contains("chosen")){
            continue;
        };
        var score = 0; 
        document.getElementById(j + "_score").innerHTML = score;
        var die = document.getElementsByClassName("dice");
        for (let i = 0; i < die.length; i++){
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){
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
    if (document.getElementById("Quadra").classList.contains("chosen")) {
        return;
    };
    document.getElementById("Quadra").innerHTML = 0;
    while (found === false){     
        var die = document.getElementsByClassName("dice"); 
        let amount = 0;
        for (let i = 0; i < die.length; i++){
            if (die[i].classList.contains('selected')){ 
                check ++; 
            };
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){
                amount ++;
        }; 
        };
        if (amount >= 4 && check === 0){
            found = true;
            document.getElementById("Quadra").innerHTML = 45;
        } else if (amount >= 4) {
            found = true; 
            document.getElementById("Quadra").innerHTML = 40;
        };
        j ++; 
        if (j === 7){
            found = true;
        };
    };  
}; 

function General(){
    let found = false;  
    let j = 1; 
    let check = 0;   
    if (document.getElementById("General").classList.contains("chosen")) {
        return;
    };    
    document.getElementById("General").innerHTML = 0;
    while (found === false){
        var die = document.getElementsByClassName("dice"); 
        let amount = 0;
        for (let i = 0; i < die.length; i++){
            if (die[i].classList.contains('selected')){ 
                check ++; 
            };
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){
                amount ++;
            }; 
        };
        if (amount >= 5 && check === 0){
            found = true;
            document.getElementById("General").innerHTML = 60;
        } else if (amount >= 5) {
            found = true; 
            document.getElementById("General").innerHTML = 50;
        };
        j ++; 
        if (j === 7){
            found = true;
        };
    }; 
}; 

function Straight(){
    let found = false;  
    let j = 1;    
    let check = 0 
    let num = 0;
    if (document.getElementById("Straight").classList.contains("chosen")) {
        return;
    };    
    document.getElementById("Straight").innerHTML = 0;
    while (found === false){
        var die = document.getElementsByClassName("dice"); 
        let amount = 0;
        for (let i = 0; i < die.length; i++){
            if (die[i].classList.contains('selected')){ 
                num ++; 
            };
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){
                check += j
                amount ++;
            }; 
        };
        if (amount > 1){
            found = true;
        }; 
        if (j === 7 && (check === 15 || check === 20) && num === 0){
            document.getElementById("Straight").innerHTML = 25; 
            found = true;
        } else if (j === 7 && (check === 15 || check === 20)) {
            document.getElementById("Straight").innerHTML = 20;  
            found = true;
        } else if (j === 7){
            found = true;
        };
        j ++; 
    };  
}; 

function Full(){
    var die = document.getElementsByClassName("dice"); 
    let total = 0;  
    let check = 0;
    if (document.getElementById("Full").classList.contains("chosen")) {
        return;
    };    
    document.getElementById("Full").innerHTML = 0;
    for (let j = 1; j < 7; j++){ 
        let amount = 0; 
        for (let i = 0; i < die.length; i++){
            if (die[i].classList.contains('selected')){ 
                check ++; 
            };
            if (die[i].getAttribute('src') === "assets/dice" + j + ".png"){
                amount ++;  
            };   
        }; 
        if (amount === 3){
            total ++;
        } 
        else if (amount === 2){
            total += 2;
        }
    };  
    if (total === 3 && check === 0){
        document.getElementById("Full").innerHTML = 15;
    } else if (total === 3) {
        document.getElementById("Full").innerHTML = 10;
    };
}; 

function Choose(){
    var die = document.getElementsByClassName("dice"); 
    this.classList.add('chosen');      
    round ++;  
    for (let j = 1; j < 7; j++){
        if (document.getElementById(j + "_score").classList.contains('chosen')){ 
            continue;
        }; 
        document.getElementById(j + "_score").innerHTML = 0;   
    };  
    document.querySelectorAll('.Special').forEach(function(item) {
        if (item.classList.contains('chosen') === false) {
            item.innerHTML = 0;
        };
    });   
    document.getElementById("Sum").innerHTML = Number(this.innerHTML) + Number(document.getElementById("Sum").innerHTML);
    if (round === 10){ 
        document.getElementById("win_screen").classList.add('win'); 
        document.getElementById("play_again").classList.add('again');  
        document.getElementById("again").classList.remove("hide")
        document.getElementById("play_again").innerHTML = "YOUR TOTAL SCORE IS " + Number(document.getElementById("Sum").innerHTML); 
    };
    count = 0;   
    for (let i = 0; i < 5; i++) {
        die.item(i).classList.remove("selected");
        die.item(i).setAttribute("src", "assets/dice" + (i+1) + ".png");         
    };
};

function Select(){
    for (let j = 1; j < 7; j++){ 
        document.getElementById(j + "_score").addEventListener("click", Choose);    
    }; 
    document.querySelectorAll('.Special').forEach(function(item) {
        item.addEventListener('click', Choose)
    });
};  

function Under(number) { 
    let array = [1,2,3,4,5,6];
    let last = array[array. length - 1]; 
    if (document.getElementById("under").classList.contains("under-mode")) {
        number = last - (number - 1);
    }; 
    return number;
}; 

function Set_Class() {
    var element = document.getElementById("under"); 
    element.classList.toggle("under-mode");
};

function Dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};

function Reset() {
    document.getElementById("win_screen").classList.remove('win'); 
    document.getElementById("play_again").classList.remove('again');  
    document.getElementById("again").classList.add("hide")   
    document.getElementById("play_again").innerHTML = "";  
    document.getElementById("Sum").innerHTML = 0;
    round = 0; 
    for (let j = 1; j < 7; j++){
        document.getElementById(j + "_score").innerHTML = 0; 
        document.getElementById(j + "_score").classList.remove("chosen");
    }; 
    document.querySelectorAll('.Special').forEach(function(item) {
        item.innerHTML = 0; 
        item.classList.remove("chosen");
    }); 
};

Select()
add_class() 
document.getElementById("under").addEventListener("click", Set_Class);
document.getElementById("button").addEventListener("click", dice_rolling);   
document.getElementById("dark_mode").addEventListener("click", Dark); 
document.getElementById("again").addEventListener("click", Reset);     