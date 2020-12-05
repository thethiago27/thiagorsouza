import Meta from "../component/meta";
import styles from "../styles/Home.module.css"
import Navbar from "../component/navbar/Navbar";
import {AUTHOR} from "../lib/settings";
import MoblieNav from "../component/navbar/MoblieNav";

export default function Home() {
    return (
        <>
            <Meta title={`Home`} page_desc={`Thiago Rodrigues welcome to my portfolio here you will know my projects is a little about me`}/>
            <Navbar/>
            <div className={styles.header}>
                <div className={styles.main}>
                    <div className={styles.desc}>
                        <section className={styles.description}>
                            <p className={styles.kdlfd}>{AUTHOR}</p>
                            <p className={styles.kfpo}>Web Developer and Data Scientist</p>
                            <button className={styles.gBtn}>Resume</button>
                        </section>
                        <img src={`/img/eu2.png`} width={`35%`} alt={AUTHOR}/>
                    </div>
                    <div className={styles.box}>
                        <section className={styles.kdodf}>
                            <div className={styles.kfdff}>
                                <img src={`/icons/graduated.svg`} width={`40%`}/>
                                <p>Studying Systems Analysis and Development</p>
                            </div>
                            <div className={styles.kfdff}>
                                <img src={`/icons/study.svg`} width={`40%`}/>
                                <p>Studying Data Science in Linkedin Learning</p>
                            </div>
                            <div className={styles.kfdff}>
                                <img src={`/icons/github.svg`} width={`40%`}/>
                                <p>16 publish repositories on Github</p>
                            </div>
                        </section>
                    </div>
                    <p>Oi</p>
                </div>
            </div>
            <MoblieNav/>
        </>
    )
}
