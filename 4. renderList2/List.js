import React from 'react'
import PropTypes from 'prop-types'

export default function List({ category = "Category", items = [] }) {
    
    const listItems = items.map(fruit => <li key={fruit.id}>{fruit.name} : <b>{fruit.cal}</b></li>)
    
    return (
    <>
    <h1 className='list-category'>{category} :</h1>
    <ul className='list-items'>{listItems}</ul>
    </>
    )
}


//Default prop types doesn't seems to work in new react versions shift to typescript instead
List.propTypes = {
  category : PropTypes.string,
  items : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cal: PropTypes.number.isRequired
    })
  )
};
