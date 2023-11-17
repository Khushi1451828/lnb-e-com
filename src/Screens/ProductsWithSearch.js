import { useState } from 'react'
import products from './Data'
import ProductList from './ProductList'

const ProductsWithSearch = () => {
    const [searchItem,setSearchItem]=useState("")

    const [dataToShow,setDataToShow]=useState([])
    const handleSearch=(e)=>{
        setSearchItem(e.target.value)
        var d = products.filter((el,i)=>{
            return el.name.toLowerCase().includes(e.target.value)
        }
        )
    setDataToShow(d);
    }
  return (
    <div>
      <input placeholder='Enter any text' value={searchItem} onChange={handleSearch}/>
        <ProductList products={dataToShow}/>
    </div>
  )
}

export default ProductsWithSearch
