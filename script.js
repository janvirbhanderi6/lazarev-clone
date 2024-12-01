function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

function navAnimation() {
    let nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        duration: 0.3,
        height: "25vh"
    })
    tl.to(".nav-part2 h5", {
        display: "block"
    })
    tl.to(".nav-part2 h5 span", {
        y: 0,
        stagger: {
            amount: 0.8
        }
    })
})
nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()

    tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom", {
        height: 0,
        duration: 0.2
    })
})
}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem");

rightElems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        gsap.to(elem.childNodes[3], {
            duration: 0.5,
            opacity: 0.9,
            scale: 1
        })
    });
    elem.addEventListener("mouseleave", function() {
        gsap.to(elem.childNodes[3], {
            duration: 0.5,
            opacity: 0,
            scale: 0
        })
    });
    elem.addEventListener("mousemove", function(dets) {
        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 50,
            y: dets.y - elem.getBoundingClientRect().y - 140
        })
    })
})
}

function page3VideoAnimation() {
    let page3Center = document.querySelector(".page3-center");
let video = document.querySelector("#page3 video");

page3Center.addEventListener("click", function() {
    video.play();
    gsap.to(video, {
        Transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0
    })
})

video.addEventListener("click", function() {
    video.pause();
    gsap.to(video, {
        Transform: "scaleX(0.6) scaleY(0)",
        opacity: 0,
        borderRadius: "30px"
    })

})

video.addEventListener("pause", function() {
    video.currentTime = 0;
});
}

function page8Animations() {
    gsap.from("#btm8-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

navAnimation();
page2Animation();
page3VideoAnimation();
locomotiveAnimation();
loadingAnimation();
page8Animations();

