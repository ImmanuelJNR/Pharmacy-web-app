import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import Logo from '../img/Group 588.svg';
import { Formbtn, GoogleBtn } from '../component/UI/Button';
import '../scss/pages/_login.scss';
import {Input} from "../component/Input";
import { motion } from "framer-motion";

// const MotionLogin = motion(StyledLogin);

const Login = () =>{

    const navigate = useNavigate()

    const [successMsg, setSuccessMsg] = useState("");
    const {register, handleSubmit, formState: { errors }, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setSuccessMsg("User registration is successful.");
        reset();
    };

    return(
        <motion.div className='form-container'

            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut'}}
        >

        
            <div className='logo-container'>
                <img src={Logo} alt='logo'/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='header-text-container'>
                    <h1>Login</h1>
                </div>
                
                {successMsg && <p className="success-msg">{successMsg}</p>}

                {/* validation */}
                <Input
                    label= 'Email'
                    type="text"
                    name="email"
                    {...register("email", {
                    required: "Email is required.",
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email is not valid."
                    }
                    })}
                />

                {/* rendering validation message for email */}
                {errors.email && <p className="errorMsg">{errors.email.message}</p>}

                {/* validation */}
                <Input
                    label= 'Password'
                    type="password"
                    name="password"
                    {...register("password", {
                    required: "Password is required.",
                    minLength: {
                        value: 6,
                        message: "Password should be at-least 6 characters."
                    }
                    })}
                />

                {/* rendering validation message password */}
                {errors.password && (<p className="errorMsg">{errors.password.message}</p>)}

                <div className='forgot-password-container'>
                    <a href='#'>reset password</a>
                </div>
                <Formbtn buttonText='Login' />
                <p className='redirect-text'>I don't have an account! <a onClick={() => navigate('/Register')}>Create account</a></p>

                <div className="divider">
                    <div className='customHR'></div>
                    <span>OR</span>
                    <div className='customHR'></div>
                </div>

                <GoogleBtn buttonText = 'Login With Google'/> 
            </form>
        </motion.div>
    )
}

export default Login;