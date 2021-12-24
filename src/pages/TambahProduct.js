import React from 'react';
import styles from '../assets/css/TambahProduct.module.css';
import Sidebar from '../components/Sidebar';

function TambahProduct() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.rightPage}>
                <div className={styles.myProduct}>
                    <div className={styles.title}>
                        Create New Product
                    </div>
                    <div className={styles.detail}>
                        Buat Pesanan Baru
                    </div>
                    <div className={styles.formBox}>
                        <div className={styles.inputText}>
                            <div className={styles.item}>
                                <div className={styles.title2}>
                                    Nama Produk
                                </div>
                                <input type="text" placeholder="Masukkan Nama Produk..."/>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title2}>
                                    Category
                                </div>
                                <input type="text" placeholder="Masukkan Kategori Produk ..."/>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title2}>
                                    Description
                                </div>
                                <textarea type="text" placeholder="Pakek summer note ..."/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TambahProduct
