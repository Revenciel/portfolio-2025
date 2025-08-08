'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const pathname = usePathname(); // This will update on route change

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('nav ul li a');
    const nav = document.querySelector('nav');
    const contact = document.querySelector<HTMLElement>('#contact');
    const hero = document.querySelector<HTMLElement>('.hero');

    if (!nav || !links.length) return;

    const total = links.length;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const navRect = nav.getBoundingClientRect();
        links.forEach(link => link.classList.remove('inverted'));

        if (hero) {
          const heroRect = hero.getBoundingClientRect();
          if (heroRect.bottom > 0) {
            let heroRatio = 1;
            if (heroRect.bottom < navRect.bottom) {
              heroRatio = heroRect.bottom / navRect.bottom;
            }
            const heroCount = Math.round(heroRatio * total);
            for (let i = total - 1; i >= heroCount; i--) {
              links[i].classList.add('inverted');
            }
            ticking = false;
          } else if (contact) {
            const contactRect = contact.getBoundingClientRect();
            const getOverlapRatio = (targetRect: DOMRect) => {
              const overlapTop = Math.max(navRect.top, targetRect.top);
              const overlapBottom = Math.min(navRect.bottom, targetRect.bottom);
              const overlapHeight = Math.max(0, overlapBottom - overlapTop);
              return overlapHeight / navRect.height;
            };
            const contactRatio = getOverlapRatio(contactRect);
            const contactCount = Math.round(contactRatio * total);
            for (let i = 0; i < total - contactCount; i++) {
              links[i].classList.add('inverted');
            }
          } else {
            links.forEach(link => link.classList.add('inverted'));
          }
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    onScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]); // Re-run effect when pathname changes

  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><Image src='/images/logo-80-dark.png' alt='Home' fill={true} style={{ objectFit: 'contain' }} /></Link>
        </li>
        <li><Link href="/#projects">Projects</Link></li>
        <li><Link href="/#illustration">Illustration</Link></li>
        <li><Link href="https://github.com/Revenciel/portfolio-2025" target='_blank'>
          GitHub
          <img src='/images/icon-external-link.svg' className="icon" aria-hidden="true" alt=''/>
        </Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
