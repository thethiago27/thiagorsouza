import {useRouter} from 'next/router'
import useSwr from 'swr'
import Meta from "../../component/meta";
import styles from "../../styles/Home.module.css";
import MoblieNav from "../../component/navbar/MoblieNav";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function postById() {
    const router = useRouter()
    const {data, error} = useSwr(`/api/blog/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load user</div>
    if (!data) return <div>Loading...</div>
    return (
        <>
            <Meta title={`Home`}/>
            <div className={styles.main}>

                {data.postL.map((result) => (
                    <p>{result.title}</p>
                ))}

            </div>
            <MoblieNav/>
        </>
    )
}
