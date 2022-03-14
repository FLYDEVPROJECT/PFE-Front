import React, { Fragment } from "react";
import { Link } from "react-router-dom";



const Compose = () => {
   return (
      <Fragment>

         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                    
                        <div class="card">
                           <div class=" d-block card-header"><div class="card-title h5">Sélectionnez la Spécialité de votre médecin</div>
                      
                           </div>
                           
                           <div class="card-body">

                              <div role="group" class="btn-group-horizontal">

                              <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/med-dentaire" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Medecine dentaire
                         </button>
                         </Link>
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-cardio" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Cardiologie
                         </button>
                         </Link>
               </div>
            </div>
            
            </div>

            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-dermato" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Dermatologie
                         </button>
                         </Link>
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-gyneco" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Gynécologie
                         </button>
                         </Link>
               </div>
            </div>
            
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-interne" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook" style={{'width': "100%"}}>Médecine interne
                         </button>
                         </Link>
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-ophtalmo" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}>Ophtalmologie
                         </button>
                         </Link>
               </div>
            </div>
            
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-ORL" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> O.R.L
                         </button>
                         </Link>
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-orthopedie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Orthopédie - Traumatologie
                         </button>
                         </Link>
               </div>
            </div>
            
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-Pediatrie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Pédiatrie
                         </button>
                         </Link>
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-Sexologie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Sexologie
                         </button>
                         </Link>
               </div>
            </div>
            
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-Gastro" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Gastro-entérologue
                         </button>
                         </Link>
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-Urologie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Urologie
                         </button>
                         </Link>
               </div>
            </div>
            
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-Pneumologie" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}>Pneumologie
                         </button>
                         </Link>
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <Link to="/Med-test" className="col-mail col-mail-8">
                         <button type="button" class="mr-2 btn btn-facebook"style={{'width': "100%"}}> Test
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