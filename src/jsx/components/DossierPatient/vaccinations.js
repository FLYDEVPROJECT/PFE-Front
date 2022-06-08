import React, { Fragment, useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddD from '../../../images/big/AddD.png'
import MedicalReport from '../../../images/big/MedicalReport.png'
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import * as Yup from 'yup';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container
} from "@mui/material";
import { Modal } from "react-bootstrap";
import Collapsible from "./Collapsible";


const Vaccinations = () => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [largeModal, setLargeModal] = useState(false);
  const [addFormData, setAddFormData] = useState({
    nom:'',
    type: '',
    lot_vaccination: '',
    nom_vaccinateur: '',
    date_vaccination:'',
    commentaire: '',
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
    fd.append('nom', addFormData.nom);
    fd.append('type', addFormData.type);
    fd.append('lot_vaccination', addFormData.lot_vaccination);
    fd.append('nom_vaccinateur', addFormData.nom_vaccinateur);
    fd.append('date_vaccination', addFormData.date_vaccination);
    fd.append('commentaire', addFormData.commentaire);


            var data = jwt_decode(localStorage.getItem('token'));
            fd.append('username', data.username);

 
           
           
            let config = {
                headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            };
       
        axios
        .post('http://127.0.0.1:8000/api/ajout/vaccination', fd, config)
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

    const fd = new FormData();
    var decoded = jwt_decode(localStorage.getItem('token'));
    fd.append('username', decoded.username);
    axios
    .post('http://127.0.0.1:8000/api/list/vaccinations', fd, config)
    .then((res) => {
      var data = [];
      res.data.map((cliente, index) => {
        console.log(cliente);
        data.push({
          specialite:cliente.nom,
          type:cliente.type ,
          lot_vaccination: cliente.lot_vaccination,
          nom_vaccinateur: cliente.nom_vaccinateur,
          date_vaccination: cliente.date_vaccination,
          commentaire: cliente.commentaire,

      
          endereco: [
            {
              diagnostic: cliente.commentaire,
              principal: true,
            },
      
          ]
        })
    });
      setClientes(data);
    }).catch((error) => console.log(error));
    
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
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
     
      },
    }}
  > 
    <Paper elevation={3} >

    <Fragment>

<div className='row'>
<div className='col-lg-12'>
  <div className='card'>
    <div className='card-body'>
      <div className='email-left-box generic-width px-0 mb-5'>
      <img
                      className='mr-3 rounded'
                      width='130'
                      height='130'
                      alt=''
                      src={AddD}
                    />
                                      <hr />

        <div className='mail-list mt-4'>
        

    





        </div>
        <br></br>
        <Link
                to="/dossier-medical/traitement"
              
             >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Traitements</button>
             </Link>
        <Link   
                to="/dossier-medical/hospitalisations"     
                >
                             <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Hospitalisations et chirugies</button>

             </Link>
             <Link   
                  to="/dossier-medical/Antecedents"     
                  >
          <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Antécédents familiaux</button>

               </Link>    
               <Link   
                  to="/dossier-medical/Allergies"     
                  >
               <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Allergies</button>

               </Link>

               <Link   
                  to="/dossier-medical/maladies"     
                  >
                   <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Maladie et sujets de santés</button>

               </Link>
               <Link   
                  to="/dossier-medical/Vaccinations"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Vaccinations</button>

               </Link>
               <Link   
                  to="/dossier-medical/habitudes"     
                  >

               </Link>
               <Link   
                  to="/dossier-medical/Mesures"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Mesures</button>

               </Link>
               <Link   
                  to="/dossier-medical/ProfessionnelsDeSante"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >professionnels de santé</button>

               </Link>
               <Link   
                  to="/dossier-medical/volontaire"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Entoutrages et volontés </button>

               </Link>
               <Link   
                  to="/table-Medecin"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Historique des soins</button>

               </Link>


      </div>
      <div className='email-right-box ml-0 ml-sm-4 ml-sm-0'>
        <div className='row'>
          <div className='col-12'>
            <div className='right-box-padding'>
             
              <div className='read-content'>
                <div className='media pt-3 d-sm-flex d-block justify-content-between'>
                  <div className='clearfix mb-3 d-flex'>
                 
                    <div className='media-body mr-2'>
                      <h1 className='text-primary mb-0 mt-1'>
                      Profil médical

