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
    let      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
        //"post",
        
      ],
      
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "mail-Medecin",
      ],
   
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
      
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">




          <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="/" >
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text forms">tableau de bord</span>
              </Link>
             
            </li>




            <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-user"></i>
                <span className="nav-text">Mon profile</span>
              </Link>
			

              <ul >
                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/profile">Profile</Link>
                </li>

                <li>
					<Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()}  to="/acces">Accés</Link>
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
                    to="/dossier-medical/traitement"
                  >
                    Profile Médical
                  </Link>
                
                </li>
               
               
			
                {/* <li><Link className={`${path === "posts" ? "mm-active" : ""}`} to="/posts">Posts</Link></li> */}
              </ul>
            </li>
           
           
            <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text forms">Contact </span>
              </Link>
              <ul >
                <li>
                    <Link className={`${path === "Contact" ? "mm-active" : ""}`}onClick={() => this.props.onClick()} to="/contact">Q & R</Link>
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
