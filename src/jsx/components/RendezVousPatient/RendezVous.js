import React, { Fragment} from "react";
import { Link } from "react-router-dom";
const RendezVous = () => {
   return (
      <Fragment>

       
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                                 Prendre un rendez vous 
                              </h4>
                              <form
                               
                              >
                                 <div className="form-group">
                                    <label>
                                       <strong>Date </strong>
                                    </label>
                                    <input
                                       type="datetime-local"
                                       className="form-control"
                                       defaultValue="Password"
                                       name="password"
                                    />
                                 </div>
                                 <div className="form-group">
                                    <label>
                                       <strong>Nom medecin </strong>
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       name="text "
                                    />
                                 </div>
                                 <div className="text-center">
                                    <Link to="/TimeRendezVous">
                                    <input
                                       type="submit"
                                       value="Confirmer"
                                       className="btn btn-primary btn-block"
                                    /></Link>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default RendezVous;
