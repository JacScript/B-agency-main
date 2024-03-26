import React from 'react'

const Conversion = () => {
  return (
    <div className="max-w-screen-2xl h-screen mt-20">
      <div className="w-3/5 mx-auto h-full flex flex-col">
        <div className="w-full h-32">
          <h1 className="kode-mono text-brandPrimary text-5xl text-center font-semibold">
            Crop Converter
          </h1>
        </div>

        <div className="w-full px-12">
          <div className="flex items-center w-full">
            <div className="mr-4 w-1/4 h-full">Product </div>
            
              <div className="w-3/4">
                <select name="crop-name" id="crop-name" className="w-full rounded-xl">
                  <option value="2">Corn</option>
                  <option value="7">Almond</option>
                  <option value="11">Hazelnut</option>
                  <option value="6">Triticale</option>
                  <option value="5">Barley</option>
                  <option value="1">Rice</option>
                  <option value="4">Wheat</option>
                  <option value="13">Cashew</option>
                  <option value="17">Peanut</option>
                  <option value="12">Specialty Coffee</option>
                  <option value="8">Walnut</option>
                  <option value="14">Olive Oil</option>
                  <option value="9">Cocoa</option>
                  <option value="16">Coffee</option>
                  <option value="10">Pistachio</option>
                  <option value="15">Pine Nut</option>
                  <option value="18">Refined Sunflower Oil</option>
                </select>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversion