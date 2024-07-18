
import {  Button } from "@tremor/react";
import PropTypes from 'prop-types';
import { useState} from 'react'
import axios from 'axios'


export default function Add_Subscription({setAddPopupOpen}) {
    // const [percentageValue] = useState("T");
    const [formData, setFormData] = useState({
        title: '',
        serviceType: '',
        serviceCategory: '',
        discount: 10,
        price: 1000, 
        image: '',
        description: '',
        servicesIncludes: [
            {
                serviceId: ['', '', ''],
                serviceDiscount: 50,
                discountLimit: 2
            }
        ],
        promoCodes: '',
        markettingBanners: ''
    });

    // const [subscriptionDetail, setSubscriptionDetail] = useState(false);
    const createSubscription=(e)=>{
        e.preventDefault()
        console.log("Mayank:",formData)
        // const forms=JSON.stringify(formData)
        // console.log(forms)

        try{
            const data = axios.create({
                baseURL: `${import.meta.env.VITE_BASE_URL}`,
                withCredentials: true,
              });
            const response=data.post("api/v1/superadmin/subscriptionplan/create", formData)
            const {success,message}=response
            if(success){
                console.log('successfull')
            }
            else{
                console.log(message)
            }
        } catch(error){console.log(error)}
    }
    const handleInputValues = (e) => {
        console.log(formData)
        const { name, value } = e.target;

        let newValue = value;

        // Convert price and discount to number
        if (name === 'price' || name === 'discount') {
            newValue = parseFloat(value);
        }
        if (name.startsWith('serviceId')) {
            const index = parseInt(name.split('serviceId')[1], 10);
            setFormData((prevState) => {
                const newServiceId = [...prevState.servicesIncludes[0].serviceId];
                newServiceId[index] = value;
                return {
                    ...prevState,
                    servicesIncludes: [
                        {
                            ...prevState.servicesIncludes[0],
                            serviceId: newServiceId
                        }
                    ]
                };
            });
        } 
         
        else {
            setFormData({
                ...formData,
                [name]: newValue
            });
        }
    };
    
   

  return (
    <>         
        <form onSubmit={createSubscription}>
             <div className="absolute w-full inset-0 bg-black bg-opacity-40 z-50"></div>
                            <div className="bg-white w-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-md z-50">
                                <p className="text-2xl text-center py-3.5 font-bold mb-4 border-b-2 border-black">Add Subscription Plan</p>

                                <div className="px-12 pt-8">

                                    <div className="flex">

                                        <div className="w-1/2 px-2">
                                        <div className="flex items-center mb-2">
                                            
                                                <label htmlFor="" className="mr-2 text-xl">Title</label>
                                                <input
                                                    type="text"
                                                    id="newBrandName"
                                                    placeholder="title"
                                                    value={formData.title}
                                                    name="title"
                                                    onChange={handleInputValues}
                                                    // value={newModelName}
                                                    // onChange={(e) => setNewModelName(e.target.value)}
                                                    className="border-2 border-black rounded p-2 w-full"
                                                />
                                            </div>
                                            <div>
                                                <label>
                                                    Service Type:
                                                    <select name="serviceType" value={formData.serviceType} onChange={handleInputValues} required>
                                                        {/* <option value="active">Active</option> */}
                                                        <option value="scheduled">scheduled</option>
                                                        {/* <option value="onHold">On Hold</option> */}
                                                        <option value="onTime">On Time</option>
                                                    </select>
                                                </label>
                                            </div>
                                                
                                            {/* <div className="flex items-center mb-2">
                                                <label htmlFor="" className="mr-2 text-xl">Name</label>
                                                <input
                                                    type="text"
                                                    id="newBrandName"
                                                    placeholder="Subscription Name"
                                                    value={formData.SubscriptionName}
                                                    name="SubscriptionName"
                                                    onChange={handleInputValues}
                                                    // value={newModelName}
                                                    // onChange={(e) => setNewModelName(e.target.value)}
                                                    className="border-2 border-black rounded p-2 w-full"
                                                />
                                            </div> */}
                                            <div>
                                                <textarea
                                                    id="about"
                                                    rows={4}
                                                    placeholder="Description"
                                                    value={formData.description}
                                                    name="description"
                                                    onChange={handleInputValues}
                                                    className="block w-full rounded-md border-2 border-black p-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>

                                        <div className="w-1/2 px-2 flex justify-between flex-col">
                                        <label htmlFor="">
                                            Promo Codes
                                        <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Promo Codes"
                                                value={formData.promoCodes}
                                                name="promoCodes"
                                                onChange={handleInputValues}
                                                // value={newModelName}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-full"
                                            />
                                        </label>
                                            <label>
                                                Marketting Banners
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Marketing Banners"
                                                value={formData.markettingBanners}
                                                name="markettingBanners"
                                                onChange={handleInputValues}
                                                // value={newModelName}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-full"
                                            />
                                            </label>
                                            <label>
                                                Upload Image
                                            <input
                                                type="file"
                                                id="newBrandName"
                                                placeholder="Upload Image"
                                                value={formData.image}
                                                name="image"
                                                onChange={handleInputValues}
                                                // value={newModelName}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-full"
                                            />
                                            </label>
                                            
                                        </div>

                                    </div>

                                    <div className="flex mt-5">
                                        {/* <div className="px-2 w-1/2">
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Services to Include"
                                                // value={percentageValue}
                                                name="servicesIncludes"
                                                onChange={handleInputValues}
                                                value={formData.servicesIncludes}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-4/5"
                                            />
                                        </div> */}
                                        <div className="px-2 w-1/2">
                                            <label htmlFor="">
                                                Discount
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Percentage Discount offered"
                                                value={formData.discount}
                                                name="discount"
                                                onChange={handleInputValues}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-4/5"
                                            />
                                            </label>
                                            
                                        </div>
                                        <div className="px-2 w-1/2">
                                            <label htmlFor="">
                                               Service Type
                                            
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Service Type"
                                                value={formData.serviceType}
                                                name="serviceType"
                                                onChange={handleInputValues}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-4/5"
                                            />
                                            </label>
                                        </div>
                                        <div className="px-2 w-1/2">
                                            <label htmlFor="">
                                                Service Category
                                            
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Service Category"
                                                value={formData.serviceCategory}
                                                name="serviceCategory"
                                                onChange={handleInputValues}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-4/5"
                                            />
                                            </label>
                                        </div>
                                        <div className="px-2 w-1/2">
                                        <label>
                                            Price
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Price"
                                                value={formData.price}
                                                name="price"
                                                onChange={handleInputValues}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-4/5"
                                            />
                                            </label>
                                        </div>
                                        {/* <div className="px-2 w-1/2">
                                            <input
                                                type="text"
                                                id="newBrandName"
                                                placeholder="Status"
                                                value={formData.status}
                                                name="status"
                                                onChange={handleInputValues}
                                                // onChange={(e) => setNewModelName(e.target.value)}
                                                className="border-2 border-black rounded p-2 w-4/5"
                                            />
                                        </div> */}
                                        <fieldset>
                <legend>Services Includes:</legend>
                <label>
                    Service ID 1:
                    <input type="text" name="serviceId0" value={formData.servicesIncludes[0].serviceId[0]} onChange={handleInputValues} />
                </label><br />

                <label>
                    Service ID 2:
                    <input type="text" name="serviceId1" value={formData.servicesIncludes[0].serviceId[1]} onChange={handleInputValues} />
                </label><br />

                <label>
                    Service ID 3:
                    <input type="text" name="serviceId2" value={formData.servicesIncludes[0].serviceId[2]} onChange={handleInputValues} />
                </label><br />

                <label>
                    Service Discount:
                    <input type="number" name="serviceDiscount" value={formData.servicesIncludes[0].serviceDiscount} onChange={handleInputValues} required />
                </label><br />

                <label>
                    Discount Limit:
                    <input type="number" name="discountLimit" value={formData.servicesIncludes[0].discountLimit} onChange={handleInputValues} required />
                </label><br />
            </fieldset>
                                    </div>

                                    <div className="flex justify-end mt-6 mb-12">
                                        <Button type="submit" color="green">Create</Button>
                                        <Button onClick={() => setAddPopupOpen(false)} color="gray" className="ml-4">Close</Button>
                                    </div>
                                </div>

                            </div>
                      
                            </form>       
    </>
  )
}

Add_Subscription.propTypes = {
    setAddPopupOpen: PropTypes.func.isRequired,
  };
//   {"title":"standardmayank19921","serviceType":"inactive","serviceCategory":"mechanic","discount":0.5,"price":2000,"image":"C:Stri","description":"anything","servicesIncludes":[{"serviceId":["6561cee7addec79fbae4de24","6561cee8addec79fbae4de28","6561cee8addec79fbae4de28"],"serviceDiscount":50,"discountLimit":2}],"promoCodes":"yui","markettingBanners":"tytyy7y8"}