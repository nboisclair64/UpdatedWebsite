document.addEventListener("DOMContentLoaded", function () {
    tsParticles.load("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#9cb08d" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, color: "#ffffff", opacity: 0.4, width: 1 },
            connect: { enable: true, distance: 100 },
            gravity: { enable: true, value: 0.1 },
            velocity: { enable: true, value: 2, random: true },
            acceleration: { enable: true, value: 0.1, random: true },
            move: { enable: true, speed: 1, direction: "top", out_mode: "out" }
        },
        retina_detect: true
    });
});

