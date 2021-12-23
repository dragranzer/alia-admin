import React from 'react';
import styles from '../assets/css/Sidebar.module.css';
import image from '../assets/img/pic.png';
import * as FiIcons from "react-icons/fi";

function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <img src={image} alt="" />
                <div className={styles.uname}>
                    Nama Admin
                </div>
                <div className={styles.role}>
                    Admin
                </div>
            </div>
            <div className={styles.data}>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <FiIcons.FiGrid size={30}/>
                    </div>
                    <div className={styles.pagename}>
                        My Product
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <FiIcons.FiMail size={30}/>
                    </div>
                    <div className={styles.pagename}>
                        Inbox
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <FiIcons.FiSettings size={30}/>
                    </div>
                    <div className={styles.pagename}>
                        Settings
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <FiIcons.FiPower size={30}/>
                    </div>
                    <div className={styles.pagename}>
                        Log Out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
