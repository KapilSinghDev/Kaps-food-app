import React from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
// import { AiFillBagPlusFill, AiFillBagXFill } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Cards = (props) => {
  return (
    <div className='res-cards'>
      <div className='res-img'>
        <img src={props.url} alt='' />
      </div>
      <div className='dis-row-one'>
        <div className='dis-line-1'>
          <div className='dis-res'>{props.resName}</div>
          <div className='dis-price'>{props.price}</div>
        </div>
        <div className='dis-line-2'>
          <LiaShoppingBagSolid />
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Cards;
