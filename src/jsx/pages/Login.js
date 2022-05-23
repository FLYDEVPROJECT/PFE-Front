import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'





import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';
 
//
import logo from '../../images/logopatient.png'

 
function Login (props) {
    let errorsObj = { username: '', password: '' };
    let navigate = useHistory();
    const [errors, setErrors] = useState(errorsObj);
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    
 
    const onLogin = () => {
        dispatch(loadingToggleAction(true));	
        dispatch(loginAction(username.username, password.password, props.history));
    };
    const list = () => {
        let config = {
            headers: {
              'Authorization': 'Bearer '+ localStorage.getItem('token')
              }
           };
        axios
        .get('http://127.0.0.1:8000/api/list', config)
        .then((res) => {
          console.log(res.data); 
        })
        .catch((error) => console.log(error));
    };

    const preventDefault = (event) => event.preventDefault();

  return (
 
        <div className="login-form-bx">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-7 box-skew d-flex">
                        <div className="authincation-content">
                            <div className="login-logo">
                            <img src={logo} alt="" className="logo-icon mr-2"/>
                               
                            </div>
                            <div className="mb-4">
                                <h3 className="mb-1 font-w600">Bienvenue
                                     </h3>
                                <p className="">Connectez-vous en saisissant les informations ci-dessous</p>
                            </div>
                            {props.errorMessage && (
                                <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                                {props.errorMessage}
                            </div>
                       
                            )}
                            {props.successMessage && (
                                <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                    {props.successMessage}
                                </div>
                            )}
                            <div className="form-group">
                                    <label className="mb-2 ">
                                        <strong className="">Code Sécurité Sociale ( CSS)*</strong>
                                    </label>
                                    <input type="text" onChange={(event) =>{ setUsername({username:event.target.value})}} className="form-control" placeholder='********' />
                                </div>
                             
                                <div className="form-group">
                                    <label className="mb-2 "><strong className="">Mot de passe</strong></label>
                                    <input type="password" onChange={(event) =>{ setPassword({password:event.target.value})}} className="form-control"/>
                                    {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                                </div>
                                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox ml-1 ">
                                            <input type="checkbox" className="form-check-input" id="basic_checkbox_1"/>
                                            <label className="form-check-label" htmlFor="basic_checkbox_1">Souvenez-vous de ma préférence</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" onClick={onLogin} className="btn btn-primary btn-block">s'identifier</button>
                                </div>
                                <Link to="/patient-professionnel" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
                        S'inscrire
										</Link>
                            <div className="new-account mt-2">

                            </div>
                            <div className="new-account mt-2">
                            <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
     
    </Box>                           
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 d-flex box-skew1">
                    </div>
                </div>
            </div>
        </div>
       
    )
}
 
const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login);


