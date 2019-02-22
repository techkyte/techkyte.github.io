var arr = ["Think Techkyte."]
var options = {
    strings: ["","What is Techkyte?","One click solution to all your educational resources!","Don't just read it, Techkyte it!","Techkyte, try it you'll like it!","Any Time, Any place, Techkyte.","So Techkyte? yes, please!","Think Techkyte."],
    typeSpeed: 60,
    // smartBackspace: true,
    loop: true,
    backDelay: 950,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '<span class="char-sym">|</span>',
    autoInsertCss: true,
    autoInsertCss: true,
    // startDelay: 1500,
}
var typed = new Typed(".animText", options);

particlesJS.load('particles-js', './script/particles.json', function () {
    console.log('callback - particles.js config loaded');
});