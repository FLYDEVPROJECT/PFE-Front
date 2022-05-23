import React, { useState } from "react";
import { Formik , Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './validation.css';
import Checkbox from '@mui/material/Checkbox';

const StepTwo = () => {
  const url=""
  const [data , setData] =useState ({
    code_securite_sociale: '',
    statut_sociale: '',
    nbr_enfant: '',
    profession : '',
  })
   const validate = Yup.object({
     
     
    
      password: Yup.string()
        .min(6, 'Le code doit contenir 6 caractéres')
        .max(6, 'Le code doit contenir 6 caractéres')

        .required('Champ est obligatoire *'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    function handle (e) {
      const newdata={...data}
      newdata[e.target.id] =e.target.value
      setData(newdata)
      console.log(newdata)
  
    }  
   return (
      <section>
          <Formik
      initialValues={{
        code_securite_sociale: '',
        statut_sociale: '',
        nbr_enfant: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <Form>
          <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label">Code sécurité sociale*</label>
               <input
                    type="password"
                    onChange={(e) => handle(e)}
                    id="code_securite_sociale" value={data.code_securite_sociale}
                     name="code_securite_sociale"
                     className="form-control"
                     required
                  /> 
            </div>
         </div>
         <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label">Statut social</label>
               <select
                                      className="form-control"
                                      defaultValue="célibataire" 
                                      onChange={(e) => handle(e)}
                                      id="statut_sociale" value={data.statut_sociale}
                                       name="statut_sociale"
                                    >
                                      <option value="célibataire">célibataire </option>
                                      <option value="marié(e)">Marié(e)  </option>
                                      <option value="veuf(ve)">veuf(ve)</option>
                                      <option value="divorcé(e)">divorcé(e) </option>
                                     
                        </select>
            </div>
         </div>
         
         <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label">Nombre d'enfants*</label>
               <input
                    type="number"
                    onChange={(e) => handle(e)}
                    id="nbr_enfant" value={data.nbr_enfant}
                     name="nbr_enfant"
                     className="form-control"
                     required
                  /> 
            </div>
         </div>
         <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label">Profession / Scolarité</label>
               <select
                                      className="form-control"
                                      defaultValue="profession" 
                                      onChange={(e) => handle(e)}
                                      id="profession " value={data.profession }
                                       name="profession "
                                    >
                                     <option value="profession">Profession</option>
                                      <option value="Education">Education  </option>
                                      <option value="autre">Autre</option>
                                     
                        </select>
            </div>
         </div>
                        <br></br>
                        
                      

          
           
          </Form>
        </div>
      )}
    </Formik>
    <br></br>
    <br></br>

      </section>
   );
};

export default StepTwo;
