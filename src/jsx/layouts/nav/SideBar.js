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
      app = [
        "app-profile",
        "med-dentaire",
        "acces",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      email = ["acces", "email-inbox", "email-read"],
    
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
      widget = ["widget-basic"],
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
      ],
      error = [
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
            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Mon Profile</span>
              </Link>
			

              <ul >
                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/app-profile">Profile</Link>
                </li>

                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()}  to="/acces">Accés</Link>
                </li>

            		<li>
						<Link className={`${path === "task" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/task">Note</Link>
					</li>	
              



		
               </ul></li>


      
        
          
            <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
         
              <ul >
                <li>
                  <Link
                    className={`${path === "chart-rechart" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/chart-rechart"
                  >
                    RechartJs
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/chart-chartjs"
                  >
                    Chartjs
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-chartist" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/chart-chartist"
                  >
                    Chartist
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-chartist" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/med-dentaire
                    "
                  >
                    Chartist
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-sparkline" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/chart-sparkline"
                  >
                    Sparkline
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-apexchart" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/chart-apexchart"
                  >
                    Apexchart
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
             
              <ul >
                <li>
                  <Link
                    className={`${path === "ui-accordion" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-accordion"
                  >
                    Accordion
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-alert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-alert"
                  >
                    Alert
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-badge" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-badge"
                  >
                    Badge
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-button" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-button"
                  >
                    Button
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-modal" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-modal"
                  >
                    Modal
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-button-group" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-button-group"
                  >
                    Button Group
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-list-group" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-list-group"
                  >
                    List Group
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-media-object" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-media-object"
                  >
                    Media Object
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-card" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-card"
                  >
                    Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-carousel" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-carousel"
                  >
                    Carousel
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-dropdown" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-dropdown"
                  >
                    Dropdown
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-popover" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-popover"
                  >
                    Popover
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-progressbar" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    to="/ui-progressbar"
                  >
                    Progressbar
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-tab" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-tab"
                  >
                    Tab
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-typography" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-typography"
                  >
                    Typography
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-pagination" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-pagination"
                  >
                    Pagination
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-grid" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/ui-grid"
                  >
                    Grid
                  </Link>
                </li>
              </ul>
            </li>
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
                    to="/Doc-Report"
                  >
                    Dossier Patient Par Spécialité
                  </Link>
                </li>
               
               
				<li>
					<Link className={`${path === "uc-lightgallery" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/doc-MD">Light Gallery</Link>
                </li>
                {/* <li><Link className={`${path === "posts" ? "mm-active" : ""}`} to="/posts">Posts</Link></li> */}
              </ul>
            </li>
            <li className={`${redux.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="flaticon-381-book"></i><span className="nav-text">Rendez Vous</span>
                </Link>
                <ul>
                    <li><Link className={`${path === "appointment" ? "mm-active" : ""}`} to="/appointment">appointment</Link></li> 
                  
                </ul>
            </li>    
           
            <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text forms">Contact</span>
              </Link>
              <ul >
                <li>
                    <Link className={`${path === "form-element" ? "mm-active" : ""}`}onClick={() => this.props.onClick()} to="/form-element">Q & R</Link>
                </li>

                <li>
                  <Link className={`${ path === "mail-Medecin" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/mail-Medecin">Medecin</Link>
                </li>
              </ul>
            </li>
            <li className={`${table.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Liste des médecins</span>
              </Link>
              <ul >
             
              
                <li>
                    <Link className={`${ path === "table-Medecin" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="/table-Medecin">
                        Tous les médecins
                    </Link>
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
