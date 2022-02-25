import { lazy, Suspense, useEffect } from 'react';
/// Components
import Index from './jsx/index';
import { connect, useDispatch } from 'react-redux';
import {  Route, Switch, withRouter } from 'react-router-dom';
// action
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

//import Test from './test'

import patient from './patient'
import professionenel from './professionnel'
import WizardFormFirstPage from './jsx/components/Forms/ReduxWizard/WizardFormFirstPage';
import WizardForm from './jsx/components/Forms/ReduxWizard/WizardForm';
import { FaHatWizard } from 'react-icons/fa';
import Wizard from './jsx/components/Forms/Wizard/Wizard';
import Wizardpt from './jsx/components/Forms/Wizardpt/Wizard'; 

const SignUp = lazy(() => import('./jsx/pages/Registration'));
const ForgotPassword = lazy(() => import('./jsx/pages/ForgotPassword'));
const Login = lazy(() => {
    return new Promise(resolve => {
		setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
	});
});
function App (props) {
    const dispatch = useDispatch();
   /* useEffect(() => {
        checkAutoLogin(dispatch, props.history);
    }, [dispatch, props.history]);*/
    
    let routes = (  
        <Switch>
           <Route exact path="/" component={Login}/>
          
           <Route exact path="/patient" component={patient}/>
          
            <Route path='/login' component={Login} />
            <Route path='/Authentif' component={patient} />
            <Route path='/page-forgot-password' component={ForgotPassword} />
        </Switch>
    );
    if (props.isAuthenticated) {
		return (
			<>
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>  
                   }
                >
                    <Index />
                </Suspense>
            </>
        );
	
	}else{
		return (
			<div className="vh-100">
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                        

                    </div>
                  }
                >
                    {routes}
                </Suspense>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App)); 
