//Login-Reg Page

var loginBtn = document.querySelector(".sign-in");
var regBtn = document.querySelector(".sign-up");
var choose = document.querySelector(".choose-way");
var regHere=document.querySelector(".reg-here");

loginBtn.addEventListener("click", () => {
    if (choose.classList.contains("s-login")){
        return;
    }
    else if(choose.classList.contains("s-reg")){
        choose.classList.add("s-login");
        choose.classList.remove("s-reg");
    }
    else{
        choose.classList.add("s-login");        
    }
})
regBtn.addEventListener("click", () => {
    if (choose.classList.contains("s-reg")){
        return;
    }
    else if(choose.classList.contains("s-login")){
        choose.classList.add("s-reg");
        choose.classList.remove("s-login");
    }
    else{
        choose.classList.add("s-reg");        
    }
})

regHere.addEventListener("click", ()=>{
    choose.classList.add("s-reg");
    choose.classList.remove("s-login");
})