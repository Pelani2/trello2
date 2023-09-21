import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setRememberMe } from '../../store/actions/rememberPasswordSlice';
import { RootState } from '../../store/store';

interface FormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string().required("Password is required"),
    rememberMe: yup.boolean(),
});

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const rememberMe = useSelector((state: RootState) => state.rememberPassword.rememberMe);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setRememberMe(e.target.checked));
    }

    const {
        handleSubmit, 
        control,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log(`Form submitted with the following data: 
        \n\nEmail: ${data.email}
        \nPassword: ${data.password}
        \nRemember me: ${data.rememberMe}`);

        if (data.rememberMe) {
            const date = new Date();
            date.setDate(date.getDate() + 30);
            localStorage.setItem('email', data.email);
            localStorage.setItem('password', data.password);
            localStorage.setItem('expiry', date.toString());
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <Label 
                    htmlFor='email' 
                    variant='form-label'
                >
                    Email: 
                </Label>
                <Controller 
                    name='email'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <>
                            <Input 
                                {...field}
                                type='email'
                                placeholder='Enter your email'
                                variant='form-input'
                            />
                        </>
                    )}
                />
            </div>
            {errors.email && (
                <Typography variant='error-message'>
                    {errors.email.message}
                </Typography>
            )}

            <div className='form-group'>
                <Label 
                    htmlFor='password' 
                    variant='form-label'
                >
                    Password: 
                </Label>
                <Controller 
                    name='password'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <>
                            <Input 
                                {...field}
                                type='password'
                                placeholder='Enter your password'
                                variant='form-input'
                            />
                        </>
                    )}
                />
            </div>
            {errors.password && (
                <Typography variant='error-message'>
                    {errors.password.message}
                </Typography>
            )}

            <div className='form-group'>
                <Controller 
                    name='rememberMe'
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <div className='remember-wrapper'>
                            <Input
                                {...field}
                                variant=''
                                name='rememberMe'
                                placeholder=''
                                value=''
                                onChange={handleInputChange}
                                type='checkbox'
                                checked={rememberMe}
                            />
                            <Label 
                                htmlFor='rememberMe' 
                                variant=''
                            >
                                Remember for 30 days
                            </Label>
                        </div>
                    )}
                />

                <Link to="/passwordreset">
                    Forgot password
                </Link>
            </div>

            <div className='button-wrapper'>
                <Button variant='submit-button'>
                    Sign in
                </Button>
                <Link to="">
                    Sign in with Google
                </Link>
            </div>

            <div className='dont-have-account-wrapper'>
                <Typography variant='login-prompt'>
                    Dont have an account? 
                    <Link to="">
                        Sign Up
                    </Link>
                </Typography>
            </div>
        </form>
    );
};

export default Login;