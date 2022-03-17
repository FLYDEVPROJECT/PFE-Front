/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import LogoutLink from './Logout'; 


class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    
    /// Active menu
    let dashBoard = [
        "",
        "patient-list",
		"patient-details",
		"doctor-list",
		"appoiform",
		"reviews",
		"task",
      ],
     
    
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
        //"post",
        
      ],
        redux = [
            "Appointment",
            "form-redux",
            "form-redux-wizard", 
        ],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "mail-Medecin",
      ],
      table = [
        "table-bootstrap-basic", 
        "table-datatable-basic",
        "table-sorting",
        "table-Medecin",
      ],
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">




          <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="/" >
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text forms">dashBoard</span>
              </Link>
             
            </li>




            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Mon Profile</span>
              </Link>
			

              <ul >
                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/patient/profile">Profile</Link>
                </li>

                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()}  to="/patient/acces">Accés</Link>
                </li>

            	
              



		
               </ul></li> 
            <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">Dossier Patient</span>
              </Link>
              <ul >
              
               
                <li>
                  <Link
                    className={`${path === "uc-sweetalert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/patient/dossier-medical"
                  >
                    Dossier Patient Par Spécialité
                  </Link>
                </li>
               
               
				<li>
					<Link className={`${path === "uc-lightgallery" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/">Light Gallery</Link>
                </li>
                {/* <li><Link className={`${path === "posts" ? "mm-active" : ""}`} to="/posts">Posts</Link></li> */}
              </ul>
            </li>
            <li className={`${redux.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="flaticon-381-book"></i><span className="nav-text">Rendez Vous</span>
                </Link>
                <ul>
                    <li><Link className={`${path === "appointment" ? "mm-active" : ""}`} to="/appointment">Vois les rendez vous</Link></li> 
                  
                </ul>
            </li>    
           
            <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text forms">Contact</span>
              </Link>
              <ul >
                <li>
                    <Link className={`${path === "Contact" ? "mm-active" : ""}`}onClick={() => this.props.onClick()} to="/patient/contact">Q & R</Link>
                </li>

              
              </ul>
            </li>
           
            <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="flaticon-381-layer-1"></i>
                    <span className="nav-text">Déconnexion</span>
                </Link>
              <ul >
               
                <li>
                 
                    <LogoutLink />

                </li>
              </ul>
            </li>
          </MM>
		
			<div className="copyright">
				<p>
				  <strong></strong> 
				</p>
				
			  </div>
			</PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
