import Separator from "../layout/Separator";
import ImageSlider from "../layout/ImageSlider";
import ClothCard from "../layout/ClothCard";
import CollectionCard from "../layout/CollectionCard";

import styles from './Home.module.css'

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
      <section className={styles.other_collections}>
        <h1>Outras Coleções</h1>
        <CollectionCard/>
      </section>
    </div>
  );
}
  
  export default Home;
  