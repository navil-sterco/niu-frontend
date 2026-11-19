

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
  });

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    function updateMainMargin() {
        if (header && main) {
            main.style.marginTop = `${header.offsetHeight}px`;
        }
    }

    updateMainMargin();
    window.addEventListener('resize', updateMainMargin);
});
//---main-tag-padding-js-end---//
// var autoplayDuration = 7000;

// var swiper3 = new Swiper(".home_slide", {
//   loop: true,
//   speed: 1200,
//   effect: "fade",

//   autoplay: {
//     delay: autoplayDuration,
//     disableOnInteraction: false,
//   },
//  pagination: {
//         el: '.custom-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//           return `
//             <span class="${className}">
//               ${index + 1}
//               <svg class="progress-ring" viewBox="0 0 32 32">
//                 <circle class="progress-ring__circle" cx="16" cy="16" r="14"></circle>
//               </svg>
//             </span>
//           `;
//         },
//       },
//       on: {
//         slideChangeTransitionStart: function () {
//           resetProgressRings();
//         },
//         autoplayTimeLeft: function (s, time, progress) {
//           // Animate active bullet progress ring smoothly based on autoplay timeLeft
//           const activeBullet = s.pagination.bullets[s.realIndex];
//           if (activeBullet) {
//             const circle = activeBullet.querySelector('.progress-ring__circle');
//             if (circle) {
//               const radius = 14;
//               const circumference = 2 * Math.PI * radius;
//               const offset = circumference * progress; // progress goes from 1 to 0
//               circle.style.strokeDashoffset = offset;
//             }
//           }
//         }
//       }
//     });

//     function resetProgressRings() {
//       document.querySelectorAll('.progress-ring__circle').forEach(circle => {
//         circle.style.strokeDashoffset = 88;
//       });
//     }
// /* Helpers */
// function startProgress() {
//   const active = document.querySelector(
//     ".swiper-pagination-bullet-active .progress"
//   );
//   if (!active) return;

//   active.style.transition = "none";
//   active.style.strokeDashoffset = 100;

//   requestAnimationFrame(() => {
//     active.style.transition = `stroke-dashoffset ${autoplayDuration}ms linear`;
//     active.style.strokeDashoffset = 0;
//   });
// }

// function resetProgress() {
//   document.querySelectorAll(".progress").forEach(circle => {
//     circle.style.transition = "none";
//     circle.style.strokeDashoffset = 100;
//   });
// }

// /* Start on load */
// startProgress();
var autoplayDuration = 7000;

/**
 * Initializes a Swiper slider with custom progress ring pagination.
 * @param {string} sliderSelector - CSS selector for the main swiper container (e.g. ".home_slide")
 * @param {string} paginationSelector - CSS selector for the custom pagination container (e.g. ".custom-pagination")
 */
