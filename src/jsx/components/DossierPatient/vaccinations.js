import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddD from '../../../images/big/AddD.png'
import tele from '../../../images/big/tele.png'
import MedicalReport from '../../../images/big/MedicalReport.png'
import { Link } from "react-router-dom";
import MetarialDate from "./MetarialDate";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Vaccinations = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
        

        <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="150"
      src={tele}
      alt="green iguana"
    />
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
                    <select
                                                   className="form-control"
                                                   id="inputState"
                                                   defaultValue="option-1"
                                                 >
                                       <option value="option-1">Grippe</option>
                                       <option value="option-2">Jour(s)</option>
                                       <option value="option-3">Semaine(s)</option>
                                       <option value="option-4">Mois</option>
                                                 </select>

     
                <br></br>
                <div >
                  <label className='col-sm-8 col-form-label'>Date de vaccination ( JJ/MM/AAAA) </label>
                  <MetarialDate style={{ width: 500 }}
/>
                </div>  
<br></br>
                <div className='col-12'>
                <label className='col-sm-8 col-form-label'>Type de vaccination ( facultatif) </label>


                <FormControl>

     <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Premiére vaccination " />
        <FormControlLabel value="male" control={<Radio />} label="Rappel de vaccination " />
        <FormControlLabel value="male" control={<Radio />} label="Je ne sais pas  " />

      </RadioGroup>    

    </FormControl>
    </div>
<br></br>
               
                <label className='col-sm-8 col-form-label'>Lot de vaccin ( facultatif) </label>
                      <input
                        type='Text'
                        className='form-control'
                        placeholder='Ex : A5247'
                        style={{ width: 500 }}

                      />
                       <br></br>
                <label className='col-sm-8 col-form-label'>Nom du vaccinateur  ( facultatif) </label>
                      <input
                        type='Text'
                        className='form-control'
                        placeholder='Ex : Dr Samir '
                        style={{ width: 500 }}

                      />
                      <br></br>
                <div >
                <label className='col-sm-8 col-form-label'>Commentaire (facultatif)</label>
                <textarea rows={3} className="form-control" name="comment" 
                placeholder="Ex : Contexte , effets secondaires observés ..." defaultValue={""}/>
                </div>                

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>annuler</Button>
          <Button onClick={handleClose}>Valider</Button>
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
