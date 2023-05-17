import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';



function BouquetBlock({ id, name, imageUrl, price, types, sizes, onClickAddBouquet, addedCount }) {
  
    const tapes = ['Without tapes', 'With tapes'];
    const diametr = [30, 60, 90];
    const [ activeTape, setActiveTape ] = useState(types[0]);
    const [ activeDiametr, setActiveDiametr ] = useState(sizes[0]);

    const onSelectTape = (index) => {
        setActiveTape(index);
    }
    const onSelectDiametr = (index) => {
        setActiveDiametr(index)
    }
    
    const onAddBouquet = () => {
      const obj = {
        id, name,
        imageUrl,
        price,
        size: diametr[activeDiametr],
        type: tapes[activeTape],
      }
      onClickAddBouquet(obj)
    };


  return (
    <div className="bouquet-block">
              <img
                className="bouquet-block__image"
                src={imageUrl}
                alt={name}
              />
              <h4 className="bouquet-block__title">{name}</h4>
              <div className="bouquet-block__selector">
                <ul>
                    {tapes.map((type, index ) => <li key={type} onClick={() => onSelectTape(index)} className={classNames({
                        active : activeTape === index,
                        disabled : !types.includes(index),
                    })}>{type}</li>)}
                  
                </ul>
                <ul>
                    {diametr.map((size, index ) => <li key={size} onClick={() => onSelectDiametr(index)} className={classNames({
                        active : activeDiametr === index,
                        disabled : !sizes.includes(index),
                    })}>{size} cm.</li>)}
                  
                </ul>
              </div>
              <div className="bouquet-block__bottom">
                <div className="bouquet-block__price">from {price} $</div>
                <Button onClick={onAddBouquet} className="button--add" outline>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span> To add</span>
                 {addedCount &&  <i>{addedCount}</i>}
                </Button>
                
              </div>
            </div> 
  )
}

BouquetBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    onAddBouquet: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    addedCount: PropTypes.number,
   
};
BouquetBlock.defaultProps = {
    name: '---',
    sizes: [],
    price: 0,
  
};


export default BouquetBlock