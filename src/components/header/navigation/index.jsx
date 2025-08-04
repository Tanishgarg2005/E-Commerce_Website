import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
const Navigation = () => {
  return (
    <nav className="">
      <div className="container flex items-center justify-end">
        <div className="col1 w-[20%]">
          <Button className="!text-black gap-2 w-full">
            <RiMenu2Fill className="text-[18px]" />
            Shop By Categories
            <TfiAngleDown className="text-[12px] ml-auto" />
          </Button>
        </div>
        <div className="col2 w-[60%] ml-5">
          <ul className="flex items-center gap-1.5">
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Home
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Fashion
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Electronics
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Bags
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Footwear
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Groceries
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Beauty
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Wellness
                </Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                  Jewellery
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col3 w-[20%] ml-7">
          <p className="text-[12px] font-[500] flex items-center gap-2 mt-0 mb-0">
            <HiOutlineRocketLaunch />
            Free International Delivery
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
