import {useRouter} from 'next/router'
import useSwr from 'swr'
import MoblieNav from "../../component/navbar/MoblieNav";
import Layout from "../../component/blog/layout";
import ContentPostBody from "../../component/blog/content-post-body";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function postById() {
    const router = useRouter()
    const {data, error} = useSwr(`/api/blog/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load user</div>
    if (!data) return <div>Loading...</div>
    return (
        <>
            {data.postL.map((result) => (
                <Layout title={result.title} page_desc={result.preview} html_url={`blog/${result.url}`}>
                    <ContentPostBody
                        title={result.title}
                        img={result.img_url}
                        content={result.content}
                    />
                </Layout>
            ))}

            <MoblieNav/>
        </>
    )
}
