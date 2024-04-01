import React from 'react'

const Conversion = () => {
  return (
    <div className="max-w-screen-2xl h-screen mt-20">
      <div className="md:w-full md:px-8  lg:w-4/6 lg:mx-auto h-full flex flex-col xl:w-3/6 xl:mx-auto">
        <div className="w-full h-32">
          <h1 className="kode-mono text-brandPrimary text-5xl text-center font-semibold">
            Crop Converter
          </h1>
        </div>

        <div className="w-full px-12">
          <div className="flex md:flex-row items-center w-full flex-col">
            <div className="md:mr-4 w-1/6 h-full mb-2 md:mb-0">Product </div>

            <div className="w-5/6">
              <select
                name="crop-name"
                id="crop-name"
                className="w-full rounded-lg"
              >
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

          <div className="w-full flex justify-between items-center mt-4 md:flex-row flex-col">
            <div className="w-full md:w-1/2 flex md:flex-row flex-col">
              <div className="md:w-1/3 mx-auto md:mx-0 md:mr-[1.8rem] flex items-center mb-2 md:mb-0 ">
                Price/Unit
              </div>
              <div className="w-5/6 mx-auto md:w-2/3 md:mx-0 h-full">
                {/* <input
                  type="hidden"
                  id="real-price-unit-calculator"
                  name="real-price-unit-calculator"
                  value="-1"
                /> */}
                <input
                  type="number"
                  name="price-unit-calculator"
                  id="price-unit-calculator"
                  class="form-control crop-input"
                  step="0.1"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            <div className="w-full md:ml-8 md:w-1/2 my-4 md:my-0">
              <div className="w-full h-full flex justify-between flex-col md:flex-row">
                <div className="w-full md:w-2/5 text-center md:text-left mb-2 md:mb-0">Currency</div>
                <div className="w-full mx-12 md:mx-0 md:w-3/5 flex justify-between">
                  <div className="w-1/2 pl-12 md:pl-0">
                    <label className="">
                      <div>
                        <input
                          id="calculator-btn-euro"
                          type="radio"
                          name="calculator-service"
                          className="w-6 h-6 mr-4 md:mr-1"
                        />
                        <span className=""></span>
                        Euro
                      </div>
                    </label>
                  </div>

                  <div className="w-1/2">
                    <label className="currency-container">
                      <div>
                        <input
                          id="calculator-btn-usd"
                          type="radio"
                          name="calculator-service"
                          className="w-6 h-6 mr-4 md:mr-1"
                        />
                        <span className=""></span>
                        USD
                      </div>
                    </label>
                  </div>

                

                </div>

               

              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center md:mt-4 flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col md:flex-row">
              <div className="w-full text-center  mb-2 md:mb-0 mx-auto md:w-1/3 md:mr-[1.8rem] flex items-center justify-center">
                Quality
              </div>
              <div className="w-5/6 ml-8 sm:ml-12 md:ml-0 md:w-2/3 md:h-full">
                {/* <input
                  type="hidden"
                  id="real-price-unit-calculator"
                  name="real-price-unit-calculator"
                  value="-1"
                /> */}
                <input
                  type="number"
                  name="price-unit-calculator"
                  id="price-unit-calculator"
                  step="0.1"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            <div className="w-full mt-4 md:mt-0 flex flex-col md:flex-row md:ml-8 md:w-1/2">
              <div className="w-full h-full flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-2/5 flex justify-center md:justify-between items-center">Unit</div>
                <div className="w-full md:w-3/5 flex justify-between ">
                  <div className="w-full max-md:mt-2 md:w-1/2">
                    <select
                      name="unit-calculations"
                      id="unit-calculations"
                      className="rounded-lg max-md:w-5/6 max-sm:ml-8 max-md:ml-[2.9rem]"
                    >
                      <option value="001">Metric Ton</option>
                      <option value="001">Pound</option>
                      <option value="001">Kilograms</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-md:flex-col items-center w-full mt-4">
            <div className="mr-4 w-1/6 h-full">Total Price </div>

            <div className="w-5/6 max-md:mt-2">
            <input
                  type="number"
                  name="calculated-price"
                  id=""
                  value="total-price"
                  className="w-full h-full rounded-lg"
                  disabled
                />
            </div>
          </div>

          <div className='w-full border-b-2 border-slate-300 my-8'></div>

          <div className="w-full flex justify-between items-center mt-4">
            <div className="w-1/2 flex">
              <div className="w-1/3 mr-[1.8rem] flex items-center">
                Price/Unit
              </div>
              <div className="w-2/3 h-full">
                {/* <input
                  type="hidden"
                  id="real-price-unit-calculator"
                  name="real-price-unit-calculator"
                  value="-1"
                /> */}
                <input
                  type="number"
                  name="price-unit-calculator"
                  id="price-unit-calculator"
                  disabled
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            <div className="ml-8 w-1/2">
              <div className="w-full h-full flex justify-between">
                <div className="w-2/5">Currency</div>
                <div className="w-3/5 flex justify-between">
                  <div className="w-1/2">
                    <label className="">
                      <div>
                        <input
                          id="calculator-btn-euro"
                          type="radio"
                          name="calculator-service"
                          className="w-6 h-6 mr-1"
                        />
                        <span className="checkmark radio-span"></span>
                        Euro
                      </div>
                    </label>
                  </div>

                  <div className="w-1/2">
                    <label className="currency-container">
                      <div>
                        <input
                          id="calculator-btn-usd"
                          type="radio"
                          name="calculator-service"
                          className="w-6 h-6 mr-1"
                        />
                        <span className=""></span>
                        USD
                      </div>
                    </label>
                  </div>

                

                </div>

               

              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mt-4">
            <div className="w-1/2 flex">
              <div className="w-1/3 mr-[1.8rem] flex items-center">
                Quality
              </div>
              <div className="w-2/3 h-full">
                {/* <input
                  type="hidden"
                  id="real-price-unit-calculator"
                  name="real-price-unit-calculator"
                  value="-1"
                /> */}
                <input
                  type="number"
                  name="price-unit-calculator"
                  id="price-unit-calculator"
                  disabled
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            <div className="ml-8 w-1/2">
              <div className="w-full h-full flex justify-between">
                <div className="w-2/5 flex items-center">Unit</div>
                <div className="w-3/5 flex justify-between ">
                  <div className="w-1/2">
                    <select
                      name="unit-calculations"
                      id="unit-calculations"
                      className="rounded-lg"
                    >
                      <option value="001">Metric Ton</option>
                      <option value="001">Pound</option>
                      <option value="001">Kilograms</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full mt-4">
            <div className="mr-4 w-1/6 h-full">Total Price </div>

            <div className="w-5/6">
            <input
                  type="number"
                  name="calculated-price"
                  id=""
                  value="total-price"
                  className="w-full h-full rounded-lg"
                  disabled
                />
            </div>
          </div>

          <div className='w-full flex justify-center mt-8 items-center'>
            <button className='btn-primary'>Convert</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Conversion