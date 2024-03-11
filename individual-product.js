const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add('clicked');
}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const scrollFraction = 0.5; // Adjust this value to control the scrolling distance

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth * scrollFraction;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth * scrollFraction;
  });
});

function myFunction(x) {
  if (x.matches) { // If media query matches

    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];
    const scrollFraction = .75; // Adjust this value to control the scrolling distance

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth * scrollFraction;
      });

      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth * scrollFraction;
      });
    });

  }
}

var x = window.matchMedia("(max-width: 575.98px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




// $(document).ready(function() {
//   $('.dropdown-toggle').dropdown();
// });

var mainImg = document.getElementById("main-img");
var otherImg = document.querySelectorAll(".small-img-col");
for (var i = 0; i < otherImg.length; i++) {
  otherImg[i].addEventListener("click", function () {
    // console.log("clicked");
    for (var j = 0; j < otherImg.length; j++) {
      if (otherImg[j].classList.contains("unselected")) {
        continue;
      }
      else {
        otherImg[j].classList.add("unselected");
      }
    }
    this.classList.remove("unselected")
    var selectedImg = this.querySelector(".p-img").getAttribute("src");
    // mainImg=selectedImg;
    // console.log(mainImg.innerText);
    // console.log(selectedImg);
    mainImg.setAttribute("src", selectedImg);
    
  })
}

//quantity button
var quantityInput=document.querySelector(".quantity-input");
var incr=document.querySelector(".quant-up");
var decr=document.querySelector(".quant-down");
var productQuant=0;
incr.addEventListener("click", function(){
  // console.log("incr");
  productQuant++;
  quantityInput.setAttribute("value", productQuant);
})
decr.addEventListener("click", function(){
  // console.log("decr");
  if(productQuant>0){
    productQuant--;
    quantityInput.setAttribute("value", productQuant);
  }
})

//single-product-details ->  wishlist-button

var wishlistBigBtn=document.querySelector(".single-product-details .wishlist-button");
wishlistBigBtn.addEventListener("click", function(){
  // console.log(wishlistBigBtn.textContent);
  wishlistBigBtn.textContent="ADDED TO WISHLIST";
  wishlistBigBtn.style.opacity=".8";
})

// mainImg.addEventListener("click", ()=>{
//   // console.log("clickd");
// })