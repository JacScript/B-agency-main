import React from 'react'

const Button = ({type, title, variant}) => {
  return (
    <button
       className={`${variant}`}
       type={type}>
       {title}
    </button>
  )
}

export default Button