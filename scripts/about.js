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

// Brand Page Slide Show Function
$(document).ready(function () {
  $('.brand-piece').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 5,
slidesToScroll: 1,
centerMode:false,     
  draggable:true,    
  arrows:false,    
responsive: [
{
breakpoint: 1024,
settings: {
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  dots: true
}
},
{
breakpoint: 600,
settings: {
  slidesToShow: 2,
  slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 2,
  slidesToScroll: 1
}
}
]
});
})

// Footer Input line Function 
var inputElement = document.getElementById("myInput");

inputElement.addEventListener("mouseenter", function() {
  this.style.borderBottom = "1px solid black";
});

inputElement.addEventListener("mouseleave", function() {
  this.style.borderBottom = "none";
});