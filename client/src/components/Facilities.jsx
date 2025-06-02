import React from 'react'
import assets from '../assets/assets'

const Facilities = () => {
  return (
    <div className='courses'> 
       <h1>Our Facilities</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
       <div className='facilities-list'>
            <div>
                <img src={assets.library} alt="London Campus" />
                <div>
                    <h2>World Class Library</h2>
                    <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div>
                <img src={assets.basketball} alt="London Campus" />
                <div>
                    <h2>Largest Play Ground</h2>
                    <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div>
                <img src={assets.cafeteria} alt="London Campus" />
                <div>
                    <h2>Tasty and Healthy Food</h2>
                    <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilities
