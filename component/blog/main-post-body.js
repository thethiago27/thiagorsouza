import styles from '../../styles/Home.module.css'
import {AUTHOR} from "../../lib/settings";
import { useRouter } from 'next/router'

export default function MainPostBody({title, url, img, preview}) {
    const router = new useRouter()

    return (
        <div className={`${styles.box}`}>
            <img src={img}
                   width={`100%`}
                   alt={AUTHOR}
            />
            <div className={styles.bsession}>
                <div className={styles.btitle}>
                    <span>{title}</span>
                </div>
                <div className={styles.bpreview}>
                    <p>{preview}</p>
                </div>
                <a onClick={() => router.push(`blog/${url}`)}>
                    <button className={styles.gBtn}>Continue Reading</button>
                </a>
            </div>
        </div>
    )
}
