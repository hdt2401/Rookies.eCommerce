import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import BrandPage from './pages/Brand'
import AddBrand from './pages/Brand/AddBrand'
import CategoryPage from './pages/Category'
import AddCategory from './pages/Category/AddCategory'
import HomePage from './pages/Home'
import UpdatingHome from './pages/Home/Updating'
import LoginPage from './pages/Login/Login'
import ProductPage from './pages/Product/Product'
import AddProduct from './pages/Product/AddProduct'
import UserPage from './pages/User'
import UpdatingUser from './pages/User/Updating'

function App() {
  return (
    <div className='admin-container'>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar col-3 d-flex flex-column flex-shrink-0 justify-content-between p-3 bg-light" style={{"boxShadow":"0 0 6px 0 #ccccccc2"}}>
            <div className='sidebar-main'>
              <h1 className='fw-bold text-center text-primary'>ADMIN</h1>
              <hr />
              <ul className='nav nav-pills flex-column mb-auto' >
                <li>
                  <button style={{ "width": "100%" }} className="btn btn-toggle fs-5 d-inline-flex align-items-center rounded border-0 collapsed mb-2" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    <span className='d-flex align-items-center justify-content-center me-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                      </svg>
                    </span>
                    Trang chủ
                  </button>
                  <div className="collapse" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/Home">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16">
                              <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                            </svg>
                          </span>
                          <span>Thống kê</span>
                        </NavLink>
                      </li>
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/UpdatingHome">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                              <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                            </svg>
                          </span>
                          <span>Đang cập nhật</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* quan ly nguoi dung */}
                <li>
                  <button style={{ "width": "100%" }} className="btn btn-toggle fs-5 d-inline-flex align-items-center rounded border-0 collapsed mb-2" data-bs-toggle="collapse" data-bs-target="#user-collapse" aria-expanded="true">
                    <span className='d-flex align-items-center justify-content-center me-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                      </svg>
                    </span>
                    Quản lý người dùng
                  </button>
                  <div className="collapse" id="user-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/User">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-video2" viewBox="0 0 16 16">
                              <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                              <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z" />
                            </svg>
                          </span>
                          <span>Xem người dùng</span>
                        </NavLink>
                      </li>
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/UpdatingUser">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                              <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                            </svg>
                          </span>
                          <span>Đang cập nhật</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* quan ly san pham */}
                <li>
                  <button style={{ "width": "100%" }} className="btn btn-toggle fs-5 d-inline-flex align-items-center rounded border-0 collapsed mb-2" data-bs-toggle="collapse" data-bs-target="#product-collapse" aria-expanded="true">
                    <span className='d-flex align-items-center justify-content-center me-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-inboxes" viewBox="0 0 16 16">
                        <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438L14.933 6zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0H1.066z" />
                      </svg>
                    </span>
                    Quản lý sản phẩm
                  </button>
                  <div className="collapse" id="product-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/Product">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                            </svg>
                          </span>
                          <span>Xem sản phẩm</span>
                        </NavLink>
                      </li>
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/AddProduct">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                          </span>
                          <span>Thêm sản phẩm</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* quan ly danh muc */}
                <li>
                  <button style={{ "width": "100%" }} className="btn btn-toggle fs-5 d-inline-flex align-items-center rounded border-0 collapsed mb-2" data-bs-toggle="collapse" data-bs-target="#category-collapse" aria-expanded="true">
                    <span className='d-flex align-items-center justify-content-center me-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                      </svg>
                    </span>
                    Quản lý danh mục
                  </button>
                  <div className="collapse" id="category-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/Category">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg>
                          </span>
                          <span>Xem danh mục</span>
                        </NavLink>
                      </li>
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/AddCategory">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-plus" viewBox="0 0 16 16">
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                              <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                            </svg>
                          </span>
                          <span>Thêm danh mục</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* quan ly thuong hieu */}
                <li>
                  <button style={{ "width": "100%" }} className="btn btn-toggle fs-5 d-inline-flex align-items-center rounded border-0 collapsed mb-2" data-bs-toggle="collapse" data-bs-target="#brand-collapse" aria-expanded="true">
                    <span className='d-flex align-items-center justify-content-center me-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-postcard" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z" />
                      </svg>
                    </span>
                    Quản lý thương hiệu
                  </button>
                  <div className="collapse" id="brand-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/Brand">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-richtext" viewBox="0 0 16 16">
                              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                              <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" />
                            </svg>
                          </span>
                          <span>Xem thương hiệu</span>
                        </NavLink>
                      </li>
                      <li className='ms-4'>
                        <NavLink className='nav-link fs-6 d-flex align-items-center' to="/AddBrand">
                          <span className='d-flex align-items-center justify-content-center me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                            </svg>
                          </span>
                          <span>Thêm thương hiệu</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar-register">
              <hr />
              <Link className='fs-5 d-flex align-items-center justify-content-center text-decoration-none' to="/Login">
                <span className='d-flex align-items-center justify-content-center me-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                  </svg>
                </span>
                <span>Đăng nhập</span>
              </Link>
            </div>
          </div>
          <div className="col-9">
            <Routes>
              <Route path='/Home' element={<HomePage />} />
              <Route path='/UpdatingHome' element={<UpdatingHome />} />

              <Route path='/Product' element={<ProductPage />} />
              <Route path='/AddProduct' element={<AddProduct />} />

              <Route path='/Brand' element={<BrandPage />} />
              <Route path='/AddBrand' element={<AddBrand />} />

              <Route path='/Category' element={<CategoryPage />} />
              <Route path='/AddCategory' element={<AddCategory />} />

              <Route path='/User' element={<UserPage />} />
              <Route path='/UpdatingUser' element={<UpdatingUser />} />
              <Route path='/Login' element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
