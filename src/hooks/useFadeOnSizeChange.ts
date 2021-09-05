import { useEffect, useState } from 'react';

const useFadeOnSizeChange = (newSizeClase: string) => {
  const [sizeClass, setSizeClass] = useState<string>('');
  const [animationClass, setAnimationClass] = useState<string>('hidden');

  useEffect(() => {
    setAnimationClass('fadeOut');
    const timeout = setTimeout(() => {
      setSizeClass(newSizeClase);
      setAnimationClass('fadeIn');
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, [newSizeClase]);

  return [sizeClass, animationClass];
};

export { useFadeOnSizeChange };
