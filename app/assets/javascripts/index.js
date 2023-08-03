document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM is ready')
    const button1 = document.getElementById("btn1")
    const button2 = document.getElementById("btn2")
    const closeTag = document.getElementById("close-tag")
    const modal = document.getElementById("modal")
    const overlay = document.getElementById("overlay")

    let modalShow = false

    // modal.style.display = "none"

    const openModalOnClick = (event) => {
      const buttonId = event.target.id;
      console.log(`Button ${buttonId} clicked!`);
      if(modal.style.display === "none") {
        modal.style.display = "block";
        overlay.style.display = "block";
      } else {
        modal.style.display = "none";
        overlay.style.display = "none";
      }

      console.log('Modal Styling ->', modal.style.display);
    }

    console.log('BTN 1 ->', button1);
    console.log('BTN 2 ->', button2)
    console.log('MODAL ->', modal)

    button1.addEventListener('click', openModalOnClick);
    button2.addEventListener('click', openModalOnClick);
    closeTag.addEventListener('click', openModalOnClick);
  })
