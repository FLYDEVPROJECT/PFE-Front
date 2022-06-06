import axios from "axios" ; 
import React, {useState} from 'react'


const Motdepasseoublier = ({ history }) => {

   const [addFormData, setAddFormData] = useState({
      email:'',
  });

   const onSubmit = (e) => {
      const fd = new FormData();
      fd.append('email', addFormData.email)
      axios
      .post('http://localhost:8000/api/password/reset', fd)
      .then((res) => {
         console.log(res.data);
          history.push("/");
        })
        .catch((error) => console.log(error));
   };

   const handleAddFormChange = (event) => {
      event.preventDefault();
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
      setAddFormData(newFormData);
  };  
   return (
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            {" "}
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                              
                          
                           Réinitialiser mot de passe 
                              </h4>
                              <div>
                                 <div className="form-group">
                                    <label>
                                   
                                       <strong>Adresse Email</strong>
                                    </label>
                                    <input
                                       onChange={handleAddFormChange}
                                       placeholder="email@email.com"
                                       type="email"
                                       className="form-control"
                                       name="email"
                                       required="required"
                                    />


                <span className="nav-text forms"></span>
              
                                 </div>
                                 <div className="text-center">
                                    <input
                                       onClick={onSubmit}
                                       value=" Réinitialiser mot de passe "
                                       className="btn btn-primary btn-block"
                                    />
                                 </div>


                                 <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox ml-1 ">
                                          
                                            <label className="form-check-label" htmlFor="basic_checkbox_1">Retour a la page d'authentification ?</label>
                                        </div>
                                    </div>
                                </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Motdepasseoublier;