
import Header from '../component/header'
import HeroImage from '../component/hero-image-component'
import InputHero from '../component/input-hero'

export default function Hero() {
   const companies:{name: string, logo:string}[] = [
    {
    name: "PayStack",
    logo: "/paystack.png"
   },
    {
    name: "Google",
    logo: "/google.png"
   },
    {
    name: "KPMG",
    logo: "/kpmg.png"
   },
  ]


  return (
   <div className='relative min-h-screen min-w-screen p-8'>
     <Header/>
      <div className='bg-link-green/5 absolute top-[-140px] left-[-30px] w-[780px]  h-[670px]  rounded-4xl -rotate-y-20 -rotate-x-20  origin-bottom-left' />
    <div className='flex mt-10'>
      <div className="flex-1 flex flex-col gap-7 justify-center">
        <h1 className='font-bold'>Find a <span className='text-link-green text-4xl'>job</span> easily</h1>

        <p>
          With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.
        </p>

        <InputHero />
       <div>
        <span>Trusted By:</span>
        <div className='flex items-center  mt-2'>
          {
            companies.map((company, index) => (
              <img key={index} src={company.logo} alt={company.name} className='size-20 object-contain inline-block mr-4' />
            ))
          }
        </div>
       </div>

      </div>
      <HeroImage />
    </div>
    
   </div>
  )
}
