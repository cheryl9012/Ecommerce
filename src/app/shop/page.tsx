import Footer from "@/components/screens/Footer";
import Navbar from "@/components/screens/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function ShopPage() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-[300px] justify-items-center content-center mb-5" style={{ backgroundImage: "url(/bg.png)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Image
          src={"/logo.png"}
          alt="picture"
          width={100}
          height={100}
        />
        <h1 className="text-[35px] font-bold">Shop</h1>
        <div className="flex items-center gap-1">
          <p className="font-bold">Home</p>
          <Image
            src={"/arrow.png"}
            alt="picture"
            width={10}
            height={10}
            className="h-[15px] w-[13px]"
          />
          <p>Shop</p>

        </div>
      </div>
      <div className="w-screen h-[80px] bg-[#FAF4F4] flex  px-5 content-center justify-between items-center sm:px-14 ">
        <div className="flex gap-3 sm:gap-10 items-center">
          <div className="flex gap-2 sm:gap-5 items-center">
            <Image
              src={"/pic20.png"}
              alt="picture"
              width={50}
              height={50}
              className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
            />
            <p className="text-[13px] sm:text-[18px]">Filter</p>
          </div>
          <Image
            src={"/pic.png"}
            alt="picture"
            width={50}
            height={50}
            className="h-[20px] sm:h-[30px] w-[20px] sm:w-[30px]"
          />
          <Image
            src={"/pic (2).png"}
            alt="picture"
            width={50}
            height={50}
            className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px]"
          />
          <p className="text-[25px] sm:text-[35px]">|</p>
          <p className="text-[10px] sm:text-[17px]">Showing 1–16 of 32 results</p>

        </div>
        <div className="flex gap-4 sm:gap-20">
          <div className="flex gap-2 sm:gap-3 items-center">
            <p className="text-[10px] sm:text-[15px]">Show</p>
            <p className="text-[10px] sm:text-[13px] text-gray-400">16</p>
          </div>

          <div className="flex gap-2 sm:gap-3 items-center">
            <p className="text-[10px] sm:text-[15px]">Sort by</p>
            <p className="text-[10px] sm:text-[13px] text-gray-400">Default</p>
          </div>

        </div>
      </div>
      <div className="w-screen sm:h-[1900px] p-10 space-y-10 justify-items-center">
        <div className="flex flex-col gap-5 justify-evenly sm:flex-row">
          <div className="w-[300px] h-[400px] rounded-md p-2 shadow-sm">
            <Image
              src={"/img.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img5.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img6.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img7.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-evenly sm:flex-row">
          <div className="w-[300px] h-[400px] rounded-md p-2 shadow-sm">
            <Image
              src={"/img16.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md  shadow-sm">
            <Image
              src={"/img19.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md  shadow-sm">
            <Image
              src={"/img18.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img21.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-evenly sm:flex-row">
          <div className="w-[300px] h-[400px] rounded-md p-2 shadow-sm">
            <Image
              src={"/img22.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img23.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img24.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img25.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-evenly sm:flex-row">
          <div className="w-[300px] h-[400px] rounded-md p-2 shadow-sm">
            <Image
              src={"/img26.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img27.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img28.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>
          <div className="w-[300px] h-[400px] p-2 rounded-md shadow-sm">
            <Image
              src={"/img29.png"}
              alt="picture"
              width={400}
              height={100}
              objectFit="cover"
              className="w-[300px] h-[300px]"
            />
            <p>Trenton modular sofa_3</p>
            <p className="text-[20px] font-bold">Rs. 25,000.00</p>
          </div>


        </div>

      </div>
      <div className="w-screen h-[100px] justify-items-center content-center">
        <div className="flex gap-3">
          <Button>1</Button>
          <Button className="bg-[#FFF9E5] hover:bg-[#FBEBB5]">2</Button>
          <Button className="bg-[#FFF9E5] hover:bg-[#FBEBB5]">3</Button>
          <Button className="bg-[#FFF9E5] hover:bg-[#FBEBB5]">Next</Button>
        </div>
      </div>
      <div className="w-screen sm:h-[220px] flex bg-[#FAF4F4] items-center">
        <div className="w-screen sm:h-[100px] flex flex-col sm:flex-row justify-evenly space-y-4 p-5 " >
        <div className="w-[270px] sm:h-[400px] rounded-md p-2">
          <p className="text-[25px] font-bold">Free Delivery</p>
          <p className="text-[13px] text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className="w-[270px] sm:h-[400px] rounded-md p-2">
          <p className="text-[25px] font-bold">90 Days Return</p>
          <p className="text-[13px] text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className="w-[270px] sm:h-[400px] rounded-md p-2">
          <p className="text-[25px] font-bold">Secure Payment</p>
          <p className="text-[13px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
        </div>
        </div>
      </div>
      <Footer/>

    </>
  );
}