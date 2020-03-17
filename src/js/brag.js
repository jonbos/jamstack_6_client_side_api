const brags = [
    "(it's a fixed-gear)",
    "(I don't use brakes)",
    "(the frame is vintage)",
    "(i spent 2k on this)"
];

var brag = brags[Math.floor(Math.random() * Math.floor(brags.length))];

document.querySelector(".inject").append(brag);