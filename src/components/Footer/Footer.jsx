import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="py-1  bg-slate-950 text-gray-200 w-full  px-4 ">
            <div className='flex justify-between max-w-7xl mx-auto'>
                
                <div className="text-sm ">
                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                </div>
                <div className="h-full">
                    <ul className='flex gap-8'>
                        <li className="mb-1">
                            <Link
                                className=" text-base font-medium    hover:   "
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link
                                className=" text-base font-medium    hover:   "
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium    hover:   "
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer