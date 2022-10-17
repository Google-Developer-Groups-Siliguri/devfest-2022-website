import React from 'react'
import pic from "../assets/images/CampusView.png"
import { AddressMap } from './AddressMap'
import { MdLocationPin } from "react-icons/md";
export default function Contact_Map() {
  return (
    <div>
        <div class="container my-5">
            <h1 className='dev-heading text-center my-5'>Venue of Devfest</h1>
            <div class="row align-items-center">
                <div class="col-lg-6 col-12 my-3">
                    <h4 className='mb-3'><MdLocationPin className="text-danger"/> Siliguri Institute of Technology,Sukana, Darjeeling</h4>
                    <AddressMap />
                </div> 
                <div class="col-12 col-lg-6 my-3">
                    <img src={pic} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
  )
}
