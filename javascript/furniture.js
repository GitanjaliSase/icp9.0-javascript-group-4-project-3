
 
    const quantElement = document.getElementById('quantity'); 
    
    function incre(){
      let quantity = parseInt(quantElement.innerText);
      quantElement.innerText = ++quantity;
    }
    function dece(){
        let quantity = parseInt(quantElement.innerText);
        if(quantity>1){
            quantElement.innerText = --quantity;
        }
    }

    function order(){
        alert('Your order is confirmed...');
           }
  

     function furnitureimg(fileName){
            let img = document.querySelector("#furniture");
            img.setAttribute("src",fileName)
        } 

    const stars = document.querySelectorAll(".stars i");
    stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
    
      stars.forEach((star,index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      });
    });
   });

   const sidebar = document.getElementById('sidebar');
   const toggleBtn = document.getElementById('toggle-btn');
   const closeBtn = document.getElementById('close-btn');
   
   // Function to toggle the sidebar
   toggleBtn.addEventListener('click', () => {
       if (sidebar.style.left === '0px') {
           sidebar.style.left = '-300px'; // Hide sidebar
       } else {
           sidebar.style.left = '0'; // Show sidebar
       }
   });
   
   // Function to close the sidebar
   closeBtn.addEventListener('click', () => {
       sidebar.style.left = '-300px';
   });
   
   let images = ["./../../images/furniture/furnitures.jpg",
    "./../../images/furniture/kitchens.jpg", 
    "./../../images/furniture/homes.jpg",
     "./../../images/furniture/furnitures.jpg",
   ];
let index = 0;
const slide = document.getElementById('slider');


function forward() {
   if (index < images.length - 1) {
       index++;
   }
   else {
       index = 0;
   }

   slide.src = images[index]
}

function backward() {
   if (index > 0) {
       index--;
   }
   else {
       index = images.length - 1;
   }
   slide.src = images[index]
}