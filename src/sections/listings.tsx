import { Job  } from "../component/job-listing";
import type { JobProps } from "../component/job-listing";
export default function Listings() {
  const jobs:JobProps[] = [
    {
      time: "Full-time",
      url: "/images/companies/1.png",
      role: "Software Engineer",
      company: "Tech Solutions",
      location: "Remote"
    },
    {
      time: "Part-time",
      url: "/images/companies/2.png",
      role: "Data Analyst",
      company: "Data Insights",
      location: "New York, NY"
    },
    {
      time: "Contract",
      url: "/images/companies/3.png",
      role: "Project Manager",
      company: "Project Pros",
      location: "San Francisco, CA"
    }
  ];

  return (
    <div>
        <h2>Recommended Jobs</h2>

        <div>
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
