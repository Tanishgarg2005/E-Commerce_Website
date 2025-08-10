import React,{useState} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegMinusSquare } from "react-icons/fa";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => {
    props.setIsOpenCatPanel(newOpen); // Directly update the state
  };
  const [submenuIndex, setSubmenuIndex] = useState(null);
  
  const openSubmenu = (index) => {
    if(submenuIndex === index) {
      setSubmenuIndex(null); // Close submenu if already open
    }else{
      setSubmenuIndex(index);
    }
  };
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
  const openInnerSubmenu = (index) => {
    if(innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null); // Close inner submenu if already open
    }else{
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="text-[18px] p-3 font-[500] flex items-center justify-between">
        Shop By Categories{" "}
        <IoClose
          onClick={() => toggleDrawer(false)}
          className="cursor-pointer text-[18px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.87)]">
                Fashion
              </Button>
            </Link>
            {
              submenuIndex === 0 ? <FaRegMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer font-[600]"onClick={()=>openSubmenu(0)} /> :
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer "onClick={()=>openSubmenu(0)} />

            }
              
            
            {
              submenuIndex ===0 &&
              <ul className="submenu  w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.87)]">
                    Apparel
                  </Button>
                </Link>
                {
              innerSubmenuIndex === 0 ? <FaRegMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer font-[600]"onClick={()=>openInnerSubmenu(0)} /> :
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer "onClick={()=>openInnerSubmenu(0)} />

            }
                
                  {
                    innerSubmenuIndex ===0 && 
                    <ul className="inner_submenu  w-full pl-3">
                  <li className="list-none relative mb-[3px">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start !px-3 transition text-[12px] font-[600]"
                    >
                      Smart Tablet{" "}
                    </Link>
                  </li>
                  <li className="list-none relative mb-[3px]">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start !px-3 transition text-[12px] font-[600]"
                    >
                      Crepe T-Shirt{" "}
                    </Link>
                  </li>
                  
                  <li className="list-none relative mb-[3px]">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start !px-3 transition text-[12px] font-[600]"
                    >
                      Leather Watch{" "}
                    </Link>
                  </li>
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start !px-3 transition text-[12px] font-[600]"
                    >
                      Rolling Diamond{" "}
                    </Link>
                  </li>
                  
                </ul>
                  }
                
              </li>
            </ul>
            }
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.87)]">
                Outwear
              </Button>
            </Link>
            {
              submenuIndex === 1 ? <FaRegMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer font-[600]"onClick={()=>openSubmenu(1)} /> :
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer "onClick={()=>openSubmenu(1)} />

            }
              
            
            {
              submenuIndex ===1 &&
              <ul className="submenu  w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.87)]">
                    Apparel
                  </Button>
                </Link>
                {
              innerSubmenuIndex === 1 ? <FaRegMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer font-[600]"onClick={()=>openInnerSubmenu(1)} /> :
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer "onClick={()=>openInnerSubmenu(1)} />

            }
                
                  {
                    innerSubmenuIndex ===1 && 
                    <ul className="inner_submenu  w-full pl-3">
                  <li className="list-none relative mb-[3px">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start !px-3 transition text-[12px] font-[600]"
                    >
                      Smart Tablet{" "}
                    </Link>
                  </li>
                  <li className="list-none relative mb-[3px]">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start !px-3 transition text-[12px] font-[600]"
                    >
                      Crepe T-Shirt{" "}
                    </Link>
                  </li>
                  
                  <li className="list-none relative mb-[3px]">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start !px-3 transition text-[12px] font-[600]"
                    >
                      Leather Watch{" "}
                    </Link>
                  </li>
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className=" link w-full !text-left !justify-start !px-3 transition text-[12px] font-[600]"
                    >
                      Rolling Diamond{" "}
                    </Link>
                  </li>
                  
                </ul>
                  }
                
              </li>
            </ul>
            }
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
