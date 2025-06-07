import { MapPin } from 'lucide-react'



export type JobProps = {  time: string;
  url: string;
    role: string;
    company: string;
    location: string;
}

export  function Job(props: JobProps) {
  const { time, url, role, company, location } = props;
  return (
    <div className='relative shadow-lg bg-white  rounded-lg flex flex-col  py-3  justify-between flex-1 h-75 text-center'>
      <span className='absolute right-2 bg-slate-200 text-slate-700 top-2 text-sm py-1 px-3 rounded-2xl'>{time}</span>
     <div className='w-50 h-16 mt-10 mx-auto'>
       <img src={url} alt={role}  className='size-full object-contain' />
     </div>
      <span className='font-semibold'>{role}</span>
      <hr className=' w-full border-b border-slate-300' />
      <div className='px-2 flex flex-col gap-2'>
        <span className='text-left block font-semibold'>{company}</span>
        <div className='flex items-center justify-between  w-full  text-sm '>
          <div className='flex items-center gap-[2px]'>
              <MapPin className='text-gray-300' />
              <span >{location}</span>
          </div>

          <a href="#" className="text-link-green hover:bg-link-green/20  transition p-2 rounded-3xl w-24 text-center ">Apply now</a>
      </div>
      </div>
    </div>
  )
}
