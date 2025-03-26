// This changes the title of your site

var sitename = "Skibidi Rudiguer Games"; // Change this to change the name of your website.
var subtext = "Its coming out🤤"; // set the subtext

// more settings in main.css



// END CONFIG
// DO NOT MODIFY IF YOU DO NOT KNOW WHAT YOUR DOING!

import "/./config/custom.js";

var serverUrl1 = "https://gms.parcoil.com";
var currentPageTitle = document.title;
document.title = `${currentPageTitle} | ${sitename}`;
let gamesData = []; 

function displayFilteredGames(filteredGames) {
  const gamesContainer = document.getElementById("gamesContainer");
  gamesContainer.innerHTML = ""; 

  function displayFilteredGames(filteredGames) {
  const gamesContainer = document.getElementById("gamesContainer");
  gamesContainer.innerHTML = ""; 

  filteredGames.forEach((game) => {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game");

    const gameImage = document.createElement("img");
    gameImage.src = `${serverUrl1}/${game.url}/${game.image}`;
    gameImage.alt = game.name;
    gameImage.onclick = () => {
      window.location.href = `play.html?gameurl=${game.url}/`;
    };

    const gameName = document.createElement("p");
    gameName.textContent = game.name;

    // Create the fullscreen button
    const fullscreenButton = document.createElement("button");
    fullscreenButton.textContent = "Go Fullscreen";
    fullscreenButton.onclick = () => {
      if (gameDiv.requestFullscreen) {
        gameDiv.requestFullscreen();
      } else if (gameDiv.webkitRequestFullscreen) { // For Safari
        gameDiv.webkitRequestFullscreen();
      } else if (gameDiv.msRequestFullscreen) { // For IE
        gameDiv.msRequestFullscreen();
      } else {
        alert("Fullscreen mode is not supported in this browser.");
      }
    };

    // Append elements
    gameDiv.appendChild(gameImage);
    gameDiv.appendChild(gameName);
    gameDiv.appendChild(fullscreenButton); // Add the fullscreen button
    gamesContainer.appendChild(gameDiv);
  });
  }


function handleSearchInput() {
  const searchInputValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredGames = gamesData.filter((game) =>
    game.name.toLowerCase().includes(searchInputValue)
  );
  displayFilteredGames(filteredGames);
}


fetch("./config/games.json") 
  .then((response) => response.json())
  .then((data) => {
    gamesData = data;
    displayFilteredGames(data); 
  })
  .catch((error) => console.error("Error fetching games:", error));


document
  .getElementById("searchInput")
  .addEventListener("input", handleSearchInput);

document.getElementById("title").innerHTML = `${sitename}`;

document.getElementById("subtitle").innerHTML = `${subtext}`

