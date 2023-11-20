import styles from './page.module.css'
import Search from "@/components/Search/page";
import HomeBanner from "@/components/HomeBanner";
import Category from "@/components/Category";
import Popular from "@/components/Popular";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <span className={styles.hello}>Hello, Mahmut</span>
        <Search/>
      </div>
      <HomeBanner/>
      <Category/>
      <Popular/>
    </div>
  )
}
