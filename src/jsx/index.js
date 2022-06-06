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
import Hospitalisations from './components/DossierPatient/hospitalisations'
import Maladies from './components/DossierPatient/maladies'
import Antecedents from './components/DossierPatient/antecedents'
import habitudes from './components/DossierPatient/habitudes'
import Vaccinations from './components/DossierPatient/vaccinations'
import Mesures from './components/DossierPatient/Mesures'
import Poid from './components/DossierPatient/mesure/poid'
import Coeur from './components/DossierPatient/mesure/coeur'
import Temperature from './components/DossierPatient/mesure/temperature'
import Taille from './components/DossierPatient/mesure/taille'
import Glycemie from './components/DossierPatient/mesure/glycemie'
import Tension  from './components/DossierPatient/mesure/tension'




import ProfessionnelsDeSante from './components/DossierPatient/ProfessionnelsDeSanté'
import Volontaire from './components/DossierPatient/volontaire'
import Historique from './components/DossierPatient/historique'


import Allergies from './components/DossierPatient/allergies'




import DocMD from './components/DossierPatient/DocMD'
import DocCardio from './components/DossierPatient/DocCardio'
import DocGen from './components/DossierPatient/DocGen'
import DocORM from './components/DossierPatient/DocORM'



/// Table
import FilteringTable from "./components/ListeMedPatient/FilteringTable";


/// Form
import jQueryValidation from './components/Forms/jQueryValidation/MedContact'

/// Pages
import Motdepasseoublier from './components/Dashboard/Motdepasseoublier' ;


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
import MedContact from './components/Forms/jQueryValidation/MedContact'




//Rendez vous Patient
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
  console.log(pagePath)
  console.log(path)

  const routes = [
    /// Dashboard
    { url: "", component: Home },
	{ url: "Reponse", component: Reponse },
    { url: "doctor-list", component: DoctorList },
    { url: "patient/nv/rendez-vous/form", component: Doctordetail },
  { url: 'contact', component: ContactAll },


    /// Profile patient  et acces
    { url: 'profile', component: ProfilePat },
    { url: 'acces', component: Compose },



    ///teb3inn l acces
    { url: 'Motdepasseoublier', component: Motdepasseoublier },

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
    { url: 'patient/acces/pneumologie', component: Pneumologie },
    { url: 'patient/nv/rendez-vous/form/affichage', component: TimeRendezVous },
    { url: 'med-contact', component: MedContact },



  

    /// Bootstrap
    { url: 'dossier-medical/hospitalisations', component: Hospitalisations },
    { url: 'dossier-medical/maladies', component: Maladies },
    { url: 'dossier-medical/Antecedents', component: Antecedents },
    { url: 'dossier-medical/habitudes', component: habitudes },
    { url: 'dossier-medical/Allergies', component: Allergies },
    { url: 'dossier-medical/Vaccinations', component: Vaccinations },
    { url: 'dossier-medical/Mesures', component: Mesures },
    { url: 'dossier-medical/Mesures/poid', component: Poid },
    { url: 'dossier-medical/ProfessionnelsDeSante', component: ProfessionnelsDeSante },
    { url: 'dossier-medical/volontaire', component: Volontaire },
    { url: 'dossier-medical/historique', component: Historique },
    { url: 'dossier-medical/Mesures/taille', component: Taille },
    { url: 'dossier-medical/Mesures/coeur', component: Coeur },
    { url: 'dossier-medical/Mesures/temperature', component: Temperature },
  
    { url: 'dossier-medical/Mesures/glycemie', component: Glycemie },
    { url: 'dossier-medical/Mesures/tension ', component: Tension },








    


    { url: 'dossier-medical/traitement', component: DocReport },
    { url: 'patient/dossier-medical/medecine-dentaire', component: DocMD },
    { url: 'patient/dossier-medical/generaliste', component: DocGen },
    { url: 'patient/dossier-medical/cardiologie', component: DocCardio },

    { url: 'Doc-ORL', component: DocORM },
    { url: 'Doc-Sexologie', component: DocSexo },
    { url: 'Doc-Pneumologie', component: DocPneumo },



    /// Plugin


    
 
    
    { url: 'patient/mail-medecin', component: jQueryValidation },

    /// table
    { url: 'table-Medecin', component: FilteringTable },

    /// pages

    { url: 'patient/details', component: docDetails },

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
