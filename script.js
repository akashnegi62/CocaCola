function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function NextPrev() {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function move() {
  gsap.to(".moving-div", {
    scrollTrigger: {
      trigger: ".moving-div",
      scroller: ".main",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
    x: "-100%",
    duration: 1,
    ease: "circ.out",
  });

  gsap.to(".text div i", {
    scrollTrigger: {
      trigger: ".moving-div",
      scroller: ".main",
      start: "top 50%",
      end: "top 10%",
      scrub: true,
      markers: false,
    },
    rotate: 270,
    duration: 1,
    ease: "circ.out",
  });
}
function brand() {
  let tl = gsap.timeline();

  tl.from(".brand h1", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      start: "top 0",
      end: "top -20%",
      // markers: true,
      scrub: true,
    },
  });

  tl.to(".page3", {
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      start: "top 0",
      end: "top -500%",
      // markers: true,
      scrub: true,
      pin: true,
    },
  });

  tl.to(".img-container1 img", {
    transform: "translate(20%, -125%) rotate(-20deg)",
    scrollTrigger: {
      trigger: ".img-container1 img",
      scroller: ".main",
      start: "top 70%",
      end: "top -50%",
      // markers: true,
      scrub: true,
    },
  });

  tl.to(".img-container2 img", {
    transform: "translate(20%, -125%) rotate(-20deg)",
    scrollTrigger: {
      trigger: ".img-container2 img",
      scroller: ".main",
      start: "top -30%",
      end: "top -100%",
      // markers: true,
      scrub: true,
    },
  });

  tl.to(".img-container3 img", {
    transform: "translate(20%, -125%) rotate(-20deg)",
    scrollTrigger: {
      trigger: ".img-container3 img",
      scroller: ".main",
      start: "top -90%",
      end: "top -200%",
      // markers: true,
      scrub: true,
    },
  });

  tl.to(".img-container4 img", {
    transform: "translate(20%, -125%) rotate(-20deg)",
    scrollTrigger: {
      trigger: ".img-container4 img",
      scroller: ".main",
      start: "top -180%",
      end: "top -300%",
      // markers: true,
      scrub: true,
    },
  });

  tl.to(".page3", {
    backgroundColor: "white",
    scrollTrigger: {
      trigger: ".img-container4 img",
      scroller: ".main",
      start: "top -300%",
      end: "top -400%",
      // markers: true,
      scrub: true,
    },
  });
}
function video() {
  let tl = gsap.timeline();
  tl.to(".video-container video", {
    height: "100%",
    width: "100%",
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 90%",
      end: "top 40%",
      scrub: true,
      // markers: true,
    },
  });
}
function imgShow() {
  let elems = document.querySelectorAll(".elem");
  elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      console.log(elem.getBoundingClientRect());
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 300,
        y: dets.y - elem.getBoundingClientRect().y - 115,
      });
    });
  });
}
function cursor() {
  let page2 = document.querySelector(".page2");
  let page5 = document.querySelector(".page5");
  let swiper = document.querySelector(".swiper");
  window.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.x - 40,
      y: dets.y - 150,
    });
  });

  page2.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      backgroundColor: "black",
    });
  });

  page2.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      backgroundColor: "white",
    });
  });

  page5.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      opacity: 0,
      scale: 0,
    });
  });

  page5.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      opacity: 1,
      scale: 1,
    });
  });

  swiper.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      opacity: 0,
      scale: 0,
    });
  });

  swiper.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      opacity: 1,
      scale: 1,
    });
  });
}

loco();
NextPrev();
move();
brand();
video();
imgShow();
cursor();
