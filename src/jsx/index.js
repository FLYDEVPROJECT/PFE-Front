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
import Dermato from './components/Dashboard/Dermato';
import dentise from './components/Dashboard/dentiste';
import orl from './components/Dashboard/orl';
import pediatrie from './components/Dashboard/pediatrie';
import pneumologue from './components/Dashboard/pneumologue';
import cardio from './components/Dashboard/cardio';
import gyneco from './components/Dashboard/gyneco';
import orthopedie from './components/Dashboard/orthopedie';
import sexologie from './components/Dashboard/sexologie';
import urologie from './components/Dashboard/urologie';
import interne from './components/Dashboard/interne';
import gastro from './components/Dashboard/gastro';
import Med from './components/Dashboard/Med';



/// App
import AppProfile from './components/AppsMenu/AppProfile/AppProfile'
import PostDetails from './components/AppsMenu/AppProfile/PostDetails'
import Compose from './components/AppsMenu/Email/Compose/Compose'
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
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";


/// Form

import WizardForm from "./components/Forms/ReduxWizard/Index";
import Element from './components/Forms/Element/Element'
import Wizard from './components/Forms/Wizard/Wizard'
import SummerNote from './components/Forms/Summernote/SummerNote'

import jQueryValidation from './components/Forms/jQueryValidation/jQueryValidation'

/// Pages
import Registration from './pages/Registration'
import Login from './pages/Login'
import LockScreen from './pages/LockScreen'

import Todo from './pages/Todo';

//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';


const Markup = () => {
  let path = window.location.pathname
  path = path.split('/')
  path = path[path.length - 1]
  let pagePath = path.split('-').includes('page')
  const [activeEvent, setActiveEvent] = useState(!path)

  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "docteur/dashboard", component: Home },
   	{ url: "docteur/listedespatients", component: PatientList },
    { url: "patient-details", component: PatientDetails },
    { url: "docteur/liste", component: DoctorList },
    { url: "docteur/details", component: Doctordetail },
    { url: "docteur/opthalmo", component: PageReview },
    {url : "docteur/Dermato",component: Dermato },
    {url : "docteur/dentiste",component: dentise },
    {url : "docteur/orl",component: orl },
    {url:"docteur/pediatrie", component:pediatrie},
    {url : "docteur/cardio",component: cardio },
    {url : "docteur/gyneco",component: gyneco },
    {url : "docteur/orthopedie",component: orthopedie },
    {url : "docteur/pneumologue",component: pneumologue },
    {url : "docteur/interne",component: interne },
    {url : "docteur/gastro",component: gastro },
{url:"docteur/ordonnancemedicale",component: Med } ,


    {url : "docteur/sexologie",component: sexologie },
    {url : "docteur/urologie",component: urologie },
{url:"docteur/experience",component:Task},




    /// Apps
    { url: 'docteur/profile', component: AppProfile },
    { url: 'docteur/tous-les-professionnels', component: PostDetails },
    { url: 'docteur/contact', component: Compose },
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
    { url: 'docteur/creationcompte', component: Checkout },
    { url: 'ecom-product-order', component: ProductOrder },
    { url: 'ecom-checkout', component: Checkout },
    
    { url: 'ecom-product-detail', component: ProductDetail },
    { url: 'ecom-customers', component: EcomCustomers },

    /// Form
    

    { url: 'form-redux-wizard', component: WizardForm },
    { url: 'form-element', component: Element },
    { url: 'form-wizard', component: Wizard },
    { url: 'form-wizard', component: Wizard },
    { url: 'form-editor-summernote', component: SummerNote },
   
    { url: 'form-validation-jquery', component: jQueryValidation },

    /// table
    { url: 'table-datatable-basic', component: DataTable },
    { url: 'table-bootstrap-basic', component: BootstrapTable },
    { url: 'docteur/liste-professionnels', component: FilteringTable },
    { url: 'table-sorting', component: SortingTable },

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
