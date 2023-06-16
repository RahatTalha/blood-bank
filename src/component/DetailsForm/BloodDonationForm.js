import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const BloodDonationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bloodGroup: '',
        contact: '',
        donationDate: new Date()
    });
    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            donationDate: date
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Post operation

        fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            navigate('/allhome')
        })

        // Reset the form
        setFormData({
            name: '',
            email: '',
            bloodGroup: '',
            contact: '',
            donationDate: new Date()
        });
    };

    return (
        <div className="container mx-auto py-10">
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>




                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>



                <div className="mb-6">
                    <label htmlFor="bloodGroup" className="block text-gray-700 text-sm font-bold mb-2">Blood Group:</label>
                    <select
                        id="bloodGroup"
                        name="bloodGroup"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Select your blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                
                </div>


                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Contact No:</label>
                    <textarea
                        id="contact"
                        name="contact"
                        placeholder="Enter Your Contact Number"
                        rows="1"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.contact}
                        onChange={handleInputChange}
                    ></textarea>
                    
                </div>


                <div className="mb-6">
                    <label htmlFor="donationDate" className="block text-gray-700 text-sm font-bold mb-2">Donation Date:</label>
                    <DatePicker
                        id="donationDate"
                        name="donationDate"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        selected={formData.donationDate}
                        onChange={handleDateChange}
                    />
                </div>




                <div class="flex items-center justify-center">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Donate Blood
                    </button>
                </div>


            </form></div>)
};

export default BloodDonationForm;
