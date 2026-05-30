import { useEffect } from 'react';

const REVEAL_SELECTORS = '.reveal, .reveal-scale, .reveal-left, .reveal-right, .reveal-flip';

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -50px 0px' };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        el.classList.add('visible');

        if (el.dataset.staggerBadges === 'true') {
          const badges = el.querySelectorAll('.badge-pop-item');
          badges.forEach((badge, i) => {
            setTimeout(() => badge.classList.add('visible'), 250 + i * 55);
          });
        }

        revealObserver.unobserve(el);
      });
    }, observerOptions);

    document.querySelectorAll(REVEAL_SELECTORS).forEach((el) => revealObserver.observe(el));

    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const container = entry.target;
        const items = container.querySelectorAll('.stagger-item');
        const baseDelay = Number(container.dataset.staggerDelay) || 140;

        items.forEach((item, i) => {
          setTimeout(() => {
            item.classList.add('visible');

            if (item.dataset.staggerBadges === 'true') {
              const badges = item.querySelectorAll('.badge-pop-item');
              badges.forEach((badge, j) => {
                setTimeout(() => badge.classList.add('visible'), 200 + j * 50);
              });
            }
          }, i * baseDelay);
        });

        staggerObserver.unobserve(container);
      });
    }, observerOptions);

    document.querySelectorAll('[data-stagger]').forEach((el) => staggerObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
    };
  }, []);
}
