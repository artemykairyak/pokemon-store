import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';

const FIREWORK_DURATION = 3000;

export const useFireworks = () => {
  const [isFireworks, setIsFireworks] = useState(false);

  useEffect(() => {
    if (isFireworks) {
      const end = Date.now() + FIREWORK_DURATION;
      const colors = ['#D61355', '#FCE22A', '#30E3DF'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        } else {
          setIsFireworks(false);
        }
      })();
    }
  }, [isFireworks]);

  return { isFireworks, setIsFireworks };
};
