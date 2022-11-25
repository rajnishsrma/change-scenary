const heading = document.querySelector("#heading");
console.log(heading);
const button = document.querySelector(".btn");
const photo = document.querySelector(".imgs");

button.addEventListener("click", function () {
   // console.log(photo.src)
   
    if(photo.src.match("./img/08.jpg")) {
        photo.src = "./img/11303.jpg";
        button.innerHTML = "To Night"
    }else{
        photo.src = "./img/08.jpg" ;
        button.innerHTML = "To Day"
    }
   
   
    
});