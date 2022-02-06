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
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 1,
              opacity: 1,
              size: 90,
            },
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 1,
            },
            grab: {
              distance: 240,
            },
          },
        },
        particles: {
          color: {
            value: ["#fff"],
          },
          links: {
            color: "",
            distance: 150,
            enable: true,
            opacity: 0.5,
            // If active display 1px link otherwise transparent
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            // Amount of particles
            value: 25,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
