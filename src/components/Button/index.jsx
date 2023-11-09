'use client'
import styles from './button.module.css'
export default function Button({title,type,action}){
    return(
            <button className={styles[type]} onClick={()=> action? action() : null}>{title}</button>
    )
}
