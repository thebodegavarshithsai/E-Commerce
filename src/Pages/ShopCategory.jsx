import React, { useContext } from 'react'
import "./css/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import Item from "../Components/Item/Item.jsx"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"

const ShopCategory = (props) => {
  // const category_products=useContext(ShopContext).filter((products)=> products.category===props.category)

  const all_product=useContext(ShopContext)
  return (
    <div className='shop-category'>
     <img className='shopcategory-banner' src={props.banner}/>
     <div className='shopcategory-indexsort'>
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon}/>
        </div>
     </div>
     <div className="shopcategory-products">
      {all_product.map((item,i)=>{
        if(props.category===item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null
        }
      })}
     </div>
     <div className="shopcategory-loadmore">
        Explore More
     </div>
     {/* <div className='category-item'>
     {category_products.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div> */}
    </div>
  )
}

export default ShopCategory
