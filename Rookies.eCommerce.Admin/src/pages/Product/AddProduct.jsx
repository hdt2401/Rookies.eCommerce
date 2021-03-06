import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productApi from '../../api/productApi'
import categoryApi from '../../api/categoryApi'
import brandApi from '../../api/brandApi'

export default function AddProduct() {
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
  }
  const [product, setProduct] = useState(initProduct)
  const [categories, setCategories] = useState()
  const [brands, setBrands] = useState()
  const [file, setFile] = useState()
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
  }

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

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault()
    var formData = new FormData();
    formData.append("uploadFile", file);
    formData.append("name", product.name)
    formData.append("brandId", product.brandId)
    formData.append("categoryId", product.categoryId)
    formData.append("description", product.description)
    formData.append("detail", product.detail)
    formData.append("price", product.price)
    formData.append("promotionPrice", product.promotionPrice)
    formData.append("quantity", product.quantity)
    formData.append("image",product.image)

    for (const value of formData.values()) {
      console.log(value);
    }
    //call api
    productApi.addProduct(formData)
      .then((res) => console.log(res.data))
      .catch(e => {
        console.log(e);
      })
  }
  return (
    <div className="product-add">
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h2>Th??m s???n ph???m</h2>
      </div>
      <div>
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-6 mb-3">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingName" placeholder="T??n s???n ph???m"
                  name='name'
                  value={product.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingName">T??n s???n ph???m</label>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="form-floating">
                <select className="form-select" id="floatingCategory" aria-label="Ch???n danh m???c" defaultValue={'DEFAULT'}
                  name='categoryId'
                  value={product.categoryId}
                  onChange={handleInputChange}
                >
                  <option value="DEFAULT" disabled>Ch???n danh m???c</option>
                  {
                    (categories || []).map((item, index) => (
                      <option value={item.id} key={index}>{item.name}</option>
                    ))
                  }
                  {/* <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option> */}
                </select>
                <label htmlFor="floatingCategory">Ch???n danh m???c</label>
              </div>
            </div>
            <div className="col-3 mb-3">
              <div className="form-floating">
                <select className="form-select" id="floatingBrand" aria-label="Ch???n h??ng"
                  name='brandId'
                  value={product.brandId}
                  onChange={handleInputChange}
                >
                  <option selected>Ch???n h??ng</option>
                  {
                    (brands || []).map((item, index) => (
                      <option value={item.id} key={index}>{item.name}</option>
                    ))
                  }
                  {/* <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option> */}
                </select>
                <label htmlFor="floatingBrand">Ch???n h??ng</label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPrice" placeholder="Gi?? ti???n"
                  name='price'
                  value={product.price}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingPrice">Gi?? ti???n</label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPrice2" placeholder="Gi?? khuy???n m??i"
                  name='promotionPrice'
                  value={product.promotionPrice}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingPrice2">Gi?? khuy???n m??i</label>
              </div>
            </div>

            <div className="col-4">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingQuantity" placeholder="S??? l?????ng"
                  name='quantity'
                  value={product.quantity}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingQuantity">S??? l?????ng</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Chi ti???t s???n ph???m" id="floatingDescription" style={{ "minHeight": "10rem" }}
                  name='description'
                  value={product.description}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="floatingDescription">Chi ti???t s???n ph???m</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-floating">
                <textarea className="form-control" placeholder="M?? t???" id="floatingDetail" style={{ "minHeight": "10rem" }}
                  name='detail'
                  value={product.detail}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="floatingDetail">M?? t???</label>
              </div>
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="formFileMain" className="form-label">???nh ?????i di???n s???n ph???m</label>
              <input className="form-control" type="file" id="formFileMain"
                name='image'
                onChange={handleImageChange}
              />
            </div>
            <div className="col-12">
              <button type='submit' className="btn btn-primary d-flex align-items-center">
                <span className='d-flex align-items-center justify-content-center me-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </span>
                <span>Th??m s???n ph???m</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
