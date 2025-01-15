import Navbar from "@/components/screens/Navbar";
import Image from "next/image";


export default function Contactpage() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-[300px] justify-items-center content-center" style={{ backgroundImage: "url(/bg.png)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Image
          src={"/logo.png"}
          alt="picture"
          width={100}
          height={100}
        />
        <h1 className="text-[35px] font-bold">Contact</h1>
        <div className="flex items-center gap-1">
          <p className="font-bold">Home</p>
          <Image
            src={"/arrow.png"}
            alt="picture"
            width={10}
            height={10}
            className="h-[15px] w-[13px]"
          />
          <p>Contact</p>

        </div>
      </div>
      </>
      )
      }