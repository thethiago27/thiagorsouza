import styles from "../../styles/Home.module.css";
import MainPostBody from "./main-post-body";
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Posts() {
    const { data, error } = useSwr('/api/blog/getAllPost', fetcher)

    if (error) return <div>Failed to load users</div>
    if (!data) return <div>Loading...</div>

    return (
        <div className={styles.main}>
            {data.res.map((post) => (
                <MainPostBody
                    title={post.title}
                    url={post.url}
                    preview={post.preview}
                    img={post.img_url}
                />

            ))}
        </div>
    )
}
