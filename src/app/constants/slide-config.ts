export const slideConfig = {
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
