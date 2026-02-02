import { Fragment } from "react"
import ButtonPage from "./components/button/page"
import Statistik from "./components/statistika/Statistik"
import Image from "next/image"
import Hero from "./assets/hero.svg"
import Versace from "./assets/versace.svg"
import Zara from "./assets/zara.svg"
import Gucci from "./assets/gucci.svg"
import Prada from "./assets/prada.svg"
import CK from "./assets/CK.svg"
import Tshirt from "./assets/tshirt.png"
import Rubashka from "./assets/rubashka.png"
import Arrivals from "./components/arrivals/Arrivals"
import Style1 from "./assets/style1.png"
import Style2 from "./assets/style2.png"
import Style3 from "./assets/style3.png"
import Style4 from "./assets/style4.png"
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react"
import Otziv from "./components/otziv/Otziv"



const products = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    image: Tshirt,
    price: 120,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: Rubashka,
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    discount: 20,
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: Rubashka,
    price: 180,
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: Tshirt,
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    discount: 30,
  },
]


const HomePage = () => {
  return (
    <Fragment>
      <div className='bg-[#F2F0F1]'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 pt-10 sm:pt-16 lg:pt-24 pb-10 lg:pb-0 justify-between items-center'>
            
            <div className='flex flex-col gap-5 lg:gap-8 max-w-full lg:max-w-[577px] w-full'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-bold leading-tight lg:leading-[1.1]'>
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              
              <p className="text-sm sm:text-base text-[#00000099] font-normal max-w-full lg:max-w-[545px]">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              
              <div className="w-full sm:w-auto">
                <ButtonPage>Shop now</ButtonPage>
              </div>
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
                <Statistik>
                  <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold">200+</h1>
                  <p className="text-xs sm:text-sm lg:text-base font-normal text-[#00000099]">
                    International Brands
                  </p>
                </Statistik>
                                
                <Statistik>
                  <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold">2,000+</h1>
                  <p className="text-xs sm:text-sm lg:text-base font-normal text-[#00000099]">
                    High-Quality Products
                  </p>
                </Statistik>
                                
                <Statistik>
                  <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold">30,000+</h1>
                  <p className="text-xs sm:text-sm lg:text-base font-normal text-[#00000099]">
                    Happy Customers
                  </p>
                </Statistik>
              </div>
            </div>

            <div className="relative w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[600px]">
              <Image 
                src={Hero} 
                alt="Hero image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between gap-3 py-7">
            <Image className="max-w-[116px] sm:max-w-[166px]" src={Versace} alt=""/>
            <Image className="max-w-[63px] sm:max-w-[91px]" src={Zara} alt=""/>
            <Image className="max-w-[109px] sm:max-w-[156px]" src={Gucci} alt=""/>
            <Image className="max-w-[127px] sm:max-w-[194px]" src={Prada} alt=""/>
            <Image className="max-w-[134px] sm:max-w-[206px]" src={CK} alt=""/>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-[48px] font-bold text-center my-[20px]">
        NEW ARRIVALS
      </h2>

      <div className="overflow-x-auto flex gap-6">
        {products.map((product) => (
          <Arrivals
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-10 py-3 bg-white border border-[#0000001A] rounded-[62px] cursor-pointer text-[16px] font-medium">
          View All
        </button>
      </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[48px] font-bold uppercase text-center my-[20px]">
          Top selling
        </h2>

        <div className="overflow-x-auto flex gap-6">
          {products.map((product) => (
            <Arrivals
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-10 py-3 bg-white border border-[#0000001A] rounded-[62px] cursor-pointer text-[16px] font-medium">
            View All
          </button>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#F0F0F0] rounded-[40px]">
          <h1 className="text-[48px] font-bold uppercase text-center pb-5">BROWSE BY dress STYLE</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <div className="sm:col-span-2 lg:col-span-1 relative overflow-hidden rounded-[20px] group cursor-pointer">
              <div className="relative w-full h-[250px] sm:h-[280px] lg:h-[320px]">
                <Image 
                  src={Style1} 
                  alt="Formal style"
                  fill
                  className="object-cover scale-x-[-1]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 font-bold text-[36px] pt-5 pl-10 ">Casual</div>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-[20px] group cursor-pointer">
              <div className="relative w-full h-[250px] sm:h-[280px] lg:h-[320px]">
                <Image 
                  src={Style2} 
                  alt="Casual style"
                  fill
                  className="object-cover scale-x-[-1]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 font-bold text-[36px] pt-5 pl-10">Formal</div>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-[20px] group cursor-pointer">
              <div className="relative w-full h-[250px] sm:h-[280px] lg:h-[320px]">
                <Image 
                  src={Style3} 
                  alt="Casual style"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 font-bold text-[36px] pt-5 pl-10">Party</div>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1 relative overflow-hidden rounded-[20px] group cursor-pointer">
              <div className="relative w-full h-[250px] sm:h-[280px] lg:h-[320px]">
                <Image 
                  src={Style4} 
                  alt="Party style"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 font-bold text-[36px] pt-5 pl-10">Gym</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-30">
          <div className="flex items-center justify-between">
            <h1 className="text-[34px] sm:text-[48px] font-bold uppercase text-center">Our happy customers</h1>
            <div className="flex items-center gap-1">
              <ArrowLeft />
              <ArrowRight />
            </div>
          </div>

          <div className="overflow-x-auto gap-3 flex justify-between items-center">
              <Otziv>
                <h1 className="flex items-center text-[20px] font-bold">Sarah M. <span className="text-green"><BadgeCheck /></span></h1>
                <p className="text-[16px] font-[400] line-clamp-5">Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.</p>
              </Otziv>
              <Otziv>
                <h1 className="flex items-center text-[20px] font-bold">Alex K.. <span className="text-green"><BadgeCheck /></span></h1>
                <p className="text-[16px] font-[400] line-clamp-5">Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.</p>
              </Otziv>
              <Otziv>
                <h1 className="flex items-center text-[20px] font-bold">James L. <span className="text-green"><BadgeCheck /></span></h1>
                <p className="text-[16px] font-[400] line-clamp-5">As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
              </Otziv>
          </div>
      </div>
    </Fragment>
  )
}

export default HomePage