const img = ["url('images/image1.jpg')","url('images/image2.jpg')","url('images/image3.jpg')","url('images/image4.jpg')","url('images/image5.jpg')","url('images/image6.jpg')","url('images/image7.jpg')","url('images/image8.jpg')","url('images/image9.jpg')","url('images/image10.jpg')"];
const btn = document.getElementById("btn");
const image = document.querySelector(".image");

btn.addEventListener("click", function(){
  const randomNumber = getRandomNumber();
  document.body.style.backgroundImage = img[randomNumber];
  image.textContent = img[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * img.length);
}