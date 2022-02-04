import React, {useEffect, useState} from 'react';
import styles from '../assets/css/MyProduct.module.css';
import Sidebar from '../components/Sidebar';
import DetailProduct from '../components/DetailProduct';
import {useHistory} from "react-router-dom";

function MyProduct() {
    let history = useHistory();
    const [pilihBarang, setPilihBarang] = useState(true);
    const [jenisBarang, setjenisBarang] = useState("");
    const [addMode, setAddMode] = useState(false);
    const [product, setProduct] = useState([
            {
                id:1,
                name: "series1",
                image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                isPilihan: false
            },
            {
                id:2,
                name: "series2",
                image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                isPilihan: false
            },
            {
                id:3,
                name: "series3",
                image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                isPilihan: true
            },
            {
                id:4,
                name: "series4",
                image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
                isPilihan: false
            }
        ])

        useEffect (() => {
            if(jenisBarang !== ""){
                console.log(jenisBarang)
            }
        },[jenisBarang]);

        // useEffect (() => {
        //     console.log(product)
        // },[product])

        const changeModeAdd = () => {
            setAddMode(!addMode);
        };

        const hapusSeries = (id) => {
            return product.filter(item=>item.id !== id)
        }

        const handleHapus = (id) => {
            setProduct(hapusSeries(id))
        }

        const redirectAddProduct = () => {
            history.push("/add_product")
        }

        const channgeModeProduct = (value) => {
            setjenisBarang(value)
            setPilihBarang(false)
        }

        const channgeModePilih = () => {
            setPilihBarang(true)
            console.log(pilihBarang)
        }

    return (
        <div className={styles.container}>
            <Sidebar isHere="myproduct"/>
            <div className={styles.rightPage}>
                <div className={styles.myProduct}>
                    <div className={styles.title} onClick={channgeModePilih}>
                        My Product
                    </div>
                    <div className={styles.detail}>
                        Pesanan yang masuk
                    </div>
                    <div className={styles.listButton}>
                        <div className={styles.button}>
                            <div className={styles.addProduct} onClick={redirectAddProduct}>
                                Tambah Produk
                            </div>
                            {
                                pilihBarang ?
                                <></>
                                :
                                <div className={styles.addFavProduct} onClick={changeModeAdd}>
                                {
                                    addMode ?
                                    "Selesai"
                                    :
                                    "Edit Produk Pilihan"
                                }
                                </div>
                            }
                        </div>
                        {
                            pilihBarang ? 
                            <></>
                            :
                            <div className={styles.backButton} onClick={channgeModePilih}>
                                Kembali ke mode pilih barang
                            </div>
                        }
                        
                    </div>
                    <div>
                        {
                            pilihBarang ?
                            <div className={styles.pilihBarang}>
                                <div className={styles.barang}>
                                    <div className={styles.category}>
                                        Jenis barang
                                    </div>
                                    <ul>
                                        {
                                            product.map(item => {
                                                return(
                                                    <li key={item.id}
                                                        className={styles.jenisProduct} 
                                                        value={item.name} 
                                                        onClick={() => channgeModeProduct(item.name)}>
                                                            {item.name}
                                                    </li>    
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            :
                            <div className={styles.listProduct}>
                            {
                                product.map((item, index)=>(
                                    <DetailProduct 
                                        id={item.id}
                                        name={item.name}
                                        image={item.image}
                                        isPilihan={item.isPilihan}
                                        addMode={addMode}
                                        handleHapus = {() => handleHapus(item.id)}
                                    />
                                ))
                            }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProduct
