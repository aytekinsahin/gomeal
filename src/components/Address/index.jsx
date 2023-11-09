import styles from './address.module.css';
import Icon from "@/components/Icons";
import Button from "@/components/Button";
export default function Address(){
    return(
        <div className={styles.main}>
            <div style={{fontSize:18,color:"#A098AE"}}>Your Address</div>
            <div className={styles.LocationSummary}>
                <Icon iconColor={"#F8B602"} name={"Location"}/>
                <span style={{fontWeight:'bold',marginLeft:10}}>Elm Street, 23</span>
                <Button type={"AddressChange"} title={"Change"} />
            </div>
            <div style={{color:"#A098AE",fontSize:14}}>
                Lorem Ipsum is simply dummy text of the dummy text of the printing and typesetting industry.
            </div>
            <div>
                <Button type={"AddNote"} title={"Add Note"}/>
            </div>
        </div>
    )
}
