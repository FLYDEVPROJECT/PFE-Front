import React, { useState } from "react";
import { Formik , Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './validation.css';
import Checkbox from '@mui/material/Checkbox';
 
const StepThree = () => {
  const url=""
  const [data , setData] =useState ({
    nom_etab: '',
    num_etab: '',
    ville_etab: '',
    email_etab: '',
    adresse_etab: ''
 
 
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
        nom_etab: '',
        num_etab: '',
        ville_etab: '',
        email_etab: '',
        adresse_etab: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <Form>
          <div className="row">
          <div className="col-lg-6 mb-2">
            <div className="form-group">
               <label className="text-label">Nom de l'etablissement*</label>
               <input
                  type="text"
                  name="nom_etab"
                  className="form-control"
                  onChange={(e) => handle(e)}
                  id="nom_etab" value={data.nom_etab}
                  required
               />
            </div>
         </div>
         <div className="col-lg-6 mb-2">
            <div className="form-group">
               <label className="text-label">Numéro de l'etablissement *</label>
               <input
                   type="text"
                   name="num_etab"
                   className="form-control"
                   placeholder="Parsley"
                   onChange={(e) => handle(e)}
                   id="num_etab" value={data.num_etab}
                   required
               />
            </div>
         </div></div>
       
         <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label">Ville de l'etablissement *</label>
               <select
                                      className="form-control"
                                      defaultValue="Ariana-1"
                                      onChange={(e) => handle(e)}
                                      id="ville_etab " value={data.ville_etab }
                                       name="ville_etab"
                                    >
                                       
                          <option value="Ariana-1">Ariana</option>
                          <option value="Beja-2">Beja </option>
                          <option value="Ben Arous-3">Ben Arous</option>
                          <option value="Bizerte-4">Bizerte</option>
                                      <option value="Gabes-5">Gabes</option>
                                      <option value="Gafsa-6">Gafsa</option>
                                      <option value="Jendouba-7">Jendouba</option>
                                      <option value="Kairouan-8">Kairouan</option>
                                      <option value="Kasserine-9">Kasserine</option>
                                      <option value="kebili-10">kebili</option>
                                      <option value="La Manouba-11">La Manouba</option>
                                      <option value="Kef-12">Kef</option>
                                      <option value="Mahdia-13">Mahdia</option>
                                      <option value="Médenine-14">Médenine</option>
                                      <option value="Monastir-15">Monastir</option>
                                      <option value="Nabeul-16">Nabeul</option>
                                      <option value="Sfax-17">Sfax</option>
                                      <option value="Sidi Bouzid-18">Sidi Bouzid</option>
                                      <option value="Siliana-19">Siliana</option>
                                      <option value="Sousse-20">Sousse</option>
                                      <option value="Tataouine-21">Tataouine</option>
                                      <option value="Tozeur-22">Tozeur</option>
                                      <option value="Tunis-23">Tunis</option>
                                      <option value="zaghouan-24">zaghouan</option>
                                     
                        </select>
            </div>
         </div>
         <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label">Adresse de l'etablissement *</label>
               <input
                   type="text"
                   name="adresse_etab"
                   className="form-control"
                   placeholder="Parsley"
                   onChange={(e) => handle(e)}
                   id="adresse_etab" value={data.adresse_etab}
                   required
               />
            </div>
         </div>
     
         
       
         <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label"> Email de l'etablissement *</label>
                  <input
                     type="email"
                     className="form-control"
                     placeholder="example@example.com.com"
                     required
                     name="email_etab"
                     onChange={(e) => handle(e)}
                     id="email_etab" value={data.email_etab}
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
 
export default StepThree;
 
 
 
