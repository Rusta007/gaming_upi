// import React, { useState } from "react";
// import {
//   Card,
//   List,
//   ListItem,
//   ListItemPrefix,
//   Accordion,
//   AccordionHeader,
//   AccordionBody
// } from "@material-tailwind/react";
// import { AiFillBank, AiFillDashboard } from "react-icons/ai";
// import { GrTransaction } from "react-icons/gr";
// import { FaFileMedicalAlt, FaUser } from "react-icons/fa";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { MdSettingsSuggest } from "react-icons/md";
// import { MdPlaylistAddCircle } from "react-icons/md";

// import menuItems from "../../../utils/menu.json";
// import { Link } from "react-router-dom";

// const getIconComponent = (iconName) => {
//   switch (iconName) {
//     case "AiOutlineDashboard":
//       return <AiFillDashboard className="h-4 w-4" />;
//     case "AiOutlineCreditCard":
//       return <GrTransaction className="h-4 w-4" />;
//     case "AiOutlineWallet":
//       return <AiFillBank className="h-4 w-4" />;
//     case "AiOutlineFileText":
//       return <FaUser className="h-4 w-4" />;
//     case "AiOutlineTransaction":
//       return <FaMoneyBillTransfer className="h-4 w-4" />;
//     case "AiOutlineFileAdd":
//       return <MdSettingsSuggest className="h-4 w-4" />;
//     case "AiOutlineReport":
//       return <FaFileMedicalAlt className="h-4 w-4" />;
//     case "AiOutlineTicket":
//       return <MdPlaylistAddCircle className="h-4 w-4" />;

//     default:
//       return null;
//   }
// };

// const SidebarMenu = (props) => {
//   // console.log("Doing");
//   // console.log(props.open);
//   const [open, setOpen] = useState(1);
//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//     if (props.open && window.innerWidth < 960) {
//       props.onMenuClick();
//     }
//   };

//   return (
//     <Card
//       className={`h-[calc(100vh)] w-full p-2 shadow-xl shadow-blue-gray-900/5 z-2 ${
//         window.innerWidth < 960 && props.open ? "mobile-popup" : ""
//       }`}>
//       <div className={`mb-2 p-4 text-center ${props.open && "hidden !important"}`}>
//         <h5 className="text-blue-gray">Bilpay</h5>
//       </div>

//       <List className="text-sm">
//         {menuItems.map((menuItem, index) => (
//           <Link key={index} to={menuItem.route}>
//             <Accordion
//               open={open === index + 1}
//               icon={
//                 menuItem.submenuLength > 0 && (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className={`mx-auto h-4 w-4 transition-transform ${
//                       open === index + 1 ? "rotate-180" : ""
//                     }`}>
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 )
//               }>
//               <ListItem className="p-0 text-xs" selected={open === index + 1}>
//                 <AccordionHeader
//                   onClick={() => handleOpen(index + 1)}
//                   className={`border-b-0 p-3 mr-auto font-normal transition-all duration-300 transform hover:scale-95 ${
//                     open === index + 1
//                       ? "text-green-600 border-r-4 border-solid border-green-600"
//                       : ""
//                   }`}>
//                   <ListItemPrefix>
//                     {menuItem.icon && getIconComponent(menuItem.icon)}
//                   </ListItemPrefix>
//                   <span className="mr-auto font-normal text-sm">
//                     {menuItem.route ? (
//                       <Link to={menuItem.route} className="text-blue-green">
//                         {menuItem.title}
//                       </Link>
//                     ) : (
//                       menuItem.title
//                     )}
//                   </span>
//                 </AccordionHeader>
//               </ListItem>

//               {menuItem.submenu && (
//                 <AccordionBody className="py-1 ">
//                   <div
//                     className={`border-b-0 mr-0 rounded  duration-300 transform hover:scale-95 ${
//                       open === index + 1
//                         ? "text-green-600 border-r-4 border-solid border-green-600"
//                         : ""
//                     }`}>
//                     <Link to={menuItem?.subMenuItem?.route} className="text-blue-green">
//                       <List className="p-0">
//                         {menuItem.submenu.map((subMenuItem, subIndex) => (
//                           <ListItem key={subIndex}>
//                             <Link to={subMenuItem.route} className="text-blue-green">
//                               <ListItemPrefix>
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                   stroke="currentColor"
//                                   className="h-3 w-5">
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={3}
//                                     d="M9 5l7 7-7 7"
//                                   />
//                                 </svg>
//                               </ListItemPrefix>
//                             </Link>
//                             {subMenuItem.route ? (
//                               <Link to={subMenuItem.route} className="text-blue-green">
//                                 {subMenuItem.title}
//                               </Link>
//                             ) : (
//                               subMenuItem.title
//                             )}
//                           </ListItem>
//                         ))}
//                       </List>
//                     </Link>
//                   </div>
//                 </AccordionBody>
//               )}
//             </Accordion>
//           </Link>
//         ))}
//       </List>
//     </Card>
//   );
// };

