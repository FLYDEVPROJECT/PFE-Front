import * as React from 'react';
import { Formik , Form} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './validation.css';
import swal from "sweetalert";


const StepFour = ({ history }) => {
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
                              onClick={() =>
                                 swal(
                                    "Félicitations!",
                                    "Votre demande a éte envoyez avec succés!",
                                    "success"
                                 )
                              }
                              className="btn btn-success btn sweet-success"
                           >
                              Sweet Success
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
