'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface CarouselImage {
    id: number;
    src: string;
    alt: string;
}

const images: CarouselImage[] = [
    { id: 1, src: '/images/illustration/becoming-quietly.png', alt: 'A woman looking out a window at a field of poppies, while poppies sprout from her body and clothes' },
    { id: 2, src: '/images/illustration/becoming-quietly.png', alt: 'A woman looking out a window at a field of poppies, while poppies sprout from her body and clothes' },
    { id: 3, src: '/images/illustration/becoming-quietly.png', alt: 'A woman looking out a window at a field of poppies, while poppies sprout from her body and clothes' },
    { id: 4, src: '/images/illustration/becoming-quietly.png', alt: 'A woman looking out a window at a field of poppies, while poppies sprout from her body and clothes' },
    { id: 5, src: '/images/illustration/becoming-quietly.png', alt: 'A woman looking out a window at a field of poppies, while poppies sprout from her body and clothes' },

];

export const IllustrationCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
    const carouselRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const itemWidth = 320;
    const gap = 24;
    const totalItemWidth = itemWidth + gap;

    const maxIndex = Math.max(0, images.length - Math.floor(800 / totalItemWidth));
    const canGoBack = currentIndex > 0;
    const canGoForward = currentIndex < images.length - visibleImages.size;
    
    const scrollPosition = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

    useEffect(() => {
        const observeVisibility = () => {
            if (!containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const containerStart = containerRect.left;
            const containerEnd = containerRect.right;
            const visible = new Set<number>();

            images.forEach((_, index) => {
                const imageStart = containerStart + (index * totalItemWidth) - (currentIndex * totalItemWidth);
                const imageEnd = imageStart + itemWidth;

                if (imageStart >= containerStart && imageEnd <= containerEnd) {
                    visible.add(index);
                }
            });

            setVisibleImages(visible);
        };

        observeVisibility();
    }, [currentIndex, totalItemWidth, itemWidth]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (e.deltaY > 0 && canGoForward) handleNext();
            else if (e.deltaY < 0 && canGoBack) handlePrevious();
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => container.removeEventListener('wheel', handleWheel);
        }
    }, [canGoBack, canGoForward, currentIndex]);

    const handlePrevious = () => {
        if (canGoBack) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (canGoForward) setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className='carouselWrapper'>
            <div className='carouselContainer'>
                <div ref={containerRef} className='carouselViewport'>
                    <div
                        ref={carouselRef}
                        className='carouselTrack'
                        style={{
                            transform: `translateX(-${currentIndex * totalItemWidth}px)`,
                            gap: `${gap}px`,
                        }}
                    >
                        {images.map((image, index) => {
                            const isVisible = visibleImages.has(index);
                            return (
                                <div
                                    key={image.id}
                                    className='imageSlide'
                                    style={{ width: `${itemWidth}px`, height: '320px' }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className={`image ${isVisible ? 'visible' : 'dimmed'}`}
                                    />
                                    <div className='hoverOverlay' />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='carouselNavigation'>
                    {canGoBack && (
                        <button onClick={handlePrevious} className={'navigationButton' + ' ' + 'leftButton'}>
                            {`<`}
                        </button>
                    )}
                    <span></span>
                    {canGoForward && (
                        <button onClick={handleNext} className={'navigationButton' + ' ' + 'rightButton'}>
                            {`>`}
                        </button>
                    )}
                </div>
                {/* <div className='progressBarBackground'>
                    <div
                        className='progressBar'
                        style={{ left: `calc(${scrollPosition}% - 16px)` }}
                    />
                </div> */}
            </div>
        </div>
    );
};
