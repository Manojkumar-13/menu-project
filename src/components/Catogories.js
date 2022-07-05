import React from 'react'

const Catogories = ({filterItems, categories}) => {
  return (
    <div className='btn-container'>
      {categories.map((category,index)=>{
        return(
          <button 
        key ={index} 
        onClick={()=>filterItems(category)}>
          {category}
          </button>
        )
        
      })}
      </div>
  )
}

export default Catogories