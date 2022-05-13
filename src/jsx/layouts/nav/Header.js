import React from "react";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import LogoutLink from './Logout';
import Stack from '@mui/material/Stack';
 
const Header = ({ onNote, toggle, onProfile }) => {
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
                     <div
                        className="dashboard_bar"
                        style={{ textTransform: "capitalize" }}
                     >
                        {finalName.join(" ")}
                     </div>
                  </div>
                  <ul className="navbar-nav header-right">
                   
                   
                 
                 
                       
                     <li
                        className="nav-item dropdown header-profile"
                        onClick={() => onProfile()}
                     >
                        <Link
                           className="nav-link"
                           to="#"
                           role="button"
                           data-toggle="dropdown"
                        >
                         
                           <div className="header-info">
                           <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
     
    </Stack>
                           </div>
                        </Link>
 
                        <div
                           className={`dropdown-menu dropdown-menu-right ${
                              toggle === "profile" ? "show" : ""
                           }`}
                        >
                           <Link
                              to="/profile"
                              className="dropdown-item ai-icon"
                           >
                              <svg
                                 id="icon-user1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="text-primary"
                                 width={18}
                                 height={18}
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth={2}
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                 <circle cx={12} cy={7} r={4} />
                              </svg>
                              <span className="ml-2">Profile </span>
                           </Link>
                         
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
