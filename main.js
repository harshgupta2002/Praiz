// var lastScroll=0;
var navbar = document.querySelector("#header .fixed-top");
// navbar.style.height="3.5rem"
window.addEventListener("scroll", () => {
  var scrollTop = (document.documentElement.scrollTop);
  console.log(scrollTop);
  if (scrollTop > 70) {
    navbar.classList.remove("expanded")
    dropDown.classList.remove("md");
  }
  else if (scrollTop < 145) {
    navbar.classList.add("expanded")
  }
  lastScroll = scrollTop;
})


var navbtn = (document.querySelector("#header .nav-right-btn button"));
console.log(navbtn);
navbtn.addEventListener("click", () => {
  navbar.classList.add("expanded")
})

var dropDownBtn = document.querySelector(".product-dropdown");
var dropDown = document.querySelector("#header .navbar-nav .nav-item .drop-down");
dropDownBtn.addEventListener("click", () => {
  // console.log("clicked");
  dropDown.classList.toggle("md");

})

var addToCart = document.querySelectorAll(".add-to-cart");
for (var i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function () {
    this.innerHTML = "Added to Cart";
    this.style.backgroundColor = "#132043";
    this.style.color = "white";
  });
}

//wishlist btn

var wishListButton = document.querySelectorAll(".wishlist-button-small");
for (var i = 0; i < wishListButton.length; i++) {
  wishListButton[i].addEventListener("click", function () {
    this.innerHTML = '<i class="fa-solid fa-heart" style="color: #a45d47;"></i>';
  })
}

// wishlist button for mobile

var wishListButtonMob = document.querySelectorAll(".wishlist-button-small-mob")
for (var i = 0; i < wishListButtonMob.length; i++) {
  wishListButtonMob[i].addEventListener("click", function () {
    this.innerHTML = "Added to Wishlist";
    this.style.backgroundColor = "#a45d47";
    this.style.color = "white";
    this.style.opacity = ".6"
  })
}




