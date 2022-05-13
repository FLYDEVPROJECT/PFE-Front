import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Formik , Form } from 'formik';
import { TextField } from './TextField';
import { TextArea } from './TextArea';
import * as Yup from 'yup';
import './validation.css';
 
 
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
 
const names = [
  'Arabe',
  'Français',
  'Italien',
  'Anglais',
  'Turc',
  'Espagnole',
  'Allemand',
  'chinois',
  'Russe',
  'Ukrainien',
];
 
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
 
export default function StepTwoPro () {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
 
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const validate = Yup.object({
    firstname: Yup.string()
      .max(15, 'Doit contenir 15 caractéres ou moins')
      .required('Champ obligatoire'),
    lastName: Yup.string()
      .max(20, 'Doit contenir 20 caractéres ou moins ')
      .required('Champ obligatoire'),
    emailpro: Yup.string()
      .email('Email is invalid')
      .required('Email est obligatoire '),
    rpps: Yup.string()
      .min(6, 'Le code doit contenir 6 caractéres')
      .max(6, 'Le code doit contenir 6 caractéres')
      .required('Champ est obligatoire *'),
    cin: Yup.string()
      .min(8, 'Le code doit contenir 6 caractéres')
      .max(8, 'Le code doit contenir 6 caractéres')
      .required('Champ est obligatoire *'),
 
  })
   return (
      <section>
        <Formik
      initialValues={{
        id: '',
        lastName: '',
        emailpro: '',
        rpps: '',
        cin: '',
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
          <h6 ><strong>Identifiant RPPS *</strong></h6>
          <TextField name="rpps" type="password" />
          <br></br>
          <h6 ><strong>Numéro carte d'identité *</strong></h6>
          <TextField name="cin" type="password" />
          <br></br>
          <div className="form-group">
   
          <h6 ><strong>Joindrez votre carte cin et votre signature </strong></h6>
<br></br>
    <input type="file"
           id="avatar" name="avatar"
           accept="image/png, image/jpeg"  className="form-control"/>
            </div>
            <div className="row">
 
<div className="col-6 ">
   <br></br>
<h6 ><strong>type *</strong></h6>
<br></br>
 
 
<select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      <option value="option-1">médecin</option>
                                      <option value="option-2">chirurgien  </option>
                                      <option value="option-3">Biologiste</option>
                                     
                        </select>
 
 
</div>
<br></br>
<div className="col-lg-6 mb-1">
<br></br>
  <h6><strong>Spécialité *</strong></h6>
  <br></br>
  <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      <option value="option-1">Dermatologie</option>
                                      <option value="option-2">Pédiatrie  </option>
                                      <option value="option-3">Psychiatrie</option>
                                      <option value="option-3">Pédopsychiatrie</option>
                                      <option value="option-3">Cardiologie</option>
                                      <option value="option-3">Néphrologie</option>
                                      <option value="option-3">Neurologie</option>
                                      <option value="option-3">Pneumologie</option>
                                      <option value="option-3">Rhumatologie</option>
                                      <option value="option-3">Gastro-entérologie</option>
                                      <option value="option-3"> généraliste</option>
                                      <option value="option-3"> Ophtalmologie</option>
                                      <option value="option-3"> généraliste</option>
                                      <option value="option-3"> Gynécologie</option>
                                      <option value="option-3"> O.R.L</option>
                                      <option value="option-3"> Anesthésie</option>
                                     
                        </select>   <br></br>
         
          </div></div>
          <h6><strong>Adresse E-mail professionel *</strong></h6>
 
            <TextField  name="emailpro" type="email" />
            <br></br>
 
 
 
            <FormControl sx={{ m: 1, width: 650 }}>
            <h6><strong>Langue </strong></h6>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
 
<br></br>
<br></br>
 
      <h6><strong>Expérience professionel *</strong></h6>
 
            <TextArea  name="lastName" type="textarea" />
         
          </Form>
        </div>
      )}
    </Formik>
    <br></br>
    <br></br>
      </section>
   );
};
