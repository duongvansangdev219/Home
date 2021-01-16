import './style.css';
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// -----------------------comment product------------------------
function write_comment(){
  const i=document.getElementById('write_comment').style.display="block";
}
function review_comment(){
  const i=document.getElementById('review_comment').style.display="block";
}
function send(){
  // var q=document.getElementById('inp')
  var t=document.getElementById('h').value="sa";
  // t.setAttribute()

  // }
  console.log('q');
}