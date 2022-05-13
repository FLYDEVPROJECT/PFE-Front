import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { TextArea } from './TextArea';
import * as Yup from 'yup';
import './validation.css';
 
 
 
const Allergies = () => {
  const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };
  const validate = Yup.object({
    allergieName: Yup.string()
      .max(15, 'Doit contenir 15 caractères ou moins')
      .required('Champ obligatoire'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
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
   
                                      <hr />
 
        <div className='mail-list mt-4'>
       
 
        <Card sx={{ maxWidth: 345 }}>

    <CardContent>
      <Typography gutterBottom variant="h7" component="div">
      Synthèse de mon profil
              </Typography>
      <Typography variant="body2" color="text.secondary">
      Je souhaite visualiser et partager la synthèse PDF
      de mon profil médical avec mes professionnels de santé.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Continuer</Button>
    </CardActions>
  </Card>
 
 
 
 
 
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
               
               
             
                <div className='form-group pt-3'>
                <div class="d-flex justify-content-center">
 
               
                     
                   
                               </div>
                               <br></br>
                               <div class="d-flex justify-content-center">
                               <h1 className ="card-title h5">
                               J'ajoute une allergie
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
        <DialogTitle>Ajouter une allergie </DialogTitle>
        <DialogContent>
        <Formik
      initialValues={{
        allergieName: '',
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
            <br></br>
            <TextField label="Nom de l'allergéne" name="allergieName" type="text"   placeholder='Ex : Pénicilline '
                        style={{ width: 500 }} />
 
            <div >
                <label className='form-label'>Commentaire (facultatif)</label>
                <textarea rows={3} className="form-control" name="comment"
                placeholder="Informations complémentaires ( Ex : date de début de l'allergie , épisode allergique , réactions , intolérance  ..)" defaultValue={""}/>
                </div>    
 
           
           
          </Form>
        </div>
      )}
    </Formik>
             
        </DialogContent>
        <DialogActions>
        <button onClick={handleClose} className="btn btn-danger mt-3 ml-3" >annuler</button>
          <button onClick={handleClose} className="btn btn-dark mt-3">Valider</button>
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
 
export default Allergies ;
 

