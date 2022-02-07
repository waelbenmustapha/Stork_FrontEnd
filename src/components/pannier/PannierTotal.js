import React from 'react';
import './PannierCard.css'
const PannierTotal = ({totalPrice}) => {
  return <div className='pannierTotal'>
     <h5>Total Price :<br/>
      €{totalPrice} <br/>
      €{totalPrice}
      
      </h5> 
  </div>;
};

export default PannierTotal;
