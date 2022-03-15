import React from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/profile/12.png";
import avatar from "../../../images/avatar/1.jpg";
import LogoutLink from './Logout'; 

const Header = ({ onNote, toggle, onProfile, onNotification, onBox }) => {
   var path = window.location.pathname.split("/");
   var name = path[path.length - 1].split("-");
   var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
   var finalName = filterName.includes("app")
      ? filterName.filter((f) => f !== "app")
      : filterName.includes("ui")
      ? filterName.filter((f) => f !== "ui")
      : filterName.includes("uc")
      ? filterName.filter((f) => f !== "uc")
      : filterName.includes("basic")
      ? filterName.filter((f) => f !== "basic")
      : filterName.includes("form")
      ? filterName.filter((f) => f !== "form")
      : filterName.includes("table")
      ? filterName.filter((f) => f !== "table")
      : filterName.includes("page")
      ? filterName.filter((f) => f !== "page")
      : filterName.includes("email")
      ? filterName.filter((f) => f !== "email")
      : filterName.includes("ecom")
      ? filterName.filter((f) => f !== "ecom")
      : filterName.includes("chart")
      ? filterName.filter((f) => f !== "chart")
      : filterName.includes("editor")
      ? filterName.filter((f) => f !== "editor")
      : filterName;
   return (
      <div className="header">
         <div className="header-content">
            <nav className="navbar navbar-expand">
               <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                    
                  </div>
                  <ul className="navbar-nav header-right">
                     <li className="nav-item dropdown notification_dropdown">
                       
                        <div
                           className={`dropdown-menu dropdown-menu-right ${
                              toggle === "notification" ? "show" : ""
                           }`}
                        >
                        
                         
                        </div>
                     </li>
                     <li className="nav-item dropdown notification_dropdown">
                        <Link
                           className="nav-link bell bell-link"
                           to="#"
                           onClick={() => onNote()}
                        >
                          

                           
                        </Link>
                     </li>
                     <li className="nav-item dropdown notification_dropdown">
                  

                  
                     </li>
                     <li
                        className="nav-item dropdown header-profile"
                        onClick={() => onProfile()}
                     >
                 

                        <div
                           className={`dropdown-menu dropdown-menu-right ${
                              toggle === "profile" ? "show" : ""
                           }`}
                        >
                       
                          
                           <LogoutLink />
                        </div>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Header;
