import React from 'react'
import assets from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='courses'> 
       <h1>What Our Student Says</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
       <div className='testimonial-list'>
            <div className="testimonial">
                <div>
                    <img src={assets.firstuser} alt="User 1" />
                </div>
                <div className="testimonial-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque vel turpis at leo facilisis aliquet. Suspendisse potenti.</p>
                    <h3>Christine Berkley</h3>
                </div>
            </div>
            <div className="testimonial">
                <div>
                    <img src={assets.seconduser} alt="User 1" />
                </div>
                <div className="testimonial-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque vel turpis at leo facilisis aliquet. Suspendisse potenti.</p>
                    <h3>David Byer</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
