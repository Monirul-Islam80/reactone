import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Common(props) {
    return (
        <div className="container-fluid nav_bg mt-5">
        <div className="row">
          <div className="col-10 mx-auto">

        <div className="header">
            <div>
                <h1>{props.dis}<span className='text-primary'>{props.names}</span></h1>
                <NavLink className="btn btn-outline-primary  " to={props.links}>
                    {props.btname}
                    </NavLink>
            </div>
            <div className="image">
                <img className="animated"  src="https://freepngimg.com/thumb/ecommerce/6-2-ecommerce-free-png-image.png" alt="images" width="50%" />
            </div>
        </div>

        </div>
        </div>
        </div>
    )
}
