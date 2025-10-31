// dog-adoption.js

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Select all images inside the list
  const dogImages = document.querySelectorAll("ul li img");

  // Loop through each image and add an event listener
  dogImages.forEach((img) => {
    img.addEventListener("click", function() {
      alert(`You clicked on a ${img.alt}! 🐾`);
    });

    // Optional: Add hover effect using JS
    img.addEventListener("mouseover", function() {
      img.style.transform = "scale(1.05)";
      img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseout", function() {
      img.style.transform = "scale(1)";
    });
  });
});
