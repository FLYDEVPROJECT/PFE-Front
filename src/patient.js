import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KeyboardBackspace } from '@material-ui/icons';
import { registerVariants } from '../assets/utils/animations';
import { RegisterForm } from '../components';


const Register = () => {
    const history = useHistory();
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={registerVariants}
            className="fraction"
        >
            <div className="back-icon">
                <KeyboardBackspace onClick={() => history.goBack()} />
            </div>
            <RegisterForm />
        </motion.div>
    );
};

export default Register;
