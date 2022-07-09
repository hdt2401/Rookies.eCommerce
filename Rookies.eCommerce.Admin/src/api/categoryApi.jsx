import axios from "axios";

const api = axios.create(
  {
    baseURL : `https://localhost:7276/`
  }
)

api.get('/api/category').then(
  res => console.log(res.data)
)

const getCategoryList = () => api.get('/api/category')

console.log(getCategoryList)

export default {
  getCategoryList
}