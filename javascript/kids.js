function kidsWare(num){
    const mainImage = document.getElementsByClassName('thumbnails');
      if(num == 1){
        mainImage.src ="../../images/kidsFashion/kids1.jpg" ;
        console.log("function call");
      }
      else if(num == 2){
        mainImage.src = num;
        console.log("function call");
      }
      else if(num == 3){
        mainImage.src = num;
        console.log("function call");
      }
      else if(num == 4){
        mainImage.src = num;
        console.log("function call");
      }
      
    
    }

    /*function kidsWare(num){
    const mainImage = document.getElementsByClassName('thumbnails');
      if(num == 1){
        mainImage.src = "../../images/kidsFashion/kids1.jpg";
      }
      else if(num == 2){
        mainImage.src = "../../images/kidsFashion/kids1-1.jpg";
      }
      else if(num == 3){
        mainImage.src = "../../images/kidsFashion/kids1-2.jpg";
      }
      else if(num == 4){
        mainImage.src = "../../images/kidsFashion/kids1-3.jpg";
      }
    
    }*/


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