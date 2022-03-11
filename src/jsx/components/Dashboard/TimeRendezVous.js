import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
   username: Yup.string()
      .min(3, "Your username must consist of at least 3 characters ")
      .max(50, "Your username must consist of at least 3 characters ")
      .required("Please enter a username"),
   password: Yup.string()
      .min(5, "Your password must be at least 5 characters long")
      .max(50, "Your password must be at least 5 characters long")
      .required("Please provide a password"),
});

const TimeRendezVous = () => {
   const [showPassword, setShowPassword] = useState(false);
   return (
      <Fragment>

       
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                             
                              <form
                               
                              >
                               <p>hh</p>
                                
                               
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

export default  TimeRendezVous;
