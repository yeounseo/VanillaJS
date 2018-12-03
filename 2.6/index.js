const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  // console.log(title.style.color);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
// 온라인 오프라인에 따라 console에 띄우는 함수
// function handleOffline() {
//     console.log("lalalal");
// }

// function handleOnline() {
//     console.log("welcome online world!");
// }
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);
// HTML javascript DOM MDN을 참고할 것!
