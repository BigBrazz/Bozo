let count = 0  

function random_int(){
    let int = Math.floor(Math.random() * 6) + 1; 
    return int
}; 

function dice_rolling(){
    if (count < 300){ 
        var die = document.getElementsByClassName("dice"); 
        for (let i = 0; i < die.length; i++) { 
        if (die[i].classList.contains('selected')){ 
            continue;
        }; 
        var img = "assets/dice" + random_int() + ".png";
        die.item(i).setAttribute("src", img);  
        };   
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
    this.classList.toggle('chosen');    
    for (let j = 1; j < 7; j++){
        if (document.getElementById(j + "_score").classList.contains('chosen')){ 
            document.getElementById("Sum").innerHTML = Number(document.getElementById(j + "_score").innerHTML) + Number(document.getElementById("Sum").innerHTML);
            continue;
        }; 
        document.getElementById(j + "_score").innerHTML = 0;   
    };  
    document.querySelectorAll('.Special').forEach(function(item) {
        if (item.classList.contains('chosen') === false) {
            item.innerHTML = 0;
        } else {
            document.getElementById("Sum").innerHTML = Number(item.innerHTML) + Number(document.getElementById("Sum").innerHTML);
        };
    });   
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

function Dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

Select()
add_class()
document.getElementById("button").addEventListener("click", dice_rolling);   
document.getElementById("dark_mode").addEventListener("click", Dark);     