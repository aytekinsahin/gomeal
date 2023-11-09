import Icon from "@/components/Icons";
import Image from "next/image";
import styles from './account.module.css'
export default function Account(){
    return(
        <div className={styles.main}>
            <div>
                <Icon name={"Notification"} iconColor={"black"}/>
                <Icon name={"Setting"} iconColor={"black"}/>
            </div>
            <div>
                <Image src={'/assets/images/placeholder.jpg'} width={60} height={60}/>
            </div>
        </div>
    )
}
