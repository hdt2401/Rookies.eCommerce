import React from 'react'

export default function AddProduct() {
  return (
    <div className="product-add">
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Thêm sản phẩm</h2>
      </div>
      <div>
        <form action="">
          <div className="row">
            <div className="col-6 mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingName" placeholder="Tên sản phẩm" />
                <label htmlFor="floatingName">Tên sản phẩm</label>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="form-floating">
                <select className="form-select" id="floatingCategory" aria-label="Chọn danh mục" defaultValue={'DEFAULT'}>
                  <option value="DEFAULT" disabled>Chọn danh mục</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label htmlFor="floatingCategory">Chọn danh mục</label>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="form-floating">
                <select className="form-select" id="floatingBrand" aria-label="Chọn hãng">
                  <option selected>Chọn hãng</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label htmlFor="floatingBrand">Chọn hãng</label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPrice" placeholder="Giá tiền" />
                <label htmlFor="floatingPrice">Giá tiền</label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPrice2" placeholder="Giá khuyến mãi" />
                <label htmlFor="floatingPrice2">Giá khuyến mãi</label>
              </div>
            </div>

            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingQuantity" placeholder="Số lượng" />
                <label htmlFor="floatingQuantity">Số lượng</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Chi tiết sản phẩm" id="floatingDescription" style={{ "minHeight": "10rem" }}></textarea>
                <label htmlFor="floatingDescription">Chi tiết sản phẩm</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Mô tả" id="floatingDetail" style={{ "minHeight": "10rem" }}></textarea>
                <label htmlFor="floatingDetail">Mô tả</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="formFileMain" className="form-label">Ảnh đại diện sản phẩm</label>
              <input className="form-control" type="file" id="formFileMain" />
            </div>
            <div className="col-3 mb-3">
              <label htmlFor="formFileDetail1" className="form-label">Ảnh 1</label>
              <input className="form-control" type="file" id="formFileDetail1" />
            </div>
            <div className="col-3 mb-3">
              <label htmlFor="formFileDetail2" className="form-label">Ảnh 2</label>
              <input className="form-control" type="file" id="formFileDetail2" />
            </div>
            <div className="col-3 mb-3">
              <label htmlFor="formFileDetail3" className="form-label">Ảnh 3</label>
              <input className="form-control" type="file" id="formFileDetail3" />
            </div>
            <div className="col-3 mb-3">
              <label htmlFor="formFileDetail4" className="form-label">Ảnh 4</label>
              <input className="form-control" type="file" id="formFileDetail4" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary d-flex align-items-center">
                <span className='d-flex align-items-center justify-content-center me-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </span>
                <span>Thêm sản phẩm</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
