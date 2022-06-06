import { lazy, Suspense, useEffect} from 'react';
/// Components
import Index from './jsx/index';
import { connect, useDispatch } from 'react-redux';
import {  Route, Switch, withRouter } from 'react-router-dom';
// action
import { isAuthenticated } from './store/selectors/AuthSelectors';
import { checkAutoLogin } from './services/AuthService';
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import Motdepasseoublier from './jsx/components/Dashboard/Motdepasseoublier'; 
//import Test from './test'

import Wizard from './Wizard';

const ForgotPassword = lazy(() => import('./jsx/pages/ForgotPassword'));
const Login = lazy(() => {
    return new Promise(resolve => {
		setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
	});
});
function App (props) {
    console.log(props)
    let isAuthenticated = false;
    if(window.localStorage.getItem('token')) isAuthenticated = true
  
    const dispatch = useDispatch();
    useEffect(() => {
        checkAutoLogin(dispatch, props.history);
    }, [dispatch, props.history]);
    
    let routes = (  
        <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/Motdepasseoublier" component={Motdepasseoublier}/>
           <Route exact path="/patient-professionnel" component={Wizard}/>
          
            <Route path='/login' component={Login} />
²           <Route path='/page-forgot-password' component={ForgotPassword} />
        </Switch>
    );
    if (isAuthenticated) {
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
