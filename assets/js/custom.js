// =================== preloader js  ================== //
document.addEventListener('DOMContentLoaded', function() {
    var preloader = document.querySelector('.preloader');
    preloader.style.transition = 'opacity 0.5s ease';
    // Hide the preloader 1 second (1000 milliseconds) after DOM content is loaded
    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500); // .5 seconds for the fade-out transition
    }, 1000); // 1 second delay before starting the fade-out effect
});
// =================== preloader js end ================== //


// =================== light and dark start ================== //

const colorSwitcher = document.getElementById('btnSwitch');

switchThemeByUrl();
updateThemeColor(localStorage.getItem('theme') || 'dark'); // Default to dark theme

colorSwitcher.addEventListener('click', () => {
    const theme = localStorage.getItem('theme');
    updateThemeColor(theme === 'dark' ? 'light' : 'dark');
});

function updateThemeColor(themeMode) {
    document.documentElement.setAttribute('data-bs-theme', themeMode);
    localStorage.setItem('theme', themeMode);
    colorSwitcher.classList.toggle('dark-switcher', themeMode === 'dark');
    changeImage(themeMode);
}

function switchThemeByUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');
    if (!theme) {
        localStorage.setItem('theme', 'dark'); // Set default theme to dark if not specified
    }
}

// =================== light and dark end ================== //





// =================== Change image path start ================== //


function changeImage(themeMode = 'light') {

    const icon = document.querySelector('#btnSwitch img');


    if (themeMode === "dark") {

        icon.src = 'assets/images/icon/sun.svg';
        var images = document.querySelectorAll('img.dark');

        for (var i = 0; i < images.length; i++) {
            var oldSrc = images[i].src;
            oldSrc = oldSrc.replace("-dark.", ".");
            var oldIndex = oldSrc.lastIndexOf(".");
            var baseName = oldSrc.slice(0, oldIndex);
            var extension = oldSrc.slice(oldIndex);
            var newSrc = baseName + "-dark" + extension;
            images[i].src = newSrc;
        }
    } else {
        icon.src = 'assets/images/icon/moon.svg';
        var images = document.querySelectorAll('img.dark');

        for (var i = 0; i < images.length; i++) {
            var oldSrc = images[i].src;
            var newSrc = oldSrc.replace("-dark.", ".");
            images[i].src = newSrc;
        }
    }

}


// =================== Change image path end ================== //









// =================== header js start here ===================


// Add class 'menu-item-has-children' to parent li elements of '.submenu'
var submenuList = document.querySelectorAll("ul>li>.submenu");
submenuList.forEach(function(submenu) {
    var parentLi = submenu.parentElement;
    if (parentLi) {
        parentLi.classList.add("menu-item-has-children");
    }
});

// Fix dropdown menu overflow problem
var menuList = document.querySelectorAll("ul");
menuList.forEach(function(menu) {
    var parentLi = menu.parentElement;
    if (parentLi) {
        parentLi.addEventListener("mouseover", function() {
            var menuPos = menu.getBoundingClientRect();
            if (menuPos.left + menu.offsetWidth > window.innerWidth) {
                menu.style.left = -menu.offsetWidth + "px";
            }
        });
    }
});



// Toggle menu on click

var menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.stopPropagation(); // prevent the event from bubbling up to parent elements
        var element = link.parentElement;
        if (parseInt(window.innerWidth, 10) < 1200) {
            if (element.classList.contains("open")) {
                element.classList.remove("open");
                element.querySelector("ul").style.display = "none";
            } else {
                element.classList.add("open");
                element.querySelector("ul").style.display = "block";
            }
        }
    });
});




// Toggle header bar on click
var headerBar = document.querySelector(".header-bar");
headerBar.addEventListener("click", function() {
    headerBar.classList.toggle("active");
    var menu = document.querySelector(".menu");
    if (menu) {
        menu.classList.toggle("active");
    }
});




//Header
var fixedTop = document.querySelector("header");
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        fixedTop.classList.add("header-fixed", "fadeInUp");
    } else {
        fixedTop.classList.remove("header-fixed", "fadeInUp");
    }
});


// =================== header js end here =================== //




//Animation on Scroll initializing
AOS.init();




// =================== custom trk slider js here =================== //

// component slider here
const Partner = new Swiper('.partner__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 25,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 2000,
});



// blog  slider here
const blog = new Swiper('.blog__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        }
    },

    autoplay: true,
    speed: 500,
    navigation: {
        nextEl: ".blog__slider-next",
        prevEl: ".blog__slider-prev",
    },
});

// testimonial slider

const testimonial = new Swiper('.testimonial__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
    },

    autoplay: true,
    speed: 500,

    navigation: {
        nextEl: ".testimonial__slider-next",
        prevEl: ".testimonial__slider-prev",
    },
});


// testimonial slider 2
const testimonial2 = new Swiper('.testimonial__slider2', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },

    autoplay: true,
    speed: 500,

    navigation: {
        nextEl: ".testimonial__slider-next",
        prevEl: ".testimonial__slider-prev",
    },
});



