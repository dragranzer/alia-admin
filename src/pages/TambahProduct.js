import React, { useState } from "react";
import styles from '../assets/css/TambahProduct.module.css';
import Sidebar from '../components/Sidebar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';

function TambahProduct() {
    const [value, setValue] = useState('');
    const [spesifikasiKiri, setSpekKiri] = useState('');
    const [spesifikasiKanan, setSpekKanan] = useState('');
    const [ file, setFile ] = useState(null)
    const [ fileName, setFileName ] = useState(null)
    const [ doc, setDoc ] = useState(null)
    const [ docName, setDocName ] = useState(null)
    const [data, setData] = useState({
        nama:"",
        category:""
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        console.log(data)
    }
 
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

    
    console.log(doc);
    console.log(docName);
    return (
        <div className={styles.container}>
            <Sidebar isHere="myproduct"/>
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
                                <input type="text" placeholder="Masukkan Nama Produk..."
                                    name="nama" value={data.nama} onChange={handleChange}/>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title2}>
                                    Category
                                </div>
                                <input type="text" placeholder="Masukkan Kategori Produk ..."
                                    name="category" value={data.category} onChange={handleChange}/>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title2}>
                                    Fitur
                                </div>
                                <ReactQuill theme="snow" value={value} onChange={setValue} className={styles.editor}/>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.title2}>
                                    Spesifikasi
                                </div>
                                <ReactQuill theme="snow" value={spesifikasiKiri} onChange={setSpekKiri} className={styles.editor}/>
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
                                </div>
                            </div>
                            <div className={styles.btnSubmit}>
                                <div className={styles.uploadButton}>
                                    Upload
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TambahProduct
