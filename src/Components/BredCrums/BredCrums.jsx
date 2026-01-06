import React from 'react'
import arrow_icon from '../../assets/arrow_icon.png'
const Bredcrums = (props) => {
    const {product}=props;
  return (
      <div className="bredcrums">
        Home<img src={arrow_icon} alt="arrow" height="10px"/>
        SHOP<img src={arrow_icon} alt="arrow" height="10px"/>
        {product.category}<img src={arrow_icon} alt="arrow" height="10px"/>
        {product.name}<img src={arrow_icon} alt="arrow" height="10px"/>

      </div>
  )
}

export default Bredcrums
