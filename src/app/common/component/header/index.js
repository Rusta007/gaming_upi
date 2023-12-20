import React from "react";
import ProfileMenu from "./Profile";
import Notification from "./Notification";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";
import SidebarMenu from "../sidebarMenu";
import { useSelector } from "react-redux";
function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  console.log(openNav);
  const data = useSelector((state) => state.persist);
  console.log(data);
  const handleMenuClick = () => {
    setOpenNav(false);
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="px-4 py-2 shadow-none bg-transparent w-full max-w-none ">
      <div className="mx-2 flex items-center justify-between lg:justify-end text-blue-gray-900">
        <IconButton
          variant="text"
          className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
        <div className="flex items-center space-x-4  gap-x-2 ">
          <div className="rounded-full h-9 w-9 bg-white p-1" size="sm">
            <span className="mt-5 ">
              <Notification />
            </span>
          </div>

          <div>
            <span className="flex items-center">
              <p className="text-[14px] mr-2  x lg:inline-block">
                Tony Soap
                <span className="flex text-[12px] ml-6">admin</span>
                <span className="flex text-[12px] ">{data?.user?.email}</span>
              </p>

              <ProfileMenu />
            </span>
          </div>
        </div>
      </div>
      <MobileNav open={openNav}>
        <SidebarMenu onMenuClick={handleMenuClick} open={openNav} />
      </MobileNav>
    </Navbar>
  );
}
export default Header;
