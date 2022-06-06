import React, { Fragment, useState, useEffect } from 'react'
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import jwt_decode from 'jwt-decode';
import axios from 'axios' ; 

   const MedContact = () => {
      const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [largeModal, setLargeModal] = useState(false);
  const [addFormData, setAddFormData] = useState({
    titre:'',
    question: '',
});


  const handleClose = () => {
    setOpen(false);
  };
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    console.log(newFormData)
};     



  const submit = () => {
    const newAddFormData = { ...addFormData }
    const fd = new FormData();
    fd.append('titre', addFormData.titre);
    fd.append('question', addFormData.question);


            var data = jwt_decode(localStorage.getItem('token'));
            fd.append('username', data.username);

 
           
           
            let config = {
                headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            };
       
        axios
        .post('http://127.0.0.1:8000/api/ajout/question', fd, config)
        .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error));
    

    setOpen(false);
  };
  const [clientes, setClientes] = useState([]);


  
  const clickhistorique = ()=>{
    let config = {
      headers: {
      'Authorization': 'Bearer '+ localStorage.getItem('token')
      }
    };

   
    setLargeModal(true)
  }
  const validate = Yup.object({
    Nomdutraitement: Yup.string()
      .max(20, 'Doit contenir 15 caractères ou moins')
      .required(' champ obligatoire'),

    email: Yup.string()
      .email('Email est invalide')
      .required('Email est obligatoire'),
    password: Yup.string()
      .min(6, 'Mot de passe doit contenir au mois 6 caractéres')
      .required('Mot de passe est obligatoire'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre')
      .required('confirmer mot de passe est obligatoire '),
    dates: Yup.string()
      .oneOf([Yup.ref('dates'), null], 'Le mot de passe doit correspondre')
      .required('confirmer mot de passe est obligatoire '),
  })

  
   return (
      <Fragment>

         <div className="row">
            <div className="col-lg-12">
               <div className="card">


                  <div className="card-body">
                  <div className="card-header">
						<h4 className="card-title">Poser ma question </h4>
					</div>
                     <div className="email-left-box px-0 mb-3">
                      
                        <div className="mail-list mt-4">
                           <Link
                           
                              className="list-group-item active"
                           >
                              <i className="fa fa-inbox font-18 align-middle mr-2"></i>
                              Nouveau message
                            
                           </Link>
                           <Link
                              to="/Contact"
                              className="list-group-item"
                           >
                              <i className="fa fa-paper-plane font-18 align-middle mr-2"></i>
                              Trouver une réponse
                           </Link>
                         
                          
                          
                        </div>
                      
                        <div className="mail-list mt-4">
                           <Link className="list-group-item">
                              <span className="icon-warning">
                                 <i
                                    className="fa fa-circle"
                                    aria-hidden="true"
                                 ></i>
                              </span>
                              Question
                           </Link>
                           <Link  className="list-group-item">
                              <span className="icon-primary">
                                 <i
                                    className="fa fa-circle"
                                    aria-hidden="true"
                                 ></i>
                              </span>
                              Rapidité et efficacité 
                           </Link>
                           <Link className="list-group-item">
                              <span className="icon-success">
                                 <i
                                    className="fa fa-circle"
                                    aria-hidden="true"
                                 ></i>
                              </span>
                              Support
                           </Link>
                           <Link className="list-group-item">
                              <span className="icon-dpink">
                                 <i
                                    className="fa fa-circle"
                                    aria-hidden="true"
                                 ></i>
                              </span>
                              communication médecin-patient
                           </Link>
                        </div>
                     </div>
                     <div className="email-right-box ml-0 ml-sm-4 ml-sm-0">
                        <div className="toolbar mb-4" role="toolbar">
                           <div className="btn-group mb-1">
                            
                                
                              <button
                                 type="button"
                                 className="btn btn-primary light px-3"
                              >
                                 <i className="fa fa-exclamation-circle"></i>
                              </button>
                            
                           </div>
                          
                           
                           <Dropdown className="btn-group mb-1">
                              <Dropdown.Toggle
                                 type="button"
                                 className="btn btn-primary light dropdown-toggle v ml-1"
                                 data-toggle="dropdown"
                              >
                                 Plus <span className="caret m-l-5"></span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                               
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="/contact"
                                 >
                                    <Link to ="/contact">
                                    Voir Tous les questions 
                                    </Link>
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="compose-content">
                           <form action="#">
                          
                              <div className="form-group">
                              <input type="text" 
                    className="form-control" 
                                                   required="required"
                                                  onChange={handleAddFormChange}
                                                  name="titre"
                                                  id="titre"
                                                  value={addFormData.titre}
placeholder="sujet" 
                                                />
                              </div>
                              <div className="form-group">
                                 <textarea
                                     onChange={handleAddFormChange}
                                     value={addFormData.question}
                                     name="question"
                                    className="textarea_editor form-control bg-transparent"
                                    rows="15"
                                    placeholder="Enter text ..."
                                 ></textarea>
                              </div>
                           </form>
                          
                        </div>
                        <div className="text-left mt-4 mb-5">
                           <button
                              className="btn btn-primary btn-sl-sm mr-2"
                              type="button"
                              onClick={submit}
                           >
                              <span className="mr-2">
                                 <i className="fa fa-paper-plane"></i>
                              </span>
                              envoyer
                           </button>
                           <button
                              className="btn btn-danger light btn-sl-sm"
                              type="button"
                              onClick={handleClose}
                           >
                              <span className="mr-2">
                                 <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                 ></i>
                              </span>
                              Annuler
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default MedContact;
