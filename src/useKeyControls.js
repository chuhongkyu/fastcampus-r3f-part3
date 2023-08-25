import { useState, useEffect } from 'react';

export const useKeyControls = () => {
  const [controls, setControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const handleKeyDown = (event) => {
    if (event.code === 'KeyW') setControls((controls) => ({ ...controls, forward: true }));
    if (event.code === 'KeyS') setControls((controls) => ({ ...controls, backward: true }));
    if (event.code === 'KeyA') setControls((controls) => ({ ...controls, left: true }));
    if (event.code === 'KeyD') setControls((controls) => ({ ...controls, right: true }));
  };

  const handleKeyUp = (event) => {
    if (event.code === 'KeyW') setControls((controls) => ({ ...controls, forward: false }));
    if (event.code === 'KeyS') setControls((controls) => ({ ...controls, backward: false }));
    if (event.code === 'KeyA') setControls((controls) => ({ ...controls, left: false }));
    if (event.code === 'KeyD') setControls((controls) => ({ ...controls, right: false }));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return controls;
};
