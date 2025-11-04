// Run after the DOM loads
window.onload = function () {
  const list = document.querySelector("ul");
  const listItems = document.querySelectorAll("ul li");
  const links = document.querySelectorAll("ul li a");
  const images = document.querySelectorAll("ul li a img");

  // Check if list, links, and images exist
  if (list && listItems.length === 2 && links.length === 2 && images.length === 2) {
    console.log("✅ Dog Adoption page structure is correct!");
  } else {
    console.error("❌ Some elements are missing or not structured correctly.");
  }

  // Optional: Add hover effect in console for debugging
  images.forEach((img, index) => {
    img.addEventListener("mouseenter", () => {
      console.log(`Hovered on image ${index + 1}`);
    });
  });
};