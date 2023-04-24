import React, { useContext, useState } from "react";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
  ProfileIcon,
} from "../icons";
import {
  Avatar,
  Badge,
  Button,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }
  function handleLocationClick() {
    setIsLocationMenuOpen(!isLocationMenuOpen);
  }
  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }
 

  return (
    <header
      className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800"
      style={{ height: "8vh" }}
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-black-600 dark:text-black-300">
        <aside className="hidden w-full lg:block">
          <div className="w-11/12">
            <Link to="/app/dashboard" className="text-xl font-bold text-gray-800">
              Find Green
            </Link>
          </div>
        </aside>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>
                  You received a new user sign-up by Find Green{" "}
                  <p style={{ color: "#7B7B7B" }}>20 mins ago</p>
                </span>
                <KeyboardArrowRightIcon />
              </DropdownItem>
              <hr />
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>
                  Booking cancelled successfully from Shell Recharge
                  <p style={{ color: "#7B7B7B" }}>20 mins ago</p>
                </span>
                <KeyboardArrowRightIcon />
              </DropdownItem>
              <hr />
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>
                  Payment of Rs.400 added successfully to your Find Green Wallet
                  <p style={{ color: "#7B7B7B" }}>20 mins ago</p>
                </span>
                <KeyboardArrowRightIcon />
              </DropdownItem>
              <hr />
              <DropdownItem tag="a" href="#" className="justify-between">
                <u>
                  <span style={{ color: "#7B7B7B" }}>
                    View all Notification
                  </span>
                </u>
              </DropdownItem>
              {/* <DropdownItem onClick={() => alert("Alerts!")}>
                <span><center>Alerts</center></span>
              </DropdownItem> */}
            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              // className="rounded-full focus:shadow-outline-black focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <ProfileIcon
                className="w-5 h-5 "
                aria-hidden="true"
                style={{ fontSize: "2em" }}
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#">
                <OutlinePersonIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>My Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Log out!")}>
                <OutlineLogoutIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;


