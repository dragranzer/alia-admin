import React from 'react';
import styles from '../assets/css/Sidebar.module.css';
import image from '../assets/img/pic.png';
import {useHistory} from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { setToken } from '../store/TokenSlice';

function Sidebar(props) {
    let history = useHistory();
    const dispatch = useDispatch()
    const goInbox = async () => {
        history.push("/inbox")
    }
    const goProduct = async () => {
        history.push("/myproduct")
    }
    const goRegistration = async () => {
        history.push("/registration")
    }
    const logOut = async () => {
        dispatch(setToken(""));
        history.push("/")
    }
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
                    <div className={props.isHere ==="myproduct" ? styles.menyalaIcon : styles.icon}>
                        <FiIcons.FiGrid size={30}/>
                    </div>
                    <div className={props.isHere ==="myproduct" ? styles.menyala : styles.pagename} onClick={goProduct}>
                        My Product
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={props.isHere ==="myinbox" ? styles.menyalaIcon : styles.icon}>
                        <FiIcons.FiMail size={30}/>
                    </div>
                    <div className={props.isHere ==="myinbox" ? styles.menyala : styles.pagename} onClick={goInbox}>
                        Inbox
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={props.isHere ==="registration" ? styles.menyalaIcon : styles.icon}>
                        <FiIcons.FiUserPlus size={30}/>
                    </div>
                    <div className={props.isHere ==="registration" ? styles.menyala : styles.pagename} onClick={goRegistration}>
                        Add New Admin
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <FiIcons.FiPower size={30}/>
                    </div>
                    <div className={styles.pagename} onClick={logOut}>
                        Log Out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
