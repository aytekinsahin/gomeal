import Icon from "@/components/Icons";
import styles from './categorycard.module.css'

export default function CategoryCard({name,image}){
    return(
        <div className={styles.main}>
            <Icon name={image}/>
            <span style={{color:'#A098AE', fontSize:18}}>{name}</span>
        </div>
    )
}
