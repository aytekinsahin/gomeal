import styles from './basket.module.css';
import BasketItem from "@/components/BasketItem";
import Button from "@/components/Button";
export default function Basket(){
    const orderList = [
        {ProductName: "Pepperoni Pizza", Piece:1, Price: 5.59, image:"pepperonipizza.jpg"},
        {ProductName: "Cheese Burger", Piece:2, Price: 5.59, image:"cheeseburger.jpg"},
        {ProductName: "Vegan Pizza", Piece:1, Price: 5.59, image:"veganpizza.jpg"},
    ]
    return(
        <div className={styles.main}>
            <h3>Order Menu</h3>
            <div className={styles.product}>
                {orderList.map((item)=>{
                    return <BasketItem item={item}/>
                })}
            </div>
            <div className={styles.totalPrice}>
                <div className={styles.service}>
                    <span style={{color:'gray',fontSize:14}}>Service</span>
                    <span>+ <span style={{color:'#F8B602',fontSize:18}}>$</span>1.00</span>
                </div>
                <div className={styles.total}>
                    <span style={{fontSize:18}}>Total</span>
                    <span style={{fontSize:24}}>+ <span style={{color:'#F8B602'}}>$</span>202.00</span>
                </div>
            </div>
            <div>
                <Button type={"Coupon"} title={"Have a coupon code ?"} leftIcon={"Coupon"} leftIconColor={"#F8B602"} rigtIcon={"RightArrow"} rigtIconColor={"black"}/>
            </div>
            <div>
                <Button type={"Checkout"} title={"Checkout"} />
            </div>

        </div>
    )
}
