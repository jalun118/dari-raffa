const BtnMau = document.querySelector(".btn-mau");
const BtnNot = document.querySelector(".btn-not");
const C_Alert = document.querySelector(".alert-1");
const Bg_Alert = document.querySelector(".bg-alert");
const BtnClose = document.querySelector(".btn-close");

BtnMau.addEventListener("click", () => {
    if (C_Alert.classList != "show") {
        C_Alert.classList.add("show");
    }
});

BtnClose.addEventListener("click", () => {
    if (C_Alert.classList != "show") {
        C_Alert.classList.remove("show");
        open("asset/next.html", "_parent")
    }
});
C_Alert.addEventListener("click", () => {
    if (C_Alert.classList != "show") {
        C_Alert.classList.remove("show");
        open("asset/next.html", "_parent")
    }
});

BtnNot.addEventListener("click", () => {
    let RandX = Math.floor(Math.random() * 300);
    let RandY = Math.floor(Math.random() * 100);
    BtnNot.style.transform = `translateX(${RandX}px) translateY(${RandY}px)`;
    // console.log(`ok ${RandX}px`)
});

const Btn = document.querySelectorAll(".btn");
Btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        btn.appendChild(ripples);
        setTimeout(() => {
            ripples.remove();
        }, 500);
    });
});