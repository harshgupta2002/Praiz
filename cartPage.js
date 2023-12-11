document.addEventListener("DOMContentLoaded", function () {
    const temp = document.querySelectorAll(".quantity");
    const minus = document.querySelectorAll(".quantity__minus");
    const plus = document.querySelectorAll(".quantity__plus");
    const input = document.querySelectorAll(".quantity__input");

    for (let i = 0; i < temp.length; i++) {
        minus[i].addEventListener("click", function (e) {
            e.preventDefault();
            var value = input[i].value;
            if (value > 1) {
                value--;
            }
            input[i].value = value;
        });

        plus[i].addEventListener("click", function (e) {
            e.preventDefault();
            var value = input[i].value;
            value++;
            input[i].value = value;
        });
    }
});

wishlistBtn = document.querySelectorAll(".w-btn");
console.log(wishlistBtn.length);
for (let i = 0; i < wishlistBtn.length; i++) {
    wishlistBtn[i].addEventListener("click", () => {
        document.querySelectorAll(".w-btn")[i].textContent="Added";
    })
}