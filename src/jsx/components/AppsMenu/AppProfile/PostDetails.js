import React, { Fragment } from "react";
import { Link } from "react-router-dom";
 
 
 
const Compose = () => {
   return (
      <Fragment>
 
         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                  <div class="container">
                  <div class="container">
  <div class="row">
    <div class="col">
    </div>
 
    <div class="col">
    </div>
  </div>
  <div class="row">
   
  </div>
</div>
</div>
                        <div class="card">
                           <div class=" d-block card-header"><div class="card-title h5"> 
                             <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.reconversionprofessionnelle.org/wp-content/uploads/2021/11/Seance-avec-un-medecin-psychologue-990x556.jpg" alt="First slide" height="450px"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img-3.journaldesfemmes.fr/QN38QRXFdM9Vdo0PUuQQHg6sK4g=/1500x/smart/282b706c6b5247a2b00f919ee76d5638/ccmcms-jdf/11420081.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div></div>
<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand"></a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      </input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Chercher</button>
  </form>
</nav>
                           <p class="mb-0 subtitle card-text"></p>
                           </div>
                           
                           <div class="card-body">
 
                              <div role="group" class="btn-group-horizontal">
 
                              <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/dentiste" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Medecine dentaire
                         </button>
                         </Link>
               </div>
            </div>
           
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/cardio" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Cardiologie
                         </button>
                         </Link>
               </div>
            </div>
           
            </div>
 
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Dermato" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Dermatologie
                         </button>
                         </Link>
               </div>
            </div>
           
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/gyneco" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Gynécologie
                         </button>
                         </Link>
               </div>
            </div>
           
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/interne" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook" style={{'width': "100%"}}>Médecine interne
                         </button>
                         </Link>
               </div>
            </div>
           
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/reviews" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}>Ophtalmologie
                         </button>
                         </Link>
               </div>
            </div>
           
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/orl" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> O.R.L
                         </button>
                         </Link>
               </div>
            </div>
           
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/orthopedie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Orthopédie - Traumatologie
                         </button>
                         </Link>
               </div>
            </div>
           
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/pediatrie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Pédiatrie
                         </button>
                         </Link>
               </div>
            </div>
           
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/sexologie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Sexologie
                         </button>
                         </Link>
               </div>
            </div>
           
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/gastro" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Gastro-entérologue
                         </button>
                         </Link>
               </div>
            </div>
           
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/urologie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Urologie
                         </button>
                         </Link>
               </div>
            </div>
           
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/pneumologue" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}>Pneumologie
                         </button>
                         </Link>
               </div>
            </div>
           
           
           
            </div>
 
 
 
                            </div></div></div>
 
 
                     
                         
                       
                     
                     </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};
 
export default Compose;
