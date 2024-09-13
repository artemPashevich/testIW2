// we can add the images and im
export const triggerConfetti = () => {
    const end = Date.now() + 2 * 1000;  // 5 seconds of confetti
    const colors = ["#79E9AD", "#ffffff"];
  
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
  
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };