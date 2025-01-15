import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
export default function Footer() {
    
    return(
        <>
            <div className=" space-y-4 border shadow-md w-screen h-[350px] px-3 py-10">
         <div className="flex gap-5 justify-evenly">
         <div className="w-[300px] h-[210px] text-[15px] p-5 text-gray-400 bg-white">
            <p>
              400 University Drive Suite 200 Coral
              Gables,
            </p>
            <p>FL 33134 USA</p>
          </div>
          <div className="w-[300px] h-[250px] space-y-6 p-5 bg-white">
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold text-gray-400"><Link href={""}>Link</Link></p>
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold"><Link href={""}>Home</Link></p>
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold"><Link href={""}>Shop</Link></p>
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold"><Link href={""}>About</Link></p>
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold"><Link href={""}>Contact</Link></p>

          </div>

          <div className="w-[300px] h-[220px] bg-white space-y-6 p-5">
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold text-gray-400"><Link href={""}>Help</Link></p>
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold"><Link href={""}>Payment Options</Link></p>
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold"><Link href={""}>Return</Link></p>
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold"><Link href={""}>Privacy Policies</Link></p>

          </div>
          <div className="w-[400px] h-[200px] space-y-6 bg-white p-5">
            <p className="hover:underline hover:underline-offset-4 text-[13px] sm:text-[16px] font-bold text-gray-400"><Link href={""}>Newsletter</Link></p>
            <div className="flex items-center flex-col sm:flex-row space-y-4">
             <Input
             type="email"
             placeholder="Enter your Email" 
             className="h-[32px] sm:h-[45px] w-[100px] sm:w-[170px] text-[10px]"
             />
             <Button variant={"default"} className="w-[75px] h-[32px] text-[10px] sm:h-[45px] cursor-pointer">SUBSCRIBE</Button>
            
            </div>

          </div>
         </div>
          <p className="px-5">2022 Meubel House. All rights reverved</p>
        </div>
        </>
    );
}