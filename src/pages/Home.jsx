import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, BouquetBlock, LoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';

import { fetchBouquets } from '../redux/actions/bouquets';
import { addBouquetToCart } from '../redux/actions/cart';



const categoryNames = ["Roses", "Peonies", "Lilies", "Orchids", "Begonias"];
const sortItems =  [{name:'Popular', type: 'popular'}, 
                    {name:'Price', type: 'price'}, 
                    {name: 'Alphabet', type: 'name'}]


function Home() {
  const dispatch = useDispatch();
  const items  = useSelector(({ bouquets }) =>  bouquets.items);
  const cartItems  = useSelector(({ cart }) =>  cart.items);

  const isLoaded  = useSelector(({ bouquets }) =>  bouquets.isLoaded);
  const { category, sortBy }  = useSelector(({ filters }) =>  filters);


  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [ ]);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddBouquet = (obj) => {
    dispatch(addBouquetToCart(obj))
  }
  useEffect(() => {
    dispatch(fetchBouquets(sortBy, category))
  }, [sortBy, category]);

  return (
    <div className="container">
          <div className="content__top">
            <Categories activeCategory={category} types={categoryNames} onClickCategory={onSelectCategory}/>
            <SortPopup activeSortType={sortBy} onClickSortType={onSelectSortType} items={sortItems} />
          </div>
          <h2 className="content__title">All bouquets:</h2>
          <div className="content__items">
            {
              isLoaded ? items.map((obj) =>
              <BouquetBlock 
              onClickAddBouquet={handleAddBouquet} 
              key={obj.id} 
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
              isLoading={true} {...obj}/>) : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)
            }  
          </div>
    </div>
  )
}



export default Home