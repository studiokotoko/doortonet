import JobsHome from "../components/jobs/JobsHome";

const style = {
    width:"100vw",
    paddingTop:"10vh"
}

const jobs = () => {
    return (
        <div style={style}>
            <JobsHome/>
        </div>
    )
}

export default jobs;
