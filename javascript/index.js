// click on image to show
document.querySelectorAll(".box img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-img").style.display = "block";
    document.querySelector(".container > .popup-img > img").src =
      image.getAttribute("src");
  };
});

// click on close icon to hide
document.querySelector(".popup-img span").onclick = () => {
  document.querySelector(".popup-img").style.display = "none";
};

// search image
/*const searchInput = document.getElementById("searchInput");
const images = document.querySelectorAll(".alone");

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    images.forEach(image => {
        const altText = image.alt.toLowerCase();
        if (altText.includes(searchTerm)) {
            image.style.display = "inline-block";
        } else {
            image.style.display = "none";
        }
    });
});
*/