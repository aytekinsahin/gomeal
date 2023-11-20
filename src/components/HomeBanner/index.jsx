import styles from './homeBanner.module.css'
import Image from "next/image";
export default function HomeBanner(){
    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <p>Get Discount Voucher</p>
                <p>Up To 20%</p>
                <p style={{fontSize:10,fontWeight:"normal"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
            </div>
            <div className={styles.right}>
                <Image src={'/assets/images/woman.png'} width={359} height={239} alt={"banner"}/>
            </div>
        </div>
    )
}
