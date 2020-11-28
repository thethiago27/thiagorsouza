import Meta from "../../component/meta";
import Posts from "../../component/blog/posts";
import Navbar from "../../component/navbar/Navbar";
import MoblieNav from "../../component/navbar/MoblieNav";

export default function Home() {
    return (
        <>
            <Meta title={`Home`}/>

            <Navbar/>
            <Posts/>
            <MoblieNav/>
        </>
    )
}
