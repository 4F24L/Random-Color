
function ranColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let bgRandom = "rgb("+x+", "+y+", "+z+")";
    
    let bgColor = document.querySelector(".wrapper");
    bgColor.style.backgroundColor = bgRandom;

    document.querySelector(".color").innerHTML = bgRandom;
    // document.querySelector(".color").style.color = bgRandom;


}