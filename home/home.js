// ANIMATION SECTION 1

gsap.from("#titre", {autoAlpha :0, duration: 1, y:-50});
gsap.from('#subtitre', {autoAlpha:0, duration:1, x:-50});
gsap.from("#style", {autoAlpha :0, duration: 1}).delay(0.5);
gsap.from("#menu", {autoAlpha:0, x:100, duration:1}).delay(1);
gsap.from("#homeImg", {autoAlpha:0, duration:1}).delay(1);