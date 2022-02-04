import React, {useState} from 'react';
import styles from '../assets/css/MyInbox.module.css';
import Sidebar from '../components/Sidebar';
import * as GrIcons from "react-icons/gr";
import {useHistory} from "react-router-dom";

function MyInbox() {
    let history = useHistory();
    const [inbox, setInbox] = useState([
        {
            id:1,
            name: "James Harden",
            tanggal: "23 Jun 2021",
        },
        {
            id:2,
            name: "James Wicaksono",
            tanggal: "14 Aug 2021",
        },
        {
            id:3,
            name: "John Doe",
            tanggal: "19 Sept 2021",
        },
        {
            id:4,
            name: "James Harden",
            tanggal: "23 Jan 2021",
        },
        {
            id:5,
            name: "John Doe",
            tanggal: "19 Sept 2021",
        },
        
    ]);
    const [Semua, setSemua] = useState(true)
    const [New, setNew] = useState(false)
    const [Acc, setAcc] = useState(false)
    const [Canc, setCanc] = useState(false)

    const handleFilterNew = () => {
        setSemua(false)
        setNew(true)
        setAcc(false)
        setCanc(false)
    }

    const handleFilterAcc = () => {
        setSemua(false)
        setNew(false)
        setAcc(true)
        setCanc(false)
    }

    const handleFilterCanc = () => {
        setSemua(false)
        setNew(false)
        setAcc(false)
        setCanc(true)
    }

    const handleFilterSemua = () => {
        setSemua(true)
        setNew(false)
        setAcc(false)
        setCanc(false)
    }

    const goMessage = (id) => {
        history.push("/message/"+id)
    }
    return (
        <div className={styles.container}>
            <Sidebar isHere="myinbox"/>
            <div className={styles.rightPage}>
                <div className={styles.myProduct}>
                    <div className={styles.title}>
                        My Inbox
                    </div>
                    <div className={styles.detail}>
                        Formulir Client yang Masuk
                    </div>
                    <div className={styles.button}>
                        <div className={Semua ? styles.itemActive:styles.item} onClick={handleFilterSemua}>
                            Semua
                        </div>
                        <div className={New ? styles.itemActive:styles.item} onClick={handleFilterNew}>
                            New
                        </div>
                        <div className={Acc ? styles.itemActive:styles.item} onClick={handleFilterAcc}>
                            Accepted
                        </div>
                        <div className={Canc ? styles.itemActive:styles.item} onClick={handleFilterCanc}>
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
                                            <div className={styles.aksi} onClick={() => goMessage(item.id)}>
                                                Buka
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div className={styles.navigation}>
                                <div className={styles.prev}>
                                    <GrIcons.GrPrevious/>
                                    <div className={styles.text}>
                                        Prev
                                    </div>
                                    
                                </div>
                                <div className={styles.next}>
                                    <div className={styles.text}>
                                        Next
                                    </div>
                                    <GrIcons.GrNext/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInbox
