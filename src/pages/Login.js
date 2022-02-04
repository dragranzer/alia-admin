import React ,{useState} from 'react';
import styles from '../assets/css/Login.module.css';
import {useHistory} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setToken } from '../store/TokenSlice';

import swal from 'sweetalert';

function Login() {
    let history = useHistory();
    const [state, setState] = useState({
        nama: "",
        password: "",
    })
    const dispatch = useDispatch()
    const redirectMyProduct = () => {
        history.push("/myproduct")
    }

    const onChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
        console.log(state)
    }
    const token = "abcdef"
    const pass = ""
    const handleSubmit = (e) => {
        if(state.password === pass ){
            swal({
                title: "Success!!",
                text: "Selamat Username dan Password anda benar",
                icon: "success",
            });
            dispatch(setToken(token));
            history.push("/myproduct")
        }else{
            swal({
                title: "Error",
                text: "Password dan username tidak cocok",
                icon: "error",
            });
        }
        
    }
    return (
        <div className={styles.body}>
            <div className={styles.loginBox}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Login
                    </div>
                    <div className={styles.detail}>
                        Masuk Sebagai Admin
                    </div>
                    <div className={styles.email}>
                        <div className={styles.input}>
                            Email/Username
                        </div>
                        <input type="text" name="nama" onChange={onChange}/>
                    </div>
                    <div className={styles.pass}>
                        <div className={styles.input}>
                            Password
                        </div>
                        <input type="password" name="password" onChange={onChange}/>
                    </div>
                    <div className={styles.submit} onClick={handleSubmit}>
                        Masuk
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Login;
