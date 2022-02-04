import React, {useState} from 'react';
import styles from '../assets/css/DetailMessage.module.css';
import Sidebar from '../components/Sidebar';

function DetailMessage() {
    const [message, setMessage] = useState({
        perusahaan:"alia-inc",
        nama:"Antonio",
        website:"www.google.com",
        gender:"Laki-Laki",
        telepon:"0812345",
        email:"email@email.com",
        kota:"suravbaya",
        negara:"indonesia",
        kodepos:"66123",
        catatan:"Mohon bantuannya ya...",
        tertarik:["barang1", "barang2", "barang3"],
        status:"new",
    })

    const handleAcc = () => {
        setMessage({...message,
            status:"accept"
        })
        // console.log(message.status)
    }

    const handleCanc = () => {
        setMessage({...message,
            status:"cancel"
        })
        // console.log(message.status)
    }
    console.log(message.status)
  return <div>
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
                <div className={styles.listInbox}>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Perusahaan:
                        </div>
                        <div className={styles.data}>
                            {message.perusahaan}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Nama:
                        </div>
                        <div className={styles.data}>
                            {message.nama}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Website:
                        </div>
                        <div className={styles.data}>
                            {message.website}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Jenis Kelamin:
                        </div>
                        <div className={styles.data}>
                            {message.gender}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Nomor Handphone:
                        </div>
                        <div className={styles.data}>
                            {message.telepon}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Email:
                        </div>
                        <div className={styles.data}>
                            {message.email}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Kota:
                        </div>
                        <div className={styles.data}>
                            {message.kota}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Negara:
                        </div>
                        <div className={styles.data}>
                            {message.negara}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Kode Pos:
                        </div>
                        <div className={styles.data}>
                            {message.kodepos}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Catatan
                        </div>
                        <div className={styles.data}>
                            {message.catatan}
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            Tertarik dengan:
                        </div>
                        <div className={styles.dataList}>
                            {
                                message.tertarik && message.tertarik.map((item, index) =>{
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.validation}>
                        <div className={styles.tolak} onClick={handleCanc}>
                            Tolak
                        </div>
                        <div className={styles.terima} onClick={handleAcc}>
                            Terima
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
  </div>;
}

export default DetailMessage;
