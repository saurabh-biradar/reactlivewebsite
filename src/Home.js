import React from 'react'
import web from './Images/introbgg.png';
import Body from './Body'

const Home = () => {
    return (
        <>
            <Body name='Welcome to ' imgsrc={web} visit='/service' btnname='Get Started' context='Buy Rent Sell Books starting from ₹10 with FREE Home Delivery' />
        </>
    )
}

export default Home