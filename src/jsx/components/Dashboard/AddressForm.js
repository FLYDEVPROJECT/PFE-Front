import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      informations personnelles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Identifiant"
            name="Identifiant"
            label="Identifiant"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Numéro de sécurité sociale"
            name="Numéro de sécurité sociale"
            label="Numéro de sécurité sociale"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Nom et prénom"
            name="Nom et prénom"
            label="Nom et prénom"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
     
      
      
      
  
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="données verifiés"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}