// export default SidebarMenu;

import React, { useState } from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";
import { AiFillBank, AiFillDashboard } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { FaFileMedicalAlt, FaUser } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdSettingsSuggest } from "react-icons/md";
import { MdPlaylistAddCircle } from "react-icons/md";

import menuItems from "../../../utils/menu.json";
import { Link } from "react-router-dom";

const getIconComponent = (iconName) => {
  switch (iconName) {
    case "AiOutlineDashboard":
      return <AiFillDashboard className="h-4 w-4" />;
    case "AiOutlineCreditCard":
      return <GrTransaction className="h-4 w-4" />;
    case "AiOutlineWallet":
      return <AiFillBank className="h-4 w-4" />;
    case "AiOutlineFileText":
      return <FaUser className="h-4 w-4" />;
    case "AiOutlineTransaction":
      return <FaMoneyBillTransfer className="h-4 w-4" />;
    case "AiOutlineFileAdd":
      return <MdSettingsSuggest className="h-4 w-4" />;
    case "AiOutlineReport":
      return <FaFileMedicalAlt className="h-4 w-4" />;
    case "AiOutlineTicket":
      return <MdPlaylistAddCircle className="h-4 w-4" />;

    default:
      return null;
  }
};

const SidebarMenu = (props) => {
  // console.log("Doing");
  // console.log(props.open);
  const [open, setOpen] = useState();
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  console.log(selectedSubmenu);

  const handleOpen = (value) => {
    console.log(value);
    setOpen(open === value ? 0 : value);
    if (props.open && window.innerWidth < 960) {
      props.onMenuClick();
    }
  };
  const handleSubmenuClick = (index) => {
    setSelectedSubmenu(selectedSubmenu === index ? null : index);
    console.log("Submenu clicked:", index);
  };

  return (
    <Card
      className={`h-[calc(100vh)] w-full p-2 shadow-xl shadow-blue-gray-900/5 z-2 ${
        window.innerWidth < 960 && props.open ? "mobile-popup" : ""
      }`}>
      <div className={`mb-2 p-4 text-center ${props.open && "hidden !important"}`}>
        <h5 className="text-blue-gray">Bilpay</h5>
      </div>

      <List className="text-sm">
        {menuItems.map((menuItem, index) => (
          <Link key={index} to={menuItem.route}>
            <Accordion
              open={open === index + 1}
              icon={
                menuItem.submenuLength > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === index + 1 ? "rotate-180" : ""
                    }`}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )
              }>
              <ListItem className="p-0 text-xs" selected={open === index + 1}>
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className={`border-b-0 p-3 mr-auto font-normal transition-all duration-300 transform hover:scale-95 ${
                    open === index + 1
                      ? "text-green-600 border-r-4 border-solid border-green-600"
                      : ""
                  }`}>
                  <ListItemPrefix>
                    {menuItem.icon && getIconComponent(menuItem.icon)}
                  </ListItemPrefix>
                  <span className="mr-auto font-normal text-sm">
                    {menuItem.route ? (
                      <Link to={menuItem.route} className="text-blue-green">
                        {menuItem.title}
                      </Link>
                    ) : (
                      menuItem.title
                    )}
                  </span>
                </AccordionHeader>
              </ListItem>
              {menuItem.submenu && (
                <AccordionBody className="py-1 ">
                  <Link to={menuItem?.subMenuItem?.route} className="text-blue-green">
                    <List className="p-0">
                      {menuItem.submenu.map((subMenuItem, subIndex) => (
                        <div
                          key={subIndex}
                          className={`border-r-4  mr-4 font-normal border-transparent rounded-md duration-300 transform hover:scale-95 ${
                            selectedSubmenu === subIndex ? "border-green-600" : ""
                          }`}>
                          <ListItem
                            selected={selectedSubmenu === subIndex}
                            onClick={() => handleSubmenuClick(subIndex)}>
                            <Link to={subMenuItem.route} className="text-blue-green">
                              <ListItemPrefix>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="h-3 w-5">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </ListItemPrefix>
                            </Link>
                            {subMenuItem.route ? (
                              <Link to={subMenuItem.route} className="text-blue-green">
                                {subMenuItem.title}
                              </Link>
                            ) : (
                              subMenuItem.title
                            )}
                          </ListItem>
                        </div>
                      ))}
                    </List>
                  </Link>
                </AccordionBody>
              )}
            </Accordion>
          </Link>
        ))}
      </List>
    </Card>
  );
};

export default SidebarMenu;
