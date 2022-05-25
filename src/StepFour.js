import React, { useState } from "react";
import { Formik , Form} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './validation.css';
import swal from "sweetalert";


const StepFour = ({ history }) => {
   const url=""
   const [data , setData] =useState ({
     password: '',
   })
  const submitHandler = (e) => {
     e.preventDefault();
     history.push("/");
  }; 
  const validate = Yup.object({
   password: Yup.string()
     .min(12, 'Le mot de passe doit être au moins de 12 caractères')
     .required('Mot de passe est obligatoire '),
   confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Password must match')
     .required('Confirmer mot de passe est obligatoire '),
 })
 function handle (e) {
   const newdata={...data}
   newdata[e.target.id] =e.target.value
   setData(newdata)
   console.log(newdata)

 } 
 const onValidate = (e) => {
   const newdata={...data}
   newdata[e.target.id] =e.target.value
   setData(newdata)
   console.log(newdata)

};

   return (
      <section>    
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-8">
                  <div className="authincation-content">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                              s'inscrire 
                                                            </h4>
                              <form
                                 action=""
                                 onSubmit={(e) => submitHandler(e)}
                              >
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
        history.push('/');
      }}
    >
      {formik => (
        <div>
          <Form>
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
          </Form>
        </div>
      )}
    </Formik>
                                <br></br>


                                <button
                              onClick={onValidate}
                              className="btn btn-success btn sweet-success"
                           >
                              valider
                           </button>
                              </form>
                        </div>
                     </div>
               </div>
            </div> 
         </div>
      </section>
   );
};

export default StepFour;
