var slider = tns({
  container: ".homeClass__slider",
  items: 3,
  slideBy: "page",
  autoplay: true,
  controls: false,
  autoplayButtonOutput : false,
  speed : 200,
  navPosition : "bottom",
  responsive : {
    1250:{
      items:3,

    },
    200 :{
      items:1
    }
  }
});
