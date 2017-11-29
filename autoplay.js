
var playPromise = document.querySelector("#breakout").play();
var playPromise2 = document.querySelector("#introducing").play();

var promises = [ playPromise, playPromise2 ]; 

var i = 0;
for (i = 0; i < 2; i++) {        
    if (promises[i] !== undefined) {
        promises[i].then(function() {
            console.log("The play() Promise fulfilled!");
        }).catch(function(error) {
            console.log("The play() Promise failed.");
        });
    }
}
