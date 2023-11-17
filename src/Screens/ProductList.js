import React from 'react'
import Prod_card from './Prod_card' 
const ProductList = (props) => {
    console.log(props)
    let {products} = props
  return (
    <div>
      <div>
        <div><h2>
            Products
        </h2></div>
        </div>
        <div>
            {products.map((product)=><Prod_card {...product}/>)}
        </div>
      </div>
    
  )
}

export default ProductList
