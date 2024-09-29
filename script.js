var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});










// modal.js

// Get the modal element by ID
var modal = document.getElementById("addSkillModal");

// Get the button that opens the modal
var btn = document.getElementById("addSkillBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
