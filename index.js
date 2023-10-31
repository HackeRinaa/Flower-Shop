function navBar() {
  var element = document.querySelector(".bars");
  element.addEventListener('click',function() {
    var nav = document.querySelector(".navbar");
    if (nav.style.display === "none"){
      nav.style.display="flex";
      nav.style.flexDirection = "column";
    }
    else{
      nav.style.display = "none";
    }
  })
}


//cart open and close 
const cartBtn = document.getElementById("cart-icon");
let isCartOpen = false;
cartBtn.onclick = () =>{
    var cartSection = document.querySelector('.cart-container');
    if (!isCartOpen){
        cartSection.style.display = "flex";
        isCartOpen = true;
    }
};

const closeBtn = document.getElementById("close-cart");
closeBtn.onclick = () => {
    var cartSection = document.querySelector('.cart-container');
    isCartOpen = false;
    cartSection.style.display = 'none';
};

//CODE FOR CAROUSEL 
const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false , prevPageX , prevScrollLeft;


const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // max scrollable width
    //showing and hiding prev / next icon according to carousel scroll left value 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click" , () => {
        let firstImgWidth = firstImg.clientWidth + 14 ; // margin
        // if clicked icon is left . reduce width value from the carousel scroll left else add to it 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout( () => showHideIcons(), 60);
    });
});

const dragStart = (e) => {
    // updating global vaiables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX ;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images / carousel to left according to pouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
    //console.log(e.pageX);
    //pageX returns the horizontal coordinate of mouse pointer
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown" , dragStart);
carousel.addEventListener("touchstart" , dragStart);

carousel.addEventListener("mousemove" , dragging);
carousel.addEventListener("touchmove" , dragging);

carousel.addEventListener("mouseup" , dragStop);
carousel.addEventListener("mouseleave" , dragStop);
carousel.addEventListener("touchend" , dragStop);