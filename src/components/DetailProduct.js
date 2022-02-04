import React, {useState, useEffect} from 'react';
import styles from '../assets/css/MyProduct.module.css';
import * as AiIcons from "react-icons/ai";
import {useHistory} from "react-router-dom";

function DetailProduct({id, name, image, isPilihan, addMode, handleHapus}) {
    const [item, setItem] = useState({
        id: id,
        name: name,
        image: image,
        isPilihan: isPilihan
    })

    useEffect (() => {
        setItem({
            id: id,
            name: name,
            image: image,
            isPilihan: isPilihan
        })
    },[id, name, image, isPilihan])

    let history = useHistory();
    
    const setFav = (state) => {
        setItem({
            ...item,
            isPilihan: !state
        })
    }

    const goEdit = async () => {
        history.push("/product/"+id)
    }

    return(
        <div className={styles.product}>
            {
                addMode ?
                <div>
                    <div className={styles.icon}>
                        {
                            item.isPilihan ?
                            <div onClick={() => setFav(item.isPilihan)}>
                                <AiIcons.AiFillStar size={35}/>
                            </div>
                            :
                            <div onClick={() => setFav(item.isPilihan)}>
                                <AiIcons.AiOutlineStar size={35}/>
                            </div>
                        }
                        
                    </div>
                </div>
                :
                <></>
            }
            <img src={item.image} alt="" />
            <div className={styles.name}>
                {item.name}
            </div>
            <div className={styles.edit} onClick={goEdit}>
                Edit
            </div>
            <div className={styles.delete} onClick={() => handleHapus(id)}>
                Delete
            </div>
        </div>
    )
}

export default DetailProduct
