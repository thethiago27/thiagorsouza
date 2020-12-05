import styles from '../../styles/Home.module.css'
import {AUTHOR} from "../../lib/settings";

export default function ContentPostBody({title, img, content}) {
    return (
        <div className={styles.box}>
            <img src={img}
                 width={`100%`}
                 alt={AUTHOR}
            />
            <p>{content}</p>
        </div>
    )
}
