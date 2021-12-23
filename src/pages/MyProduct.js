import React, {useState} from 'react';
import styles from '../assets/css/MyProduct.module.css';
import Sidebar from '../components/Sidebar';
import * as AiIcons from "react-icons/ai";

function MyProduct() {
    const [addMode, setAddMode] = useState(false);
    const [product, setProduct] = useState([
            {
                name: "series1",
                image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
            },
            {
                name: "series2",
                image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
            },
            {
                name: "series3",
                image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
            },
            {
                name: "series4",
                image: "https://drive.google.com/uc?export=view&id=19_2FC7xRuljIlCXgCEL6Q4m3IBDtdrYz",
            }
        ])

        const changeModeAdd = () => {
            setAddMode(!addMode);
        };

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.rightPage}>
                <div className={styles.myProduct}>
                    <div className={styles.title}>
                        My Product
                    </div>
                    <div className={styles.detail}>
                        Pesanan yang masuk
                    </div>
                    <div className={styles.button}>
                        <div className={styles.addProduct}>
                            Tambah Produk
                        </div>
                        <div className={styles.addFavProduct} onClick={changeModeAdd}>
                            {
                                addMode ?
                                "Selesai"
                                :
                                "Pilih Produk Pilihan"
                            }
                        </div>
                    </div>
                    <div className={styles.listProduct}>
                        {
                            product.map((item, index)=>{
                                return(
                                    <div key={index} className={styles.product}>
                                        {
                                            addMode ?
                                            <div className={styles.icon}>
                                                <AiIcons.AiOutlineStar size={35}/>
                                            </div>
                                            :
                                            <></>
                                        }
                                        <img src={item.image} alt="" />
                                        <div>
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProduct
