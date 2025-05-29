document.addEventListener("DOMContentLoaded", function () {
    // Text options for rotation
    const names = ["สวัสดีครับ ผมชื่ออั่งเปา !", "こんにちは、アンパオです！", "Hi, I'm Aungpao !"];
    let index = 0;
    const nameElement = document.getElementById("name");

    function rotateText() {
        if (!nameElement) return; // Ensure element exists

        nameElement.style.opacity = "0"; // Fade out

        setTimeout(() => {
            nameElement.textContent = names[index];
            nameElement.style.opacity = "1"; // Fade in
            index = (index + 1) % names.length;
        }, 800); // Delay for smooth transition
    }

    // Rotate every 4 seconds
    setInterval(rotateText, 4000);

    // Detect dark mode based on `data-theme` attribute
    function updateTextColor() {
        const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
        if (nameElement) {
            nameElement.style.color = isDarkMode ? "white" : "black";
        }
    }

    // Initial check and listen for attribute changes
    updateTextColor();
    const observer = new MutationObserver(updateTextColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
});
