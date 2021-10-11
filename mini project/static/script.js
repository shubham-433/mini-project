


/*for login*/
let login_btn=document.getElementById("login-btn");
let login_contianer=document.querySelector(".login-container");
console.log(login_btn)
login_btn.addEventListener("click",function(){
    let login_contianer=document.querySelector(".login-container");
    console.log(login_contianer);

   if(login_contianer.style.display=="none"){
       login_contianer.style.display="block";
   }else{
       login_contianer.style.display="none";
   }
});




let login =document.getElementById('login');
let singUp =document.getElementById('signUp');
let newAccountLink =document.getElementById("newAccountLink");
let singUpLink =document.getElementById("singUpLink");
let close_login=document.getElementById("close-login");
console.log(close_login);




newAccountLink.addEventListener('click',()=>{
    login.classList.add("hidden");
    singUp.classList.remove("hidden");
    
});

singUpLink.addEventListener('click',()=>{
    login.classList.remove("hidden");
    signUp.classList.add("hidden")
})

close_login.addEventListener('click',()=>{
    login_contianer.style.display='none';

})



// for slides

  // for manually change the slide 
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
      var slides = document.getElementsByClassName("image");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
    
      slides[slideIndex - 1].style.display = "block";
    //   dots[slideIndex - 1].className += " active";
  }

  // for automatic

  var myIndex = 0;
  function carousel() {
var i;
var x = document.getElementsByClassName("image");

// console.log(x.length);
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
// console.log("hi")  
}
myIndex++;
//   console.log(myIndex)
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  

setTimeout(carousel, 5000); // Change image every 2 seconds
}
carousel();