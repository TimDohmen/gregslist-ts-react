import { useEffect, useState } from "react"
import { setTimeout } from "timers"

function ClockComponent(props: any){


let [time, setTimo] = useState(Date.now())

useEffect(() => {
  const intId = setInterval(()=>{
    setTimo(Date.now())
  },1000)
  return () => {
    clearInterval(intId)
  }
}, [Date.now()])

  return(
    <div>
      <h1>Welcome!</h1>
      <h2>It is {new Date(time).toString()}</h2>
    </div>
  )
}

export default ClockComponent