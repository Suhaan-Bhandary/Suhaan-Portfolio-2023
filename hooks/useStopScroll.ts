'use client';
import { useEffect } from 'react';

export const useStopScroll = (hideScroll = true) => {
  useEffect(() => {
    if (!hideScroll) return;

    document.body.style.overflow = 'hidden';

    // Cleanings
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [hideScroll]);
};
