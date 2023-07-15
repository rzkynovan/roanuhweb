// Change Bg nav while scrolldown
function scrollHeader(){
    const nav = document.getElementById('header')
    const icon = document.getElementById('navIcon')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) 
        nav.classList.add('bg-black'); 

        else nav.classList.remove('bg-black')
    if(this.scrollY >= 400) icon.classList.add('scale-75'); else icon.classList.remove('scale-75')
}
window.addEventListener('scroll', scrollHeader)


// Change Active class on navbar
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 400;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('nav-active')
        }else{
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('nav-active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// Parallax Event
document.addEventListener("mousemove", parallax);
    function parallax(e){
      document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }


// Swiper Exploration
var swiper = new Swiper(".swiperExploration", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides:true,
    initialSlide:1,
    loop:true,
    grapCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    slidesPerView:1,
      breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        1024: {
            slidesPerView: 3,
            spaceBetweenSlides: 24
        }
    }

  });