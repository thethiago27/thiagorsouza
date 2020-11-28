import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router";

export default function MoblieNav() {
    const router = new useRouter()
    return (
        <div className={styles.moblieNav}>
            <div className={styles.navContent}>
                <div onClick={() => router.push(`/`)}>
                    <i className="fas fa-home"/>
                </div>
                <div onClick={() => router.push(`/blog`)}>
                    <i className="fas fa-book"/>
                </div>
            </div>
        </div>
    )
}
