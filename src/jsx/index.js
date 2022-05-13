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
import dentiste from './components/Dashboard/dentiste';
/*
import hospitalisation from './components/Dashboard/hospitalisation'
import allergie from './components/Dashboard/allergie'
import antecedent from './components/Dashboard/antecedent'
 */
import Med from './components/Dashboard/Med';



/// App
import AppProfile from './components/AppsMenu/AppProfile/AppProfile'
import PostDetails from './components/AppsMenu/AppProfile/PostDetails'
import Compose from './components/AppsMenu/Email/Compose/Compose'
import Composee from './components/AppsMenu/Email/Compose/Compose'
import Inbox from './components/AppsMenu/Email/Inbox/Inbox'
import Read from './components/AppsMenu/Email/Read/Read'


/// Product List
import ProductGrid from './components/AppsMenu/Shop/ProductGrid/ProductGrid'
import ProductList from './components/AppsMenu/Shop/ProductList/ProductList'
import ProductDetail from './components/AppsMenu/Shop/ProductGrid/ProductDetail'
import Checkout from './components/Dashboard/Checkout'

import ProductOrder from './components/AppsMenu/Shop/ProductOrder'
import EcomCustomers from './components/AppsMenu/Shop/Customers/Customers'

/// Charts
import RechartJs from './components/charts/rechart'
import ChartJs from './components/charts/Chartjs'
import Chartist from './components/charts/chartist'
import SparklineChart from './components/charts/Sparkline'
import ApexChart from './components/charts/apexcharts'

/// Bootstrap


/// Plugins
import Select2 from './components/PluginsMenu/Select2/Select2'
import Nestable from './components/PluginsMenu/Nestable/Nestable'
import MainNouiSlider from './components/PluginsMenu/Noui Slider/MainNouiSlider'
import MainSweetAlert from './components/PluginsMenu/Sweet Alert/SweetAlert'
import Toastr from './components/PluginsMenu/Toastr/Toastr'
import JqvMap from './components/PluginsMenu/Jqv Map/JqvMap'
import Lightgallery from './components/PluginsMenu/Lightgallery/Lightgallery'


/// Widget
import Widget from './pages/Widget'

/// Table
import DataTable from './components/table/DataTable'
import BootstrapTable from './components/table/BootstrapTable'

import FilteringTable from "./components/table/FilteringTable/FilteringTable";


/// Form

import WizardForm from "./components/Forms/ReduxWizard/Index";
import Element from './components/Forms/Element/Element'

import SummerNote from './components/Forms/Summernote/SummerNote'

import jQueryValidation from './components/Forms/jQueryValidation/jQueryValidation'

/// Pages
import Registration from './pages/Registration'
import Login from './pages/Login'
import LockScreen from './pages/LockScreen'
import FilteringNewTab from './components/NewTab/filteringnewtab'

import Todo from './pages/Todo';

//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';
import Reponse from '../layouts/Reponse'


const Markup = () => {
  let path = window.location.pathname
  path = path.split('/')
  path = path[path.length - 1]
  let pagePath = path.split('-').includes('page')
  const [activeEvent, setActiveEvent] = useState(!path)

  const routes = [
    /// Dashboard
    
    { url: "", component: Home },
   	{ url: "/listedespatients", component: PatientList },
    { url: "patient-details", component: PatientDetails },
    { url: "/liste", component: DoctorList },
    { url: "/details", component: Doctordetail },
    { url: "/opthalmo", component: PageReview },
    /*
    {url:"patientenattente",component:patientenattente},
    {url:"hospitalisation",component:hospitalisation},
    {url:"allergie",component:allergie},
    {url:"antecedent",component:antecedent},
    */
    {url : "acces",component: dentiste },
    
  
    {url:"Reponse",component:Reponse},
{url:"ordonnance-medicale",component: Med } ,


   
{url:"experience",component:Task},




    /// Apps
    { url: 'profile', component: AppProfile },
    { url: 'tous-les-professionnels', component: PostDetails },
    { url: 'contact', component: Compose },
    { url: 'email-inbox', component: Inbox },
    { url: 'email-read', component: Read },
 
    

    /// Chart
    { url: 'chart-sparkline', component: SparklineChart },
    { url: 'chart-chartjs', component: ChartJs },
    { url: 'chart-chartist', component: Chartist },
    { url: 'chart-apexchart', component: ApexChart },
    { url: 'chart-rechart', component: RechartJs },

    /// Bootstrap
    
    /// Plugin
    { url: 'uc-select2', component: Select2 },
    { url: 'uc-nestable', component: Nestable },
    { url: 'uc-noui-slider', component: MainNouiSlider },
    { url: 'uc-sweetalert', component: MainSweetAlert },
    { url: 'uc-toastr', component: Toastr },
    { url: 'map-jqvmap', component: JqvMap },
    { url: 'uc-lightgallery', component: Lightgallery },


    /// Widget
    { url: 'widget-basic', component: Widget },

    /// Shop
    { url: 'ecom-product-grid', component: ProductGrid },
    { url: 'ecom-product-list', component: ProductList },
    { url: 'creationcompte', component: Checkout },
    { url: 'ecom-product-order', component: ProductOrder },
    { url: 'ecom-checkout', component: Checkout },
    
    { url: 'ecom-product-detail', component: ProductDetail },
    { url: 'ecom-customers', component: EcomCustomers },

    /// Form
    

    { url: 'form-redux-wizard', component: WizardForm },
    { url: 'form-element', component: Element },
 
    { url: 'form-editor-summernote', component: SummerNote },
   
    { url: 'form-validation-jquery', component: jQueryValidation },

    /// table
    { url: 'table-datatable-basic', component: DataTable },
    { url: 'table-bootstrap-basic', component: BootstrapTable },
    { url: 'liste-professionnels', component: FilteringTable },
    

      /// nv tableau patient 
      { url: 'liste-patient', component: FilteringNewTab },

    /// pages
    { url: 'page-register', component: Registration },
    { url: 'page-lock-screen', component: LockScreen },
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
