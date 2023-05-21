import { useEffect, useState } from 'react';

const initialMedia = {
  desktop: false,
  tablet: false,
  smallTablet: false,
  mobile: false,
};

export const useMedia = () => {
  const [media, setMedia] = useState({ ...initialMedia });

  useEffect(() => {
    const width = window.innerWidth;

    if (width <= 425) {
      setMedia({
        ...initialMedia,
        mobile: true,
        tablet: true,
        smallTablet: true,
      });
      return;
    }

    if (width <= 555) {
      setMedia({ ...initialMedia, smallTablet: true, tablet: true });
      return;
    }

    if (width <= 768) {
      setMedia({ ...initialMedia, tablet: true });
      return;
    }

    setMedia({ ...initialMedia, desktop: true });
  }, []);

  return { ...media };
};
