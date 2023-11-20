import styles from './search.module.css';
import Icon from "@/components/Icons";
export default function Search(){
    return(
        <div className={styles.main}>
            <div className={styles.searchIcon}>
                <Icon name={"Search"} iconColor={"#F8B602"}/>
            </div>
            <input type={"text"} name={"search"} placeholder={"What do you want eat today..."} className={styles.input}/>
        </div>
    )
}
