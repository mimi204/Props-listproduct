import React from 'react'

const ProductInfo = ({key, product ,handleClick}) => {
    return (
        <div>
            
     <div className="tbl-content">
  <table cellPadding={0} cellSpacing={0} border={0}>
   <tbody>
                    <tr>
        <td><button class="btn btn-5" onClick={()=>handleClick(product.name , product.price)} >Click me</button></td>
                <td><img src={product.imgSrc} alt={product.name} style={{width:"200px"}}/></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr> 
                         
    </tbody>
  </table>
        </div>
           
        </div>
    )
}

export default ProductInfo
