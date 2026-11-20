const password = "DbghgneWP7nb9ciF7RD4h9k3owV17QozhDMTWATB7dYW";
const lockScreen = document.getElementById("lock-screen");
const video = document.getElementById("bg-video");
const loginBtn = document.getElementById("login-btn");
const passwordInput = document.getElementById("password-input");
const lockBtn = document.getElementById("lock-btn");

loginBtn.addEventListener("click", () => {
    if (passwordInput.value === password) {
        lockScreen.style.display = "none";
        video.play();
    } else {
        alert("Password Salah");
    }
});

lockBtn.addEventListener("click", () => {
    video.pause();
    lockScreen.style.display = "flex";
    passwordInput.value = "";
});

function updateTime() {
    const now = new Date();
    document.getElementById("tokyo-time").textContent = now.toLocaleTimeString("en-GB", { timeZone: "Asia/Tokyo" });
    document.getElementById("ny-time").textContent = now.toLocaleTimeString("en-GB", { timeZone: "America/New_York" });
}

setInterval(updateTime, 1000);
updateTime();
