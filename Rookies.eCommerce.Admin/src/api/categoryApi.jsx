import axios from "axios";

const api = axios.create(
  {
    baseURL : `https://localhost:7276/`
  }
)

const getCategoryList = () => api.get('/api/category')

const addCategory = (data) => {
  console.log('call api',data);
  return api.post('/api/category', data)
}

const deleteCategory = (id) => {
  return api.delete(`/api/category/${id}`)
}

const getCategory = (id) => {
  return api.get(`/api/category/${id}`)
}

const updateCategory = (id, data) => {
  console.log(data);
  return api.put(`/api/category/${id}`, data)
}

export default {
  getCategoryList,
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory
}