'use client'
import styles from './leftMenu.module.css';
import Icon from '../Icons/index';
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function LeftMenu(){
    const pathname = usePathname()
    const MenuItem = ({name, icon, href,menuClass,iconColor}) => {
        return(
                <Link href={href} className={menuClass}>
                    <Icon name={icon} iconColor={iconColor} />
                    <span>{name}</span>
                </Link>
        )
    }
    return(
        <div className={styles.Main}>
            <Link href={"/"}>
                <Icon name={"GoMeal"}/>
            </Link>
            <MenuItem name={"Home"} icon={"Home"} iconColor={pathname=="/" ? "white":null} menuClass={pathname=="/" ? styles.MenuItemActive : styles.MenuItem}  href={"/"} />
            <MenuItem name={"Food Order"} icon={"FoodOrder"} iconColor={pathname=="/food-order" ? "white":null} menuClass={pathname=="/food-order" ? styles.MenuItemActive : styles.MenuItem} href={"/food-order"}/>
            <MenuItem name={"Favorite"} icon={"Favorite"} iconColor={pathname=="/favorite" ? "white":null} menuClass={pathname=="/favorite" ? styles.MenuItemActive : styles.MenuItem} href={"/favorite"}/>
            <MenuItem name={"Order History"} icon={"OrderHistory"} iconColor={pathname=="/order-history" ? "white":null} menuClass={pathname=="/order-history" ? styles.MenuItemActive : styles.MenuItem} href={"/order-history"}/>
            <MenuItem name={"Setting"} icon={"SettingLeft"} iconColor={pathname=="/setting" ? "white":null} menuClass={pathname=="/setting" ? styles.MenuItemActive : styles.MenuItem} href={"/setting"}/>
        </div>
    )
}