function initProgressSwiper(sliderSelector, paginationSelector) {
  const sliderEl = document.querySelector(sliderSelector);
  const paginationEl = document.querySelector(paginationSelector);
  
  if (!sliderEl || !paginationEl) return;

  const radius = 14;
  const circumference = 2 * Math.PI * radius;

  // Helper to reset progress rings specific to this slider's pagination
  function resetRings() {
    paginationEl.querySelectorAll('.progress-ring__circle').forEach(circle => {
      circle.style.strokeDashoffset = circumference;
    });
  }

  var swiperInstance = new Swiper(sliderSelector, {
    loop: true,
    speed: 1200,
    effect: "fade",
    autoplay: {
      delay: autoplayDuration,
      disableOnInteraction: false,
    },
    pagination: {
      el: paginationSelector,
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            ${index + 1}
            <svg class="progress-ring" viewBox="0 0 32 32">
              <circle class="progress-ring__circle" cx="16" cy="16" r="${radius}"></circle>
            </svg>
          </span>
        `;
      },
    },
    on: {
      slideChangeTransitionStart: function () {
        resetRings();
      },
      autoplayTimeLeft: function (s, time, progress) {
        // Target only the active bullet within this specific slider's pagination
        const activeBullet = s.pagination.bullets[s.realIndex];
        if (activeBullet) {
          const circle = activeBullet.querySelector('.progress-ring__circle');
          if (circle) {
            const offset = circumference * progress; // progress goes from 1 to 0
            circle.style.strokeDashoffset = offset;
          }
        }
      }
    }
  });

  // Initial reset on load for this slider
  resetRings();
  
  return swiperInstance;
}

// --- Initialize your sliders below ---

// Slider 1
var swiper3 = initProgressSwiper(".home_slide", ".custom-pagination");
// Slider 2 (Example of reusing the same JS for another slider)

var swiper4 = initProgressSwiper(".soet_slider", ".custom-pagination");
//---soet slider-end---//

var swiper4 = initProgressSwiper(".depcse_slider", ".custom-pagination");
//---department slider-end---//


 /*-------UIKA-14041994-footer-menu js strat----*/
$('.menu-button').on('click', function () {
  let target = $(this).data('target'); console.log(target)
  if ($(this).hasClass('active')) { $(this).removeClass('active'); $(target).removeClass('show') } else {
      $(this).siblings('.menu-button').removeClass('active')
      $(this).addClass('active'); $('.mobile-menu.show').removeClass('show'), $(target).addClass('show')
  }
})
/*-------UIKA-14041994-footer-menu js end----*/
$(".hemburgure1").click(function(){
  $(".hemburgure").toggleClass("open-slide");
  $(".hembugrside_menu").toggleClass("open-slide");
  $(".opacity_bg").toggleClass("opacitybg_open");
  $(".close-icon").addClass("open-slide");
});
$(".close_icon").click(function(){
  $(".side_menu").removeClass("open-slide");
  $(".hembugrside_menu").removeClass("open-slide");
  $(".opacity_bg").removeClass("opacitybg_open");
});
/*-------UIKA-14041994-hemburgure css end----*/

//---UIKA-14041994-mobile-dropdown-start--//
$(".mob_dropdown a").click(function() {
  var link = $(this);
  var closest_ul = link.closest("ul");
  var parallel_active_links = closest_ul.find(".active")
  var closest_li = link.closest("li");
  var link_status = closest_li.hasClass("active");
  var count = 0;

  closest_ul.find("ul").slideUp(function() {
      if (++count == closest_ul.find("ul").length)
          parallel_active_links.removeClass("active");
  });

  if (!link_status) {
      closest_li.children("ul").slideDown();
      closest_li.addClass("active");
  }
});
 //-====mobile-dropdown-end--//

//select js--start///
$(document).ready(function() {
  $('.custm_select').niceSelect();
});
//-====custome-selectbox-js-end--//

$(document).ready(function () {
  var path = window.location;
  $('.inner_menu li a').each(function () {
    if (this.href == path || this.href + '/' == path) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});
//-====about-menu-js-end--//


  const processSlider = new Swiper(".process_slider", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween:20,
    navigation: {
      nextEl: ".process-next",
      prevEl: ".process-prev",
    },
    breakpoints: {
        1920: {
            slidesPerView:4.5,
            spaceBetween:50,
        },
        1028: {
            slidesPerView:3.5,
            spaceBetween:40
        },
        767: {
            slidesPerView:2.5,
            spaceBetween:10
        },
        575: {
          slidesPerView:1.5,
          spaceBetween:10
      },
    }
});
// ---process_slider-end---*//

const hmplcmntSlider = new Swiper(".hmplcmnt_slider", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween:20,
    navigation: {
      nextEl: ".process-next",
      prevEl: ".process-prev",
    },
    breakpoints: {
        1920: {
            slidesPerView:2.782,
            spaceBetween:3,
        },
         1700: {
            slidesPerView:2.782,
            spaceBetween:3
        },
        1028: {
            slidesPerView:2.95,
            spaceBetween:3
        },
        767: {
            slidesPerView:1.5,
            spaceBetween:10
        },
        575: {
          slidesPerView:1.5,
          spaceBetween:3
      },
    }
});
// ---Home-placment_slider-end---*//

const soetplcmntSlider = new Swiper(".soetplcmnt_slider", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween:20,
    navigation: {
      nextEl: ".process-next",
      prevEl: ".process-prev",
    },
    breakpoints: {
        1920: {
            slidesPerView:2.782,
            spaceBetween:3,
        },
         1700: {
            slidesPerView:2.782,
            spaceBetween:3
        },
        1028: {
            slidesPerView:2.95,
            spaceBetween:3
        },
        767: {
            slidesPerView:1.5,
            spaceBetween:10
        },
        575: {
          slidesPerView:1.5,
          spaceBetween:3
      },
    }
});
// ---department-placment_slider-end---*//


const laboratory = new Swiper(".laboratory_slider", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween:20,
    navigation: {
      nextEl: ".process-next",
      prevEl: ".process-prev",
    },
    breakpoints: {
        1920: {
            slidesPerView:3.4,
            spaceBetween:2
        },
        1028: {
            slidesPerView:3.4,
            spaceBetween:2
        },
        767: {
            slidesPerView:2.5,
            spaceBetween:2
        },
        575: {
          slidesPerView:1.5,
          spaceBetween:2
      },
    }
});
// ---Home-placment_slider-end---*//

const hmplcmntLogo = new Swiper(".hmplcmnt_logo", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    spaceBetween:20,
    navigation: {
      nextEl: ".process-next",
      prevEl: ".process-prev",
    },
    breakpoints: {
        1920: {
            slidesPerView:6,
            spaceBetween:50,
        },
        1028: {
            slidesPerView:6,
            spaceBetween:36
        },
        767: {
            slidesPerView:5,
            spaceBetween:30
        },
        575: {
          slidesPerView:2,
          spaceBetween:20
      },
    }
});
// ---Home-placment_slider-end---*//

const deptplcmntLogo = new Swiper(".soetplcmnt_logo", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    spaceBetween:20,
    navigation: {
      nextEl: ".process-next",
      prevEl: ".process-prev",
    },
    breakpoints: {
        1920: {
            slidesPerView:6,
            spaceBetween:50,
        },
        1028: {
            slidesPerView:6,
            spaceBetween:36
        },
        767: {
            slidesPerView:5,
            spaceBetween:30
        },
        575: {
          slidesPerView:2,
          spaceBetween:20
      },
    }
});
// ---soetplcmnt_logo_slider-end---*//

const acadmic_lib = new Swiper(".acadmic_lib_slider", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".process-next",
        prevEl: ".process-prev",
    },

    pagination: {
        el: ".acadmic_lib_pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">
                        <span class="active-icon-box">
                            <svg class="play-arrow" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8 5v14l11-7z"/>
                            </svg>
                        </span>
                    </span>`;
        },
    },
});

