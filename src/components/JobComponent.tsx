import React from "react";
import { Link } from "react-router-dom";
import JobInterface from "../interfaces/JobInterface";

type Props={
jobProp: JobInterface
}

export default class JobComponent extends React.Component<Props,{}>{


  render(){
    return(
      <div>
        <div className="card">
          <Link to={`/jobs/${this.props.jobProp._id}`}>
          <div className="card-body">
            <h4 className="card-title">{this.props.jobProp.company}</h4>
            <h3 className="card-text">{this.props.jobProp.title}</h3>
            {/* <p>{this.props.jobProp.description} | Salary is {this.props.jobProp.pay} </p> */}
          </div>
          </Link>
        </div>
      </div>
    )
  }
}