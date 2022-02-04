import React, {useState} from 'react';
import styles from '../assets/css/TambahProduct.module.css';
import Sidebar from '../components/Sidebar';

function Registration() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
        // console.log(data)
    }

    return <div>
        <div className={styles.container}>
                <Sidebar isHere="registration"/>
                <div className={styles.rightPage}>
                    <div className={styles.myProduct}>
                        <div className={styles.title}>
                            Create New Admin
                        </div>
                        <div className={styles.detail}>
                            Buat Admin Baru
                        </div>
                        <div className={styles.formBox}>
                            <div className={styles.inputText}>
                                <div className={styles.item}>
                                    <div className={styles.title2}>
                                        Username
                                    </div>
                                    <input type="text" placeholder="Masukkan Username Admin ..."
                                        name="username" value={data.username} onChange={handleChange}/>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.title2}>
                                        Email
                                    </div>
                                    <input type="text" placeholder="Masukkan Email Admin ..."
                                        name="email" value={data.email} onChange={handleChange}/>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.title2}>
                                        Password
                                    </div>
                                    <input type="password" placeholder="Masukkan Password ..."
                                        name="password" value={data.password} onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>;
    }

export default Registration;