const hmwhychoseLogo = new Swiper(".hmwhychose_logo", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween:20,
    // navigation: {
    //   nextEl: ".process-next",
    //   prevEl: ".process-prev",
    // },
    breakpoints: {
        1920: {
            slidesPerView:4,
            spaceBetween:58,
        },
        1028: {
            slidesPerView:3,
            spaceBetween:40
        },
        767: {
            slidesPerView:3,
            spaceBetween:30
        },
        575: {
          slidesPerView:2,
          spaceBetween:20
      },
    }
});
// ---hmwhychose_logo-end---*//

const hmabout = new Swiper(".hmabout", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween:0,
     pagination: {
          el: '.about-pagination',
          clickable:true,
        },

});
// ---hmabout_slider-end---*//

const hmabtLogo = new Swiper(".hmabt_logo", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween:20,
    // navigation: {
    //   nextEl: ".process-next",
    //   prevEl: ".process-prev",
    // },
    breakpoints: {
        1920: {
            slidesPerView:5,
            spaceBetween:66,
        },
        1028: {
            slidesPerView:5,
            spaceBetween:39
        },
        767: {
            slidesPerView:3,
            spaceBetween:44
        },
        575: {
          slidesPerView:2,
          spaceBetween:30
      },
    }
});
// ---Home-placment_slider-end---*//

// const hmalumni = new Swiper(".hmalumni", {
//     loop: true,
//     slidesPerView: 1,
//     speed: 2000,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     spaceBetween:20,
//     // navigation: {
//     //   nextEl: ".process-next",
//     //   prevEl: ".process-prev",
//     // },
//     breakpoints: {
//         1920: {
//             slidesPerView:2.3,
//             spaceBetween:66,
//         },
//         1028: {
//             slidesPerView:4,
//             spaceBetween:55
//         },
//         767: {
//             slidesPerView:3,
//             spaceBetween:44
//         },
//         575: {
//           slidesPerView:2,
//           spaceBetween:30
//       },
//     }
// });
const hmalumni = new Swiper(".hmalumni", {
    loop: false,
    slidesPerView: "auto",
    speed: 1000,
    roundLengths: true,
    watchOverflow: true,
    observer: true,       
    observeParents: true, 
    spaceBetween: 20,
    centeredSlides: false, // Ensure karein ki ye false rahe
    on: {
        click: function (swiper) {
            if (!swiper.clickedSlide) return;

            // 1. Sabhi slides se 'is-expanded' hatao
            const allSlides = document.querySelectorAll(".hmalumni .swiper-slide");
            allSlides.forEach((slide) => {
                slide.classList.remove("is-expanded");
            });

            // 2. Click wali slide par expand class lagao
            swiper.clickedSlide.classList.add("is-expanded");

            // 3. ANCHOR FIX: slideToClickedSlide ki jagah hum index check karke 
            // smooth slide karenge taaki wo unnecessary left shift na ho
            const clickedIndex = swiper.clickedIndex;
            
            // Agar aap chahte hain ki click karne par wo slide ekdam leftmost edge par na jaye,
            // toh aap slideToIndex ki bajaye sirf index position maintain kar sakte hain:
            swiper.slideTo(clickedIndex, 1000);

            // Layout update
            setTimeout(() => {
                swiper.update();
            }, 50);
        }
    },
    breakpoints: {
        1920: { spaceBetween: 20 },
        1028: { spaceBetween:12 },
        767:  { spaceBetween: 20 },
        575:  { spaceBetween: 15 },
    }
});
// ---Home-placment_slider-end---*//

