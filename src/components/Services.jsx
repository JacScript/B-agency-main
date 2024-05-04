import React from 'react'
import Header from './Header';

const Services = () => {
  return (
    <div className='w-full lg:max-w-screen-2xl lg:h-screen mx-auto bg-neutralSilver ' id='services'>
      <div className='lg:w-4/5 lg:mx-auto lg:h-full pt-12'>
         <div className="mb-4 w-4/5 mx-auto">
            <Header variant="text-center text-neutralDGrey text-6xl kode-mono uppercase font-semibold mb-4 " title='Our services'/>
            <Header variant="px-10 text-center" title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit. Quod, magnam! Dolorem expedita iure quo aspernatur itaque deleniti labore ea veritatis autem vel aut quidem ad numquam, animi magnam nam repellat nihil sequi explicabo quibusdam quod dolor eligendi optio reiciendis. Dolorem corporis tenetur temporibus minima fugit quo sint distinctio.' />
          </div>
          <div className='w-full h-96 mt-12'>
              <img className='h-full w-4/5 mx-auto object-cover' src="../src/assets/blog2.jpg" alt="" />
          </div>
          </div>
    </div>
  )
}

export default Services;