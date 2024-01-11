import autumn from '../../img/seasons_section1_background/autumn_section1.jpg'
import spring from '../../img/seasons_section1_background/spring_section1.jpg'
import summer from '../../img/seasons_section1_background/summer_section1.jpg'
import winter from '../../img/seasons_section1_background/winter_section1.jpg'

function ImageSlider() {
    
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{height:350 + 'px'}}>
                <div className="carousel-item active">
                    <img src={summer} style={{position: 'absolute' ,top:-75 + 'px'}} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={spring} style={{position: 'absolute' ,top:-70 + 'px'}} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={winter} style={{position: 'absolute' ,top:-75 + 'px'}} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={autumn} style={{position: 'absolute' ,top:-70 + 'px'}} className="d-block w-100" alt="..."/>
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