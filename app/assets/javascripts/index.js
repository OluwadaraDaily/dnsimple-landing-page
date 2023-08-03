document.addEventListener("DOMContentLoaded", (event) => {
    const button1 = document.getElementById("btn1")
    const button2 = document.getElementById("btn2")
    const closeTag = document.getElementById("close-tag")
    const modal = document.getElementById("modal")
    const overlay = document.getElementById("overlay")

    const toggleModalOnClick = (event) => {
      if(modal.style.display === "none") {
        modal.style.display = "block";
        overlay.style.display = "block";
      } else {
        modal.style.display = "none";
        overlay.style.display = "none";
      }
    }

    button1.addEventListener('click', toggleModalOnClick);
    button2.addEventListener('click', toggleModalOnClick);
    closeTag.addEventListener('click', toggleModalOnClick);
  })
