import React, { useState } from 'react'
/// React router dom
import {Switch, Route } from 'react-router-dom'
/// Css
import './index.css'
import './chart.css'
import './step.css'

/// Layout
import Nav from './layouts/nav'
import Footer from './layouts/Footer'

/// Dashboard
import Home from "./components/Dashboard/Home";
import PatientList from "./components/Dashboard/PatientList";
import PatientDetails from "./components/Dashboard/PatientDetails";
import DoctorList from "./components/Dashboard/DoctorList";
import Doctordetail from "./components/Dashboard/Doctordetail";
import PageReview from "./components/Dashboard/PageReview";
import Task from './components/Dashboard/Task';
import patientenattente from './components/Dashboard/patientenattente'; 
import Med from './components/Dashboard/Med';

/// App
import AppProfile from './components/AppsMenu/AppProfile/AppProfile'
import PostDetails from './components/AppsMenu/AppProfile/PostDetails'




import Checkout from './components/Dashboard/Checkout'






import DataTable from './components/table/DataTable'
import BootstrapTable from './components/table/BootstrapTable'

import FilteringTable from "./components/table/FilteringTable/FilteringTable";



import WizardForm from "./components/Forms/ReduxWizard/Index";
import Element from './components/Forms/Element/Element'

import SummerNote from './components/Forms/Summernote/SummerNote'

import jQueryValidation from './components/Forms/jQueryValidation/jQueryValidation'

import Registration from './pages/Registration'
import Login from './pages/Login'

import FilteringNewTab from './components/NewTab/filteringnewtab'

import Todo from './pages/Todo';

//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';
import Reponse from '../layouts/Reponse'
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





import Volontaire from './components/DossierPatient/volontaire'
import Historique from './components/DossierPatient/historique'
import compose from './components/DossierPatient/compose'

import Allergies from './components/DossierPatient/allergies'

import DocMD from './components/DossierPatient/DocMD'
import DocCardio from './components/DossierPatient/DocCardio'
import DocGen from './components/DossierPatient/DocGen'
///template 
import doctors from './components/template/doctors'


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
   { url : "",component:Home}, 

    {url: "/doctors", component: doctors },
   	{ url: "/listedespatients", component: PatientList },
    { url: "patient-details", component: PatientDetails },
    { url: "/liste", component: DoctorList },
    { url: "/details", component: Doctordetail },
    { url: "/opthalmo", component: PageReview },
    {url:"patientenattente",component:patientenattente},
    
    {url:"Reponse",component:Reponse},
    {url:"ordonnance-medicale",component: Med } ,
    {url:"experience",component:Task},


   
    { url: 'dossier-medical/hospitalisations', component: Hospitalisations },
    { url: 'dossier-medical/maladies', component: Maladies },
    { url: 'dossier-medical/Antecedents', component: Antecedents },
    { url: 'dossier-medical/habitudes', component: habitudes },
    { url: 'dossier-medical/Allergies', component: Allergies },
    { url: 'dossier-medical/Vaccinations', component: Vaccinations },
    { url: 'dossier-medical/Mesures', component: Mesures },
    { url: 'dossier-medical/Mesures/poid', component: Poid },
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

    





  
    { url: 'profile', component: AppProfile },
    { url: 'tous-les-professionnels', component: PostDetails },
    


 

    /// Shop
    
    { url: 'creationcompte', component: Checkout },
 
 
  

    /// FormS
    

    { url: 'form-redux-wizard', component: WizardForm },
    { url: 'form-element', component: Element },
 
    { url: 'form-editor-summernote', component: SummerNote },
   
    { url: 'form-validation-jquery', component: jQueryValidation },

    /// table
    { url: 'table-datatable-basic', component: DataTable },
    { url: 'table-bootstrap-basic', component: BootstrapTable },
    /// nv tableau docteur
    { url: 'liste-professionnels', component: FilteringTable },
    
    {url:'contact', component:compose},
      /// nv tableau patient 
      { url: 'liste-patient', component: FilteringNewTab },

    /// pages
    { url: 'page-register', component: Registration },
 
    { url: 'page-login', component: Login },
    
    
  
    { url: 'todo', component: Todo },
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
