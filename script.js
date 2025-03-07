document.addEventListener("DOMContentLoaded", function () {
  const hexagons = document.querySelectorAll(".hexagon");

  hexagons.forEach((hex) => {
    hex.addEventListener("click", function () {
      if (this.classList.contains("team1")) {
        this.classList.remove("team1");
        this.classList.add("team2");
      } else if (this.classList.contains("team2")) {
        this.classList.remove("team2");
      } else {
        this.classList.add("team1");
      }
    });
  });
});