const deptFacslider = new Swiper(".dept_facslider", {
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween:20,
    navigation: {
      nextEl: ".deptfac-next",
      prevEl: ".deptfac-prev",
    },
    
    breakpoints: {
        1920: {
            slidesPerView:4.28,
            spaceBetween:4,
        },
        1028: {
            slidesPerView:4.25,
            spaceBetween:4
        },
        767: {
            slidesPerView:3.2,
            spaceBetween:3
        },
        575: {
          slidesPerView:2.2,
          spaceBetween:3
      },
    }
});
// ---hmwhychose_logo-end---*//


if (
            typeof gsap !== "undefined" &&
            typeof ScrollTrigger !== "undefined" &&
            document.querySelector(".campus_wrapper")
        ) {
            gsap.registerPlugin(ScrollTrigger);

            const head = document.querySelector(".heading_grid");
            const wrappers = gsap.utils.toArray(".campus_wrapper");
            const cards = gsap.utils.toArray(".campus_item");

            // 1. PIN THE TEXT HEADER (-45px offset according to your layout)
            const headPin = ScrollTrigger.create({
                trigger: head,
                start: "top 150px",
                endTrigger: ".campus_life",
                end: "bottom bottom",
                pin: true,
                pinSpacing: false,
                anticipatePin: 1
            });

            // 2. DYNAMICALLY CALCULATE CARD STACK START POINT BELOW HEADER
            // Text header ki height + top offset space
            const getHeaderOffset = () => {
                const headHeight = head.getBoundingClientRect().height;
                return headHeight - 20; // Keeps cards right under pinned header text
            };

            wrappers.forEach((wrapper, i) => {
                const card = cards[i];
                const isLast = i === wrappers.length - 1;

                // Har card pichle card se slightly 20px nicha pin hoga visual stack display ke liye
                const getCardTopOffset = () => getHeaderOffset() + (i * 50);

                // CARD PINNING
                ScrollTrigger.create({
                    trigger: wrapper,
                    start: () => `top ${getCardTopOffset()}px`,
                    endTrigger: ".campus_life",
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1
                });

                // OVERLAY STACKING (Next card aate hi current card scale down hoke overlay texture dega)
                if (!isLast) {
                    gsap.to(card, {
                        scale: 1 - (wrappers.length - i) * 0.04,
                        transformOrigin: "top center",
                        ease: "none",
                        scrollTrigger: {
                            trigger: wrappers[i + 1],
                            start: "top bottom",
                            end: () => `top ${getHeaderOffset() + ((i + 1) * 20)}px`,
                            scrub: true
                        }
                    });
                }
            });

            window.addEventListener("load", () => ScrollTrigger.refresh());
        }
// ---Home-campus-life-js-end---*//

