import React from "react";
import Particles from "react-tsparticles";

const ParticlesContainer = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              // Displays the interaction between the links and the cursor
              mode: ["repulse", "bubble"],
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 1,
              opacity: 0.5,
              size: 85,
            },
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 170,
              duration: 1,
            },
            grab: {
              distance: 240,
            },
          },
        },
        particles: {
          color: {
            value: ["#ff19ff", "#3f566e"],
          },
          stroke: {
            width: 3,
            color: "#ccd6f6",
          },
          links: {
            color: "#ff19ff",
            distance: 300,
            enable: true,
            opacity: 1,
            // If active display 1px link otherwise transparent
            width: 0,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "top-left",
            enable: true,
            outMode: "destroy",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            // Amount of particles
            value: 30,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "square",
          },
          size: {
            random: true,
            value: 6,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
