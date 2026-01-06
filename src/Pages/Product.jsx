import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Bedcrums from '../Components/Bedcrums/Bedcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_products}=useContext(ShopContext);
  const {productsId}= useParams();
  const product = all_products.find((e) => e.id === productsId);
  return (
    <div>
      <Bedcrums product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
