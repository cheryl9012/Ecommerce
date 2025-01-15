import { Heart, Search, ShoppingCart, UserPen } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <div className="flex justify-end p-10 px-16 gap-16 sm:gap-96">
            <ul className="flex gap-5 text-[15px] sm:text-[18px]">
               <Link href={"/"}><li>Home</li></Link>
               <Link href="/shop"><li>Shop</li></Link>
               <Link href={"#"}><li>About</li></Link>
               <Link href={"#"}><li>Contact</li></Link>
            </ul>
            <ul className="flex gap-5  ">
                <li><UserPen className="w-[13px] sm:w-[20px] cursor-pointer"/></li>
                <li><Search className="w-[13px] sm:w-[20px] cursor-pointer"/></li>
                <li><Heart className="w-[13px] sm:w-[20px] cursor-pointer"/></li>
                <li><ShoppingCart className="w-[13px] sm:w-[20px] cursor-pointer"/></li>
            </ul>
        </div>
        </>
    );
}