import React from 'react'

const Menu = ({menuItems}) => {
  function formattoCurrency(amount){
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return (
    <div className="section-center">
      {menuItems.map((menuItem) =>{
        const {id, title, price, img,desc} = menuItem;

        return(
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className='photos' />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₹{formattoCurrency(price)}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      }
      
      )}
    </div>
  )
}

export default Menu