import React from 'react'

export default function AddCategory() {
  return (
    <div>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Thêm danh mục</h2>
      </div>
      <div>
        <form action="">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingName" placeholder="Tên danh mục" />
            <label htmlFor="floatingName">Tên danh mục</label>
          </div>
          <button type="submit" className="btn btn-primary d-flex align-items-center">
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