</h1>
                      <p className='mb-0'>Je complète mon profil médical pour retrouver facilement toutes les informations importantes qui caractérisent ma santé.</p>
                    </div>
                  </div>
                
                </div>
                <hr />
                {/* <!-- Large modal --> */}
                <Button
                              variant="primary"
                              className="mb-2 mr-2"
                              onClick={() => clickhistorique()}
                            >
                              Voir l'historique de votre vaccination
                            </Button>
                            <Modal
                              className="fade bd-example-modal-lg"
                              show={largeModal}
                              size="lg"
                            >
                              <Modal.Header>
                                <Modal.Title>Historique traitement </Modal.Title>
                                <Button
                                  variant=""
                                  className="close"
                                  onClick={() => setLargeModal(false)}
                                >
                                  <span>&times;</span>
                                </Button>
                              </Modal.Header>
                              <Modal.Body>
                                <div className='form-group pt-3'>
                                  <div class="d-flex justify-content-center">


                                  </div>
                                  <br></br>
                                  <div class="d-flex justify-content-center">
                                    <div className="card">
                                      <Container>


                                        <TableContainer className="container border mt-5 p-2">
                                          <Table striped bordered hover>
                                            <TableHead >
                                              <TableRow >
                                                <TableCell className="tableHeader">Nom du vaccin    </TableCell>
                                                <TableCell className="tableHeader">type du vaccin   </TableCell>
                                                <TableCell className="tableHeader"> lot vaccination  </TableCell>
                                                <TableCell className="tableHeader"> nom vaccinateur   </TableCell>
                                                <TableCell className="tableHeader"> date vaccination  </TableCell>

                                              </TableRow>
                                            </TableHead>
                                            <TableBody>
                                              <>
                                                {clientes.length > 0 ? (
                                                  clientes.map((cliente, index) => (
                                                    <>
                                                      <Collapsible
                                                        header={
                                                          <>
                                                            <TableCell className="clientRow">{cliente.specialite}</TableCell>
                                                            <TableCell className="clientRow">{cliente.type} </TableCell>
                                                            <TableCell className="clientRow">{cliente.lot_vaccination} </TableCell>
                                                            <TableCell className="clientRow">{cliente.nom_vaccinateur} </TableCell>
                                                            <TableCell className="clientRow">{cliente.date_vaccination}<TableRow>
                                                            </TableRow></TableCell>

                                                          </>
                                                        }
                                                      >
                                                        <>
                                                          {
                                                            <TableRow>
                                                              <TableCell></TableCell>
                                                              <TableCell>
                                                                {cliente.endereco ? (
                                                                  cliente.endereco.map((data, indexB) => (
                                                                    <>
                                                                      <TableRow>
                                                                        {data.principal ? (
                                                                          <>
                                                                            <strong>
                                                                              <TableRow>
                                                                                Commentaire
                                                                              </TableRow>
                                                                            </strong>
                                                                            <TableRow>
                                                                              {data.diagnostic}
                                                                            </TableRow>
                                                                            <TableRow>

                                                                            </TableRow>
                                                                          </>
                                                                        ) : (
                                                                          <>
                                                                            {`\u00A0`}
                                                                            <strong>

                                                                            </strong>
                                                                            <TableRow>
                                                                              {data.diagnostic} -{data.cidade} -
                                                                              {data.estado}
                                                                            </TableRow>

                                                                            <TableRow>

                                                                            </TableRow>
                                                                          </>
                                                                        )}
                                                                      </TableRow>

                                                                      <hr />
                                                                    </>
                                                                  ))
                                                                ) : (
                                                                  <>
                                                                    {" "}
                                                                    <TableRow> Nenhum Endereço </TableRow>
                                                                    <hr />
                                                                  </>
                                                                )}

                                                              </TableCell>

                                                            
                                                            </TableRow>
                                                          }
                                                        </>
                                                      </Collapsible>
                                                    </>
                                                  ))
                                                ) : (
                                                  <TableRow>
                                                    <TableCell colSpan={3}>vide !</TableCell>
                                                  </TableRow>
                                                )}
                                              </>
                                            </TableBody>
                                          </Table>
                                        </TableContainer>
                                      </Container>












                                    </div>








                                  </div>


                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="danger light"
                                  onClick={() => setLargeModal(false)}
                                >
                                  Fermer
                                </Button>
                               
                              </Modal.Footer>
                            </Modal>
               
              
                <div className='form-group pt-3'>
                <div class="d-flex justify-content-center">

                <img
                      className='mr-3 rounded'
                      width='130'
                      height='130'
                      alt=''
                      src={MedicalReport}
                    />      
                     
                    
                               </div>
                               <br></br>
                               <div class="d-flex justify-content-center">
                               <h1 className ="card-title h5">
                               J'ajoute une vaccination 
