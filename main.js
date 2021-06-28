const iBtn = document.getElementById("ibtn");
const dropDown = document.getElementById("dropdown");
let counter = 0;

iBtn.addEventListener('click', () => {
    dropDown.style.visibility = "visible";
    counter++;

    if(counter%2 === 0){
        dropDown.style.visibility = "hidden";
        up();
    }
});

function drop(){
    dropDown.style.top = "0";
    dropDown.style.opacity = "1";
    iBtn.style.transform = "rotate(45deg)";
}

function up(){
    dropDown.style.top = "-65px";
    dropDown.style.opacity = "0";
    iBtn.style.transform = "rotate(0deg)";
}