import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./common/component/header";
import SidebarMenu from "./common/component/sidebarMenu";
import { useSelector } from "react-redux";
import Routing from "./common/route/Routes";

function MainApp() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const data = useSelector((state) => state.persist);
  useEffect(() => {
    setIsAuthenticated(data?.isAuthenticated);
    console.log(isAuthenticated);
  }, [location, data.isAuthenticated]);

  return (
    <>
      {isAuthenticated && (
        <div className="fixed left-0 lg:left-[15rem] top-0 right-0 z-50">
          <Header />
        </div>
      )}
      {isAuthenticated && (
        <div className="fixed w-[15rem] top-0 left-0 hidden lg:block overflow-hidden overflow-y-auto">
          <SidebarMenu />
        </div>
      )}

      <div
        className={
          isAuthenticated
            ? "z-[9] overflow-hidden overflow-y-auto w-full lg:w-[calc(100vw-15rem-8px)] mt-[72px] lg:ml-[15rem] p-[18px]"
            : "w-full"
        }>
        <Routing />
      </div>
    </>
  );
}

export default MainApp;
