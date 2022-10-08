const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const body = document.body;

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav.classList.toggle('nav--visible');
})




    // OVERLAY
    TweenMax.to(".first", 1, {
        delay: .5,
        top: "-100%",
        ease: Expo.easeInOut
      });
  
      TweenMax.to(".second", 1, {
        delay: .7,
        top: "-100%",
        ease: Expo.easeInOut
      });
  
      TweenMax.to(".third", 1, {
        delay: .9,
        top: "-100%",
        ease: Expo.easeInOut
      });

TweenMax.to('.left', 2, {
    delay: .8,
    width: '50%',
    ease: Power2.easeInOut
  })

  TweenMax.to('.right', 2, {
    delay: .6,
    width: '50%',
    ease: Power3.easeInOut
  })