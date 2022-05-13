import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Formik} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './validation.css';
 
const StepOnePro = () => {
   const validate = Yup.object({
      firstName: Yup.string()
        .max(15, 'Doit contenir 15 caractères ou moins')
        .required('Champ obligatoire *'),
        code: Yup.string()
        .max(4, 'Doit contenir 4 caractères ou moins')
        .required('Champ obligatoire *'),
        telephone: Yup.string()
        .max(8, 'Doit contenir 8 nombres ou moins')
        .required('Numero de télephone est  obligatoire *'),
      lastName: Yup.string()
        .max(20, 'Doit contenir 15 caractères ou moins')
        .required('Champ obligatoire *'),
        adresse: Yup.string()
        .max(20, 'Doit contenir 15 caractères ou moins')
        .required('Champ obligatoire *'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email est obligatoire *'),
     
    })
   return (
      <section>
          <Formik
      initialValues={{
        firstName: '',
        telephone: '',
        lastName: '',
        adresse: '',
        code: '',
        email: '',
     
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <div className="row">
 
          <div className="col-6 ">
          <h6 ><strong>Nom *</strong></h6>
            <TextField  name="firstName" type="text" /></div>
 
<div className="col-lg-6 mb-1">
            <h6><strong>Prénom *</strong></h6>
            <TextField  name="lastName" type="text" /></div></div>
 
            <div className="form-group">
 
                   
            <h6><strong>Joindrez votre photo</strong></h6>
            <br></br>
<input type="file"
id="avatar" name="avatar"
accept="image/png, image/jpeg"  className="form-control"/>
</div>  
<h6><strong>Sexe</strong></h6>
<RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female"  control={<Radio />} label="Female" defaultChecked />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Autre" />
       
      </RadioGroup>
      <br></br>
      <div className="form-group">
      <h6><strong>Date de naissance *</strong></h6>
      <br></br>
      <input
                      type="Date"
                      className="form-control"
                      id="inputGroupPrepend2"
                      aria-describedby="inputGroupPrepend2"
                      required
                   />  
                   </div>
                   <br></br>
 
                   <div className="row">
<div className="col-6 ">
<h6 ><strong>Numero de télephone*</strong></h6>
  <TextField  name="telephone" type="phone" /></div>
 
<div className="col-lg-6 mb-1">
  <h6><strong>Adresse Email *</strong></h6>
  <TextField  name="email" type="text" /></div></div>
 
 
  <div className="row">
 
<div className="col-6 ">
   <br></br>
<h6 ><strong>Ville *</strong></h6>
<br></br>
<select
                                                   className="form-control"
                                                   id="inputState"
                                                   defaultValue="option-23"
                                                 >
                                       <option value="option-1">Ariana</option>
                                    <option value="option-2">Beja </option>
                                    <option value="option-3">Ben Arous</option>
                                  <option value="option-4">Bizerte</option>
                                       <option value="option-5">Gabes</option>
                                       <option value="option-6">Gafsa</option>
                                       <option value="option-7">Jendouba</option>
                                       <option value="option-8">Kairouan</option>
                                       <option value="option-9">Kasserine</option>
                                       <option value="option-10">kebili</option>
                                       <option value="option-11">La Manouba</option>
                                       <option value="option-12">Kef</option>
                                       <option value="option-13">Mahdia</option>
                                       <option value="option-14">Médenine</option>
                                       <option value="option-15">Monastir</option>
                                       <option value="option-16">Nabeul</option>
                                       <option value="option-17">Sfax</option>
                                       <option value="option-18">Sidi Bouzid</option>
                                       <option value="option-19">Siliana</option>
                                       <option value="option-20">Sousse</option>
                                       <option value="option-21">Tataouine</option>
                                       <option value="option-22">Tozeur</option>
                                       <option value="option-23">Tunis</option>
                                       <option value="option-24">zaghouan</option>
                                                 </select></div>
<br></br>
<div className="col-lg-6 mb-1">
<br></br>
  <h6><strong>Adresse *</strong></h6>
  <TextField  name="adresse" type="text" /></div></div>
   <br></br>
  <div className="row">
 
<div className="col-6 ">
<h6 ><strong>Code postal </strong></h6>
  <TextField  name="code" type="text" /></div>
 
</div>
 
 
 
   </div>
      )}
    </Formik>
    <br></br>
    <br></br>
 
      </section>
   );
};
 
export default StepOnePro ;
