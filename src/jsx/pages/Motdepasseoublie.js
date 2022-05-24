import React from "react";
import logo from '../../images/logo.png'



const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.Date_Join === ""){
            error = true;
			errorMsg = 'Ajouter une date ';
        }else if(addFormData.Cust_Name === ""){
            error = true;
			errorMsg = 'Ajouter une etude de cas du patient';
        }
        else if(addFormData.Location === ""){
            error = true;
			errorMsg = 'Ajouter un hopital';
        }
        if(!error){
            const newContact = {
                id: nanoid(),
                Cust_Id: addFormData.Cust_Id,
                Date_Join:  addFormData.Date_Join,
                Cust_Name:  addFormData.Cust_Name ,
                Location:  addFormData.Location,
				image: addFormData.image,
            };
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
            setPostModal(false);
            swal( '','Opération ajouté avec succès', "success");
            addFormData.Cust_Name = addFormData.Location = addFormData.Date_Join = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    }; 

const Motdepasseoublie = ({ history }) => {
   const submitHandler = (e) => {
      e.preventDefault();
      history.push("/");
   };
   return (
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                     
                          
                          
                              <h4 className="text-center mb-4">
                             
                            <img src={logo} alt="" className="logo-icon mr-2" height='120px' width='120'/>
                               
                           
                              </h4>
                              <form
                                 action=""
                                 onSubmit={(e) => submitHandler(e)}
                              >
                                 <div className="form-group">
                                    <label>
                                       <strong>Réinitialiser votre mot de passe</strong>
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       defaultValue="Adresse Email"
                                       name="Adresse Email"
                                    />
                                 </div>
                                 <div className="text-center">
                                
                                 <button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit =>
                                 swal(
                                    "",
                                    
                                    "Votre mot de passe sera envoyé à l'adresse email que vous avez utilisée lors de votre enregistrement.",
                                    "success"
                                 )
                              }>Se Connecter</button>  
                                     <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     
                     <div className="card-content">
                     
                     </div>
                  </div>
               </div>
            </div>

                                 </div>
                                
                              </form>
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

export default Motdepasseoublie;