document.addEventListener("DOMContentLoaded", function () {
    const videoWraps = document.querySelectorAll(".video_wrap");

    videoWraps.forEach(wrap => {
        const video = wrap.querySelector(".auto-video");
        const centerBtn = wrap.querySelector(".center-play-btn");
        const controlBtn = wrap.querySelector(".control-btn");
        const progressBar = wrap.querySelector(".progress-bar");
        const progressContainer = wrap.querySelector(".progress-container");

        if (!video) return;

        // AUTO PLAY/PAUSE ON SCROLL
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {}); // catch handles browser autoplay restrictions
                    centerBtn.classList.add("hide");
                    controlBtn.classList.add("pause");
                } else {
                    video.pause();
                    centerBtn.classList.remove("hide");
                    controlBtn.classList.remove("pause");
                }
            });
        }, { threshold: 0.5 });

        observer.observe(video);

        // CENTER PLAY BUTTON
        centerBtn.addEventListener("click", () => {
            video.play();
            centerBtn.classList.add("hide");
            controlBtn.classList.add("pause");
        });

        // LEFT CONTROL BUTTON (play/pause)
        controlBtn.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                controlBtn.classList.add("pause");
                centerBtn.classList.add("hide");
            } else {
                video.pause();
                controlBtn.classList.remove("pause");
                centerBtn.classList.remove("hide");
            }
        });

        // UPDATE PROGRESS BAR
        video.addEventListener("timeupdate", () => {
            if (video.duration) {
                let progress = (video.currentTime / video.duration) * 100;
                progressBar.style.width = progress + "%";
            }
        });

        // SEEK BAR CLICK
        progressContainer.addEventListener("click", (e) => {
            const width = progressContainer.clientWidth;
            const clickX = e.offsetX;
            const duration = video.duration;
            if (duration) {
                video.currentTime = (clickX / width) * duration;
            }
        });
    });
});
// ---Home-video-tracker-end---*//



$(".moreless_button").click(function (e) {
    e.preventDefault(); // Anchor link ke default action ko rokne ke liye

    // Current button se related .moretext container find karna
    var $currentMoreText = $(this).closest(".read_more").prev(".moretext");

    // Dusre sabhi open .moretext aur active buttons ko close karna
    $(".moretext").not($currentMoreText).slideUp(300);
    $(".moreless_button").not(this).removeClass("active");

    // Selected .moretext ko toggle karna aur button ki active class toggle karna
    $currentMoreText.slideToggle(300);
    $(this).toggleClass("active");
});

//=====search-bar-start=========//
$(document).ready(function () {
  $('.search_open').on('click', function () {
    $('.search_form').addClass('active');
  });

  $('.search-close').on('click', function () {
    $('.search_form').removeClass('active');
  });
});

document.querySelectorAll('.counter').forEach(c => {
  const numSpan = c.querySelector('.num');
  if (!numSpan) return;

  const start = +c.dataset.count || 0;
  const target = +c.dataset.target;
  
  // Checks if target has a decimal (like 6.5) to keep 1 decimal place, otherwise 0
  const dec = target % 1 !== 0 ? 1 : 0; 
  const inc = (target - start) / 100;
  let count = start;

  const update = () => {
    count += inc;
    const current = (inc > 0) 
      ? (count < target ? count : target) 
      : (count > target ? count : target);
    
    numSpan.textContent = current.toFixed(dec);

    if ((inc > 0 && count < target) || (inc < 0 && count > target)) {
      requestAnimationFrame(update);
    }
  };

  numSpan.textContent = start.toFixed(dec);
  update();
});
// End Counter


$(document).ready(function () {

  if ($.fn.rbox) {

    $(".with-caption").rbox({
      type: "image",
      bgcustom: "rgba(0, 0, 0, 0.5)"
    });

    $(".gal").rbox({ type: "image" });
    $(".rbox-html").rbox({ type: "html" });
    $(".rbox-ajax").rbox({ type: "ajax" });
    $(".rbox-inline").rbox({ type: "inline" });
    $(".rbox-video-autoplay").rbox({ type: "video" });
    $(".rbox-iframe").rbox({ type: "iframe" });

  } else {
    console.warn("rbox plugin not defined â€“ skipping initialization");
  }

});
//-====Gallery-js-end--//

// Bind Fancybox to elements with data-fancybox attribute
  Fancybox.bind("[data-fancybox]", {
     buttons: [
    "zoom",
    "slideShow",
    "fullScreen",
    "close"
  ],
  
  Thumbs: false // Completely disables thumbnails
  });





function lightbox_open() {
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';

    document.getElementById('VisaChipCardVideo').play();
}

function lightbox_close() {
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';

    var video = document.getElementById('VisaChipCardVideo');
    video.pause();
    video.currentTime = 0;
}



$(document).on('click', 'a.news_links', function (e) {
    e.preventDefault();
});

$(document).on('click', 'a.news_links', function () {
    const scrollPosition = window.scrollY;

    requestAnimationFrame(function () {
        window.scrollTo(0, scrollPosition);
    });
});



const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');

// Set active panel
function setActive(panel) {
  panels.forEach(p => p.classList.remove('active'));
  panel.classList.add('active');
}

