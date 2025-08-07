'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Nav() {

  useEffect(() => {
    const links = document.querySelectorAll('nav ul li a');
    const nav = document.querySelector('nav');
    const contact = document.querySelector('#contact');
    const hero = document.querySelector('.hero');

    if (!nav || !contact || !hero || !links.length) return;

    const total = links.length;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const navRect = nav.getBoundingClientRect();
        const heroRect = hero.getBoundingClientRect();
        const contactRect = contact.getBoundingClientRect();

        links.forEach(link => link.classList.remove('inverted'));

        if (heroRect.bottom > 0) {
          let heroRatio = 1;
          if (heroRect.bottom < navRect.bottom) {
            heroRatio = (heroRect.bottom / navRect.bottom);

          }

          const heroCount = Math.round(heroRatio * total);

          for (let i = total - 1; i >= heroCount; i--) {
            links[i].classList.add('inverted');
          }
        }

        else {
          const getOverlapRatio = (targetRect: any) => {
            const overlapTop = Math.max(navRect.top, targetRect.top);
            const overlapBottom = Math.min(navRect.bottom, targetRect.bottom);
            const overlapHeight = Math.max(0, overlapBottom - overlapTop);
            return overlapHeight / navRect.height;
          };

          const contactRatio = getOverlapRatio(contactRect);

          // Convert overlap ratios to how many links to invert
          const contactCount = Math.round(contactRatio * total);

          // Start by clearing all inversions
          links.forEach(link => link.classList.remove('inverted'));

          // Apply contact logic (invert from start → end)
          for (let i = 0; i < total - contactCount; i++) {
            links[i].classList.add('inverted');
          }
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    onScroll(); // Run once on mount

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);


  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><Image src='/images/logo-80-dark.png' alt='Home' fill={true} objectFit='contain' /></Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#illustration">Illustration</Link>
        </li>
        <li><Link href="/#about">About</Link></li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}