import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Formik} from 'formik';
import * as Yup from 'yup';
import './validation.css';

const StepOne = () => {
  const url=""
  const [data , setData] =useState ({
    nom: '',
    num_tel: '',
    prenom: '',
    adresse: '',
    code_postal: '',
    email: '',
    ville:'',
    date_naissance:'',
    sexe:'',

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
        nom: '',
        num_tel: '',
        prenom: '',
        adresse: '',
        code_postal: '',
        email: '',
        ville:'',
        date_naissance:'',
        sexe:'',
        photo:'',
      
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    > 
      <div className="row">
         <div className="col-lg-6 mb-2">
            <div className="form-group">
               <label className="text-label">Nom*</label>
               <input
                  type="text"
                  name="nom"
                  className="form-control"
                  placeholder="Parsley"
                  onChange={(e) => handle(e)}
                  id="nom" value={data.nom}
                  required
               />
            </div>
         </div>
         <div className="col-lg-6 mb-2">
            <div className="form-group">
               <label className="text-label">Prénom*</label>
               <input
                   type="text"
                   name="prenom"
                   className="form-control"
                   placeholder="Parsley"
                   onChange={(e) => handle(e)}
                   id="prenom" value={data.prenom}
                   required
               />
            </div>
         </div>
         <div className="col-lg-12 mb-2">
            <div className="form-group">
               <label className="text-label">Joindrez votre photo</label>
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
               <label className="text-label">Sexe*</label>
               <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        className="form-control"
        onChange={(e) => handle(e)}
        id="sexe" value={data.sexe}
         name="sexe">
        <FormControlLabel value="female"  control={<Radio />} label="Female" defaultChecked />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
       
      </RadioGroup>
            </div>
         </div>

         <div className="col-lg-12 mb-2">
            <div className="form-group">
               <label className="text-label">Date de naissance*</label>
               <input
                      type="date"
                      onChange={(e) => handle(e)}
                      id="date_naissance" value={data.date_naissance}
                       name="num_tel"
                       className="form-control"
                       required
                   />  
            </div>
         </div>
         <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label">Numéro de telephone*</label>
               <input
                    type="text"
                    onChange={(e) => handle(e)}
                    id="num_tel" value={data.num_tel}
                     name="num_tel"
                     className="form-control"
                     placeholder="(+1)408-657-9007"
                     required
                  /> 
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
                     name="email"
                     onChange={(e) => handle(e)}
                     id="email" value={data.email}
                  />
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label">Ville*</label>
                  <input
                     type="text"
                     className="form-control"
                     required
                     name="ville"
                     onChange={(e) => handle(e)}
                     id="ville" value={data.ville}
                  />
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label">Adresse *</label>
                  <input
                    type="text"
                     name="adresse"
                     required
                     className="form-control"
                     onChange={(e) => handle(e)}
                     id="adresse" value={data.adresse}
                  />
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label">Code postal*</label>
                  <input
                       placeholder="3000"
                       required
                       name="code_postal"
                       onChange={(e) => handle(e)}
                       id="code_postal" value={data.code_postal}
                     className="form-control"/>
               </div>
            </div>
      </div>
      </Formik>
   </section>
   );
};

export default StepOne;
