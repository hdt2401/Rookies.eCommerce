import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productApi from '../../api/productApi'
import categoryApi from '../../api/categoryApi'
import brandApi from '../../api/brandApi'

export default function UpdateProduct() {
  const initProduct = {
    id: null,
    name: "",
    brandId: null,
    categoryId: null,
    description: "",
    detail: "",
    price: null,
    promotionPrice: null,
    quantity: null,
    image: "",
    imageList: "",
  }
  const [product, setProduct] = useState(initProduct)
  const [categories, setCategories] = useState()
  const [brands, setBrands] = useState()
  const [submitted, setSubmitted] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const getProduct = (id) => {
    productApi.getProduct(id)
      .then(res => { setProduct(res.data) })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getProduct(id)
  }, [id])

  useEffect(() => {
    categoryApi.getCategoryList()
      .then(res => {
        const temp = Array.from(res.data)
        setCategories(temp)
      })
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    brandApi.getBrandList()
      .then(res => {
        const temp = Array.from(res.data)
        setBrands(temp)
      })
      .catch(e => console.log(e))
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
  }

  const updateProduct = () => {
    productApi.updateProduct(id, product)
      .then(res => console.log(res.data))
      .then(navigate("/product"))
      .catch(e => console.log(e))
  }
  // useEffect(() => {
  //   categoryApi.getCategoryList()
  //     .then(res => {
  //       const temp = Array.from(res.data)
  //       setCategories(temp)
  //     })
  //     .catch(e => console.log(e))
  // }, [])

  // useEffect(() => {
  //   brandApi.getBrandList()
  //     .then(res => {
  //       const temp = Array.from(res.data)
  //       setBrands(temp)
  //     })
  //     .catch(e => console.log(e))
  // }, [])

  // const handleSubmit = () => {
  //   const data = {
  //     name: product.name,
  //     brandId: product.brandId,
  //     categoryId: product.categoryId,
  //     description: product.description,
  //     detail: product.detail,
  //     price: product.price,
  //     promotionPrice: product.promotionPrice,
  //     quantity: product.quantity,
  //   }

  //   productApi.addProduct(data)
  //     .then((res) => console.log(res.data))
  //     .then(navigate("/Product"))
  //     .catch(e => {
  //       console.log(e);
  //     })
  // }

  return (
    <div className="product-add">
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Cập nhật sản phẩm</h2>
      </div>
      <div>
        <form>
          <div className="row">
            <div className="col-6 mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingName" placeholder="Tên sản phẩm"
                  name='name'
                  value={product.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingName">Tên sản phẩm</label>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="form-floating">
                <select className="form-select" id="floatingCategory" aria-label="Chọn danh mục" defaultValue={'DEFAULT'}
                  name='categoryId'
                  value={product.categoryId}
                  onChange={handleInputChange}
                >
                  <option value="DEFAULT" disabled>Chọn danh mục</option>
                  {
                    (categories || []).map((item, index) => (
                      <option value={item.id} key={index}>{item.name}</option>
                    ))
                  }
                </select>
                <label htmlFor="floatingCategory">Chọn danh mục</label>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="form-floating">
                <select className="form-select" id="floatingBrand" aria-label="Chọn hãng"
                  name='brandId'
                  value={product.brandId}
                  onChange={handleInputChange}
                >
                  <option selected>Chọn hãng</option>
                  {
                    (brands || []).map((item, index) => (
                      <option value={item.id} key={index}>{item.name}</option>
                    ))
                  }
                </select>
                <label htmlFor="floatingBrand">Chọn hãng</label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPrice" placeholder="Giá tiền"
                  name='price'
                  value={product.price}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingPrice">Giá tiền</label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPrice2" placeholder="Giá khuyến mãi"
                  name='promotionPrice'
                  value={product.promotionPrice}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingPrice2">Giá khuyến mãi</label>
              </div>
            </div>

            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingQuantity" placeholder="Số lượng"
                  name='quantity'
                  value={product.quantity}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingQuantity">Số lượng</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Chi tiết sản phẩm" id="floatingDescription" style={{ "minHeight": "10rem" }}
                  name='description'
                  value={product.description}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="floatingDescription">Chi tiết sản phẩm</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Mô tả" id="floatingDetail" style={{ "minHeight": "10rem" }}
                  name='detail'
                  value={product.detail}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="floatingDetail">Mô tả</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="formFileMain" className="form-label">Ảnh đại diện sản phẩm</label>
              <input className="form-control" type="file" id="formFileMain"
                name='image'
                value={product.image}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <button onClick={updateProduct} className="btn btn-primary d-flex align-items-center">
                <span className='d-flex align-items-center justify-content-center me-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </span>
                <span>Cập nhật sản phẩm</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
