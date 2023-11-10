import styles from './basketitem.module.css';
import Image from "next/image";
export default function BasketItem({item}){
    return(
        <div className={styles.main}>
            <div>
                <img src={`/assets/TempImages/${item.image}`} alt={item.ProductName}/>
            </div>
            <div className={styles.product}>
                <span className={styles.ProductName}>{item.ProductName}</span>
                <span className={styles.Piece}>x{item.Piece}</span>
            </div>
            <div className={styles.price}>
                <span>+</span>
                <span style={{color:'#F8B602'}}>$</span>
                <span>{item.Price}</span>
            </div>
        </div>
    )
}
