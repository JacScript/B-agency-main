import React from "react";
import Header from "./Header";
import Button from "./Button";

const Solution = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:h-screen" id="solution">
      <div className="text-center mt-12">
        <Header variant="text-6xl kode-mono text-neutralDGrey font-semibold uppercase" title='Our solution'/>
          
    
        <Header variant="text-center mx-8 my-4" title='Agri Marketplace is a digital B2B market solution that brings together Farmers and Industrial Buyers.'/>       
        </div>
                <div className="lg:h-4/5 lg:mb-0 lg:w-4/5 lg:mx-auto">

                     <div className="m-5 lg:m-0 lg:w-full h-1/2 lg:flex">
                        <div className="m-5 lg:m-0 h-96 sm:max-lg:m-4 lg:w-1/2 lg:h-full">
                           <div className="w-4/6 mx-auto h-4/5"><img className=" object-cover" src="/src/assets/venn-diagram.png" /></div>
                        </div>
                        <div className="lg:w-1/2 lg:bg-white mx-4"> 
                             <Header variant="m-12 lg:mb-4 lg:mx-0 lg:mt-0 lg:max-2xl:text-sm " title='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, necessitatibus ipsa ipsam neque laborum facilis dignissimos, magni architecto quas aliquam esse repellat eligendi assumenda quod, recusandae libero vero! Voluptatum, commodi.'/>
                             <Header variant="m-12 lg:mb-4 lg:mx-0 lg:mt-0 font-semibold lg:max-2xl:text-sm" title='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, modi. Aut alias atque suscipit qui velit obcaecati earum debitis error, blanditiis est fugit autem dicta doloremque sit eaque illo magnam!'/>
                             <div className="sm:max-lg:m-12 flex justify-around lg:justify-between lg:align-left gap-2">
                                <Button type='button' title="Explore the market" variant="btn-primary bg-brandPrimary"/>
                                <Button variant="btn-primary " title='Learn more about us'/>
                             </div>
                         </div>
                     </div>


                     <div className="lg:w-full h-1/2 lg:flex ">
                           <div className="lg:w-1/2 m-4 lg:m-0">
                             <ul className="p-4 lg:max-2xl:text-sm list-disc m-12 lg:mb-4 lg:mx-0 lg:mt-0">
                               <li className="mb-2">A user-friendly platform that generates market opportunity for farmers and industry buyers.</li>
                               <li className="mb-2">Unlimited access to a global market from anywhere, at anytime.</li>
                               <li className="mb-2">Transparent and reliable market information, deal creation and negotiation.</li>
                             </ul>
                           </div>
                           <div className="m-5 lg:m-0 h-96 sm:max-lg:m-4 lg:w-1/2 lg:h-full">
                           <div className="w-4/6 mx-auto h-4/5"><img className=" object-cover" src="/src/assets/venn-diagram.png" /></div>
                        </div>
                     </div>
                     
                </div>
        </div>
  );
};

export default Solution;
