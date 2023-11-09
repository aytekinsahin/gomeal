import styles from './basket.module.css';
import BasketItem from "@/components/BasketItem";
export default function Basket(){
    const orderList = [
        {ProductName: "Pepperoni Pizza", Piece:1, Price: 5.59, image:""},
        {ProductName: "Cheese Burger", Piece:2, Price: 5.59, image:""},
        {ProductName: "Vegan Pizza", Piece:1, Price: 5.59, image:""},
    ]
    return(
        <div className={styles.main}>
            <h3>Order Menu</h3>
            <div>
                {orderList.map((item)=>{
                    return <BasketItem item={item}/>
                })}

            </div>
        </div>
    )
}
