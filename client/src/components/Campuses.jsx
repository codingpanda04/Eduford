import React from 'react'
import assets from '../assets/assets'

const Campuses = () => {
  return (
    <div className='courses'> 
       <h1>Our Global Campus</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
       <div className='campus-list'>
            <div>
                <img src={assets.london} alt="London Campus" />
                <h2>London</h2>
            </div>
            <div>
                <img src={assets.newyork} alt="London Campus" />
                <h2>New York</h2>
            </div>
            <div>
                <img src={assets.washington} alt="London Campus" />
                <h2>Washington</h2>
            </div>
        </div>
    </div>
  )
}

export default Campuses
