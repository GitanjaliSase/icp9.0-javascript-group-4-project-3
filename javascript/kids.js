

    function kidsWare(imageName){
      const mainImage = document.getElementById("mainImage");
      mainImage.src= imageName;
  }

  const image=["../../images/kidsFashion/Slider1.jpg"  ,"../../images/kidsFashion/Slider2.jpg", "../../images/kidsFashion/Slider3.jpg" , "../../images/kidsFashion/Slider4.jpg",
    "../../images/kidsFashion/Slider5.jpg" ,"../../images/kidsFashion/Slider6.jpg" ];

    let index=0;
    const slide = document.getElementById("slide");
    
    function nextImg(){
      if(index < image.length - 1)
        {
          index++;
        }
      else{
          index = 0;
      }  
      slide.src=image[index]  
     
  }

  function preImg(){
      if(index > 0)
        {
          index--;
        }
      else{
          index = image.length - 1;
      }  
      slide.src=image[index]  
      
  }


   


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