let you= document.getElementById("you");
let me= document.getElementById("me");
let hide= document.getElementById("hide");
    
// Reset game
document.querySelector(".btn").addEventListener
(
    "click", function() 
    {   
        you.style.display="block";
        me.style.display="block";
        hide.style.display="inline";

        // Calculate random image name
        let randomImageName1 = Math.floor(Math.random() * 6 + 1);
        let randomImageName2 = Math.floor(Math.random() * 6 + 1);


        //Javascript to make Dice game logic
        let randomImageSource1 = "images/dice"+randomImageName1+".png";
        
        let randomImageSource2 = "images/dice"+randomImageName2+".png";
        
        document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
        
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);   


            // If player one wins
            if (randomImageName1 > randomImageName2) {
                document.querySelector("h1").innerText = "You win!";
            }
            // If player two winsAC
            else if (randomImageName1 < randomImageName2) {
                document.querySelector("h1").innerText = "I win!";
            }
            // If player one and two tie
            else {
                document.querySelector("h1").innerText = "Tie!";
            }
    }
);
