var tl = gsap.timeline()
    .to("body", { duration: 3, backgroundColor: "blue" })
    .to("h1", { scale: "1.1", x: "50", text: "Typewriter effect with <br> GSAP3...BOOM did it!", ease: "power1.in", duration: 3, color: "white" })
    .to("h2", { y: 300, rotate: 360, fontFamily: "cursive", color: "white" })