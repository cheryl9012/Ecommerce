import Image from "next/image"
import Navbar from "./Navbar"

export default function Blogpage() {
    return(
        <>
        <Navbar/>
        <div>
            <Image
            src= {"/blog.png" }
            alt= "blog image" 
            width= {500}
            height= {500} 
            className="" 
            />

        </div>
        </>
    )
}