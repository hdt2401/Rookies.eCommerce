import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import categoryApi from '../../api/categoryApi'

export default function AddCategory() {
  const initCategory = {
    id:null,
    name:"",
    parentId:1
  }
  const [category, setCategory] = useState(initCategory)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setCategory({...category, [name]:value})
  }

  const handleSubmit = () => {
    const data = {
      name : category.name,
      parentId : category.parentId
    }

    categoryApi.addCategory(data)
      .then((res)=>console.log(res.data))
      .then(navigate("/Category"))
      .catch(e => {
        console.log(e);
      })
  }
  return (
    <div>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Thêm danh mục</h2>
      </div>
      <div>
        <form>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingName" placeholder="Tên danh mục" 
              name='name'
              value={category.name}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingName">Tên danh mục</label>
          </div>
          <button onClick={() => handleSubmit()} className="btn btn-primary d-flex align-items-center">
            <span className='d-flex align-items-center justify-content-center me-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </span>
            <span>Thêm danh mục</span>
          </button>
        </form>
      </div>
    </div>
  )
}
