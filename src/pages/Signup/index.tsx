import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

const SignupForm = styled.form`
  /* Add styling here */
`;

interface FormData {
    name: string;
    email: string;
    password: string;
}

const Signup: React.FC = () => {
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
            .min(6, "Password must be at least 6 characters long"),
    });

    const {
        handleSubmit, 
        control, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Form submitted with the following data: ", data);
    };

    return (
        <SignupForm onSubmit={handleSubmit(onSubmit)}>
            <h2>
                Sign up
            </h2>

            <div className='form-group'>
                <label htmlFor='email'>
                    Email:
                </label>
                <Controller 
                    name='email'
                    control={control}
                    render={({ field }) => (
                        <input 
                            {...field}  
                            type='text'
                            placeholder='Email'
                        />
                    )}
                />
            </div>
            <p className='error-message'>
                {errors.email?.message}
            </p>
        </SignupForm>
    );
};

export default Signup;