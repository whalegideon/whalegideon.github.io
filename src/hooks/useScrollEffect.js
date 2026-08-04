import { useEffect } from 'react';

export function useScrollEffect({ blockRef, bannerSubRef, bannerHeadingRef, bannerDescRef, mainRef }) {
  useEffect(() => {
    const block = blockRef.current;
    const bannerSub = bannerSubRef.current;
    const bannerHeading = bannerHeadingRef.current;
    const bannerDesc = bannerDescRef.current;
    const main = mainRef.current;

    if (!block) return;

    const handleScroll = () => {
      const blockHeight = block.offsetHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newBlockHeight = Math.max(0, blockHeight - scrollTop);
      const progress = newBlockHeight / blockHeight;

      const fadeUp = [bannerHeading, bannerDesc].filter(Boolean);
      const fadeDown = [bannerSub].filter(Boolean);

      if (newBlockHeight > 0) {
        block.style.opacity = progress;

        fadeUp.forEach(e => {
          e.style.transform = `translateY(${-(scrollTop / 2)}px)`;
          e.style.opacity = progress;
        });

        fadeDown.forEach(e => {
          e.style.transform = `translateY(${scrollTop / 3}px)`;
          e.style.opacity = progress;
        });
      }

      if (main) {
        let halfHeight = blockHeight / 2;
        let currentHeight = Math.max(newBlockHeight, halfHeight);
        let mainProgress = (blockHeight - currentHeight) / halfHeight;
        main.style.backgroundColor = `rgba(var(--color-bg-main-rgb), ${mainProgress})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [blockRef, bannerSubRef, bannerHeadingRef, bannerDescRef, mainRef]);
}
