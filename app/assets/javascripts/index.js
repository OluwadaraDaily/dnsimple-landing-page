// Define the function to toggle the modal and overlay display
const toggleModal = () => {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");

  if (modal.style.display === "none") {
    modal.style.display = "block";
    overlay.style.display = "block";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
};

// Register the event listener on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const closeTag = document.getElementById("close-tag");
  closeTag.addEventListener('click', toggleModal);
});

export { toggleModal }
