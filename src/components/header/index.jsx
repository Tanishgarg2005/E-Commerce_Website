import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
        <header>
            <div className="top-strip py-2 border-t-1 border-b-1 border-gray-200">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[12px] font-[500]">Get upto 50% off on selected items</p>
                        </div>

                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-center gap-3">
                                <li className="list-none">
                                    <Link to="/help-center" className="text-[13px] link font-[500] transition">Help Center</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/order-tracking" className="text-[13px] link font-[500] transition">Order Tracking</Link>
                                </li>
                                <li className="list-none">
                                    <Link to="/become-a-seller" className="text-[13px] font-[500] transition text-blue-700 hover:text-blue-800">Become a Seller</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header py-2.5">
                <div className="container flex items-center justify-between">
                    <div className="col1">
                        <Link to={"/"} >
                            <img src="/fashion-logo.jpg" alt="Logo" className="h-20 w-34" />
                        </Link>
                    </div>
                    <div className="col2"></div>
                    <div className="col3"></div>
                </div>
            </div>
        </header>
        </>

    )
}

export default Header;