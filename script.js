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
function canvas(){
  const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    Images/AD_000.jpg
    Images/AD_001.jpg
    Images/AD_002.jpg
    Images/AD_003.jpg
    Images/AD_004.jpg
    Images/AD_005.jpg
    Images/AD_006.jpg
    Images/AD_007.jpg
    Images/AD_008.jpg
    Images/AD_009.jpg
    Images/AD_010.jpg
    Images/AD_011.jpg
    Images/AD_012.jpg
    Images/AD_013.jpg
    Images/AD_014.jpg
    Images/AD_015.jpg
    Images/AD_016.jpg
    Images/AD_017.jpg
    Images/AD_018.jpg
    Images/AD_019.jpg
    Images/AD_020.jpg
    Images/AD_021.jpg
    Images/AD_022.jpg
    Images/AD_023.jpg
    Images/AD_024.jpg
    Images/AD_025.jpg
    Images/AD_026.jpg
    Images/AD_027.jpg
    Images/AD_028.jpg
    Images/AD_029.jpg
    Images/AD_030.jpg
    Images/AD_031.jpg
    Images/AD_032.jpg
    Images/AD_033.jpg
    Images/AD_034.jpg
    Images/AD_035.jpg
    Images/AD_036.jpg
    Images/AD_037.jpg
    Images/AD_038.jpg
    Images/AD_039.jpg
    Images/AD_040.jpg
    Images/AD_041.jpg
    Images/AD_042.jpg
    Images/AD_043.jpg
    Images/AD_044.jpg
    Images/AD_045.jpg
    Images/AD_046.jpg
    Images/AD_047.jpg
    Images/AD_048.jpg
    Images/AD_049.jpg
    Images/AD_050.jpg
    Images/AD_051.jpg
    Images/AD_052.jpg
    Images/AD_053.jpg
    Images/AD_054.jpg
    Images/AD_055.jpg
    Images/AD_056.jpg
    Images/AD_057.jpg
    Images/AD_058.jpg
    Images/AD_059.jpg
    Images/AD_060.jpg
    Images/AD_061.jpg
    Images/AD_062.jpg
    Images/AD_063.jpg
    Images/AD_064.jpg
    Images/AD_065.jpg
    Images/AD_066.jpg
    Images/AD_067.jpg
    Images/AD_068.jpg
    Images/AD_069.jpg
    Images/AD_070.jpg
    Images/AD_071.jpg
    Images/AD_072.jpg
    Images/AD_073.jpg
    Images/AD_074.jpg
    Images/AD_075.jpg
    Images/AD_076.jpg
    Images/AD_077.jpg
    Images/AD_078.jpg
    Images/AD_079.jpg
    Images/AD_080.jpg
    Images/AD_081.jpg
    Images/AD_082.jpg
    Images/AD_083.jpg
    Images/AD_084.jpg
    Images/AD_085.jpg
    Images/AD_086.jpg
    Images/AD_087.jpg
    Images/AD_088.jpg
    Images/AD_089.jpg
    Images/AD_090.jpg
    Images/AD_091.jpg
    Images/AD_092.jpg
    Images/AD_093.jpg
    Images/AD_094.jpg
    Images/AD_095.jpg
    Images/AD_096.jpg
    Images/AD_097.jpg
    Images/AD_098.jpg
    Images/AD_099.jpg
    Images/AD_100.jpg
    Images/AD_101.jpg
    Images/AD_102.jpg
    Images/AD_103.jpg
    Images/AD_104.jpg
    Images/AD_105.jpg
    Images/AD_106.jpg
    Images/AD_107.jpg
    Images/AD_108.jpg
    Images/AD_109.jpg
    Images/AD_110.jpg
    Images/AD_111.jpg
    Images/AD_112.jpg
    Images/AD_113.jpg
    Images/AD_114.jpg
    Images/AD_115.jpg
    Images/AD_116.jpg
    Images/AD_117.jpg
    Images/AD_118.jpg
    Images/AD_119.jpg
    Images/AD_120.jpg
    Images/AD_121.jpg
    Images/AD_122.jpg
    Images/AD_123.jpg
    Images/AD_124.jpg
    Images/AD_125.jpg
    Images/AD_126.jpg
    Images/AD_127.jpg
    Images/AD_128.jpg
    Images/AD_129.jpg
    Images/AD_130.jpg
    Images/AD_131.jpg
    Images/AD_132.jpg
    Images/AD_133.jpg
    Images/AD_134.jpg
    Images/AD_135.jpg
    Images/AD_136.jpg
    Images/AD_137.jpg
    Images/AD_138.jpg
    Images/AD_139.jpg
    Images/AD_140.jpg
    Images/AD_141.jpg
    Images/AD_142.jpg
    Images/AD_143.jpg
    Images/AD_144.jpg
    Images/AD_145.jpg
    Images/AD_146.jpg
    Images/AD_147.jpg
    Images/AD_148.jpg
    Images/AD_149.jpg
    Images/AD_150.jpg
    Images/AD_151.jpg
    Images/AD_152.jpg
    Images/AD_153.jpg
    Images/AD_154.jpg
    Images/AD_155.jpg
    Images/AD_156.jpg
    Images/AD_157.jpg
    Images/AD_158.jpg
    Images/AD_159.jpg
    Images/AD_160.jpg
    Images/AD_161.jpg
    Images/AD_162.jpg
    Images/AD_163.jpg
    Images/AD_164.jpg
    Images/AD_165.jpg
    Images/AD_166.jpg
    Images/AD_167.jpg
    Images/AD_168.jpg
    Images/AD_169.jpg
    Images/AD_170.jpg
    Images/AD_171.jpg
    Images/AD_172.jpg
    Images/AD_173.jpg
    Images/AD_174.jpg
    Images/AD_175.jpg
    Images/AD_176.jpg
    Images/AD_177.jpg
    Images/AD_178.jpg
    Images/AD_179.jpg
    Images/AD_180.jpg
    Images/AD_181.jpg
    Images/AD_182.jpg
    Images/AD_183.jpg
    Images/AD_184.jpg
    Images/AD_185.jpg
    Images/AD_186.jpg
    Images/AD_187.jpg
    Images/AD_188.jpg
    Images/AD_189.jpg
    Images/AD_190.jpg
    Images/AD_191.jpg
    Images/AD_192.jpg
    Images/AD_193.jpg
    Images/AD_194.jpg
    Images/AD_195.jpg
    Images/AD_196.jpg
    Images/AD_197.jpg
    Images/AD_198.jpg
    Images/AD_199.jpg
    Images/AD_200.jpg
    Images/AD_201.jpg
    Images/AD_202.jpg
    Images/AD_203.jpg
    Images/AD_204.jpg
    Images/AD_205.jpg
    Images/AD_206.jpg
    Images/AD_207.jpg
    Images/AD_208.jpg
    Images/AD_209.jpg
    Images/AD_210.jpg
    Images/AD_211.jpg
    Images/AD_212.jpg
    Images/AD_213.jpg
    Images/AD_214.jpg
    Images/AD_215.jpg
    Images/AD_216.jpg
    Images/AD_217.jpg
    Images/AD_218.jpg
    Images/AD_219.jpg
    Images/AD_220.jpg
    Images/AD_221.jpg
    Images/AD_222.jpg
    Images/AD_223.jpg
    Images/AD_224.jpg
    Images/AD_225.jpg
    Images/AD_226.jpg
    Images/AD_227.jpg
    Images/AD_228.jpg
    Images/AD_229.jpg
    Images/AD_230.jpg
    Images/AD_231.jpg
    Images/AD_232.jpg
    Images/AD_233.jpg
    Images/AD_234.jpg
    Images/AD_235.jpg
    Images/AD_236.jpg
    Images/AD_237.jpg
    Images/AD_238.jpg
    Images/AD_239.jpg
    Images/AD_240.jpg
    Images/AD_241.jpg
    Images/AD_242.jpg
    Images/AD_243.jpg
    Images/AD_244.jpg
    Images/AD_245.jpg
    Images/AD_246.jpg
    Images/AD_247.jpg
    Images/AD_248.jpg
    Images/AD_249.jpg
    Images/AD_250.jpg
    Images/AD_251.jpg
    Images/AD_252.jpg
    Images/AD_253.jpg
    Images/AD_254.jpg
    Images/AD_255.jpg
    Images/AD_256.jpg
    Images/AD_257.jpg
    Images/AD_258.jpg
    Images/AD_259.jpg
    Images/AD_260.jpg
    Images/AD_261.jpg
    Images/AD_262.jpg
    Images/AD_263.jpg
    Images/AD_264.jpg
    Images/AD_265.jpg
    Images/AD_266.jpg
    Images/AD_267.jpg
    Images/AD_268.jpg
    Images/AD_269.jpg
    Images/AD_270.jpg
    Images/AD_271.jpg
    Images/AD_272.jpg
    Images/AD_273.jpg
    Images/AD_274.jpg
    Images/AD_275.jpg
    Images/AD_276.jpg
    Images/AD_277.jpg
    Images/AD_278.jpg
    Images/AD_279.jpg
    Images/AD_280.jpg
    Images/AD_281.jpg
    Images/AD_282.jpg
    Images/AD_283.jpg
    Images/AD_284.jpg
    Images/AD_285.jpg
    Images/AD_286.jpg
    Images/AD_287.jpg
    Images/AD_288.jpg
    Images/AD_289.jpg
    Images/AD_290.jpg
    Images/AD_291.jpg
    Images/AD_292.jpg
    Images/AD_293.jpg
    Images/AD_294.jpg
    Images/AD_295.jpg
    Images/AD_296.jpg
    Images/AD_297.jpg
    Images/AD_298.jpg
    Images/AD_299.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 299;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `.page4>canvas`,
    start: `top top`,
    end: `300% top`,
    scroller: `.main`,
    // markers: true,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: ".page4",
  pin: true,
  // markers:true,
  scroller: `.main`,
  start: `top top`,
  end: `300% top`,
});

}

loco();
NextPrev();
move();
brand();
imgShow();
cursor();
canvas();

