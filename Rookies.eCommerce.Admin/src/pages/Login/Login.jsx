import React from 'react'

export default function Login() {
  return (
    <div className="form-signin m-auto text-center" style={{"width":"25rem"}}>
      <form>
        <h1 className="h3 mb-3 fw-normal">Đăng nhập</h1>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="Tên tài khoản" />
          <label htmlFor="floatingInput">Tên tài khoản</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Mật khẩu" />
          <label htmlFor="floatingPassword">Mật khẩu</label>
        </div>
        {/* <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div> */}
        <button className="w-100 btn btn-lg btn-primary" type="submit">Đăng nhập</button>
        {/* <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p> */}
      </form>
    </div>
  )
}
