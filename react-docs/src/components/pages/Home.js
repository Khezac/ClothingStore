import Separator from "../layout/Separator";
import ImageSlider from "../layout/ImageSlider";
import ClothCard from "../layout/ClothCard";
import CollectionCard from "../layout/CollectionCard";

import styles from './Home.module.css'

import autumn from '../../img/seasons_section3_cards/autumn_card.jpg'
import spring from '../../img/seasons_section3_cards/spring_card.jpg'
import summer from '../../img/seasons_section3_cards/summer_card.jpg'
import winter from '../../img/seasons_section3_cards/winter_card.jpg'

function Home() {

  return (
    <div className={styles.home_container}>
      <section>
        <ImageSlider/>
        <Separator/>
      </section>
      <section>
        <div className={styles.most_sold_container}>
          <h1>Mais Vendidos</h1>
          <h4>Coleção de verão</h4>
          <div className="d-flex flex-row align-items-center gap-3">
            <ClothCard/>
            <ClothCard/>
            <ClothCard/>
          </div>
        </div>
      </section>
      <section className={styles.collections_wrapper}>
        <h1>outras coleções</h1>
        <div className={styles.collections_container}>
          <CollectionCard img={autumn} txt='outono'/>
          <CollectionCard img={spring} txt='primavera'/>
          <CollectionCard img={summer} txt='verão'/>
          <CollectionCard img={winter} txt='inverno'/>
        </div>
      </section>
    </div>
  );
}
  
  export default Home;
  