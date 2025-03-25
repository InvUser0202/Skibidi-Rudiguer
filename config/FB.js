// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Create the button element
    const fullscreenBtn = document.createElement("button");
    fullscreenBtn.textContent = "Go Fullscreen";
    fullscreenBtn.id = "fullscreenBtn";

    // Style the button
    fullscreenBtn.style.position = "fixed";
    fullscreenBtn.style.top = "10px";
    fullscreenBtn.style.left = "10px";
    fullscreenBtn.style.padding = "10px 20px";
    fullscreenBtn.style.backgroundColor = "#4CAF50";
    fullscreenBtn.style.color = "white";
    fullscreenBtn.style.border = "none";
    fullscreenBtn.style.borderRadius = "5px";
    fullscreenBtn.style.cursor = "pointer";

    // Add hover effect
    fullscreenBtn.addEventListener("mouseover", () => {
        fullscreenBtn.style.backgroundColor = "#45a049";
    });
    fullscreenBtn.addEventListener("mouseout", () => {
        fullscreenBtn.style.backgroundColor = "#4CAF50";
    });

    // Add click event to trigger fullscreen mode
    fullscreenBtn.addEventListener("click", () => {
        const gameContainer = document.documentElement; // Use document or a specific container
        if (gameContainer.requestFullscreen) {
            gameContainer.requestFullscreen();
        } else if (gameContainer.mozRequestFullScreen) {
            gameContainer.mozRequestFullScreen();
        } else if (gameContainer.webkitRequestFullscreen) {
            gameContainer.webkitRequestFullscreen();
        } else if (gameContainer.msRequestFullscreen) {
            gameContainer.msRequestFullscreen();
        }
    });

    // Append the button to the body of the webpage
    document.body.appendChild(fullscreenBtn);
});
