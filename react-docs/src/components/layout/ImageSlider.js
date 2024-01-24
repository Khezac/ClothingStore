import autumn from '../../img/seasons_section1_background/raw/autumn_sect1_img.jpg'
import spring from '../../img/seasons_section1_background/raw/spring_sect1_img.jpg'
import summer from '../../img/seasons_section1_background/raw/summer_sect1_img.jpg'
import winter from '../../img/seasons_section1_background/raw/winter_sect1_img.jpg'

import styles from './ImageSlider.module.css'

function ImageSlider() {

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner w-100" style={{ height: 450 + 'px', position: 'relative' }}>
                <div className="carousel-item active" style={{ height: 450 + 'px', position: 'relative' }}>
                    <img src={summer} className={styles.carousel_slide} alt="..." />
                    <div className={styles.slide_title_container}>
                        <p className={styles.slide_title}>Coleção de verão</p>
                    </div>
                </div>
                <div className="carousel-item" style={{ height: 450 + 'px', position: 'relative' }}>
                    <img src={spring} className={styles.carousel_slide} alt="..." />
                    <div className={styles.slide_title_container}>
                        <p className={styles.slide_title}>Coleção de primavera</p>
                    </div>
                </div>
                <div className="carousel-item" style={{ height: 450 + 'px', position: 'relative' }}>
                    <img src={autumn} className={styles.carousel_slide} alt="..." />
                    <div className={styles.slide_title_container}>
                        <p className={styles.slide_title}>Coleção de outono</p>
                    </div>
                </div>
                <div className="carousel-item" style={{ height: 450 + 'px', position: 'relative'}}>
                    <img src={winter} className={styles.carousel_slide} style={{top:-30 + 'px' }} alt="..." />
                    <div className={styles.slide_title_container}>
                        <p className={styles.slide_title}>Coleção de inverno</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ImageSlider