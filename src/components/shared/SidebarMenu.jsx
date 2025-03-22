import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  RiPieChart2Fill,
  RiRestaurant2Fill,
  RiLogoutBoxRLine,
  RiSettingsFill,
} from "react-icons/ri";
import { FaChalkboardUser, FaRegCircleUser } from "react-icons/fa6";
import { GiStabbedNote } from "react-icons/gi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { MdOutlineCategory, MdSchedule } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";

const SidebarMenu = () => {
  const [activeKey, setActiveKey] = useState("1");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveKey("1");
    } else if (path === "/booking-management") {
      setActiveKey("2");
    } else if (path === "/menu") {
      setActiveKey("3");
    } else if (path === "/add-category") {
      setActiveKey("4");
    } else if (path === "/table-booking") {
      setActiveKey("5");
    } else if (path === "/user-management") {
      setActiveKey("6");
    } else if (path === "/my-details") {
      setActiveKey("7");
    } else if (path === "/restaurant-details") {
      setActiveKey("restaurant-details");
    } else if (path === "/reviews") {
      setActiveKey("reviews");
    } else if (path === "/business-hours") {
      setActiveKey("business-hours");
    } else if (path === "/cuisine") {
      setActiveKey("cuisine");
    } else if (path === "/privacy") {
      setActiveKey("privacy");
    } else if (path === "/signout") {
      setActiveKey("signout");
    }
  }, [location]);

  return (
    <div className="py-0">
      <Menu
        style={{ background: "#F6F6F6" }}
        mode="inline"
        selectedKeys={[activeKey]}
        onSelect={({ key }) => setActiveKey(key)}
      >
        <div className="flex flex-col">
          <div className="px-4">
            <Menu.Item
              key="1"
              icon={<RiPieChart2Fill size={25} />}
              className={
                activeKey === "1" ? "!bg-red-500 !p-4 !text-white" : "!p-4"
              }
            >
              <Link to="/" className="text-[18px]">
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<GiStabbedNote size={25} />}
              className={
                activeKey === "2" ? "!bg-red-500 !p-4 !text-white" : "!p-4"
              } 
            >
              <Link to="/booking-management" className="text-[18px]">
                Booking Management
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<BsMenuButtonWideFill size={25} />}
              className={
                activeKey === "3" ? "!bg-red-500 !p-4 !text-white" : "!p-4"
              } 
            >
              <Link to="/menu" className="text-[18px]">
                Menu
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<MdOutlineCategory size={25} />}
              className={
                activeKey === "4" ? "!bg-red-500 !p-4 !text-white" : "!p-4"
              } 
            >
              <Link to="/add-category" className="text-[18px]">
                Add Category
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<MdSchedule size={25} />}
              className={
                activeKey === "5" ? "!bg-red-500 !p-4 !text-white" : "!p-4"
              } 
            >
              <Link to="/table-booking" className="text-[18px]">
                Table Booking Schedule
              </Link>
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<FaChalkboardUser size={25} />}
              className={
                activeKey === "6" ? "!bg-red-500 !p-4 !text-white" : "!p-4"
              } 
            >
              <Link to="/user-management" className="text-[18px]">
                Users Management
              </Link>
            </Menu.Item>

            <Menu.Item
              key="4"
              icon={<FaUserCog size={25} />}
              
              className={
                activeKey === "7" ? "!bg-red-500 !p-4 !text-white" : "!p-4"
              } 
            >
              <Link to="/my-details" className="text-[18px]">
                My Details
              </Link>
            </Menu.Item>

            {/* Restaurant Details Submenu Items  */}
            <Menu.SubMenu
              className={activeKey === 'restaurant-details' ? '!bg-red-500 !text-white' : 'ml-5'} 
              icon={<IoRestaurantSharp size={25} />}
              title={
                  <span className="text-[18px] text-black">Restaurant Details</span>
              }
              popupClassName="bg-white"
            >
              <Menu.Item
                key="business-hours"
                className={
                  activeKey === "business-hours"
                    ? "!bg-red-500 !text-white"
                    : ""
                } 
              >
                <Link to="/restaurant/business-hours" className="text-[18px]">
                  Business Hours
                </Link>
              </Menu.Item>
              <Menu.Item
                key="reviews"
                className={
                  activeKey === "reviews"
                    ? "!bg-red-500 !text-white"
                    : ""
                } 
              >
                <Link to="/restaurant/reviews" className="text-[18px]">
                  Reviews
                </Link>
              </Menu.Item>
              <Menu.Item
                key="cuisine"
                className={
                  activeKey === "cuisine" ? "!bg-red-500 !text-white" : ""
                } 
              >
                <Link to="/restaurant/cuisine" className="text-[18px]">
                  Cuisine
                </Link>
              </Menu.Item>
              <Menu.Item
                key="party"
                className={
                  activeKey === "party" ? "!bg-red-500 !text-white" : ""
                }
              >
                <Link to="/restaurant/party" className="text-[18px]">
                  Party
                </Link>
              </Menu.Item>
              <Menu.Item
                key="social-media"
                className={
                  activeKey === "social-media" ? "!bg-red-500 !text-white" : ""
                }
              >
                <Link to="/restaurant/social-media" className="text-[18px]">
                  Social Media
                </Link>
              </Menu.Item>
              <Menu.Item
                key="restaurant-features"
                className={
                  activeKey === "restaurant-features"
                    ? "!bg-red-500 !text-white"
                    : ""
                }
              >
                <Link to="/restaurant/restaurant-features" className="text-[18px]">
                  Restaurant Features
                </Link>
              </Menu.Item>
              <Menu.Item
                key="restaurant-agreement"
                className={
                  activeKey === "restaurant-agreement"
                    ? "!bg-red-500 !text-white"
                    : ""
                }
              >
                <Link to="/restaurant/restaurant-agreement" className="text-[18px]">
                  Restaurant Agreement
                </Link>
              </Menu.Item>
              <Menu.Item
                key="menu-items"
                className={
                  activeKey === "menu-items" ? "!bg-red-500 !text-white" : ""
                }
              >
                <Link to="/restaurant/menu-items" className="text-[18px]">
                  Menu Items
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
          </div>

          <div className="p-4  ">
            <Menu.Item
              key="signout"
              icon={<RiLogoutBoxRLine size={25} />}
              className={
                activeKey === "signout" ? "bg-red-500 !p-4 text-white" : "!p-4"
              } // Tailwind active style
            >
              <Link to="/login" className="text-[18px]">
                Sign Out
              </Link>
            </Menu.Item>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default SidebarMenu;
