import axios from "axios";

const api = axios.create(
  {
    baseURL : `https://localhost:7276/`
  }
)

const getBrandList = () => api.get('/api/Brand')

const addBrand = (data) => {
  console.log('call api',data);
  return api.post('/api/Brand', data)
}

const deleteBrand = (id) => {
  return api.delete(`/api/Brand/${id}`)
}

const getBrand = (id) => {
  return api.get(`/api/Brand/${id}`)
}

const updateBrand = (id, data) => {
  console.log(data);
  return api.put(`/api/Brand/${id}`, data)
}

export default {
  getBrandList,
  addBrand,
  deleteBrand,
  getBrand,
  updateBrand
}