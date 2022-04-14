
    
// Reset game
document.querySelector(".btn").addEventListener
(
    "click", function() 
    {    
        // Calculate random image name
        var randomImageName1 = Math.floor(Math.random() * 6 + 1);
        var randomImageName2 = Math.floor(Math.random() * 6 + 1);


        //Javascript to make Dice game logic
        var randomImageSource1 = "images/dice"+randomImageName1+".png";
        
        var randomImageSource2 = "images/dice"+randomImageName2+".png";
        
        document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
        
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);   


            // If player one wins
            if (randomImageName1 > randomImageName2) {
                document.querySelector("h1").innerHTML = "Fuck yeah. I win";
            }
            // If player two winsAC
            else if (randomImageName1 < randomImageName2) {
                document.querySelector("h1").innerHTML = "You win this time";
            }
            // If player one and two tie
            else {
                document.querySelector("h1").innerHTML = "Tie!";
            }
    }
);
