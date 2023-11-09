import styles from './balance.module.css'
export default function Balance(){
    return(
        <div>
            <div className={styles.Title}>Your Balance</div>
            <div className={styles.Main}>
                <div className={styles.BalanceCard}>
                        <span className={styles.SubTitle}>Balance</span>
                        <span className={styles.Price}>$12.000</span>
                </div>
            </div>
        </div>
    )
}
