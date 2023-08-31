var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
// console.log(tablinks )
// console.log(tabcontents)
function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
    event.currentTarget.classList.add('active-link');

}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
 // Get a reference to the target element
const link = document.querySelector('a');

// Add an event listener for the 'click' event
link.addEventListener('click', function(event) {
  // Prevent the default action of the link
  event.preventDefault();

  // Add the 'active-link' class to the current target element
  event.currentTarget.classList.add('active-link');
});

  document.getElementById(tabname).classList.add("active-tab")
  document.getElementById(tabname).classList.add("active-tab")

}


// // -----------certificates-------------
// const slides = document.querySelectorAll(".slide");
// const nextSlide = document.querySelector(".btnSlider-next");
// const prevSlide = document.querySelector(".btnSlider-prev");
// let curSlide = 0;
// const maxSlide = slides.length - 1;

// // Rest of your JavaScript code

// // Next slide button functionality
// nextSlide.addEventListener("click", function () {
//   curSlide = (curSlide + 1) % slides.length;
//   updateSlidePosition();
// });

// // Previous slide button functionality
// prevSlide.addEventListener("click", function () {
//   curSlide = (curSlide - 1 + slides.length) % slides.length;
//   updateSlidePosition();
// });

// // Rest of your JavaScript code


// // Function to update slide positions
// function updateSlidePosition() {
//   slides.forEach((slide, index) => {
//     const offset = (index - curSlide) * 100;
//     slide.style.transform = `translateX(${offset}%)`;
//   });
// }

// // Automatically advance to the next slide every few seconds
// function autoAdvanceSlide() {
//   curSlide = (curSlide + 1) % slides.length;
//   updateSlidePosition();
// }

// setInterval(autoAdvanceSlide, 5000); // Change slide every 5 seconds
