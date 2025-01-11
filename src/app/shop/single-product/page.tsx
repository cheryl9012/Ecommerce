import Navbar from "@/components/screens/Navbar";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

export default function SingleProduct() {
    return (
        <>
            <Navbar />
            <div className="flex items-center gap-5 px-10 my-5">
                <p className="text-[#9F9F9F]">Home</p>
                <Image
                    src={"/arrow.png"}
                    alt="Picture"
                    width={50}
                    height={50}
                    className="w-[15px] h-[15px]"
                />
                <p className="text-[#9F9F9F]">Shop</p>
                <Image
                    src={"/arrow.png"}
                    alt="Picture"
                    width={50}
                    height={50}
                    className="w-[15px] h-[15px]"
                />
                <p className="text-[25px]">|</p>
                <p className="text-[20px]">Asgaard sofa</p>
            </div>
            <div className="w-screen h-[500px] bg-green-300 my-5 flex justify-between">
                <div className="w-[750px] h-[500px] bg-yellow-300 p-5 flex gap-10 justify-center">
                    <div className="space-y-5">
                        <div className="w-[100px] h-[100px] bg-cyan-300 rounded-md shadow-sm"></div>
                        <div className="w-[100px] h-[100px] bg-cyan-300 rounded-md shadow-sm"></div>
                        <div className="w-[100px] h-[100px] bg-cyan-300 rounded-md shadow-sm"></div>
                        <div className="w-[100px] h-[100px] bg-cyan-300 rounded-md shadow-sm"></div>
                    </div>
                    <div className="w-[500px] h-[450px] bg-cyan-400"></div>
                </div>
                <div className="w-[650px] h-[500px] bg-purple-400 p-14 space-y-2">
                    <p className="text-[35px]">Asgaard sofa</p>
                    <p className="text-[#9F9F9F] text-[17px] font-bold">Rs. 250,000.00</p>
                    <div className="flex gap-5 items-center">
                        <div className="flex gap-1">
                            <Star className="fill-yellow-300 text-yellow-300" />
                            <Star className="fill-yellow-300 text-yellow-300" />
                            <Star className="fill-yellow-300 text-yellow-300" />
                            <Star className="fill-yellow-300 text-yellow-300" />
                            <StarHalf className="fill-yellow-300 text-yellow-300" />
                        </div>
                        <p className="text-[20px]">|</p>
                        <p className="text-[#9F9F9F] text-[13px]">5 Customer Review</p>
                    </div>
                    <p className="text-[13px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>
                 <div className="space-y-1">
                 <p>Size</p>
                    <div className="gap-3 flex">
                        <Button>L</Button>
                        <Button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] ">XL</Button>
                        <Button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] ">XS</Button>
                    </div>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[#9F9F9F]">color</p>
                    <div className="gap-3 flex">
                        <div className="w-[20px] h-[20px] bg-[#816DFA] rounded-3xl"></div>
                        <div className="w-[20px] h-[20px] bg-[#000000] rounded-3xl"></div>
                        <div className="w-[20px] h-[20px] bg-[#CDBA7B] rounded-3xl"></div>
                    </div>
                 </div>
                 <div>
                    <div className="bg-yellow-200 flex items-center px-4 w-[150px] h-[50px] border-2 border-black justify-between">
                        <p className="text-[20px]">-</p>
                        <p className="text-[20px]">1</p>
                        <p className="text-[20px]">+</p>
                    </div>
                 </div>
                </div>
            </div>
        </>
    );

}
