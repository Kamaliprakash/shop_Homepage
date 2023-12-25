import React,{useState} from 'react'


function Card ({cart,setCart,data}) {

  let [toggle,setToggle] = useState(true)
  return <div className="col mb-5">
  <div className="card h-100">
      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{data.Sale}</div>
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">{data.name}</h5>
              
              <span className="text-muted text-decoration-line-through">${data.price}</span>
              ${data.price}
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1)}}/>
            {
              toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                setCart(cart+1)
                setToggle(false)
                }}>
              Add to cart
            </button>:
            <button className="btn btn-outline-dark mt-auto" onClick={()=>{
              setCart(cart-1)
              setToggle(true)
              }}>
              Remove from Cart
            </button>
            }
      </div>
      </div>
      </div>
  </div>

}
export default Card;