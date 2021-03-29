const colors = ["green","blue","red","black","yellow","grey","pink","brown","violet","beige","coral"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}