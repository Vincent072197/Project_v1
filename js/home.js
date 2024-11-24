gsap.from('#page1 h1',{
    opacity:0,
    y:-200,
    delay:0.3,
    duration:1.5,


})

gsap.from('#page1 h3',{
    opacity:0,
    delay:1.5,
    duration:2.5,
    x:-200,
    

})


gsap.from('#page1 img',{
    y:200,
    opacity:0,
    delay:2,
    duration:1,
})


gsap.from('#page2 h2',{
    x:-100,
    skewX:30,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        start:"top 100%",
        end:"top 30% ",
        scrub:1,


    }
})

gsap.from('#page3 .KAFKA',{
    opacity:0,
    x:-200,
    delay:0.3,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page3 .KAFKA",
        scroller:"body",
        start:"top 100%",
        end:"top 30% ",
        scrub:1,


    }
})

gsap.from('#page3 h2',{
    opacity:0,
    x:200,
    delay:1.5,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        start:"top 100%",
        end:"top 20% ",
        scrub:1,


    }
})


gsap.from('#page4 .temple',{
    opacity:0,
    x:200,
    delay:0.3,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page4 .temple",
        scroller:"body",
        start:"top 100%",
        end:"top 30% ",
        scrub:1,


    }
})

gsap.from('#page4 h2',{
    opacity:0,
    x:-200,
    delay:1.5,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        start:"top 100%",
        end:"top 30% ",
        scrub:1,


    }
})
