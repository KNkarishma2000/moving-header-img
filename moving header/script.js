window.addEventListener("scroll", function() {
  var header = document.querySelector(".sample-header img");
  var scrollPosition = window.scrollY;

  // Limit the parallax effect to keep the image within the viewport
  var translateY = Math.max(0, scrollPosition / 2);
  
  // Apply the new transform value for the parallax effect
  header.style.transform = `translateY(${translateY}px)`;
});