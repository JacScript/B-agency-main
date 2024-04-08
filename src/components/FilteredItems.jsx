import React from 'react';

import maize from '../assets/corn.jpg';

const FilteredItems = () => {
  return (
    <div className="mt-[4.6rem] max-w-screen-2xl">
      <div className="w-5/6 mx-auto mt-24 flex ">
        <div className="w-1/4 mt-12 flex flex-col">
          <div className="kode-mono text-2xl font-extrabold uppercase">
            <h1>Characteristics</h1>
          </div>

          <div className="flex flex-col bg-slate-400 pb-12">
            <div className="h-20 w-full flex items-center">
              <div>
                <img
                  src={maize}
                  className="rounded-full w-10 h-10 mx-6"
                  alt=""
                />
              </div>
              <div>
                <h2 className="uppercase kode-mono font-extrabold text-xl">
                  Maize
                </h2>
              </div>
            </div>

            <form>
              <div className="bg-yellow-500">
                <div className="mx-2">
                  <div className="flex flex-col items-center">
                    <label className="text-center mb-1" for="name">
                      Product Status
                    </label>
                    <select
                      name="search[122]"
                      id="search_122"
                      className="w-full rounded-lg"
                    >
                      <option value="">All</option>
                      <option value="441">Inshell Pistachios</option>
                      <option value="440">Shelled Pistachios</option>
                    </select>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className="flex flex-col items-center">
                    <label className="text-center mb-1" for="name">
                      Product Type
                    </label>
                    <select
                      name="search[121]"
                      id="search_121"
                      className="w-full rounded-lg"
                    >
                      <option value="">All</option>
                      <option value="439">Natural Pistachio</option>
                      <option value="438">Roasted Pistachio</option>
                    </select>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className="flex flex-col">
                    <label className="text-center mb-1" for="name">
                      Variety
                    </label>
                    <select
                      name="search[124]"
                      id="search_124"
                      className="w-full rounded-lg"
                    >
                      <option value="">All</option>
                      <option value="444">Red Aleppo </option>
                      <option value="445">Kerman</option>
                      <option value="446">Trabonella</option>
                      <option value="447">Sfan</option>
                      <option value="448">Minassian </option>
                      <option value="449">Lassen</option>
                      <option value="450">Buenzle</option>
                      <option value="451">Bronte </option>
                      <option value="452">Wahedi </option>
                      <option value="453">Safeed </option>
                      <option value="454">Shasti</option>
                      <option value="455">Joley</option>
                      <option value="456">Ibrahmim </option>
                      <option value="457">Uzun </option>
                      <option value="458">Kirmizi </option>
                      <option value="459">Sirora </option>
                      <option value="460">Ohadi </option>
                      <option value="461">Other (Specify in Comments)</option>
                      <option value="763">Ahamd Agha</option>
                      <option value="764">Fandghi</option>
                      <option value="765">Akbari</option>
                      <option value="766">Kaleh Ghochi</option>
                    </select>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className="flex flex-col">
                    <label className="text-center mb-1" for="name">
                      Variety Style
                    </label>
                    <select
                      name="search[123]"
                      id="search_123"
                      className="w-full rounded-lg"
                    >
                      <option value="">All</option>
                      <option value="442">Round Pistachio</option>
                      <option value="443">Long Pistachio</option>
                    </select>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className="flex flex-col">
                    <label className="text-center mb-1" for="name">
                      Production Monde
                    </label>
                    <select
                      name="search[126]"
                      id="search_126"
                      className="w-full rounded-lg"
                    >
                      <option value="">All</option>
                      <option value="464">Organic Production</option>
                      <option value="465">Integrated Production</option>
                      <option value="466">Conventional Production</option>
                    </select>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className="flex flex-col">
                    <label className="text-center mb-1" for="name">
                      US Size
                    </label>
                    <select
                      name="search[128]"
                      id="search_128"
                      className="rounded-lg w-full"
                    >
                      <option value="">All</option>
                      <option value="474">18/20</option>
                      <option value="475">16/18</option>
                      <option value="473">20/22</option>
                      <option value="776">22/24</option>
                      <option value="777">24/26</option>
                      <option value="778">26/28</option>
                      <option value="779">28/30</option>
                      <option value="780">30/32</option>
                      <option value="781">32/34</option>
                      <option value="782">34/36</option>
                    </select>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className="flex flex-col">
                    <label className="text-center mb-1" for="name">
                      Packaging for Shipment
                    </label>
                    <select
                      name="search[134]"
                      id="search_134"
                      className="rounded-lg w-full"
                    >
                      <option value="">All</option>
                      <option value="481">25 LBS (11.3 KG)</option>
                      <option value="482">50 LBS (22.7 KG)</option>
                      <option value="483">1000 LBS (454 KG)</option>
                      <option value="484">1500 LBS (681 KG)</option>
                      <option value="488">Big Bags 1000 KG</option>
                      <option value="486">Cases 10 KG</option>
                      <option value="487">Bags 25 KG</option>
                      <option value="490">
                        Other Packaging Size (Specify in Comments)
                      </option>
                      <option value="570">Big Bags 800 KG</option>
                      <option value="489">
                        In Bulk (Specify Metric Tons in Comments)
                      </option>
                      <option value="569">Cases 15 KG</option>
                      <option value="485">2200 LBS (1 Metric Ton)</option>
                    </select>
                  </div>
                </div>

                <div id="advanced_characteristics" className="my-4 hidden">
                  <div className="mx-2">
                    <div className="flex flex-col">
                      <label className="text-center mb-1" for="name">
                        USDA Grades{" "}
                      </label>
                      <select
                        name="search[127]"
                        id="search_127"
                        className="rounded-lg w-full"
                      >
                        <option value="">All</option>
                        <option value="467">US Non-Split</option>
                        <option value="468">Artificially Opened</option>
                        <option value="469">US Select</option>
                        <option value="470">US N. 1</option>
                        <option value="471">US Extra N. 1</option>
                        <option value="472">US Fancy</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 mx-2">
                    <div className="flex flex-col">
                      <label className="text-center mb-1" for="name">
                        Europe Size (nuts per 100gr)
                      </label>
                      <select
                        name="search[129]"
                        id="search_129"
                        className="rounded-lg w-full"
                      >
                        <option value="">All</option>
                        <option value="480">Small (over 106)</option>
                        <option value="479">Medium (92 to 106)</option>
                        <option value="478">Large (81 to 91)</option>
                        <option value="477">Very Large (71 to 80)</option>
                        <option value="476">Extra Large (under 71)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 mx-2">
                    <div className="flex flex-col">
                      <label className="text-center mb-1" for="name">
                        Crop Year
                      </label>
                      <input
                        type="number"
                        name="search[189]"
                        id="search_189"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-4 mx-2">
                    <div className="flex flex-col">
                      <label className="text-center mb-1" for="name">
                        Total Protein (gr/100gr){" "}
                      </label>
                      <input
                        type="number"
                        name="search[130]"
                        id="search_130"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-4 mx-2">
                    <div className="flex flex-col">
                      <label className="text-center mb-1" for="name">
                        Moisture (Max.%){" "}
                      </label>
                      <input
                        type="number"
                        name="search[131]"
                        id="search_131"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-4 mx-2">
                    <div className="flex flex-col">
                      <label className="text-center mb-1" for="name">
                        Foreign matter (Max. %)
                      </label>
                      <input
                        type="number"
                        name="search[132]"
                        id="search_132"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-4 mx-2">
                    <div className="flex flex-col">
                      <label className="text-center mb-1" for="name">
                        Defects (Max. %)
                      </label>
                      <input
                        type="number"
                        name="search[133]"
                        id="search_133"
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-4 w-[95%]">
                  <div className="flex flex-col w-full">
                    <label className="text-center" for="ppt">
                      Price per weight unit(€)
                    </label>{" "}
                    <div className="flex mt-2">
                      <div className="w-28">
                        <input
                          type="text"
                          name="interval[price_per_ton][start]"
                          id="interval_price_per_ton_start"
                          className="w-full rounded-lg"
                          step="any"
                        />
                      </div>

                      <div className="w-12 flex items-center justify-center">
                        <p className="">to</p>
                      </div>

                      <div className="w-28">
                        <input
                          type="text"
                          name="interval[price_per_ton][end]"
                          id="interval_price_per_ton_end"
                          className="w-full rounded-lg"
                          step="any"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-4 w-[95%]">
                  <div className="">

                    <div>
                    <label className="" for="weight">
                      Total Weight
                    </label>{" "}
                    </div>
                    
                    <div className='flex'>

                    <div className=''>
                    <input
                      type="text"
                      name="interval[total_weight][start]"
                      id="interval_total_weight_start"
                      className=""
                      step="any"
                    />
                    </div>


                    <div>
                    <span>to</span>
                   
                    </div>


                    <div> 
                      <input
                      type="text"
                      name="interval[total_weight][end]"
                      id="interval_total_weight_end"
                      className=""
                      step="any"
                    /></div>

                    
                    

                    </div>

                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>

        <div className="w-3/4 bg-yellow-300"></div>
      </div>
    </div>
  );
}

export default FilteredItems