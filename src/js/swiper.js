function initSwiper() {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      breakpoints: {
        320: {
          enabled: true,
        },
        768: {
          enabled: false,
        }
      }    
  });
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper); 

// window.addEventListener('DOMContentLoaded', () => {

//   const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
//     let swiper;

//     breakpoint = window.matchMedia(breakpoint);

//     const enableSwiper = function(className, settings) {
//       swiper = new Swiper(className, settings);

//       if (callback) {
//         callback(swiper);
//       }
//     }

//     const checker = function() {
//       if (breakpoint.matches) {
//         return enableSwiper(swiperClass, swiperSettings);
//       } else {
//         if (swiper !== undefined) swiper.destroy(true, true);
//         return;
//       }
//     };

//     breakpoint.addEventListener('change', checker);
//     checker();
//   }

//   const someFunc = (instance) => {
//     if (instance) {
//       instance.on('slideChange', function (e) {
//         console.log('*** mySwiper.activeIndex', instance.activeIndex);
//       });
//     }
//   };

//   resizableSwiper(
//     '(max-width: 768px)',
//     '.swiper',
//     {
//       spaceBetween: 16,
//       slidesPerView: 1.3,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 1.3,
//           spaceBetween: 16,
//         },
//         360: {
//           slidesPerView: 1.3,
//           spaceBetween: 16,
//         },
//         400: {
//           slidesPerView: 1.5,
//           spaceBetween: 16,
        
//         },
//         450: {
//           slidesPerView: 1.7,
//           spaceBetween: 16,
        
//         },
//         480: {
//           slidesPerView: 2,
//           spaceBetween: 32,
        
//         },
//         530: {
//           slidesPerView: 2.2,
//           spaceBetween: 32,
        
//         },
//         620: {
//           slidesPerView: 2.5,
//           spaceBetween: 32,
        
//         },
//         750: {
//           slidesPerView: 3,
//           spaceBetween: 32,
        
//         },
//       },
//     },
//     someFunc
//   );
// });

