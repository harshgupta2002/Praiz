// Add to cart single product button 
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

//Style Filter

const styleBtn = document.querySelectorAll(".style-btn")[0],
  optionFirst = document.querySelectorAll(".option");

styleBtn.addEventListener("click", () => {
  styleBtn.classList.toggle("open");
});

optionFirst.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text");

    if (checked && checked.length > 0) {
      btnText.innerText = `${checked.length} Selected`;
    }
    else {
      btnText.innerText = "Style";
    }

  })
})

// Price Slider js 

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});


const priceBtn = document.querySelectorAll(".style-btn")[2],
  priceSlider = document.querySelector(".price-slider");

priceBtn.addEventListener("click", () => {
  priceBtn.classList.toggle("open");
});

//Color Filter

const colorBtn = document.querySelectorAll(".style-btn")[1],
  color = document.querySelectorAll(".color");

colorBtn.addEventListener("click", () => {
  colorBtn.classList.toggle("open");
});

let colorChosen = "none";
let colorText = document.querySelector(".color-btn-text");
color.forEach(item => {
  item.addEventListener("click", () => {
    colorChosen = item.innerText;
    if (colorChosen != "none") {
      colorText.innerText = colorChosen;
    }
  })
})

//Sorting Filter

const sortBtn = document.querySelectorAll(".style-btn")[3],
  sort = document.querySelectorAll(".sort");

sortBtn.addEventListener("click", () => {
  sortBtn.classList.toggle("open");
});

let sortChosen = "none";
let sortText = document.querySelector(".sort-btn-text");
sort.forEach(item => {
  item.addEventListener("click", () => {
    sortChosen = item.innerText;
    if (sortChosen != "none") {
      sortText.innerText = sortChosen;
    }
  })
})

//Side Menu

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// toggle 

var filter = document.querySelector(".filter-mob");
var option = document.querySelector(".mobileShow-plist")
filter.addEventListener("click", () => {
  option.classList.toggle("f-clicked");
})

var sideMenuCloseBtn = document.querySelector(".close-side-menu");
sideMenuCloseBtn.addEventListener("click", ()=>{
  option.classList.remove("f-clicked");
})

var sortFilter = document.querySelector(".sort-mob");
sortFilter.addEventListener("click", () => {
  option.classList.toggle("s-clicked");
})

var midMenuCloseBtn = document.querySelector(".close-mid-menu");
midMenuCloseBtn.addEventListener("click", ()=>{
  option.classList.remove("s-clicked");
})