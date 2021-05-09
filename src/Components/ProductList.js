import React from 'react'
import ProductInfo from './ProductInfo'

const ProductList = ({ products }) => {

  const handleClick = (name, price) => alert(`${name} costs ${price}`)
  
  const Total = products.reduce(function(prev, cur) {
  return prev + cur.price;
}, 1);

    return (
 
 <div>
                <h1>Shopping card</h1>
                
  <div className="tbl-header">
    <table cellPadding={0} cellSpacing={0} border={0}>
      <thead>
        <tr>
          <th>View</th>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
    </table>
  </div>
  

       {products.map((product, index)=>(
        <ProductInfo key={index} product={product} handleClick={handleClick}/>
       ))}
        

                <h1>Total: {Total}$</h1>

                         
                         
                         
 

</div>


    )
}

export default ProductList
