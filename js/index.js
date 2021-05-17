// event listener
let listener = [];
listener = document.querySelectorAll("button");
for (let index = 0; index < listener.length; index++) {
    listener[index].addEventListener("click", handleClick);
}


function handleClick() {
    alert("i got click");
}