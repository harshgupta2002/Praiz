const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
  button.addEventListener('click', cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add('clicked');
}

//Buynow button

const mainAddToCartBtn=document.querySelectorAll(".cart-button.add-to-cart");
const buyNowBtn = document.querySelectorAll(".buynow-button");
const buyNowBtnText = document.querySelectorAll(".buynow-button .button-text");
const productContainer = document.querySelector(".container.soldout");
const mainAddToCartBtnMob=document.querySelector(".cart-mob.add-to-cart");
const buyNowBtnMob=document.querySelector(".buynow-mob.buy_now");

if (productContainer.classList.contains("soldout")) {
    // console.log(buyNowBtn[0].innerHTML);
    for(var i=0; i<buyNowBtn.length; i++){
      buyNowBtnText[i].innerHTML="SOLD OUT";
      buyNowBtn[i].style.opacity=".6";
      mainAddToCartBtn[i].style.opacity=".5";
    }
  mainAddToCartBtnMob.style.opacity=".4"
  buyNowBtnMob.innerText="SOLD OUT"
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
    // //console.log("clicked");
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
    // //console.log(mainImg.innerText);
    // //console.log(selectedImg);
    mainImg.setAttribute("src", selectedImg);

  })
}

//quantity button
var quantityInput = document.querySelector(".quantity-input");
var incr = document.querySelector(".quant-up");
var decr = document.querySelector(".quant-down");
var productQuant = 0;
incr.addEventListener("click", function () {
  // //console.log("incr");
  productQuant++;
  quantityInput.setAttribute("value", productQuant);
})
decr.addEventListener("click", function () {
  // //console.log("decr");
  if (productQuant > 0) {
    productQuant--;
    quantityInput.setAttribute("value", productQuant);
  }
})

//single-product-details ->  wishlist-button

var wishlistBigBtn = document.querySelector(".single-product-details .wishlist-button");
wishlistBigBtn.addEventListener("click", function () {
  // //console.log(wishlistBigBtn.textContent);
  wishlistBigBtn.textContent = "ADDED TO WISHLIST";
  wishlistBigBtn.style.opacity = ".8";
})

// mainImg.addEventListener("click", ()=>{
//   // //console.log("clickd");
// })



//review secton-> button expansion

var revBtn = document.querySelector(".rev-btn");
var custRev = document.querySelector(".review-inner .cust-rev");
var doubtBtn = document.querySelector(".doubt-btn");
var custDoubt = document.querySelector(".cust-doubt");

// //console.log(custRev.classList);
revBtn.addEventListener("click", function () {
  // //console.log("clicked");
  if (custDoubt.classList.contains("doubt")) {
    custDoubt.classList.remove("doubt");
  }
  custRev.classList.toggle("rev");
})

// //console.log(custDoubt.classList);
doubtBtn.addEventListener("click", function () {
  if (custRev.classList.contains("rev")) {
    custRev.classList.remove("rev");
  }
  custDoubt.classList.toggle("doubt")
})


// Dynamic Banner
// Function to set the background image based on window width
function setDynamicBanner() {
  const category = document.getElementById('nav_loc').innerHTML;
  const element = document.getElementById('cat-banner');
  const windowWidth = window.innerWidth;

  //console.log("Loc: ", category);

  let imageUrl;
  if (windowWidth <= 575.98) {
    imageUrl = `/images/Banner/${category}/mob.jpg`;
  } else {
    imageUrl = `/images/Banner/${category}/pc.jpg`;
  }

  element.style.backgroundImage = `url("${imageUrl}")`;
}

// Initial call to set the background image on page load
setDynamicBanner();

// Add event listener for window resize
window.addEventListener('resize', setDynamicBanner);

// Dynamic Banner End
