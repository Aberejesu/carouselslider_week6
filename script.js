let img = [
    {
        src: "./image1.jpg",
    },
    {
        src: "./image2.jpg",
    },
    {
        src: "./image 3.jpg",
    },
    {
        src: "./image4.jpg",
    },
    {
        src: "./image5.jpg",
    },
    {
        src: "./image 6.jpg",
    },
]


const left = document.querySelector(".left");
const right = document.querySelector(".right");
const image = document.querySelector("img");
let count = 0;

left.addEventListener('click', ()=>{
    
      
    count--;
    image.src = img[count].src;

    if(count === 0){
        count = 5;
    }

         
});


right.addEventListener('click', ()=>{
    
      
    count++;

    image.src = img[count].src;

    console.log(image.src);
    
    if(count === 5){
        count = 0;
    }
   
})