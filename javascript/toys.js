const images = ["./../images/toys-page-img/banner-2.png", "./../images/toys-page-img/banner-3.jpg"];
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
}ute("src",fileName)
  
 /** descriptive page */


function MoveImage(num){
    const mainImage = document.getElementById('main');
      if(num == 1){
        mainImage.src = "../../images/toys-page-img/t-img-1-1.jpg";
      }
      else if(num == 2){
        mainImage.src = "../../images/toys-page-img/t-img-1-2.jpg";
      }
      else if(num == 3){
        mainImage.src = "../../images/toys-page-img/t-img-1-3.jpg";
      }
      else if(num == 4){
        mainImage.src = "../../images/toys-page-img/t-img-1-4.jpg";
      }
      else if(num == 5){
        mainImage.src = "../../images/toys-page-img/t-img-1-5.jpg";
      }
    }

    function MoveImage1(num){
      const mainImage = document.getElementById('main');
        if(num == 1){
          mainImage.src = "../../images/watch-img/watch-2.webp";
        }
        else if(num == 2){
          mainImage.src = "../../images/watch-img/watch-2.0.webp";
        }
        else if(num == 3){
          mainImage.src = "../../images/watch-img/watch-2.1.webp";
        }
        else if(num == 4){
          mainImage.src = "../../images/watch-img/watch-2.2.webp";
        }
        else if(num == 5){
          mainImage.src = "../../images/watch-img/watch-2.3.webp";
        }
      }

    
    


