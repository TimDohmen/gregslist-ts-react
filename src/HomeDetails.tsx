import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


// export default class HomeDetails extends React.Component{

//   render(){
//     return(
//       <div>
//         this gonna be the home details page
//       </div>
//     )
//   }
// }

type Params= {
  id: string
}



function HomeDetails(){
  let id: Params = useParams();
  const [home, setHome] = useState(null)
  useEffect(() => {
    const GetHomeDetails=async ()=>{
      console.log(id.id)
      const res = await axios.get(`http://localhost:3000/api/homes/${id.id}`)
      console.log(res.data)
      setHome(res.data)
    }
    GetHomeDetails()
  }, [id])
if(home == null){
  return(
    <div>
      No Home Info Yet
    </div>
  )
}

  return (
  <div>
    <div className="card">
      <img className="card-img-top" src={home.img} alt=""></img>
      <div className="card-body">
            <p className="card-text">Floors : {home.floors} Square Ft : {home.sqFt}</p>
            <h4 className="card-title">{home.description}</h4>
            <p className="card-text">Price : {home.price}</p>
          </div>
    </div>
  </div>
)
}
export default HomeDetails;