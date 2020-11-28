import Navbar from "../component/navbar/Navbar";
import MoblieNav from "../component/navbar/MoblieNav";
import Meta from "../component/meta";

export default function About() {
    return (
       <>
           <Meta title={`About`} page_desc={`About Me!`}/>
           <Navbar/>
           <MoblieNav/>
       </>
    )
}
