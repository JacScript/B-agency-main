import React from 'react';

import maize from '../assets/corn.jpg';

const FilteredItems = () => {
  return (
    <div className="mt-[4.6rem] max-w-screen-2xl h-dvh">
      <div className="w-5/6 mx-auto mt-24 flex">
        <div className="w-1/4 mt-12 flex flex-col">
          <div className="kode-mono text-2xl font-extrabold uppercase">
            <h1>Characteristics</h1>
          </div>

          <div className="flex flex-col bg-slate-400">
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
                    <label className="text-center" for="name">
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
                    <label className="text-center" for="name">
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
                    <label className="text-center" for="name">
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
                    <label className="text-center" for="name">
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
                    <label className="text-center" for="name">
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