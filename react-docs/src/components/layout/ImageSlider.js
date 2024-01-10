import { useEffect, useState } from 'react';

import styles from './ImageSlider.module.css';

function ImageSlider({slides}){

    const [currentIndex,setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const previousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
        const clicked = styles.dot_clicked
    }

    return (        
    <div className={styles.slideWrapper}>
        <div className={styles.leftArrow} onClick={previousSlide}>◀</div>
        <div className={styles.rightArrow} onClick={nextSlide}>▶</div>
        <div style={slideStyles}></div>
        <div className={styles.dotsWrapper}>
            <div className={styles.dotsContainer}>
                {slides.map((slide, slideIndex) => (
                <div className={styles.dots} key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default ImageSlider;