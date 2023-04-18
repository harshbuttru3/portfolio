var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
// console.log(tablinks )
// console.log(tabcontents)
function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
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