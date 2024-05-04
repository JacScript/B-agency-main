import React from "react";
import aboutImg from "../assets/about1.png";
import Header from "./Header";
import Button from "./Button";

const Started = () => {
  return (
    <div className="w-full lg:h-full lg:max-w-screen-2xl" id="start">
         <div className="lg:w-4/5 lg:mx-auto lg:h-full mt-24">
          <div className="mb-4">
            <Header variant="text-center text-neutralDGrey text-6xl kode-mono uppercase font-semibold mb-4 " title='get stared'/>
            <Header variant="px-12" title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit. Quod, magnam! Dolorem expedita iure quo aspernatur itaque deleniti labore ea veritatis autem vel aut quidem ad numquam, animi magnam nam repellat nihil sequi explicabo quibusdam quod dolor eligendi optio reiciendis. Dolorem corporis tenetur temporibus minima fugit quo sint distinctio.'/>
            
          </div>

          <div className="w-full lg:h-96 lg:flex mb-24 lg:mb-0">
              <div className="lg:w-1/2 h-full px-12 lg:p-12">
                  <div>
                    <Header variant="text-2xl font-semibold text-brandPrimary" title='Post offer as a seller'/>
                    <Header variant="my-4" title='As a seller, post offers for the agricultural crop you are looking to sell, and gain immediate access to credit-verified buyers. Or simply react to an existing buyer’s bid and start your transaction.'/>
                  </div>
                  <div className="flex justify-between my-12">
                    <Button variant="btn-primary px-4" title='Register as a seller'/>
                    <Button variant="btn-primary px-7" title='Selling offer video'/>
                  </div>
              </div> 
              <div className="lg:w-1/2 lg:h-96 px-12 lg:p-12">
              <div>
                    <Header variant="text-2xl font-semibold text-brandPrimary" title='Post bid as a buyer'/>
                    <Header variant="my-4" title='As a seller, post offers for the agricultural crop you are looking to sell, and gain immediate access to credit-verified buyers. Or simply react to an existing buyer’s bid and start your transaction'/>
                                      </div>
                  <div className="flex justify-between my-12">
                    <Button variant="btn-primary px-4" title='Register as a buyer'/>
                    <Button variant="btn-primary px-7" title='Buying offer video'/>
                  </div>
              </div>
          </div>
         </div>
    </div>
  );
};

export default Started;
