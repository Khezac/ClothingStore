import Separator from "../layout/Separator";
import ImageSlider from "../layout/ImageSlider";

import autumn from '../../img/seasons_section1_background/autumn_section1.jpg'
import spring from '../../img/seasons_section1_background/spring_section1.jpg'
import summer from '../../img/seasons_section1_background/summer_section1.jpg'
import winter from '../../img/seasons_section1_background/winter_section1.jpg'

import styles from './Home.module.css'



function Home() {

  const slides = [
    {id: '1', url: `${summer}`},
    {id: '2', url: `${spring}`},
    {id: '3', url: `${autumn}`},
    {id: '4', url: `${winter}`},
  ] 

  return (
    <section>
      <div className={styles.slider_container}>
        <ImageSlider slides={slides}/>
      </div>
      <Separator/>
    </section>
  );
}
  
  export default Home;
  