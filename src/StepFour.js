import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import swal from 'sweetalert2'
const StepFour = () => {
   const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
   return (
      <section><div className="row justify-content-center h-100 align-items-center">

      <div className="col-lg-6 mb-5">
      <div className="form-group">
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <label className="text-label">
                   <strong >Mot de passe</strong>
                </label>
       
       
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      
      </div>
      <div>
      </div>
    </Box>
      </div>
      </div></div>
      <div className="row justify-content-center h-100 align-items-center">
      
      <div className="col-lg-6 mb-3">
      <div className="form-group">
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <label className="text-label">
                   <strong > Confirmer le Mot de passe</strong>
                </label>
       
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      
      </div>
      <div>
      </div>
    </Box>
      </div>
      </div></div>
                
                  
      
      
      <div class="row justify-content-end">
      
      <div class="col-4">
      </div>
      </div>
      <div class="row justify-content-end">
      <div class="col-2">
      <div class="row-4">
      
      <div className="sweetalert mt-5">
      <button
                onClick={() =>
                   swal(
                      "Félicitation ",
                      "Votre compte a bien été crée",
                      "success"
                   )
                }
              
                className="btn btn-primary btn-block"                         >
              Valider
           </button>
           
      </div></div>
          
      </div>
      </div>
                
      </section>
   );
};

export default StepFour;
