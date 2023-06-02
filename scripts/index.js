// DropDown Language 

const mediaIcons = document.querySelector(".socialmediaIcons").querySelectorAll("i")
const options = document.querySelector("#dropdownLanguage")
const optionUsd = document.querySelector("#valueLanguage")
const language = document.querySelector(".languageDropdown")
const value = document.querySelector(".valueDropdown")
const engOption = document.querySelector("#enOptions")
const usdOption = document.querySelector("#usdOptions")

//Menu Options
const homeBtn = document.querySelector('#homeBtn');
const homeDropdown = document.querySelector('.home-dropdown');
const homeIcon = document.querySelector('#homeIcon');
const shopBtn = document.querySelector('#shopBtn');
const shopDropdown = document.querySelector('.shop-dropdown');
const shopIcon = document.querySelector('#shopIcon');
const iconsBtn = document.querySelector('#iconsBtn');
const iconsDropdown = document.querySelector('.icons-dropdown');
const iconsIcon = document.querySelector('#iconsIcon');
const pagesBtn = document.querySelector('#pagesBtn');
const pagesDropdown = document.querySelector('.pages-dropdown');
const pagesIcon = document.querySelector('#pagesIcon');
const docsBtn = document.querySelector('#docsBtn');
const docsDropdown = document.querySelector('.docs-dropdown');
const docsIcon = document.querySelector('#docsIcon');
const searchArea = document.querySelector('#searchbutton');

//Dropdown Language Active Function
mediaIcons.forEach(function(btn) {
  btn.addEventListener('click', function() {
  activeMenu(btn, "activeIcon");
  });
});

searchArea.addEventListener('click', function() {
  activeMenu(searchArea, "lineBlack");
});

options.addEventListener('click', function() {
  makeactiveDrop(engOption,options , language);
});

optionUsd.addEventListener('click', function() {
  makeactiveDrop(usdOption, optionUsd, value);
});




// Menu Options Active Function
homeBtn.addEventListener('click', () => {
    toggleDropdown(homeBtn, homeDropdown, homeIcon)
})

shopBtn.addEventListener('click', () => {
    toggleDropdown(shopBtn, shopDropdown, shopIcon)
})

iconsBtn.addEventListener('click', () => {
    toggleDropdown(iconsBtn, iconsDropdown, iconsIcon)
})

pagesBtn.addEventListener('click', () => {
    toggleDropdown(pagesBtn, pagesDropdown, pagesIcon)
})
docsBtn.addEventListener('click', () => {
    toggleDropdown(docsBtn, docsDropdown, docsIcon)
})


function toggleDropdown(btn,dropdown ,icon) {
    dropdown.classList.toggle('showmenus');
    icon.classList.toggle('Rotate')
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target)) {
            dropdown.classList.remove('showmenus');
            dropdown.style.cursor = "default"
            icon.classList.remove('Rotate')
        }
    })
}

function activeMenu(Element, active) {
    if (Element.classList.contains(active)) {
        Element.classList.remove(active);
    } else {
        Element.classList.add(active);
    }
    document.addEventListener('click', (event) => {
        if (!Element.contains(event.target)) {
            Element.classList.remove(active)
        }
    })
}

function makeactiveDrop(Element, container, showmenus) {
    if (Element.classList.contains("Rotate")) {
        Element.classList.remove("Rotate");
        showmenus.classList.remove("DropAnimate");

    } else {
        Element.classList.add("Rotate");
        showmenus.style.visibility = "visible";
        showmenus.classList.add("DropAnimate");
        showmenus.style.pointerEvents = "";
    }
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target)) {
            Element.classList.remove("Rotate")
            showmenus.style.pointerEvents = "none";
            showmenus.classList.remove("DropAnimate");
        }
    })
}



// Slick Slider Function start
$(document).ready(function() {
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false, 
      fade: false,
      prevArrow: false,
      nextArrow: false
    });

    var slideIndex = 0;
    var slides = $('.slide');

    function startCarousel() {
      slideIndex++; 
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      $('.slider').slick('slickGoTo', slideIndex);
    }

    var carouselInterval = setInterval(startCarousel, 4000);

    function resetInterval() {
      clearInterval(carouselInterval); 
      carouselInterval = setInterval(startCarousel, 4000);
    }
    $('.dot').hover(resetInterval);
  });


// Slick Slider Function end

// Count Down Start
var countDownDate = new Date("Jun 31, 2023 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector('#days').innerHTML = '00';
        document.querySelector('#hours').innerHTML = '00';
        document.querySelector('#minutes').innerHTML = '00';
        document.querySelector('#seconds').innerHTML = '00';
    }
}, 1000);

const container=document.querySelector('.card-container')
