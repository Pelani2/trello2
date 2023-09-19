import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

const SignupForm = styled.form`
  /* Add styling here */
`;

const Signup: React.FC = () => {
    const validationSchema = yup.object().shape({

    });

    const {
        handleSubmit, 
        control, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: any) => {
        // handle submission
    };

    return (
        <SignupForm onSubmit={handleSubmit(onSubmit)}>

        </SignupForm>
    );
};

export default Signup;