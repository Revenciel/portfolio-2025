'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface CarouselImage {
    id: number;
    src: string;
    alt: string;
}

const images: CarouselImage[] = [
    { id: 1, src: '/images/illustration/becoming-quietly.webp', alt: 'A woman looking out a window at a field of poppies, while poppies sprout from her body and clothes' },
    { id: 2, src: '/images/illustration/trash-panda.webp', alt: 'A raccoon riding in a jet-powered trash can' },
    { id: 3, src: '/images/illustration/vote-1.webp', alt: 'A fist with the words "We the people have the power - VOTE"' },
    { id: 4, src: '/images/illustration/vote-2.webp', alt: 'An eagle with the words, "Be an American hero - VOTE"' },
    { id: 5, src: '/images/illustration/november-child.webp', alt: 'A person sitting by a window reading a book, while their cat looks out the window' },
    { id: 6, src: '/images/illustration/root.webp', alt: 'A pair of hands holding a carrot' },
    { id: 7, src: '/images/illustration/drag.webp', alt: 'An illustration that, depending on how you look at it, is a pair of red lips with a mustache and a rainbow flowing out, or a woman in a rainbow evening gown.' },
];

export const IllustrationCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
    const carouselRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const itemWidth = 320;
    const gap = 24;
    const totalItemWidth = itemWidth + gap;

    // const maxIndex = Math.max(0, images.length - Math.floor(800 / totalItemWidth));
    const canGoBack = currentIndex > 0;
    const canGoForward = currentIndex < images.length - visibleImages.size;
    
    // const scrollPosition = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

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
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width='320'
                                        height='320'
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
