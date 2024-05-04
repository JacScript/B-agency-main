import React from 'react'

const Header = ({variant, title}) => {
  return (
    <p
      className={`${variant}`}
    >{title}</p>
  )
}

export default Header