import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router";
import {GITHUB_URL} from "../../lib/settings";

export default function Navbar() {
    const router = new useRouter()
    return (
        <ul className={styles.navbar}>
            <li className={styles.navbarLink}><a href={`#`}><img src={`/logo.png`} width={`35%`}/> </a></li>
            <div className={styles.kdf}>
                <li className={styles.navbarLink}><a onClick={() => router.push(`/`)}><span
                    className="navbar-brand">Home</span></a></li>
                <li className={styles.navbarLink}><a onClick={() => router.push(`/about`)}><span
                    className="navbar-brand">About</span></a></li>
                <li className={styles.navbarLink}><a onClick={() => router.push(`${GITHUB_URL}`)}><span
                    className="navbar-brand">Skills</span></a></li>
                <li className={styles.navbarLink}><a onClick={() => router.push(`/blog`)}><span
                    className="navbar-brand">Blog</span></a></li>
            </div>
        </ul>
    )
}
