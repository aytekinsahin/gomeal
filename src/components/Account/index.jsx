'use client'
import Icon from "@/components/Icons";
import {useSelector,useDispatch} from "react-redux";
import {handleLoginModal} from "@/redux/slices/loginModalSlice";


import Image from "next/image";
import styles from './account.module.css'

export default function Account(){
    const dispatch = useDispatch();
    const LoginModal = useSelector((state)=>state.loginModal)
    return(
        <div className={styles.main}>
            <div>
                <Icon name={"Notification"} iconColor={"black"}/>
                <Icon name={"Setting"} iconColor={"black"}/>
            </div>
            <div>
                <Image src={'/assets/images/placeholder.jpg'} width={60} height={60}/>
            </div>
            <div>
                <button onClick={()=>{dispatch(handleLoginModal())}}>aç</button>
                {LoginModal.loginModalVisible ? 'evet' : 'hayır'}
            </div>
        </div>
    )
}
