var sideMenu = document.querySelector(".account-side-menu");
var option1 = document.querySelector(".option-1");
var option2 = document.querySelector(".option-2");
var option3 = document.querySelector(".option-3");
var option4 = document.querySelector(".option-4");


option1.addEventListener("click", () => {
    sideMenu.classList = ["account-side-menu"];
    sideMenu.classList.add("option1");
})
option2.addEventListener("click", () => {
    sideMenu.classList = ["account-side-menu"];
    sideMenu.classList.add("option2");
})
option3.addEventListener("click", () => {
    sideMenu.classList = ["account-side-menu"];
    sideMenu.classList.add("option3");
})
option4.addEventListener("click", () => {
    sideMenu.classList = ["account-side-menu"];
    sideMenu.classList.add("option4");
})

//Address Book

var addressCard = document.querySelector(".address-card");
var card = document.querySelectorAll(".Acard");

card[0].addEventListener("click", ()=>{
    addressCard.classList.add("new-card");
    if(addressCard.classList.contains("new-card")){
        option3.addEventListener("click", () => {
           addressCard.classList.remove("new-card");
        })
    };
})
var addressName=document.querySelectorAll(".address-name");
if(sideMenu.classList.contains("option3")){
    console.log(addressName);

}


var editBtn = document.querySelectorAll(".edit-btn");
var submitBtn = document.querySelectorAll(".submit-btn");
var infoInner = document.querySelectorAll(".info-inner");
for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener("click", () => {
        infoInner[i].classList.add("editBtn");
    })
}


//Mobile MyAccount Menu

var mobMenu=document.querySelector(".mob-account-opt");
var mobOpt1=document.querySelector(".mob-option-1");
var mobOpt2=document.querySelector(".mob-option-2");
var mobOpt3=document.querySelector(".mob-option-3");
var mobOpt4=document.querySelector(".mob-option-4");

mobOpt1.addEventListener("click", () => {
    mobMenu.classList = ["mob-account-opt d-block d-sm-none"];
    mobMenu.classList.add("order-history");
})
mobOpt2.addEventListener("click", () => {
    mobMenu.classList = ["mob-account-opt d-block d-sm-none"];
    mobMenu.classList.add("praiz-coins");
})
mobOpt3.addEventListener("click", () => {
    mobMenu.classList = ["mob-account-opt d-block d-sm-none"];
    mobMenu.classList.add("address-book");
})
mobOpt4.addEventListener("click", () => {
    mobMenu.classList = ["mob-account-opt d-block d-sm-none"];
    mobMenu.classList.add("my-account");
})
