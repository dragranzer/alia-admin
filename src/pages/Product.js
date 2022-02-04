import React, { useState } from "react";
import styles from '../assets/css/TambahProduct.module.css';
import Sidebar from '../components/Sidebar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';

function Product() {
    const [value, setValue] = useState('');
    const [spesifikasiKiri, setSpekKiri] = useState('');
    const [spesifikasiKanan, setSpekKanan] = useState('');
    const [ file, setFile ] = useState(null)
    const [ fileName, setFileName ] = useState(null)
    const [ doc, setDoc ] = useState(null)
    const [ docName, setDocName ] = useState(null)
 
    const fileToBase64 = (file, cb) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            cb(null, reader.result)
        }
        reader.onerror = function (error) {
            cb(error, null)
        }
    }

    const onUploadFileChange = ({ target }) => {
        if (target.files < 1 || !target.validity.valid) {
            return
        }
        fileToBase64(target.files[0], (err, result) => {
            if (result) {
                setFile(result)
                setFileName(target.files[0])
                // console.log(result)
            }
        })
    }

    const onUploadDocChange = ({ target }) => {
        if (target.files < 1 || !target.validity.valid) {
            return
        }
        fileToBase64(target.files[0], (err, result) => {
            if (result) {
                setDoc(result)
                setDocName(target.files[0])
                // console.log(result)
            }
        })
    }
  return <div>
      <div className={styles.container}>
            <Sidebar isHere="myproduct"/>
            <div className={styles.rightPage}>
                <div className={styles.myProduct}>
                    <div className={styles.title}>
                        Edit Product
                    </div>
                    <div className={styles.detail}>
                        Melakukan Edit Data dari Product yang sudah ada
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
                                    Fitur
                                </div>
                                <ReactQuill theme="snow" value={value} onChange={setValue} className={styles.editor}/>
                            </div>
                            <div className={styles.spesifikasi}>
                                <div className={styles.spekKiri}>
                                    <div className={styles.title2}>
                                        Spesifikasi Tabel Kiri
                                    </div>
                                    <ReactQuill theme="snow" value={spesifikasiKiri} onChange={setSpekKiri} className={styles.spek}/>
                                </div>
                                <div className={styles.spekKanan}>
                                    <div className={styles.title2}>
                                        Spesifikasi Tabel Kanan
                                    </div>
                                    <ReactQuill theme="snow" value={spesifikasiKanan} onChange={setSpekKanan} className={styles.spek}/>
                                </div>
                            </div>
                            <div className={styles.uploadFile}>
                                <div className={styles.title2}>
                                    Upload Image
                                </div>
                                <div className={styles.inputImage}>
                                    <input 
                                        type="file"
                                        name="filetobase64" 
                                        onChange={onUploadFileChange}
                                        className={styles.inputFile}
                                    />
                                    <div className={styles.uploadButton}>
                                        Upload
                                    </div>
                                </div>
                            </div>
                            <div className={styles.uploadFile}>
                                <div className={styles.title2}>
                                    Upload Dokumen
                                </div>
                                <div className={styles.inputImage}>
                                    <input 
                                        type="file"
                                        name="filetobase64" 
                                        onChange={onUploadDocChange}
                                        className={styles.inputFile}
                                    />
                                    <div className={styles.uploadButton}>
                                        Upload
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
      </div>
  </div>;
}

export default Product;
