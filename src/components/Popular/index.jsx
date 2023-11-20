import styles from "@/components/Category/category.module.css";
import PopularCard from "@/components/PopularCard";


export default function Popular(){
    return(
        <div className={styles.main}>
            <div className={styles.title}>
                <span style={{fontSize:24,fontWeight:'bold'}}>Popular</span>
                <span style={{fontSize:18,color:'#F8B602'}}>View All</span>
            </div>
            <div className={styles.cards}>
                <PopularCard name={"Fish Burger"} image={"FishBurger"} price={5.59} like={false}/>
                <PopularCard name={"Beef Burger"} image={"BeefBurger"} price={5.59} like={true}/>
                <PopularCard name={"Cheese Burger"} image={"CheeseBurger"} price={5.59} like={true}/>
            </div>

        </div>
    )
}
