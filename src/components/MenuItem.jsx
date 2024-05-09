import React from 'react'

const MenuItem = ({title,imageUrl}) => {
  return (
    <div className='w-50 h-32'> 
                                 {/* col-start-2 */}
                   <a className="cursor-pointer"><img className="w-20 rounded-full bg-cover h-20 object-cover lg:ml-4" src={imageUrl} alt="" />
                   <p className="text-center mt-2 md:text-white font-bold uppercase text-xs">{title}</p></a>
                   </div>
  )
}

export default MenuItem;