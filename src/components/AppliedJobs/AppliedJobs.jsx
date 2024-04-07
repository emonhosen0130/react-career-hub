import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";

const AppliedJobs = () => {
     const jobs = useLoaderData();
     useEffect(()=>{
        const storeJobIds = getStoredJobApplication();
        if(jobs.length > 0 ){
            const jobsApplied = jobs.filter(job => storeJobIds.includes(job.id))
            console.log(jobsApplied)
        }
     },[])
    return (
        <div>
            <h2>Jobs i applied</h2>
        </div>
    );
};

export default AppliedJobs;