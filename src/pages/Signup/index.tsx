import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import Label from '../../components/Label';
import Input from '../../components/Input';

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
                    render={({ field }) => (
                        <Input 
                            name={field.name}
                            placeholder="Enter your name"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            variant='form-input'
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
                    render={({ field }) => (
                        <Input 
                            name={field.name}
                            placeholder="Enter your email"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            variant='form-input'
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
                    render={({ field }) => (
                        <Input 
                            name={field.name}
                            placeholder="Enter your password"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            variant='form-input'
                        />
                    )}
                />
            </div>
            <Typography variant='error-message'>
                {errors.password?.message}
            </Typography>
        </SignupForm>
    );
};

export default Signup;