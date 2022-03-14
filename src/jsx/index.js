import React, { useState } from 'react'
/// React router dom
import {Switch, Route } from 'react-router-dom'
/// Css
import './index.css'
import './step.css'

/// Layout
import Nav from './layouts/nav'
import Footer from './layouts/Footer'

/// Dashboard
import Home from "./components/Dashboard/Home";
import DoctorList from "./components/Dashboard/DoctorList";
import Doctordetail from "./components/Dashboard/RendezVous";

/// App
import ProfilePat from './components/ProfilePatient/ProfilePat'
import Compose from './components/AppsMenu/Email/Compose/Compose'

import Calendar from './components/AppsMenu/Calendar/Calendar'

/// Product List



/// Bootstrap
import DocReport from './components/bootstrap/DocReport'
import DocMD from './components/bootstrap/DocMD'
import DocCardio from './components/bootstrap/DocCardio'


/// Plugins


/// Widget

/// Table
import DataTable from './components/table/DataTable'
import BootstrapTable from './components/table/BootstrapTable'
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";


/// Form
import jQueryValidation from './components/Forms/jQueryValidation/MedContact'

/// Pages
import Registration from './pages/Registration'
import Login from './pages/Login'
import LockScreen from './pages/LockScreen'

import Todo from './pages/Todo';

//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';
import Dermatologie from './components/AppsMenu/Calendar/dermatologie'
import interne from './components/AppsMenu/Calendar/Interne'
import Cardiologie from './components/AppsMenu/Calendar/cardiologie'
import gynecologie from './components/AppsMenu/Calendar/gynecologie'
import Ophtalmologie from './components/AppsMenu/Calendar/ophtalmologie'
import Orthopedie from './components/AppsMenu/Calendar/Orthopedie'
import Pediatrie from './components/AppsMenu/Calendar/Pediatrie'
import Sexologie from './components/AppsMenu/Calendar/Sexologie'
import Gastro from './components/AppsMenu/Calendar/Gastro'
import Urologie from './components/AppsMenu/Calendar/Urologie'
import Pneumologie from './components/AppsMenu/Calendar/Pneumologie'
import OtoRhinoLaryngologie from './components/AppsMenu/Calendar/OtoRhinoLaryngologie'
import Reponse from './components/Dashboard/PatientList'
import docDetails from './components/Dashboard/docDetails'
import DocGen from './components/bootstrap/DocGen'
import TimeRendezVous  from './components/Dashboard/TimeRendezVous'
import ContactAll from './components/Forms/Element/ContactAll'




const Markup = () => {
  let path = window.location.pathname
  path = path.split('/')
  path = path[path.length - 1]
  let pagePath = path.split('-').includes('page')
  const [activeEvent, setActiveEvent] = useState(!path)

  const routes = [
    /// Dashboard
    { url: "", component: Home },
	{ url: "Reponse", component: Reponse },
    { url: "doctor-list", component: DoctorList },
    { url: "appoiform", component: Doctordetail },
  { url: 'Contact', component: ContactAll },


    /// Apps
    
    { url: 'Profile-Patient', component: ProfilePat },
    { url: 'Med-gyneco', component: gynecologie },
    { url: 'compose', component: Compose },
    { url: 'Med-interne', component: interne },
    { url: 'Med-dermato', component: Dermatologie },
    { url: 'Med-dentaire', component: Calendar },
    { url: 'Med-cardio', component: Cardiologie },
    { url: 'Med-ophtalmo', component: Ophtalmologie },
    { url: 'Med-orthopedie', component: Orthopedie },
    { url: 'Med-Pediatrie', component: Pediatrie },
    { url: 'Med-Sexologie', component: Sexologie },
    { url: 'Med-Gastro', component: Gastro },
    { url: 'Med-Urologie', component: Urologie },
    { url: 'Med-Pneumologie', component: Pneumologie },
    { url: 'Med-ORL', component: OtoRhinoLaryngologie },
    { url: 'TimeRendezVous', component: TimeRendezVous },


  

    /// Bootstrap
    { url: 'Doc-Report', component: DocReport },
    { url: 'Doc-MD', component: DocMD },
    { url: 'Doc-Gen', component: DocGen },

    { url: 'Doc-Cardio', component: DocCardio },

    /// Plugin


    
 
    
    { url: 'mail-Medecin', component: jQueryValidation },

    /// table
    { url: 'table-datatable-basic', component: DataTable },
    { url: 'table-bootstrap-basic', component: BootstrapTable },
    { url: 'table-Medecin', component: FilteringTable },
    { url: 'table-sorting', component: SortingTable },

    /// pages
    { url: 'page-register', component: Registration },
    { url: 'page-lock-screen', component: LockScreen },
    { url: 'page-login', component: Login },

    { url: 'appointment', component: Todo },
    { url: 'doc-Details', component: docDetails },

  ]

  return (
       <> 
          <div
            id={`${!pagePath ? 'main-wrapper' : ''}`}
            className={`${!pagePath ? 'show' : 'mh100vh'}`}
          >
            {!pagePath && (
              <Nav
                onClick={() => setActiveEvent(!activeEvent)}
                activeEvent={activeEvent}
                onClick2={() => setActiveEvent(false)}
                onClick3={() => setActiveEvent(true)}
              />
            )}
            <div
              className={` ${!path && activeEvent ? 'rightside-event' : ''} ${
                !pagePath ? 'content-body' : ''
              }`}
            >
              <div
                className={`${!pagePath ? 'container-fluid' : ''}`}
                style={{ minHeight: window.screen.height - 60 }}
              >
                <Switch>
                  {routes.map((data, i) => (
                    <Route
                      key={i}
                      exact
                      path={`/${data.url}`}
                      component={data.component}
                    />
                  ))}
                </Switch>
              </div>
            </div>
            {!pagePath && <Footer />}
          </div>
         <ScrollToTop />
       </>
  )
}

export default Markup
