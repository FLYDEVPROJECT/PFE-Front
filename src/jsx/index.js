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

/// App
import ProfilePat from './components/ProfilePatient/ProfilePat/ProfilePat'
import Compose from './components/ProfilePatient/AccesPat/Compose'



/// Dossier Patient 
import DocReport from './components/DossierPatient/DocReport'
import DocMD from './components/DossierPatient/DocMD'
import DocCardio from './components/DossierPatient/DocCardio'
import DocGen from './components/DossierPatient/DocGen'
import DocORM from './components/DossierPatient/DocORM'



/// Table
import FilteringTable from "./components/ListeMedPatient/FilteringTable";


/// Form
import jQueryValidation from './components/Forms/jQueryValidation/MedContact'

/// Pages
import Registration from './pages/Registration'
import Login from './pages/Login'
import LockScreen from './pages/LockScreen'


//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';




import Calendar from './components/ProfilePatient/AccesPat/Calendar/Calendar'
import Dermatologie from './components/ProfilePatient/AccesPat/Calendar/dermatologie'
import interne from './components/ProfilePatient/AccesPat/Calendar/Interne'
import Cardiologie from './components/ProfilePatient/AccesPat/Calendar/cardiologie'
import gynecologie from './components/ProfilePatient/AccesPat/Calendar/gynecologie'
import Ophtalmologie from './components/ProfilePatient/AccesPat/Calendar/ophtalmologie'
import Orthopedie from './components/ProfilePatient/AccesPat/Calendar/Orthopedie'
import Pediatrie from './components/ProfilePatient/AccesPat/Calendar/Pediatrie'
import Sexologie from './components/ProfilePatient/AccesPat/Calendar/Sexologie'
import Gastro from './components/ProfilePatient/AccesPat/Calendar/Gastro'
import Urologie from './components/ProfilePatient/AccesPat/Calendar/Urologie'
import Pneumologie from './components/ProfilePatient/AccesPat/Calendar/Pneumologie'
import OtoRhinoLaryngologie from './components/ProfilePatient/AccesPat/Calendar/OtoRhinoLaryngologie'



import Reponse from './components/Dashboard/PatientList'
import docDetails from './components/Dashboard/docDetails'
import ContactAll from './components/Forms/Element/ContactAll'



//Rendez vous Patient
import Todo from './components/RendezVousPatient/Booking';
import Doctordetail from "./components/RendezVousPatient/RendezVous";
import TimeRendezVous  from './components/RendezVousPatient/TimeRendezVous'
import DocSexo from './components/DossierPatient/DocSexo'
import DocPneumo from './components/DossierPatient/DocPneumo'



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
  { url: 'patient/contact', component: ContactAll },


    /// Profile patient  et acces
    { url: 'patient/profile', component: ProfilePat },
    { url: 'patient/acces', component: Compose },



    ///teb3inn l acces
  
    { url: 'patient/acces/medecine-interne', component: interne },
    { url: 'patient/acces/dermatologie', component: Dermatologie },
    { url: 'patient/acces/medecine-dentaire', component: Calendar },
    { url: 'patient/acces/cardiologie', component: Cardiologie },
    { url: 'patient/acces/gynecologie', component: gynecologie },
    { url: 'patient/acces/ophtalmologie', component: Ophtalmologie },
    { url: 'patient/acces/ORL', component: OtoRhinoLaryngologie },
    { url: 'patient/acces/orthopedie', component: Orthopedie },

    { url: 'Med-Pediatrie', component: Pediatrie },
    { url: 'Med-Sexologie', component: Sexologie },
    { url: 'Med-Gastro', component: Gastro },
    { url: 'Med-Urologie', component: Urologie },
    { url: 'Med-Pneumologie', component: Pneumologie },
    { url: 'TimeRendezVous', component: TimeRendezVous },


  

    /// Bootstrap
    { url: 'patient/dossier-medical', component: DocReport },
    { url: 'patient/dossier-medical/medecine-dentaire', component: DocMD },
    { url: 'patient/dossier-medical/géneraliste', component: DocGen },
    { url: 'patient/dossier-medical/cardiologie', component: DocCardio },

    { url: 'Doc-ORL', component: DocORM },
    { url: 'Doc-Sexologie', component: DocSexo },
    { url: 'Doc-Pneumologie', component: DocPneumo },



    /// Plugin


    
 
    
    { url: 'patient/mail-medecin', component: jQueryValidation },

    /// table
    { url: 'table-Medecin', component: FilteringTable },

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
