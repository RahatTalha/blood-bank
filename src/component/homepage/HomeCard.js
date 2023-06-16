import React from 'react';
import { format } from 'date-fns'


const HomeCard = ({ home }) => {


  return (
    <div class="max-w-sm rounded overflow-hidden m-3 shadow-lg">
  <div class="bg-red-500 text-white text-center py-2">
    <h2 class="font-bold text-lg">Blood Donor Details</h2>
  </div>
  <div class="px-6 py-4">
    <div class="mb-2">
      <span class="font-bold">Name:{home.name}</span>
    </div>
    <div class="mb-2">
      <span class="font-bold">Blood Group:{home.bloodGroup}</span>
    </div>
    <div class="mb-2">
      <span class="font-bold">Email:{home.email}</span>
    </div>
    <div class="mb-2">
      <span class="font-bold">Last Donation Date: {format(new Date(home?.donationDate
), 'P')}</span>
    </div>
    <div class="mb-2">
      <span class="font-bold">Contact:{home.contact}</span>
    </div>
  </div>
</div>

  )
}

export default HomeCard