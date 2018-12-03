const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "blue";
    // console.log("I have been resized");
}

title.addEventListener("click", handleClick);