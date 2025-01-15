import Footer from "@/components/screens/Footer";
import Navbar from "@/components/screens/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="w-screen h-[2000px] space-y-24 sm:space-y-5">
        <div className="w-screen h-[1100px] sm:h-[800px] bg-[#FBEBB5] py-5">
          <Navbar />
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <div className="w-screen px-5 sm:w-[320px] h-[300px] sm:h-[500px] content-center">
              <p className="text-[60px] sm:text-[40px] font-bold">Rocket single seater</p>
              <p className="text-[25px] underline underline-offset-8">Shop Now</p>
            </div>
            <div className="w-[500px] h-[450px]">
              <Image
                src={"/seater.png"}
                alt="picture"
                width={1000}
                height={1000}
                className="w-[500px]"
              />
            </div>
          </div>

        </div>
        <div className="h-[870px] sm:h-[700px] flex flex-col sm:flex-row gap-1 justify-evenly items-center">
          <div className="space-y-1">
            <div className="w-[400px] h-[300px]">
              <Image
                src={"/img8.png"}
                alt="picture"
                width={1000}
                height={1000}
                className="w-[500px]"
              />
            </div>
            <h1 className="text-[25px] font-bold">Side Table</h1>
            <h1 className="text-[18px] underline underline-offset-4">View more</h1>
          </div>
          <div className="space-y-1">
            <div className="item w-[400px] h-[300px]">
              <Image
                src={"/img3.png"}
                alt="picture"
                width={1000}
                height={1000}
                className="w-[500px]"
              />
            </div>
            <h1 className="text-[25px] font-bold">Side Table</h1>
            <h1 className="text-[18px] underline underline-offset-4">View more</h1>
          </div>
        </div>
        <div className="w-screen h-[1500px] sm:h-[600px] py-10 px-5 justify-items-center">
          <h1 className="text-[25px] font-bold text-center">Top Picks For You</h1>
          <p className="text-[12px] font-bold text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          <div className="my-12 flex flex-col sm:flex-row gap-10">
            <div className="w-[280px] rounded-lg py-4 shadow-md border">

              <div className="relative h-48">
                <Image
                  src={"/img.png"}
                  alt={"title"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mt-1">Trenton modular sofa_3</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Rs. 25,000.00</span>

                </div>

              </div>
            </div>
            <div className="w-[280px] rounded-lg  shadow-md  border">

              <div className="relative h-48">
                <Image
                  src={"/img5.png"}
                  alt={"title"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mt-1">Granite dining table with dining chair</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Rs. 25,000.00</span>

                </div>

              </div>
            </div>
            <div className="w-[280px] rounded-lg shadow-md pr-5 pt-5 border">

              <div className="relative h-48">
                <Image
                  src={"/img3.png"}
                  alt={"title"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mt-1">Outdoor bar table and stool</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Rs. 25,000.00</span>

                </div>

              </div>
            </div>
            <div className="w-[280px] rounded-lg shadow-md border">

              <div className="relative h-48">
                <Image
                  src={"/img7.png"}
                  alt={"title"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mt-1">Plain console with teak mirror</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Rs. 25,000.00</span>

                </div>

              </div>
            </div>
          </div>
          <p className="text-[18px] sm:text-[25px] cursor-pointer font-bold underline underline-offset-8">View More</p>
        </div>
        <div className=" w-screen sm:h-[700px] py-14 sm:py-5 px-10">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className=" sm:w-[800px] sm:h-[460px]">
              <Image
                src={"/img10.png"}
                alt={"picture"}
                objectFit="cover"
                width={800}
                height={800}
              />
            </div>
            <div className="w-[400px] h-[200px] sm:h-[460px] text-center  content-center px-10 ">
              <p className="font-bold">New Arrivals</p>
              <p className="text-[45px] font-bold">Asgaard sofa</p>
              <Button variant={"secondary"} className="w-[200px] h-[45px]  mt-5 cursor-pointer border-2 border-black">Order Now</Button>
            </div>
          </div>
        </div>
        <div className="w-screen h-[1300px] sm:h-[600px] px-5 justify-items-center">
          <h1 className="text-[38px] font-bold text-center">Our Blogs</h1>
          <p className="text-[12px] text-gray-500 text-center">Find a bright ideal to suit your taste with our great selection.</p>
          <div className="my-12 flex flex-col sm:flex-row gap-10 justify-center">
            <div className="w-[280px] rounded-lg py-4 shadow-md border">

              <div className="relative h-48">
                <Image
                  src={"/img13.png"}
                  alt={"title"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm text-gray-600 mt-1">Going all-in with millennial design</p>
                <h1 className="font-bold text-[20px] underline underline-offset-4 text-center">Read More</h1>
                <div className="flex gap-5">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[15px]" />
                    <p className="text-[14px] text-gray-500">5 min</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="w-[15px]" />
                    <p className="text-[14px] text-gray-500">12 Oct 2022</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="w-[280px] rounded-lg py-4 shadow-md border">

              <div className="relative h-48">
                <Image
                  src={"/img14.png"}
                  alt={"title"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm text-gray-600 mt-1">Going all-in with millennial design</p>
                <h1 className="font-bold text-[20px] underline underline-offset-4 text-center">Read More</h1>
                <div className="flex gap-5">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[15px]" />
                    <p className="text-[14px] text-gray-500">5 min</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="w-[15px]" />
                    <p className="text-[14px] text-gray-500">12 Oct 2022</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="w-[280px] rounded-lg py-4 shadow-md border">

              <div className="relative h-48">
                <Image
                  src={"/img15.png"}
                  alt={"title"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm text-gray-600 mt-1">Going all-in with millennial design</p>
                <h1 className="font-bold text-[20px] underline underline-offset-4 text-center">Read More</h1>
                <div className="flex gap-5">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[15px]" />
                    <p className="text-[14px] text-gray-500">5 min</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="w-[15px]" />
                    <p className="text-[14px] text-gray-500">12 Oct 2022</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-[300px] space-y-10 bg-cover bg-center content-center justify-items-center" style={{ backgroundImage: "url('/img17.png')" }}>
          <div className="text-center">
            <h1 className="text-[45px] font-bold">Our Instagram</h1>
            <p>Follow our store on Instagram</p>
          </div>
          <Button variant={"secondary"} className="shadow-2xl w-[200px] h-[60px] font-bold rounded-3xl">Follow Us</Button>
        </div>
        <Footer/>
      </div>

    </>
  );
}
