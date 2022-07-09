import axios from "axios";

const api = axios.create(
  {
    baseURL : `https://localhost:7276/`
  }
)

const getProductList = () => api.get('/api/Product')

const addProduct = (data) => {
  console.log('call api',data);
  return api.post('/api/Product', data)
}

const deleteProduct = (id) => {
  return api.delete(`/api/Product/${id}`)
}

const getProduct = (id) => {
  return api.get(`/api/Product/${id}`)
}

const updateProduct = (id, data) => {
  console.log(data);
  return api.put(`/api/Product/${id}`, data)
}

export default {
  getProductList,
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct
}