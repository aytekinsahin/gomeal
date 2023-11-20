import styles from './popularcard.module.css'
import Icon from "@/components/Icons";
import Button from "@/components/Button";
export default function PopularCard({like,name,price,image}){
    return(
        <div className={styles.main}>
            <div className={styles.discount}>
                15% Off
            </div>
            <div  className={styles.like}>
                <Icon name={"Like"} iconColor={like == true ? "#EB5757": "#DBDBDB"}/>
            </div>
            <img src={`./assets/images/${image}.jpg`}  className={styles.image}/>
            <div className={styles.stars}>
                <Icon name={"Star"} iconColor={"#F8B602"}/>
                <Icon name={"Star"} iconColor={"#F8B602"}/>
                <Icon name={"Star"} iconColor={"#F8B602"}/>
                <Icon name={"Star"} iconColor={"#F8B602"}/>
                <Icon name={"Star"} iconColor={"#F8B602"}/>
            </div>
            <div className={styles.detail}>
                <div className={styles.info}>
                    <span style={{fontSize:18}}>{name}</span>
                    <span style={{fontSize:24,fontWeight:"bold"}}>
                        <span style={{color:"#F8B602"}}>$ </span>
                        {price}
                    </span>
                </div>
                <div>
                    <Button type={"Plus"} title={"+"} />
                </div>
            </div>
        </div>
    )
}
