import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


// export default class JobDetails extends React.Component{
//   render(){
//     return (
//       <div>gonna be the job deets</div>
//     )
//   }
// }
// changing to function component to access useParams

type Param ={
  id:string
}

function JobDeatils(){

const [job, setJob] = useState(null)

  const param: Param = useParams();

  useEffect(() => {
    async function GetJob(id: string){  
      console.log('getting job', id)
      const res = await axios.get(`http://localhost:3000/api/jobs/${id}`)
      console.log(res)
      setJob(res.data)
    }

    GetJob(param.id)

  }, [param.id])

if(job==null){
  return(
    <div><h1>No Job deets yet</h1></div>
  )
}

return(
  <div>
    <div className="card">
    <div className="card-body">
      <h4 className="card-title">{job.company}</h4>
      <h3 className="card-text">{job.title}</h3>
      <p>{job.description} | Salary is {job.pay}</p>
    </div>
  </div></div>
)
}

export default JobDeatils