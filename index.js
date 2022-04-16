let you= document.getElementById("you");
let me= document.getElementById("me");
let hide= document.getElementById("hide");
let title= document.getElementById("title");  
// Reset game
document.querySelector(".btn").addEventListener
(
    "click", function() 
    {
        you.style.display="block";
        me.style.display="block";
        hide.style.display="inline";
        title.style.fontSize="4rem";
        title.innerText="rolling...";
        // Calculate random image name
        let randomImageName1 = Math.floor(Math.random() * 6 + 1);
        let randomImageName2 = Math.floor(Math.random() * 6 + 1);
        let numberholder1;
        let numberholder2;

        //Javascript to make Dice game logic
        for(let i=0;i<100;i++)
        {
            let randomImageSource1 = "images/dice"+randomImageName1+".png";
            
            let randomImageSource2 = "images/dice"+randomImageName2+".png";
            var delayInMilliseconds = 10;
            setTimeout(function() {
        //your code to be executed after 1 second
                document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
                    
                document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
            }, delayInMilliseconds*i);
            numberholder1=randomImageName1;
            numberholder2=randomImageName2;
            randomImageName1 = Math.floor(Math.random()*6+1);
            randomImageName2 = Math.floor(Math.random()*6+1);
        }

            setTimeout(function() {
                //your code to be executed after 1 second
                title.style.fontSize="8rem";
                title.style.display="block";
                if (numberholder1 > numberholder2) {
                    document.querySelector("h1").innerText = "You win!";
                }
                // If player two winsAC
                else if (numberholder1 < numberholder2) {
                    document.querySelector("h1").innerText = "I win!";
                }
                // If player one and two tie
                else {
                    document.querySelector("h1").innerText = "Tie!";
                }
            }, delayInMilliseconds*100);
            // If player one wins
            
    }
);
