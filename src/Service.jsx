import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

export default function Service() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center text-primary"> Services </h1>
            </div>
            <div>
                <div className="container-fluid nav_bg mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                Sdata.map((val, ind) => {
                                    return(
                                        <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        titles={val.titles}
                                        />
                                    )
                                }) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
