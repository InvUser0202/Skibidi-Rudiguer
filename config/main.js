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

  filteredGames.forEach((game) => {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game");

    const gameImage = document.createElement("img");

    // Check if the game URL is a full external link or a relative path
    if (game.url.startsWith("http")) {
      gameImage.src = game.url; // Use the full external URL for the image
    } else {
      gameImage.src = `${serverUrl1}/${game.url}/${game.image}`; // Use relative path for the image
    }

    gameImage.alt = game.name;

    // Handle navigation based on the type of URL
    gameImage.onclick = () => {
      if (game.url.startsWith("http")) {
        window.location.href = game.url; // Navigate directly to the external URL
      } else {
        window.location.href = `play.html?gameurl=${game.url}/`; // Navigate using local play.html
      }
    };

    const gameName = document.createElement("p");
    gameName.textContent = game.name;

    gameDiv.appendChild(gameImage);
    gameDiv.appendChild(gameName);
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
document.getElementById("subtitle").innerHTML = `${subtext}`;

