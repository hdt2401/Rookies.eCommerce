import axios from "axios";

const api = axios.create(
  {
    baseURL : `https://localhost:7276/`
  }
)

api.get('/api/Brand').then(
  res => console.log(res.data)
)

const getBrandList = () => api.get('/api/Brand')

console.log(getBrandList)

export default {
  getBrandList
}