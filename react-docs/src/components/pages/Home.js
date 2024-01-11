import Separator from "../layout/Separator";
import ImageSlider from "../layout/ImageSlider";
import ClothCard from "../layout/ClothCard";

import styles from './Home.module.css'

function Home() {

  return (
    <div className={styles.home_container}>
    <section>
      <Separator/>
        <ImageSlider/>
      <Separator/>
    </section>
      <div className={styles.most_sold_container}>
        <h1>Mais Vendidos</h1>
        <h4>Coleção de verão</h4>
        <div className="d-flex flex-row align-items-center gap-3">
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
        </div>
      </div>
    </div>
  );
}
  
  export default Home;
  