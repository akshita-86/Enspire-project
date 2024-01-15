import React from 'react'



    
      export default function Event() {
        return (
            <div className="py-16 bg-smoke">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src="event1.jpeg"
                                alt="image"
                            />
                            <br/>
                            <img
                                src="event2.jpeg"
                                alt="image"
                            />
                           
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-6xl text-gray-900 font-bold ">
                              EVENTS
                            </h2>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
