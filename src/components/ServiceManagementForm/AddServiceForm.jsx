import './AddServices.css';
import PropTypes from 'prop-types';

export const AddServiceForm=({visible})=>{


    
 return( 

  <>

<body>
  <div className={`${visible?"serviceinvisible":"servicevisible"} form-container w-full sm:p-4 dark:bg-tremor-background h-auto`}>
    <section>
      <div className="form-box px-2 sm:px-6 h-full text-gray-800">
        <div className=" form-box2 flex justify-end items-end">
          <svg className="cursor-pointer" width="35" height="35" viewBox="0 0 24 24" fill="#00FF00" onclick="setAddCustomer(false)">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
          </svg>
        </div>

        <p className="formparah text-center text-xl md:text-2xl lg:text-4xl font-semibold my-4 sm:my-8">
          Create Service 
        </p>

        <form>
          <div className="form-inputs grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="form-inputs-div flex justify-center sm:h-48 md:h-72 lg:h-96 lg:w-full sm:w-full overflow-hidden mb-5">
              <img src="/src/asset/Logo.png" className="logo-image lg:w-full ww-[70%]" alt="Sample image"/>
            </div>

            <div>
              <div className="inputcontainer mb-6">
                <input type="text" className="form-control" placeholder="Service Type" required/>
              </div>

              <div className="mb-6">
                <input type="number" className="form-control" placeholder="Input Price" required/>
              </div>

              <div className="mb-6">
                <input type="text" className="form-control" placeholder="Service Include" required/>
              </div>

              <div className="mb-6">
                <input type="text" className="form-control" placeholder="Service Details" required/>
              </div>

              <div className="mb-7">
                <input type="text" className="form-control description-box" placeholder="Description" required/>
              </div>
            </div>
          </div>

        


          <div className="mb-6">
            <label className="form-label font-semibold mb-2">Service Include</label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input type="checkbox" id="include1" name="include1" className="form-checkbox"/>
                <label for="include1">Oil Change</label>
              </div>
              <div>
                <input type="checkbox" id="include2" name="include2" className="form-checkbox"/>
                <label for="include2">Tire Rotation</label>
              </div>
              <div>
                <input type="checkbox" id="include3" name="include3" className="form-checkbox"/>
                <label for="include3">Break Fluid Check</label>
              </div>
              <div>
                <input type="checkbox" id="include4" name="include4" className="form-checkbox"/>
                <label for="include4">Break inspection</label>
              </div>
              <div>
                <input type="checkbox" id="include5" name="include5" className="form-checkbox"/>
                <label for="include5">Battery Check</label>
              </div>
              <div>
                <input type="checkbox" id="include6" name="include6" className="form-checkbox"/>
                <label for="include6">Wheel Allignment</label>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:text-left mt-10 mb-10">
            <button type="submit" className="submit-button" onclick="handleSignUp(event)">
              Create Service
            </button>
          </div>
        </form>

        <p className="text-center text-green-500" id="message"></p>
      </div>
    </section>
  </div>

  </body>

</>

)

}

AddServiceForm.propTypes = {
  visible: PropTypes.bool.isRequired,
};