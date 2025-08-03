import React from "react";
import "./style.css"; // Import the CSS file
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="searchbox w-[100%] h-[50px] flex items-center bg-[#e8e8e8] rounded-[5px] relative px-4 py-2">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="w-full h-[35px] focus:outline-none bg-inherit text-[15px]"
      />
      <Button className=" !absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !text-black !rounded-full">
        <IoSearch className="text-[#636363] text-2xl" />
      </Button>
    </div>
  );
};

export default Search;
