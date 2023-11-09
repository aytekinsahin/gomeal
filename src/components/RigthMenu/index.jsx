import styles from './rightMenu.module.css'
import Account from "@/components/Account";
import Balance from "@/components/Balance";
import Address from "@/components/Address";
import Basket from "@/components/Basket";


export default function RightMenu(){
    return(
        <div className={styles.Main}>
            <div className={styles.RightMenuItem}><Account/></div>
            <div className={styles.RightMenuItem}><Balance/></div>
            <div className={styles.RightMenuItem}><Address/></div>
            <div className={styles.RightMenuItem}><Basket/></div>
        </div>
    )
}
