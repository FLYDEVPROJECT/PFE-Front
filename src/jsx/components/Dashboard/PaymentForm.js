import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DropzoneArea } from 'material-ui-dropzone';
import { TextField } from '@material-ui/core';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Ajout documents
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
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="documents ajoutés avec succés"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}