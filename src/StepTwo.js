import React from "react";
import { Formik , Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './validation.css';
import Checkbox from '@mui/material/Checkbox';

const StepTwo = () => {
   const validate = Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Le code doit contenir 6 caractéres')
        .max(6, 'Le code doit contenir 6 caractéres')

        .required('Champ est obligatoire *'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

   return (
      <section>
          <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
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
          <h6 ><strong>Code Sécurité Sociale ( CSS)*</strong></h6>
          <TextField name="password" type="password" />
          <br></br>
          <h6 ><strong>Nombre d'enfants</strong></h6>

                  <input
                     type="Number"
                     className="form-control"
                     id="emial1"
                     placeholder="0"
                     required
                  />
                  <br>
                  </br>
                  <h6 ><strong>Profession / Scolarité</strong></h6>
                                    <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      <option value="option-1">Profession</option>
                                      <option value="option-2">Education  </option>
                                      <option value="option-3">Autre</option>
                                     
                        </select>
                        <br></br>
                        <h6 ><strong>Retreté(e)*</strong></h6>
                        <Checkbox {...label} defaultChecked />
                        <br></br>
                        <h6 ><strong>Type d'âge *</strong></h6>
                        <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      <option value="option-1">Enfants (entre 00 à 14 ans )</option>
                                      <option value="option-2"> Adolescents (entre 15 à 24 ans ) </option>
                                      <option value="option-3">Adultes ( entre 25 à 64 ans)</option>
                                      <option value="option-3">Aînés (entre 65 ans et plus)</option>
 
                                     
                                    </select>


          
           
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
