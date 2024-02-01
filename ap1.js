                    //==========BUTTON =================================
function darkMode(){
    let modeBtn = document.querySelector("#mode");
let currMode = "light";
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    currMode = "light";
    
    document.body.style.backgroundColor="white"
    document.body.style.color="black";
  }
});
}
darkMode();


            //+++++++++++++ TOGGEL SWTICH ****************
let modeBtn = document.querySelector("#toggleSwitch");
let currMode = "light";
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    currMode = "light";
    
    document.body.style.backgroundColor="white"
    document.body.style.color="black";
  }
});
