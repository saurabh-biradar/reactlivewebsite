import React from 'react'
import s44 from './Images/s44.png';
import s55 from './Images/s55.png';
import s33 from './Images/s33.png';
import './Service.css'


const Service = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container'>
                <div class="card-group gx-5">
                    <div class="card zoom border-0">
                        <img src={s44} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">Rent Books</h5>
                            <p class="card-text">Rent all academic and non-academic books & novels starting from ₹10 only.</p>
                        </div>
                    </div>
                    <div class="card zoom border-0">
                        <img src={s55} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">FREE Pickup</h5>
                            <p class="card-text">Pickup of books and novels for renting and re-selling is totally free of cost.</p>
                        </div>
                    </div>
                    <div class="card zoom border-0">
                        <img src={s33} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">Instant Reselling</h5>
                            <p class="card-text">Sell your books while sitting at home with free pickup within 24 hours.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service