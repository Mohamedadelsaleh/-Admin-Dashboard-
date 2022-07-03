import React from 'react'
import CustReview from '../CustomerReview/CustReview'
import Updates from '../Updates/Updates'
import './RightSide.css'


const RightSide = () => {
    return (
        <div className='RightSide'>
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Customers Review</h3>
                <CustReview />
            </div>
        </div>
    )
}

export default RightSide