</h1>

</div>



                         <div class="d-flex justify-content-center">

                      <p>Je peux renseigner mes hospitalisations et mes actes chirurgicaux 
                         (exemples : accouchement, dialyse, appendicite, extraction des dents de sagesse...).</p>
                         </div>
                         <div class="d-flex justify-content-center">



                         <div>
      <Button  variant="outlined" onClick={handleClickOpen}>Ajouter</Button>
      <Dialog open={open} onClose={handleClose} 
>
        <DialogTitle> Ajouter une vaccination  </DialogTitle>
        <DialogContent>
                    <label className='col-sm-8 col-form-label'>Nom de la maladie ou du vaccin  </label>
                    <input type="text" 
                    className="form-control" 
                                                   required="required"
                                                  onChange={handleAddFormChange}
                                                  name="nom"
                                                  id="nom"
                                                  value={addFormData.nom}

                                                />

     
                <br></br>
                <div >
                  <label className='col-sm-8 col-form-label'>Date de vaccination ( JJ/MM/AAAA) </label>
                  <input type="datetime-local" className="form-control" 
                                                   required="required"
                                                  onChange={handleAddFormChange}
                                                  placeholder=""
                                                  name="date_vaccination"
                                                  id="date_vaccination"s
                                                  value={addFormData.date_vaccination}

                                                />
                </div>  
<br></br>
                <div className='col-12'>
                <label className='col-sm-8 col-form-label'>Type de vaccination ( facultatif) </label>


                <FormControl>

     <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
     
        name="type"
        id="type"
        value={addFormData.type}
        onChange={handleAddFormChange}
        
    >
        <FormControlLabel  value="Premiére vaccination" control={<Radio />} label="Premiére vaccination " />
        <FormControlLabel  value="Rappel de vaccination " control={<Radio />} label="Rappel de vaccination " />
        <FormControlLabel  value="Je ne sais pas " control={<Radio />} label="Je ne sais pas  " />

      </RadioGroup>    

    </FormControl>
    </div>
<br></br>
               
                <label className='col-sm-8 col-form-label'>Lot de vaccin ( facultatif) </label>
                      <input
                        type='Text'
                        className='form-control'
                        onChange={handleAddFormChange}
                        name="lot_vaccination" 
                        id="lot_vaccination"
                        value={addFormData.lot_vaccination}
                        placeholder='Ex : A5247'
                        style={{ width: 500 }}

                      />
                       <br></br>
                <label className='col-sm-8 col-form-label'>Nom du vaccinateur  ( facultatif) </label>
                      <input
                        type='Text'
                        className='form-control'
                        placeholder='Ex : Dr Samir '
                        onChange={handleAddFormChange}
                        id="nom_vaccinateur"
                        name="nom_vaccinateur" 
                        value={addFormData.nom_vaccinateur}
                        style={{ width: 500 }}

                      />
                      <br></br>
                <div >
                <label className='col-sm-8 col-form-label'>Commentaire (facultatif)</label>
                <textarea rows={3} className="form-control" name="commentaire"   onChange={handleAddFormChange}
                        id="commentaire"
                        value={addFormData.commentaire}
                placeholder="Ex : Contexte , effets secondaires observés ..." defaultValue={""}/>
                </div>                

        </DialogContent>
        <DialogActions>
                                      <button onClick={handleClose} className="btn btn-danger mt-3 ml-3" >annuler</button>
                                      <button onClick={submit} className="btn btn-dark mt-3">Valider</button>
                                    </DialogActions>
      </Dialog>
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
</Fragment>






     </Paper>

  </Box>
);
}

export default Vaccinations ;
