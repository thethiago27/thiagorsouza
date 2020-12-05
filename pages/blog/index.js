import Posts from "../../component/blog/posts";
import MoblieNav from "../../component/navbar/MoblieNav";
import Layout from "../../component/blog/layout";

export default function Home() {
    return (
        <>
            <Layout title={`Blog`} page_desc={`Read about what technologies I use and the challenges I face`}>
                <Posts/>
            </Layout>
            <MoblieNav/>
        </>
    )
}
