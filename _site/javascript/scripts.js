$(document).ready(function() {
//jQuery HERE
function scrollToSection(event) {
  
  // Log 
  console.log('Clicked on anchor element');
    
  // Prevent jumping to the section (default behaviour)
  //event.preventDefault();
  
  // Get anchor element hash
  var element = event.currentTarget,
      hash = element.hash;
 
  // Scroll the body and HTML to the ID equal to hash
  $('html, body').animate({
    
    // Find the offset of the targeted element on the page
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Set URL to clicked hash
    window.location.hash = hash;

  });
   
}

/*
**  Bind events
*/
$('a').on('click', scrollToSection);

//sticky-nav code 
// Attach sticky function to ID "sticky-button"
  $("#sticky-button").sticky({
    topSpacing: 0
  });

//This is the code for the mobile navigation 
function changeBodyClass(event) {
  
  // Log 
  console.log('Clicked on toggle menu class');
    
  // Prevent default event (clicking a link)
  event.preventDefault();
  
  // Toggle body class
  $('#container').toggleClass('mobile-menu-visible');
  
}

/*
**  Bind events
*/
$('a').on('click', changeBodyClass);  

});// This closes your JQuery- all JQuery code must go inside

  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
