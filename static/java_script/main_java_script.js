var page_a = "index_text";
var page_b = "";



const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const sliderIcon = document.getElementById('slider')

      menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active')
        showcase.classList.toggle('active')

      })


function changeIcon(){
    console.log(menuToggle.className);
    if (menuToggle.className == "toggle") {
      sliderIcon.className = "slider-icon fas fas fa-not-equal";
    }else{
      sliderIcon.className = "slider-icon fas fa-sliders-h";
    };
  };

    
  


      // Set the date we're counting down to
var countDownDate = new Date("Mar 19, 2022 19:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("runDown").innerHTML = days + "t " + hours + "s "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("runDown").innerHTML = "LÄUFT";
  }
}, 1000);




function pageTranstions(b, picture) {
  var from_page = document.getElementById(page_a);
  var to_page = b;
  var tittle_image = document.getElementById("tittle_image");

  //var title_text = document.getElementById("text");
  //
  //var events = document.getElementById("textone");

  from_page.style.transition = "1s";
  from_page.style.opacity = 0;

  tittle_image.style.transition = "1s";
  tittle_image.style.opacity = 0;
  sliderIcon.className = "slider-icon fas fa-sliders-h";
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  
  

 // title_text.style.animation = "anime_out 1s";
  //showcase.classList.toggle('active')


  setTimeout(() => {
    tittle_image.src = picture;
  }, 1000);


  setTimeout(() => {
    
    page_a = to_page.id;
    
    from_page.style.display = 'none';
    


    tittle_image.style.transition = "1s";
    tittle_image.style.opacity = 1;

    to_page.style.transition = "1s";
    to_page.style.opacity = 1;
    to_page.style.display='inline'; 
    
    
  
    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 2000);
};


function pageFromLogoTranstions(b, picture) {
  var from_page = document.getElementById(page_a);
  var to_page = b;
  var tittle_image = document.getElementById("tittle_image");

  //var title_text = document.getElementById("text");
  //
  //var events = document.getElementById("textone");

  from_page.style.transition = "1s";
  from_page.style.opacity = 0;

  tittle_image.style.transition = "1s";
  tittle_image.style.opacity = 0;
  
  

 // title_text.style.animation = "anime_out 1s";
  //showcase.classList.toggle('active')


  setTimeout(() => {
    tittle_image.src = picture;
  }, 1000);


  setTimeout(() => {
    
    page_a = to_page.id;
    
    from_page.style.display = 'none';
    


    tittle_image.style.transition = "1s";
    tittle_image.style.opacity = 1;

    to_page.style.transition = "1s";
    to_page.style.opacity = 1;
    to_page.style.display='inline'; 
    
    
  
    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 2000);
};


