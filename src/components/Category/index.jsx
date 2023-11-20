import styles from './category.module.css'
import CategoryCard from "@/components/CategoryCard";
export default function Category(){
    return(
        <div className={styles.main}>
            <div className={styles.title}>
                <span style={{fontSize:24,fontWeight:'bold'}}>Category</span>
                <span style={{fontSize:18,color:'#F8B602'}}>View All</span>
            </div>
            <div className={styles.cards}>
                <CategoryCard name={"Bakery"} image={"CategoryBaked"}/>
                <CategoryCard name={"Burger"} image={"CategoryBurger"}/>
                <CategoryCard name={"Beverage"} image={"CategoryCoffee"}/>
                <CategoryCard name={"Chicken"} image={"CategoryChicken"}/>
                <CategoryCard name={"Pizza"} image={"CategoryPizza"}/>
                <CategoryCard name={"Seafood"} image={"CategoryFish"}/>
            </div>
        </div>
    )
}
