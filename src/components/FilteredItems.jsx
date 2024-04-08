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
              <div className="shadow-sm">
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
                  <div className="flex flex-col w-full">
                    <div className="w-full mb-1 text-center">
                      <label className="" for="weight">
                        Total Weight
                      </label>{" "}
                    </div>

                    <div className="flex">
                      <div className="w-28">
                        <input
                          type="text"
                          name="interval[total_weight][start]"
                          id="interval_total_weight_start"
                          className="w-full rounded-lg"
                          step="any"
                        />
                      </div>

                      <div className="w-12 flex items-center justify-center">
                        <p>to</p>
                      </div>

                      <div className="w-28">
                        <input
                          type="text"
                          name="interval[total_weight][end]"
                          id="interval_total_weight_end"
                          className="w-full rounded-lg"
                          step="any"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-2 flex flex-col mt-4">
                  <label className="text-center" for="certification">
                    Certifications
                  </label>
                  <select
                    name="certifications"
                    id="certifications"
                    className="w-full rounded-lg mt-1"
                  >
                    <option value="">All</option>
                    <option value="17">USDA Organic </option>
                    <option value="18">USDA </option>
                    <option value="126">Rainforest Alliance</option>
                    <option value="20">
                      ISO 14001 - Environmental Management Systems
                    </option>
                    <option value="1">Organic Farming </option>
                    <option value="21">
                      ISO 9001 - Quality Management Systems
                    </option>
                    <option value="15">SQF </option>
                    <option value="3">Global G.A.P.</option>
                    <option value="4">
                      Traditional Products (PDO’s, PGI’s)
                    </option>
                    <option value="22">
                      ISO 22000 - Food Safety Management Systems
                    </option>
                    <option value="19">Fairtrade </option>
                    <option value="6">IFS Food</option>
                    <option value="125">FSSC 22000</option>
                    <option value="8">ISCC </option>
                    <option value="5">BRC Food </option>
                    <option value="9">REDcert - EU </option>
                    <option value="10">2BSvs </option>
                    <option value="11">GMP </option>
                    <option value="16"> Other - Specify in Comments</option>
                    <option value="12">HACCP </option>
                    <option value="13">UTZ </option>
                    <option value="14">Non-GMO </option>
                    <option value="2">Integrated Pest/Crop Management</option>
                    <option value="130">Pesticide Analysis</option>
                    <option value="127">Other 2 - Specify in Comments</option>
                    <option value="133">Kosher</option>
                    <option value="128">Contaminant Analysis</option>
                    <option value="131">Physical-Chemical Analysis</option>
                    <option value="134">Halal</option>
                    <option value="129">Heavy Metal Analysis</option>
                    <option value="137">Quality Analysis (3rd Party)</option>
                    <option value="132">Sensorial Analysis</option>
                    <option value="135">
                      Food and Drug Administratiton (FDA)
                    </option>
                    <option value="136">Quality Analysis (Own)</option>
                    <option value="170">4C Certification</option>
                    <option value="169">
                      California Extra Virgin Olive Oil
                    </option>
                    <option value="171">Certifica Minas Café</option>
                    <option value="172">Geochem Certificate</option>
                    <option value="173">Carbon Free</option>
                    <option value="174">BCorp Certification</option>
                  </select>
                </div>

                <div className="mx-auto mt-4 w-[95%]">
                  <div className="flex flex-col w-full">
                    <div className="w-full mb-1 text-center">
                      <label className="" for="delivery_date">
                        Final Delivery Date
                      </label>
                    </div>

                    <div className="flex">
                      <div className="w-28">
                        <input
                          type="text"
                          name="interval[delivery_date][start]"
                          id="interval_delivery_date_start"
                          className="w-full rounded-lg"
                          data-provide="datepicker"
                          data-date-format="dd/mm/yyyy"
                          data-date-language="en"
                        />
                        <input
                          type="hidden"
                          name="interval[delivery_date][start]"
                          id="interval_delivery_date_start"
                          className="hidden"
                        />
                      </div>

                      <div className="w-12 flex items-center justify-center">
                        <p>to</p>
                      </div>

                      <div className="w-28">
                        <input
                          type="text"
                          name="interval[delivery_date][end]"
                          id="interval_delivery_date_end"
                          className="w-full rounded-lg"
                          data-provide="datepicker"
                          data-date-format="dd/mm/yyyy"
                          data-date-language="en"
                        />
                        <input
                          type="hidden"
                          name="interval[delivery_date][end]"
                          id="interval_delivery_date_end"
                          className="hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className=" flex flex-col">
                    <label className="text-center" for="logistics">
                      Logistics
                    </label>
                    <select
                      name="logistic_id"
                      id="logistic_id"
                      className="w-full rounded-lg mt-1"
                    >
                      <option value="">All</option>
                      <option value="10">EXW - Ex Works</option>
                      <option value="12">FCA - Free Carrier</option>
                      <option value="5">DAT - Delivered at Terminal</option>
                      <option value="9">DAP - Delivered at Place</option>
                      <option value="6">DDP - Delivered Duty Paid</option>
                      <option value="11">FAS - Free Alongside Ship</option>
                      <option value="13">FOB - Free On Board</option>
                      <option value="1">CFR - Cost and Freight</option>
                      <option value="2">
                        CIF - Cost, Insurance and Freight
                      </option>
                      <option value="4">CPT - Carriage Paid To... </option>
                      <option value="3">
                        CIP - Carriage and Insurance Paid to...{" "}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className="flex flex-col">
                    <label className="text-center" for="country_destination">
                      Country of destination
                    </label>
                    <select
                      className="w-full rounded-lg mt-1"
                      name="country_destination[]"
                      id="country_destination_"
                    >
                      <option value="">All</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">
                        Bolivia, Plurinational State of
                      </option>
                      <option value="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">
                        Congo, The Democratic Republic of the
                      </option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">Macedonia, Republic of</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">
                        Micronesia, Federated States of
                      </option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestine, State of</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthélemy</option>
                      <option value="SH">
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin (French part)</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten (Dutch part)</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option value="US">United States</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">
                        Venezuela, Bolivarian Republic of
                      </option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.S.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                </div>

                <div className="mx-2 mt-4">
                  <div className="flex flex-col">
                    <label className="text-center" for="country">
                      Country of Origin
                    </label>
                    <select className="w-full rounded-l mt-1" name="country[]" id="country_">
                      <option value="">All</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">
                        Bolivia, Plurinational State of
                      </option>
                      <option value="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">
                        Congo, The Democratic Republic of the
                      </option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">Macedonia, Republic of</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">
                        Micronesia, Federated States of
                      </option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestine, State of</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthélemy</option>
                      <option value="SH">
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin (French part)</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten (Dutch part)</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option value="US">United States</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">
                        Venezuela, Bolivarian Republic of
                      </option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.S.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
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