// Hover + Click
panels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    setActive(panel);
  });

  panel.addEventListener('click', () => {
    setActive(panel);
  });
});

// Reset to first panel when mouse leaves
container.addEventListener('mouseleave', () => {
  panels.forEach(p => p.classList.remove('active'));
  panels[0].classList.add('active');
});

//=====Experience-panel-end=========//


$(document).ready(function() {
    $('.admison_menu').hover(
        function() {
            $('body').addClass('admsion_menu_hover');
        }, 
        function() {
            $('body').removeClass('admsion_menu_hover');
        }
    );
});





$(document).ready(function () {

    if (
        window.location.pathname.includes("academic-facilities") &&
        $(".acadmic_lib").length
    ) {
        $(".acadmic_lib .counter").each(function () {

            let counter = $(this);
            let target = parseInt(counter.attr("data-target"), 10);
            let number = counter.find(".num");

            $({ count: 0 }).animate(
                { count: target },
                {
                    duration: 2000,
                    easing: "swing",
                    step: function (now) {
                        number.text(Math.floor(now) + "K");
                    },
                    complete: function () {
                        number.text(target + "K");
                    }
                }
            );

        });
    }

});



// ---Home-campus-life-js-starts---*//

if (
            typeof gsap !== "undefined" &&
            typeof ScrollTrigger !== "undefined" &&
            document.querySelector(".campus_wrapper-2")
        ) {
            gsap.registerPlugin(ScrollTrigger);

            const head = document.querySelector(".heading_grid-2");
            const wrappers = gsap.utils.toArray(".campus_wrapper-2");
            const cards = gsap.utils.toArray(".campus_item-2");

            // 1. PIN THE TEXT HEADER (-45px offset according to your layout)
            const headPin = ScrollTrigger.create({
                trigger: head,
                start: "top 70px",
                endTrigger: ".campus_life-2",
                end: "bottom bottom",
                pin: true,
                pinSpacing: false,
                anticipatePin: 1
            });

            // 2. DYNAMICALLY CALCULATE CARD STACK START POINT BELOW HEADER
            // Text header ki height + top offset space
            const getHeaderOffset = () => {
                const headHeight = head.getBoundingClientRect().height;
                return headHeight - 15; // Keeps cards right under pinned header text
            };

            wrappers.forEach((wrapper, i) => {
                const card = cards[i];
                const isLast = i === wrappers.length - 1;

                // Har card pichle card se slightly 20px nicha pin hoga visual stack display ke liye
                const getCardTopOffset = () => getHeaderOffset() + (i * 50);

                // CARD PINNING
                ScrollTrigger.create({
                    trigger: wrapper,
                    start: () => `top ${getCardTopOffset()}px`,
                    endTrigger: ".campus_life-2",
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1
                });

                // OVERLAY STACKING (Next card aate hi current card scale down hoke overlay texture dega)
                if (!isLast) {
                    gsap.to(card, {
                        scale: 1 - (wrappers.length - i) * 0.03,
                        transformOrigin: "top center",
                        ease: "none",
                        scrollTrigger: {
                            trigger: wrappers[i + 1],
                            start: "top bottom",
                            end: () => `top ${getHeaderOffset() + ((i + 1) * 10)}px`,
                            scrub: true
                        }
                    });
                }
            });

            window.addEventListener("load", () => ScrollTrigger.refresh());
        }
// ---Home-campus-life-js-end---*//



const viewButtons = document.querySelectorAll(".view_btn");
const activityWrapper = document.getElementById("activityWrapper");

viewButtons.forEach(button => {
    button.addEventListener("click", function () {
        viewButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const view = this.dataset.view;

        activityWrapper.classList.toggle(
            "grid_view",
            view === "grid"
        );

        activityWrapper.classList.toggle(
            "list_view",
            view === "list"
        );
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const sticky = document.querySelector(".prog_sticky");
    const section = document.querySelector(".programs_details");

    if (!sticky || !section) return;

    const stickyTop = 100; // Top se distance in pixels

    function handleSticky() {
        const sectionRect = section.getBoundingClientRect();
        const stickyHeight = sticky.offsetHeight;

        if (
            sectionRect.top <= stickyTop &&
            sectionRect.bottom > stickyHeight + stickyTop
        ) {
            sticky.classList.add("fixed");
        } else {
            sticky.classList.remove("fixed");
        }
    }

    window.addEventListener("scroll", handleSticky);
    window.addEventListener("resize", handleSticky);

    handleSticky();
});






