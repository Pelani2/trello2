import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Typography from '../../components/Typography';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignupForm = styled.form`
  /* Add styling here */
`;

interface FormData {
    name: string;
    email: string;
    password: string;
}

const Signup: React.FC = () => {
    const [isLengthValid, setIsLengthValid] = useState<boolean>(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState<boolean>(false);

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required"),
        email: yup
            .string()
            .required("Email is required")
            .email("Invalid email format"),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long")
            .matches(
                /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).*$/,
                'Password must contain at least one special character'
            ),
    });

    const {
        handleSubmit, 
        control, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log(`Form submitted with the following data: ${data}`);
    };

    return (
        <SignupForm onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='primary-title'>
                Sign up
            </Typography>

            <div className='form-group'>
                <Label 
                    htmlFor='name' 
                    variant='form-label'
                >
                    Name:
                </Label>
                <Controller 
                    name='name'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <Input 
                            {...field}
                            placeholder='Enter your name'
                            variant='form-input'
                            type='text'
                        />
                    )}
                />
            </div>
            <Typography variant='error-message'>
                {errors.name?.message}
            </Typography>

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
                        <Input 
                            {...field}
                            placeholder='Enter your email'
                            variant='form-input'
                            type='email'
                        />
                    )}
                />
            </div>
            <Typography variant='error-message'>
                {errors.email?.message}
            </Typography>

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
                        <Input 
                            {...field}
                            placeholder="Enter your password"
                            value={field.value}
                            onChange={(e) => {
                                field.onChange(e);
                                setIsLengthValid(e.target.value.length >= 8);
                                setHasSpecialCharacter(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(e.target.value));
                            }}
                            variant='form-input'
                            type='password'
                        />
                    )}
                />
            </div>
            <Typography variant='error-message'>
                {errors.password?.message}
            </Typography>

            <div className='password-validation-wrapper'>
                <Typography
                    variant={isLengthValid ? 'success-message' : 'error-message'}
                >
                    {isLengthValid ? 'Password is at least 8 characters long.' : 'Password must be at least 8 characters long'}
                </Typography>

                <Typography
                    variant={hasSpecialCharacter ? 'success-message' : 'error-message'}
                >
                    {hasSpecialCharacter ? 'Password contains at least one special character' : 'Password must contain at least one special character.'}
                </Typography>
            </div>

            <div className='signup-button-wrapper'>
                <Button
                    type='submit'
                    variant='submit-button'
                >
                    Get Started
                </Button>

                <Link to="https://www.google.com/">
                    Sign up with Google
                </Link>
            </div>
        </SignupForm>
    );
};

export default Signup;