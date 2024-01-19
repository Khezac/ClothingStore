import Separator from "../layout/Separator";
import ImageSlider from "../layout/ImageSlider";
import ClothCard from "../layout/ClothCard";
import CollectionCard from "../layout/CollectionCard";

import styles from './Home.module.css'

import autumn from '../../img/seasons_section3_cards/autumn_card.jpg'
import spring from '../../img/seasons_section3_cards/spring_card.jpg'
import summer from '../../img/seasons_section3_cards/summer_card.jpg'
import winter from '../../img/seasons_section3_cards/winter_card.jpg'

// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function Home() {

  const [produtos, setProdutos] = useState()

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/produtos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp) => resp.json())
        .then((data) => {
          setProdutos(data)
        })
        .catch((err) => console.log(err))
    }, 1)
    console.log(produtos)
  }, [])


  return (
    <div className={styles.home_container}>
      <section>
        <ImageSlider />
        <Separator />
      </section>
      <section>
        <div className={styles.most_sold_container}>
          <h1>Mais Vendidos</h1>
          <h4>Coleção de verão</h4>
          <div className="d-flex flex-row align-items-center gap-3">
<<<<<<< Updated upstream
            <ClothCard/>
            <ClothCard/>
            <ClothCard/>
=======
            {produtos && (
              <>
                <ClothCard
                  id={produtos[0].id}
                  name={produtos[0].name}
                  description={produtos[0].description}
                  img={produtos[0].imgs.img1}
                  link='produtos'
                />
                <ClothCard
                  id={produtos[1].id}
                  name={produtos[1].name}
                  description={produtos[1].description}
                  img={produtos[0].imgs.img1}
                />
                <ClothCard
                  id={produtos[2].id}
                  name={produtos[2].name}
                  description={produtos[2].description}
                  img={produtos[0].imgs.img1}
                />
              </>
            )}
>>>>>>> Stashed changes
          </div>
        </div>
      </section>
      <section className={styles.collections_wrapper}>
        <h1>outras coleções</h1>
        <div className={styles.collections_container}>
          <CollectionCard img={autumn} txt='outono' />
          <CollectionCard img={spring} txt='primavera' />
          <CollectionCard img={summer} txt='verão' />
          <CollectionCard img={winter} txt='inverno' />
        </div>
      </section>
    </div>
  );
}

export default Home;
