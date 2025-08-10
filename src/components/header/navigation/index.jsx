import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import CategoryPanel from "./categoryPanel";
import "../navigation/style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="">
        <div className="container flex items-center justify-end">
          <div className="col1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full !py-1.5 !text-[13px]"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[16px]" />
              Shop By Categories
              <TfiAngleDown className="text-[11px] ml-auto" />
            </Button>
          </div>
          <div className="col2 w-[60%] ml-5">
            <ul className="flex items-center gap-1.5 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition text-[14px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316]">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] transition bg-white shadow-md opacity-0">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/fashion/men" className="w-full">
                        <Button className="!text-[13px] !font-[550] !rounded-none !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                          Men
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] transition bg-white shadow-md opacity-0">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/fashion/men" className="w-full">
                                <Button className="!text-[13px] !font-[550] !rounded-none !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/fashion/women" className="w-full">
                                <Button className="!text-[13px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/fashion/kids" className="w-full">
                                <Button className="!text-[13px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                                  Footwear
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/fashion/boys" className="w-full">
                                <Button className="!text-[13px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                                  Watch
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/fashion/girls" className="w-full">
                                <Button className="!text-[13px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                                  Shoes
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/fashion/women" className="w-full">
                        <Button className="!text-[13px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                          Woman
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/fashion/kids" className="w-full">
                        <Button className="!text-[13px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/fashion/boys" className="w-full">
                        <Button className="!text-[13px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                          Boys
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/fashion/girls" className="w-full">
                        <Button className="!text-[13px] !font-[550] !text-[rgba(0,0,0,0.8)] hover:!text-[#f97316] w-full !text-left !justify-start">
                          Girls
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
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
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
