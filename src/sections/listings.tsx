import { Job  } from "../component/job-listing";
import type { JobProps } from "../component/job-listing";
export default function Listings() {
  const jobs:JobProps[] = [
    {
      time: "Full-time",
      url: "/paystack.png",
      role: "QA Engineer",
      company: "Paystack",
      location: "Lagos, Nigeria"
    },
    {
      time: "Part-time",
      url: "G-logo.png",
      role: "Product Analyst",
      company: "Google",
      location: "Lagos, Nigeria"
    },
    {
      time: "Full-time",
      url: "flutter.png",
      role: "HR Manager",
      company: "Flutterwave",
      location: "Abuja, Nigeria"
    },
    {
      time: "Full-time",
      url: "access.png",
      role: "QA Engineer",
      company: "Access Bank",
      location: "Lagos, Nigeria"
    }
  ];

  return (
    <div className=" w-full mt-10">
        <h2 className="text-2xl font-bold">Recommended Jobs:</h2>

        <div className="flex justify-between items-center my-8 flex-wrap gap-4 ">
            {jobs.map((job, index) => (
                <Job
                    key={index}
                    time={job.time}
                    url={job.url}
                    role={job.role} 
                    company={job.company}
                    location={job.location}
                />
            ))}        

        </div>


      
    </div>
  )
}
