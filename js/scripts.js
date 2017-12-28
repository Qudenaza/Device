function showSlides(n) {
    var slides = document.getElementsByClassName("slide"),
        dots = document.getElementsByClassName("slider__control");
        
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[n].style.display = "flex";
    dots[n].className += " active";
};

showSlides(0);

// var x = 0;

// setInterval(function() {
//     showSlides(x++);
//     x > 2 ? x = 0 : x;
// }, 4000)

function showAdvantages(n) {
    var advantages = document.querySelectorAll(".advantages__info"),
        controls = document.querySelectorAll(".advantages__item");

    
    for (var i = 0; i < advantages.length; i++) {
        advantages[i].style.display= "none";
    }

    for (var i = 0; i < controls.length; i++) {
        controls[i].className = controls[i].className.replace("choosed", "");
    }

    advantages[n].style.display = "block";
    controls[n].className += " choosed";
}

showAdvantages(0);


function showModal() {
    var modalOpen = document.querySelector(".contacts__btn"),
        modalClose = document.querySelector(".modal__close"),
        modal = document.querySelector(".modal");

    modalOpen.addEventListener("click", function(evt) {
        evt.preventDefault();
        modal.style.display = "block";
    })   

    modalClose.addEventListener("click", function() {
        modal.style.display = "none";
    })
};

showModal();



