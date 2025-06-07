import { LocateIcon } from 'lucide-react'



export type JobProps = {  time: string;
  url: string;
    role: string;
    company: string;
    location: string;
}

export  function Job(props: JobProps) {
  const { time, url, role, company, location } = props;
  return (
    <div>
      <span>{time}</span>
      <img src={url} alt={role} />
      <span>{role}</span>
      <hr />
      <span>{company}</span>
      <div>
        <div>
            <LocateIcon/>
            <span>{location}</span>
        </div>

        <a href="#" className="bg-link-green/10 hover:bg-link-green/20  transition p-2 rounded-3xl w-24 text-center text-gray-700">Apply now</a>
      </div>
    </div>
  )
}
