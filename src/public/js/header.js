function openNav() {
    document.getElementById("mySidenav").style.width = "328px"; 
    document.getElementById("body").style.opacity = "0.2";
    document.body.style.overflow = "hidden";
  }    
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body").style.opacity = "1";
    document.body.style.overflow = "auto";
  }
  // account-right
  function openNav_right() {
    document.getElementById("mySidenav_right").style.width = "328px";
    document.getElementById("body").style.opacity = "0.2";
    document.body.style.overflow = "hidden";
  }
  
  function closeNav_right(){
    document.getElementById("mySidenav_right").style.width = "0";
    document.getElementById("body").style.opacity = "1";
    document.body.style.overflow = "auto";
  }

  $(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $(".container-fluid").addClass("sticky");
      }
    })
  });
// ------------banner---------------
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });


  