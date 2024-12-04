
 
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