// testimonial slider

const testimonial3 = new Swiper('.testimonial__slider3', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    autoplay: true,
    speed: 500,
});

// roadmap slider 
const roadmapSlider = new Swiper('.roadmap__slider', {

    grabCursor: true,
    // loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 10,
        }

    },

    autoplay: true,
    speed: 500,

});

// =================== custom trk slider end here =================== //




// =================== scroll js start here =================== //

// Show/hide button on scroll
window.addEventListener('scroll', function() {
    var scrollToTop = document.querySelector('.scrollToTop');

    if (scrollToTop) {
        if (window.pageYOffset > 300) {
            scrollToTop.style.bottom = '7%';
            scrollToTop.style.opacity = '1';
            scrollToTop.style.transition = 'all .5s ease';
        } else {
            scrollToTop.style.bottom = '-30%';
            scrollToTop.style.opacity = '0';
            scrollToTop.style.transition = 'all .5s ease';
        }
    }
});

var scrollToTop = document.querySelector('.scrollToTop');

if (scrollToTop) {

    // Click event to scroll to top
    scrollToTop.addEventListener('click', function(e) {
        e.preventDefault();
        var scrollDuration = 100; // Set scroll duration in milliseconds
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });
}

// =================== scroll js end here =================== //



// =================== count start here =================== //
new PureCounter();
// =================== count end here =================== //




// =================== rtl icon direction chnage start here =================== //
// Get the HTML tag
const htmlTag = document.querySelector('html');

// Function to toggle the icon directions
function toggleAllIconsDirection() {
    const icons = document.querySelectorAll('i');

    icons.forEach((icon) => {
        if (icon.classList.contains("fa-arrow-right") || icon.classList.contains("fa-angle-right")) {
            icon.classList.remove("fa-arrow-right", "fa-angle-right");
            icon.classList.add("fa-arrow-left", "fa-angle-left");
        } else if (icon.classList.contains("fa-arrow-left") || icon.classList.contains("fa-angle-left")) {
            icon.classList.remove("fa-arrow-left", "fa-angle-left");
            icon.classList.add("fa-arrow-right", "fa-angle-right");
        }
    });
}

// Check if the HTML tag has the dir="rtl" attribute
if (htmlTag.getAttribute('dir') === 'rtl') {
    toggleAllIconsDirection();
}
// =================== rtl icon direction chnage end here =================== //

const form = document.getElementById('investmentForm');
const investmentAmount = document.getElementById('investmentAmount');
const planSelect = document.getElementById('planSelect');
const capitalInvested = document.getElementById('capitalInvested');
const potentialROI = document.getElementById('potentialROI');
const numberOfDays = document.getElementById('numberOfDays');
const total = document.getElementById('total');
const errorFeedback = document.querySelector('.invalid-feedback');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const amount = parseFloat(investmentAmount.value);
  const selectedPlan = planSelect.value;

  if (selectedPlan === 'beginners' && (amount < 300 || amount > 999)) {
    errorFeedback.textContent = "Amount must be between $300 and $999.";
    investmentAmount.classList.add('is-invalid');
    return;
  } else if (selectedPlan === 'professional' && (amount < 3000 || amount > 8000)) {
    errorFeedback.textContent = "Amount must be between $3000 and $8000.";
    investmentAmount.classList.add('is-invalid');
    return;
  } else if (selectedPlan === 'gold' && (amount < 10000 || amount > 19999)) {
    errorFeedback.textContent = "Amount must be between $10000 and $19999.";
    investmentAmount.classList.add('is-invalid');
    return;
  } else if (selectedPlan === 'diamond' && (amount < 25000)) {
    errorFeedback.textContent = "Amount must be at least $25000.";
    investmentAmount.classList.add('is-invalid');
    return;
  }

  investmentAmount.classList.remove('is-invalid');
  errorFeedback.textContent = '';

  let roi = 0;
  let days = 0;

  switch(selectedPlan) {
    case 'beginners':
      roi = amount * 0.06;
      days = 2;
      break;
    case 'professional':
      roi = amount * 0.15;
      days = 5;
      break;
    case 'gold':
      roi = amount * 0.45;
      days = 15;
      break;
    case 'diamond':
      roi = amount * 0.9;
      days = 30;
      break;
    default:
      break;
  }

  capitalInvested.textContent = `$${amount.toFixed(2)}`;
  potentialROI.textContent = `$${roi.toFixed(2)}`;
  numberOfDays.textContent = `${days} days`;
  total.textContent = `$${(amount + roi).toFixed(2)}`;
});



$(document).ready(function() {
    $("#watch-video-btn").click(function() {
      $.fancybox.open({
        src: 'https://www.youtube.com/embed/jnFpgWCzAV8?autoplay=1',
        type: 'iframe',
        iframe: {
          preload: false
        }
      });
    });
  });
  
