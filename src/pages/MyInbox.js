import React, {useState} from 'react';
import styles from '../assets/css/MyInbox.module.css';
import Sidebar from '../components/Sidebar';

function MyInbox() {
    const [inbox, setInbox] = useState([
        {
            name: "James Harden",
            tanggal: "23 Jun 2021",
        },
        {
            name: "James Wicaksono",
            tanggal: "14 Aug 2021",
        },
        {
            name: "John Doe",
            tanggal: "19 Sept 2021",
        },
        {
            name: "James Harden",
            tanggal: "23 Jan 2021",
        }
    ])
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.rightPage}>
                <div className={styles.myProduct}>
                    <div className={styles.title}>
                        My Inbox
                    </div>
                    <div className={styles.detail}>
                        Formulir Client yang Masuk
                    </div>
                    <div className={styles.button}>
                        <div className={styles.item}>
                            Semua
                        </div>
                        <div className={styles.item}>
                            New
                        </div>
                        <div className={styles.item}>
                            Accepted
                        </div>
                        <div className={styles.item}>
                            Cancelled
                        </div>
                    </div>
                    <div className={styles.listInbox}>
                        <div className={styles.table}>
                            <div className={styles.thead}>
                                <div className={styles.td}>
                                    Nama
                                </div>
                                <div className={styles.td}>
                                    Tanggal
                                </div>
                                <div className={styles.td2}>
                                    Aksi
                                </div>
                            </div>
                            <div className={styles.tbody}>
                            {
                                inbox.map((item, index)=>{
                                    return(
                                        <div key={index} className={styles.tr}>
                                            <div className={styles.td}>
                                                {item.name}
                                            </div>
                                            <div className={styles.td}>
                                                {item.tanggal}
                                            </div>
                                            <div className={styles.aksi}>
                                                Buka
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInbox
