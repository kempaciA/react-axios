import React from 'react'
import PropTypes from 'prop-types';


const Todo = ({id, title}) => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <h5 className='mx-5'> id: {id}</h5>
        <p> <strong>title:</strong> {title}</p>
    </div>
  )
}


Todo.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string
}

export default Todo