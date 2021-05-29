const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1500: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1500: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-2',
      prevEl: '.channel-button-prev-2',
    },
  });

  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1500: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-3',
      prevEl: '.channel-button-prev-3',
    },
  });

  