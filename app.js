const slider = document.querySelector('.image-slider');
let scrollPosition = 0; // Initial scroll position
const rowHeight = 118; // Height of each row including gap
const totalRows = 8; // Total number of rows

// Add mouse scroll event listener
slider.addEventListener('wheel', (event) => {
  event.preventDefault();
  const maxScroll = (totalRows) * rowHeight; // Total scrollable height

  // Adjust scroll position
  if (event.deltaY > 0) {
    // Scroll down (upwards in terms of grid)
    scrollPosition = Math.min(scrollPosition + rowHeight, maxScroll);
  } else {
    // Scroll up (downwards in terms of grid)
    scrollPosition = Math.max(scrollPosition - rowHeight, 0);
  }

  // Apply transform to slider
  slider.style.transform = `translateY(-${scrollPosition}px)`;
});
