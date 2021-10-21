import React, { useState } from 'react'
export default function Contact() {
    const [data, setdata] = useState({
        fname:"",
        phn:"",
        email:"",
        mas:"",
    });
    const inputEvent=(events)=>{
        const{name, value}=events.target;
        setdata((preVal)=>{
            return{
                ...preVal,
                 [name]: value,
            };

        });
    };
const formSubmit=(e)=>{
    e.preventDefault();
    alert(`MY name is ${data.fname}. My Phone number: ${data.phn}
    . My Email Address: ${data.email}.
    Here is my Message: "${data.mas}"`);
}

    return (
        <>
            <div className="my-5">
                <h1 className="text-center text-primary"> Contact Us </h1>
            </div>

            <div className="col-md-6 col-10 mx-auto">
                <div className="row">
                    <form onSubmit={formSubmit}>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Full Name: </label>
                            <input name="fname" value={data.fname} onChange={inputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Phone: </label>
                            <input name="phn" value={data.phn} onChange={inputEvent} type="text/number" className="form-control" id="exampleFormControlInput1" placeholder="01***********" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input name="email" value={data.email} onChange={inputEvent} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Massage</label>
                            <textarea name="mas" value={data.mas} onChange={inputEvent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}
