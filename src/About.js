import React from 'react'
import web from './Images/undraw_static_assets_rpm6.svg';
import Body from './Body'

const About = () => {
    return (
        <Body name='About ' imgsrc={web} visit='/contact' btnname='Contact Now' context='It is a single dedicated platform to buy, rent and sell new as well as used books.' />
    )
}

export default About