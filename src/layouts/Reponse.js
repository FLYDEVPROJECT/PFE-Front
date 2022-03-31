import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DropzoneArea } from 'material-ui-dropzone';
import { TextField } from '@material-ui/core';
export default class Reponse extends Component {
  render() {
    return (
      <div>
 <form action="#">
                              <div className="form-group">
                               
                              </div>
                              <div className="form-group">
                                 <input
                                    type="text"
                                    className="form-control bg-transparent"
                                    placeholder=" Sujet:"
                                 />
                              </div>
                              <div className="form-group">
                                 <textarea
                                    id="email-compose-editor"
                                    className="textarea_editor form-control bg-transparent"
                                    rows="15"
                                    placeholder="Ecrire une réponse "
                                 ></textarea>
                              </div>
                           </form>
                             
                             <React.Fragment>
                             <Typography variant="h6" gutterBottom>
                              Ajout de documents
                             </Typography>
                             <Grid container spacing={6}>
                             
                               <Grid item xs={12} xl={6}>
                               <DropzoneArea
                         acceptedFiles={['image/*']}
                         dropzoneText={"Ajouter vos documents"}
                         onChange={(files) => console.log('Files:', files)}
                       />
                               </Grid>
                             
                            
                               <Grid item xs={12}>
                               
                               </Grid>
                             </Grid>
                           </React.Fragment>
                           <button className="btn btn-primary btn-block"> Envoyer une réponse !</button>
                           </div>
                          
    )
  }
}
