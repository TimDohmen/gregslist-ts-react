import Axios from 'axios'

const AxiosService = ()=>{
  const api = ()=>{
    Axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 5000
    })
  }
}

export default AxiosService