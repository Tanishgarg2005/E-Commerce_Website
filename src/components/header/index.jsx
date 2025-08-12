import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./navigation"; // Import the Navigation component

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <div className="top-strip py-1 border-t-1 border-b-1 border-gray-200">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className="text-[12px] font-[500]">
                  Get upto 50% off on selected items
                </p>
              </div>

              <div className="col2 flex items-center justify-end">
                <ul className="flex items-center gap-3">
                  <li className="list-none">
                    <Link
                      to="/help-center"
                      className="text-[13px] link font-[500] transition"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      to="/order-tracking"
                      className="text-[13px] link font-[500] transition"
                    >
                      Order Tracking
                    </Link>
                  </li>
                  <li className="list-none ml-6">
                    <Link
                      to="/become-a-seller"
                      className="text-[13px] font-[500] transition text-blue-700 hover:text-blue-800"
                    >
                      Become a Seller
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header py-1.5 border-b-1 border-gray-200">
          <div className="container flex items-center justify-between">
            <div className="col1 w-[20%] pl-5">
              <Link to={"/"}>
                <img src="/smallSlider/image.png" alt="Logo" className="h-10 w-36" />
              </Link>
            </div>
            <div className="col2 w-[44%]">
              <Search />
            </div>
            <div className="col3 w-[28%] flex items-center">
              <ul className="flex items-center gap-3 w-full justify-end">
                <li className="list-none">
                  <Link
                    to="/login"
                    className="link transition font-[500] text-[15px] pr-0.5"
                  >
                    Login
                  </Link>
                  <span className="text-gray-400 mx-1">/</span>
                  <Link
                    to="/sign-up"
                    className="link transition font-[500] text-[15px] pl-0.5"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Tooltip title="Compare Products">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <FaCodeCompare />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Wishlist">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <GoHeart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Cart">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
