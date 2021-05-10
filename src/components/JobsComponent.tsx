import axios from "axios";
import React from "react";
import JobInterface from "../interfaces/JobInterface";
import JobComponent from "./JobComponent";


type State={
jobs: JobInterface[]
}

export default class JobsComponent extends React.Component<{}, State>{

  constructor(props:any){
    super(props);
    this.state={
      jobs: [],
    }
    this.createJob = this.createJob.bind(this)
  }

  async componentDidMount(){
    const res = await axios.get("http://localhost:3000/api/jobs")
    console.log(res)
    this.setState({jobs: res.data})
  }

  async createJob(event: any){
    event.preventDefault()
    console.log(event.target)
    const form = event.target
    const res = await axios.post("http://localhost:3000/api/jobs",{
      pay: form.pay.value,
      company: form.company.value,
      title: form.title.value,
      description: form.description.value
    })
    console.log(res)
    this.setState({jobs: [...this.state.jobs, res.data]})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.createJob}>
          <input name="pay" type="number"  placeholder="Salary"/>
          <input name="company" type="text" placeholder="Company" />
          <input name="title" type="text" placeholder="Job Title" />
          <input name="description" type="text" placeholder="Description" />
          <button>Create Job</button>
        </form>
        {this.state.jobs.map((j, i)=>
        <JobComponent key={i} jobProp={j}/>
          )}
      </div>
    )
  }
}