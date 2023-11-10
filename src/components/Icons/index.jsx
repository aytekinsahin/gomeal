import Coupon from './svg/coupon.svg';
import Favorite from './svg/favorite.svg';
import FoodOrder from './svg/foodorder.svg';
import GoMeal from './svg/GoMeal.svg';
import Home from './svg/home.svg';
import Location from './svg/location.svg';
import Notification from './svg/notification.svg';
import OrderHistory from './svg/orderhistory.svg';
import Search from './svg/search.svg';
import Setting from './svg/setting.svg';
import SettingLeft from './svg/settingleft.svg';
import RightArrow from './svg/rightarrow.svg';


export default function Icon({name,iconColor}){
    switch (name) {
        case "Coupon":
            return  <Coupon alt={"Coupon"} style={{fill:iconColor}}/>
        case "Favorite":
            return  <Favorite alt={"Favorite"} style={{fill:iconColor}}/>
        case "FoodOrder":
            return  <FoodOrder alt={"FoodOrder"} style={{fill:iconColor}}/>
        case "GoMeal":
            return  <GoMeal alt={"GoMeal"}/>
        case "Home":
            return  <Home alt={"Home"} style={{fill:iconColor}}/>
        case "Location":
            return  <Location alt={"Location"} style={{fill:iconColor}}/>
        case "Notification":
            return  <Notification alt={"Notification"} style={{fill:iconColor}}/>
        case "OrderHistory":
            return  <OrderHistory alt={"OrderHistory"} style={{fill:iconColor}}/>
        case "Search":
            return  <Search alt={"Search"} style={{fill:iconColor}}/>
        case "Setting":
            return  <Setting alt={"Setting"} style={{fill:iconColor}}/>
        case "SettingLeft":
            return  <SettingLeft alt={"Setting"} style={{fill:iconColor}}/>
        case "RightArrow":
            return  <RightArrow alt={"RightArrow"} style={{fill:iconColor}}/>
    }
}
