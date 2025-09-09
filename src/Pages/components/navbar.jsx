import Logo from "../../images/Logo.png";
import { Bell, Search, Menu, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [notifications, setNotifications] = useState(3);
  const [onsearch, setOpenSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="w-full h-[80px] bg-white shadow-[var(--shadow-fancy)] flex items-center justify-between px-4 py-3 laptop:hidden ">
        {/* mobile view */}
        {/* Left - Hamburger + Logo */}
        <div className="flex items-center gap-3 laptop:hidden">
          <Menu
            className="cursor-pointer"
            size={24}
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <div className="absolute top-16 left-4 bg-white shadow-[var(--shadow-fancy)] rounded-md p-4 w-48 z-10">
              <ul className="flex flex-col gap-3 ">
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Dashboard
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Courses
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Assignments
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Grades
                </li>
                <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                  Calendar
                </li>
              </ul>
            </div>
          )}
          <img src={Logo} alt="Logo" className="w-25 h-25" />
        </div>

        {/* Right - Search + User + Bell */}
        <div className="flex items-center gap-6 laptop:hidden">
          {/* Search */}
          <div className="relative">
            <Search
              className="cursor-pointer"
              size={22}
              onClick={() => setOpenSearch(!onsearch)}
            />
            {onsearch && (
              <input
                type="text"
                placeholder="Search courses, assignments"
                className="absolute top-8 right-10 border rounded-full pl-8 pr-3 py-1 w-56 shadow-sm text-sm tablet:top-0"
              />
            )}
          </div>

          {/* User */}
          <div>
            <User />
          </div>

          {/* Bell */}
          <div className="relative">
            <Bell className="cursor-pointer" size={22} />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        
        {/* desktop view + laptop view */}
        <div className="hidden laptop:flex w-full h-[100px] bg-white shadow-[var(--shadow-fancy)] items-center gap-3 desktop:flex justify-center">
          <img src={Logo} alt="Logo" className="w-30 h-30 laptop:m-8" />
          <ul className="hidden laptop:flex justify-center items-center relative desktop:gap-10">
            <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Dashboard
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Courses
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Assignments
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Grades
            </li>
            <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Calendar
            </li>
            <input
              type="text"
              placeholder="Search courses, assignments"
              className=" top-8 right-0 border rounded-full pl-8 pr-3 py-1 w-56 shadow-sm text-sm "
            />
            <div className="relative">
              <Bell className="cursor-pointer" size={30} />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
            <div className="flex flex-col text-left ">
              <p className="ml-3 text-[14px] font-semibold text-[var(--primary)]">Justine Nabunturan</p>
              <p className="ml-3 text-[13px] text-gray-500">Criminology</p>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
