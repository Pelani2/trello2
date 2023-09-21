import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
    email: string;
    password: string;
}

const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string().required("Password is required"),
});

const Login: React.FC = () => {
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
        \nPassword: ${data.password}`);
    };
};

export default Login;