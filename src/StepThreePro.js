import React from "react";
import { Formik , Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

 
const StepThreePro = () => {
  const regMatch = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
 
   const validate = Yup.object({
      Name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('champ obligatoire '),
      lastName: Yup.string()
        .max(20, 'doit contenir 20 caractéres ou moins')
        .required('champ obligatoire '),
        site : Yup.string()
        .required('champ obligatoire ')
        .matches(regMatch, "invalide URL"),
        adresseetab: Yup.string()
        .max(20, 'doit contenir 20 caractéres ou moins')
        .required('champ obligatoire '),
      emailpro: Yup.string()
        .email('Email n est pas correcte  ')
        .required('Email est obligatoire '),
      password: Yup.string()
        .min(6, 'Le code doit contenir 6 caractéres')
        .max(6, 'Le code doit contenir 6 caractéres')
 
        .required('Champ est obligatoire *'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })
   return (
      <section>
<Formik
      initialValues={{
        Name: '',
        lastName: '',
        adresseetab: '',
        emailpro: '',
        site:'' ,
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
          <div className="row">
 
<div className="col-6 ">
<h6 ><strong>Nom de l'établissement *</strong></h6>
  <TextField  name="Name" type="text" /></div>
 
<div className="col-lg-6 mb-1">
  <h6><strong> Numéro de l'établissement *</strong></h6>
  <TextField  name="lastName" type="text" /></div></div>
 
  <div className="row">
 
<div className="col-6 ">
<h6 ><strong> Ville </strong></h6>
<br></br>
<select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
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
 
<div className="col-lg-6 mb-1">
 
<h6><strong> Adresse de l'établissement *</strong></h6>
<TextField name="adresseetab" type="text" /></div></div>
<br></br>
<h6><strong> Adresse Email de l'établissement *</strong></h6>
 
 
         
            <TextField  name="emailpro" type="email" placeholder="example@gmail.com" />
          <br></br>
            <h6><strong> Site web </strong></h6>
            <TextField
                     name="site"
                     type="email"
                     className="form-control"
                     placeholder="Flydev.fr"
                     required
                  />
                  <br></br>
                              <h6><strong>Heure début de journée *</strong></h6>
                              <input
                     type="number"
                     className="form-control"
                     placeholder="9H"
                     required
                  />
                  <br></br>
 
<h6><strong>Heure fin de journée *</strong></h6>
<input
                     type="number"
                     className="form-control"
                     placeholder="18H"
                     required
                  />
 
 
          </Form>
        </div>
      )}
    </Formik>
    <br></br>
    <br></br>
      </section>
   );
};
 
export default StepThreePro ;
