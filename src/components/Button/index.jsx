'use client'
import styles from './button.module.css';
import Icon from "@/components/Icons";
export default function Button({title,type,action,leftIcon,leftIconColor,rigtIcon,rigtIconColor}){
    return(
            <button type={"button"} className={styles[type]} onClick={()=> action? action() : null}>
                {leftIcon && <Icon name={leftIcon} iconColor={leftIconColor}/>}
                {title}
                {rigtIcon && <Icon name={rigtIcon} iconColor={rigtIconColor}/>}
            </button>
    )
}
