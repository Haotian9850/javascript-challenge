//ensure that checkSlides only runs once every 20 miliseconds
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }; //funtion that returns another function???

//select all images
const sliderImages = document.querySelectorAll('.slide-in');

//check slide action
function checkSlide(e){
    console.log(window.scrollY);
    //loop over every single image and determine their position
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;   //when every image is half way seen
        console.log(slideInAt);
        //image bottom
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast){
            //get image
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active'); //in case the user scrolls back up...
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));