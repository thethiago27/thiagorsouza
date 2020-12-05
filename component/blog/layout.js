import styles from '../../styles/Home.module.css'
import Meta from "../meta";
import Navbar from "../navbar/Navbar";

export default function Layout({children, title, page_desc, html_url}) {
    return (
        <>
            <Meta
                title={title}
                page_desc={page_desc}
                html_url={html_url}
            />
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.mainP}>
                    <p className={styles.title}>{title}</p>
                    {children}
                </div>
            </div>
        </>
    )
}
