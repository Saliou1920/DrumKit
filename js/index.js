// event listener

let listener = [];
let typeSound = "";
listener = document.querySelectorAll(".drum");
for (let index = 0; index < listener.length; index++) {
    typeSound = listener[index].textContent;
    listener[index].addEventListener("click", function() {
        //console.log(this.textContent);
        playSound(this.textContent);
        buttonAnimation(this.textContent);
    });
}
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});


function playSound(type) {
    let audio;
    switch (type) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}
