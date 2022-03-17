import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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
   return (
      <section>
            <div className="row">
                 <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"> <strong>Identifiant RPPS *</strong></label>
                  <input
                     type="Password"
                     name="place"
                     className="form-control"
                     placeholder="*********"
                     required
                  />
                  </div>
               
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <label className="text-label">
                  <strong> Numéro carte d'identité *</strong></label>
                  <input
                     type="Password"
                     className="form-control"
                     placeholder="*********"
                     required
                  />
                  </div>
                  </div></div>
                  <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Joindrez votre carte CIN et votre Signature</strong></label></div>
   
 
    <input type="file"
           id="avatar" name="avatar"
           accept="image/png, image/jpeg"  className="form-control"/>
            </div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <label className="text-label"><strong>Type*</strong></label>
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
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <label className="text-label"><strong>Spécialité*</strong></label>
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
                                     
                        </select>
                        </div>
            </div></div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Adresse E-mail professionel*</strong></label></div>
   
 
            <input
                     type="email"
                     className="form-control"
                     placeholder="example@gmail.com"
                     required
                  />
            </div>

            <div>
            <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Langue</InputLabel>
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
    </div>
    </div></div></div>
 
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">
Expérience                   </label>
                  <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     cols="50" rows="10"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
               
         

      </section>
   );
};

