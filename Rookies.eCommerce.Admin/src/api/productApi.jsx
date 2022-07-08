import axios from "axios";

const api = axios.create(
  {
    baseURL : `https://localhost:7276/`
  }
)

api.get('/api/product').then(
  res => console.log(res.data)
)

const getProductList = () => axios.get('/api/product')

console.log(getProductList)

export default {
  getProductList
}