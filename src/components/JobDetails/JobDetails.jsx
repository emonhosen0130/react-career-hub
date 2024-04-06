import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        toast('You have applied successfully');
    }
    return (
        <div>
            <h2>job Details of : {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in facilis qui dolore dignissimos cum quia, fuga commodi deleniti. Eos!</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full"> Apply Now</button>
                </div>
            </div>


            <ToastContainer />
        </div>
    );
};

export default JobDetails;