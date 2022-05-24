import React, { useState } from "react";
import { Formik , Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './validation.css';
import Checkbox from '@mui/material/Checkbox';
 
const StepTwo = () => {
  const url=""
  const [data , setData] =useState ({
    rpps: '',
    cin: '',
    photo: '',
    email_professionnel : '',
    specialite : '',
    langues : '',
 
 
  })
   const validate = Yup.object({
     
    nom: Yup.string()
    .max(15, 'Doit contenir 15 caractères ou moins')
    .required('Champ obligatoire *'),
    code_postal: Yup.string()
    .max(4, 'Doit contenir 4 caractères ou moins')
    .required('Champ obligatoire *'),
    num_tel: Yup.string()
    .max(8, 'Doit contenir 8 nombres ou moins')
    .required('Numero de télephone est  obligatoire *'),
    prenom: Yup.string()
    .max(20, 'Doit contenir 15 caractères ou moins')
    .required('Champ obligatoire *'),
    adresse: Yup.string()
    .max(20, 'Doit contenir 15 caractères ou moins')
    .required('Champ obligatoire *'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email est obligatoire *'),
 
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
               <label className="text-label">Identifiant RPPS*</label>
               <input
                    type="password"
                    onChange={(e) => handle(e)}
                    id="rpps" value={data.rpps}
                     name="rpps"
                     className="form-control"
                     required
                  />
            </div>
         </div>
 
         <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label"> Numéro carte d'identité *</label>
               <input
                    type="password"
                    onChange={(e) => handle(e)}
                    id="cin" value={data.cin}
                     name="cin"
                     className="form-control"
                     required
                  />
            </div>
         </div>
         <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label">Spécialité*</label>
               <select
                                           className="form-control"
                                           defaultValue="Dermatologie-1"
                                           onChange={(e) => handle(e)}
                                           id="specialite " value={data.specialite }
                                            name="specialite"
                                    >
                                      <option value="Dermatologie-1">Dermatologie</option>
                                      <option value="Pédiatrie-2">Pédiatrie  </option>
                                      <option value="Psychiatrie-3">Psychiatrie</option>
                                      <option value="Pédopsychiatrie-3">Pédopsychiatrie</option>
                                      <option value="Cardiologie-3">Cardiologie</option>
                                      <option value="Néphrologie-3">Néphrologie</option>
                                      <option value="Neurologie-3">Neurologie</option>
                                      <option value="Pneumologie-3">Pneumologie</option>
                                      <option value="Rhumatologie-3">Rhumatologie</option>
                                      <option value="Gastro-entérologie-3">Gastro-entérologie</option>
                                      <option value="généraliste-3"> généraliste</option>
                                      <option value="Ophtalmologie-3"> Ophtalmologie</option>
                                      <option value="généraliste-3"> généraliste</option>
                                      <option value="Gynécologie-3"> Gynécologie</option>
                                      <option value="O.R.L-3"> O.R.L</option>
                                      <option value="Anesthésie-3"> Anesthésie</option>
                                     
                        </select>
            </div>
         </div>
         <div className="col-lg-12 mb-2">
            <div className="form-group">
               <label className="text-label">Joindrez votre carte cin et votre signature</label>
               <input
                onChange={(e) => handle(e)}
                id="photo" value={data.photo}
                 name="photo"
                 className="form-control"
                 required      
               type="file"
accept="image/png, image/jpeg"  />
            </div>
         </div>
         
     
         
       
         <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label"> Adresse Email*</label>
                  <input
                     type="email"
                     className="form-control"
                     placeholder="example@example.com.com"
                     required
                     name="email_professionnel"
                     onChange={(e) => handle(e)}
                     id="email_professionnel" value={data.email_professionnel}
                  />
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
