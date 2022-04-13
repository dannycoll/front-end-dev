const options = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: ['#ffff00', '#ff0000', '#000ff', '#bf00ff', '#ff0066', '#66ffcc'],
    },
    shape: {
      type: 'line',
      stroke: {
        width: 0,
      },
    },
    links: {
      distance: 100,
      enable: true,
      width: 1,
      opacity: 0.6,
    },
    opacity: {
      random: false,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      animation: {
        enable: true,
        speed: 10,
        minimumValue: 0.1,
        sync: false,
      },
    },
    lineLinked: {
      enable: false,
      distance: 300,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'connect',
      },
      onClick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      connect: {
        distance: 400,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        number: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  detectRetina: true,
};

export default options;
