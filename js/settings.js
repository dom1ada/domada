const settings = document.querySelector(".settings");
const button = document.getElementById("settings-button");

if (settings && button) {
    button.addEventListener("click", (e) => {
        e.stopPropagation(); // prevents immediate closing
        settings.classList.toggle("open");
    });

    document.addEventListener("click", () => {
        settings.classList.remove("open");
    });
}