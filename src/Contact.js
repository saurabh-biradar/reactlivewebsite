import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form id='myForm' action>
                            <div class="mb-3">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                            </div>
                            <div class="mb-3">
                                <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                            </div>
                            <div class="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" ></textarea>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="btn btn-outline-primary" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact