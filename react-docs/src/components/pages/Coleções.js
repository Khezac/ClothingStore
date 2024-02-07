import ClothCard from '../layout/ClothCard';
import Separator from '../layout/Separator';
import styles from './Coleções.module.css'

import autumn from '../../img/seasons_section1_background/raw/autumn_sect1_img.jpg'
import spring from '../../img/seasons_section1_background/raw/spring_sect1_img.jpg'
import summer from '../../img/seasons_section1_background/raw/summer_sect1_img.jpg'
import winter from '../../img/seasons_section1_background/raw/winter_sect1_img.jpg'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GenderInput from '../products/GenderInput';
import SizeInput from '../products/SizeInput';

function Coleções() {

    const [collection, setCollection] = useState([])
    const [sizeFilter, setSizeFilter] = useState()
    const [genderFilter, setGenderFilter] = useState()
    const [filtered, setFiltered] = useState([])

    const { id } = useParams()
    const season = id.toString()

    useEffect(() => {
        fetch(`http://localhost:5000/produtos`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        })
            .then((resp) => resp.json())
            .then((data) => {
                const result = data.filter((product) => {
                    return (
                        product &&
                        product.colecao &&
                        product.colecao === season
                    )
                })
                setCollection(result)
                setFiltered(result)
            })
    }, [season])

    function handleGender(e) {
        setGenderFilter(e.target.value)
    }
    function handleSize(e) {
        setSizeFilter(e.target.value)
    }

    useEffect(() => { HandleGenderFilter(genderFilter) }, [genderFilter])
    useEffect(() => { HandleSizeFilter(sizeFilter) }, [sizeFilter])

    function HandleGenderFilter(filtro) {
        setFiltered(collection.filter((produto) => {
            if (produto.gender.hasOwnProperty(filtro)) {
                return produto
            }
        })
        )
    }

    function HandleSizeFilter(filtro) {
        setFiltered(collection.filter((produto) => {
            if (produto.sizes.hasOwnProperty(filtro)) {
                return produto
            }
        })
        )
    }

    function undoFilters() {
        window.location.reload()
    }

    return (
        <div className={styles.collection_wrapper}>
            <div className={styles.season_image_container}>
                {id === 'summer' ? (
                    <img src={summer} className={styles.season_image} alt='season_collection_image' />
                ) : id === 'winter' ? (
                    <img src={winter} className={styles.season_image} alt='season_collection_image' />
                ) : id === 'spring' ? (
                    <img src={spring} className={styles.season_image} alt='season_collection_image' />
                ) : id === 'autumn' ? (
                    <img src={autumn} className={styles.season_image} alt='season_collection_image' />
                ) : (
                    <img className={styles.season_image} alt='season_collection_image' />
                )}
            </div>
            <Separator />
            <section className={styles.section_wrapper}>
                <div className={styles.filter_menu}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 + 'px' }}>
                        <h4 style={{ marginBottom: 0 + 'px' }} className={styles.filter_label}>Filtros:</h4>
                        <img style={{ width: 20 + 'px', height: 20 + 'px', cursor: 'pointer' }} onClick={undoFilters} src='https://cdn-icons-png.freepik.com/512/560/560463.png' alt='undo_filters' />
                    </div>
                    <p className={styles.filter_label}>Gêneros:</p>
                    <div className={styles.filter_gender_container}>
                        <GenderInput key='genderinput_fem' gender='Feminino' onChange={handleGender} />
                        <GenderInput key='genderinput_masc' gender='Masculino' onChange={handleGender} />
                        <GenderInput key='genderinput_uni' gender='Unissex' onChange={handleGender} />
                    </div>
                    <p className={styles.filter_label}>Tamanhos:</p>
                    <div className={styles.filter_gender_container}>
                        <SizeInput key='sizeinput_GG' size='GG' onChange={handleSize} />
                        <SizeInput key='sizeinput_G' size='G' onChange={handleSize} />
                        <SizeInput key='sizeinput_M' size='M' onChange={handleSize} />
                        <SizeInput key='sizeinput_P' size='P' onChange={handleSize} />
                        <SizeInput key='sizeinput_PP' size='PP' onChange={handleSize} />
                    </div>
                </div>
                <div className={styles.cards_list}>
                    {filtered.length > 0 ? (filtered.map((array) => {
                        return (
                            <ClothCard
                                id={array.id}
                                name={array.name}
                                description={array.description}
                                img={array.imgs.img1}
                                link={`produtos/${array.id}`}
                                key={array.id}
                            />
                        )
                    })) : (
                        <p className={styles.nothing_found}>Nada encontrado.</p>
                    )
                    }
                </div>
            </section>
        </div>
    )
}

export default Coleções;