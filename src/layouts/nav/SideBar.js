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
		"doctor-details",
		"reviews",
		"task",
      ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
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
      email = ["email-compose", "email-inbox", "email-read"],
      shop = [
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "ecom-product-detail",
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
            "todo",
            "form-redux",
            "form-redux-wizard", 
        ],
      widget = ["widget-basic"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = [
        "table-bootstrap-basic", 
        "table-datatable-basic",
        "table-sorting",
        "table-filtering",
        "table-filtering",
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
              <Link className="has-arrow ai-icon" to="/" >
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Tableau de bord </span>
              </Link>
	
            </li>
            <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-user"></i>
                <span className="nav-text">Mon profile</span>
              </Link>
              <ul >
                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/profile">Profile</Link>
                </li>
				
                <li>
						<Link className={`${path === "experience" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/experience">Expérience professionel</Link>
					</li>	
                <li className={`${email.includes(path) ? "mm-active" : ""}`}>
                
                  <ul
                    
                    className={`${email.includes(path) ? "mm-show" : ""}`}
                  >
                
                  </ul>
                </li>
             
                <li className={`${shop.includes(path) ? "mm-active" : ""}`}>
               
                  <ul
                    
                    className={`${shop.includes(path) ? "mm-show" : ""}`}
                  >
                   
                 
                   
                 
         
                  </ul>
                </li>
              </ul>
            </li>
            <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
        
              <ul >
               
                <li>
             
                </li>
                <li>
          
                </li>
              </ul>
            </li>
            <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
        
              <ul >
                <li>
             
                </li>
     
              
               
           
              
            
              </ul>
            </li>
            <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
         
              <ul >
                <li>
					<Link className={`${path === "uc-select2" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-select2">Select 2</Link>
                </li>
                <li>
					<Link className={`${path === "uc-nestable" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-nestable">Nestedable</Link>
                </li>
            
                <li>
                  <Link
                    className={`${path === "uc-toastr" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/uc-toastr"
                  >
                    Toastr
                  </Link>
                </li>
                <li>
					<Link className={`${path === "map-jqvmap" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/map-jqvmap">Jqv Map</Link>
                </li>
				<li>
					<Link className={`${path === "uc-lightgallery" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/uc-lightgallery">Light Gallery</Link>
                </li>
                {/* <li><Link className={`${path === "posts" ? "mm-active" : ""}`} to="/posts">Posts</Link></li> */}
              </ul>
            </li>
            <li className={`${redux.includes(path) ? "mm-active" : ""}`}>
              
            </li>    
    
            <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
             
             
            </li>
            
            <li className={`${table.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="Compose" >
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Liste  </span>
              </Link>
              <ul >
				
				
				<li>
        <Link className={`${ path === "table-filtering" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="liste-professionnels">
                        Liste des professionels de santé 
                    </Link>
        </li>
        <li>
        <Link className={`${ path === "table-filtering" ? "mm-active" : "" }`} onClick={() => this.props.onClick()} to="liste-patient">
                        Liste des patients
                    </Link>
        </li>
			
				
			 
							
				</ul>
            </li>
           <li>
                     
                    </li>



            <li className={`${table.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="Compose" >
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">Dossier Patient </span>
              </Link>
              <ul >
                <li>
                <Link
                        className={`${
                          path === "ecom-product-detail" ? "mm-active" : ""
                        }`}
                        to="creationcompte"
                        onClick={() => this.props.onClick()}
                      >
                       Création d'un Compte
                      </Link>
                </li>
                <Link
                        className={`${
                          path === "ecom-product-detail" ? "mm-active" : ""
                        }`}
                        to="ordonnance-medicale"
                        onClick={() => this.props.onClick()}
                      >
                       prescription médicale
                      </Link>
                <li>
         
       
                 
                </li>
            
              </ul>
            </li>
           <li>
                     
                    </li>

                    <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">Dossier Patienttt</span>
              </Link>
              <ul >
              
               
                <li>
                  <Link
                    className={`${path === "uc-sweetalert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    to="/dossier-medical/traitement"
                  >
                    Profile Médical
                  </Link>
                
                </li>
               
               
			
                {/* <li><Link className={`${path === "posts" ? "mm-active" : ""}`} to="/posts">Posts</Link></li> */}
              </ul>
            </li>
                    <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text">Contact</span>
              </Link>
              <ul >
                <li>
                <Link
                        className={`${
                          path === "contact" ? "mm-active" : ""
                        }`}
                        to="contact"
                        onClick={() => this.props.onClick()}
                      >
                        Q 	& R 
                      </Link>
                </li>
                </ul>
                </li>


                   
                      
            
            <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow ai-icon" to="#" >
                    <i className="flaticon-381-layer-1"></i>
                    <span className="nav-text">Déconnexion</span>
                </Link>
             
                    <ul>
                <li>
                 
                    <LogoutLink />

                </li>
               </ul>
              
              <ul >
              
         
              </ul>
            </li>
          </MM>
		
		
			</PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
